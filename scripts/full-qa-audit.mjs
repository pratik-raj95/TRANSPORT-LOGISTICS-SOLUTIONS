import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import os from 'os';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome-qa-audit-' + Date.now());

const routesToTest = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/services', name: 'services' },
  { path: '/services/truck-transportation', name: 'service-truck' },
  { path: '/services/container-transportation', name: 'service-container' },
  { path: '/fleet', name: 'fleet' },
  { path: '/industries', name: 'industries' },
  { path: '/locations', name: 'locations' },
  { path: '/contact', name: 'contact' },
];

const viewports = [
  { name: '375px', width: 375, height: 812, isMobile: true },
  { name: '768px', width: 768, height: 1024, isMobile: false },
  { name: '1024px', width: 1024, height: 768, isMobile: false },
  { name: '1440px', width: 1440, height: 900, isMobile: false },
];

async function runQAAudit() {
  console.log('--- STARTING GENUINE CLIENT-READINESS QA AUDIT ---');
  fs.mkdirSync('test-screenshots/qa', { recursive: true });

  console.log('1. Launching Headless Chrome with CDP...');
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--user-data-dir=' + userDataDir,
  ]);

  await new Promise((r) => setTimeout(r, 2000));

  const versionData = await new Promise((resolve, reject) => {
    http.get('http://localhost:9222/json/list', (res) => {
      let d = '';
      res.on('data', (c) => (d += c));
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });

  const page = versionData.find((t) => t.type === 'page') || versionData[0];
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let msgId = 1;
  const pending = new Map();
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const id = msgId++;
      pending.set(id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });
  }

  const consoleLogs = [];
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      consoleLogs.push({ type: msg.params.type, text: msg.params.args.map((a) => a.value).join(' ') });
    }
    if (msg.id && pending.has(msg.id)) {
      const cb = pending.get(msg.id);
      pending.delete(msg.id);
      cb(msg.result);
    }
  };

  await new Promise((r) => (ws.onopen = r));
  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  const auditResults = {
    overflowIssues: [],
    brokenImages: [],
    consoleErrors: [],
    testedRoutes: [],
    testedViewports: viewports.map((v) => v.name),
  };

  console.log('\n2. Testing 9 Routes across 4 Viewports (36 Layout Combinations)...');

  for (const r of routesToTest) {
    const url = 'http://localhost:3000' + r.path;
    await send('Page.navigate', { url });
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(`\n>>> Auditing Route: ${r.path} (${r.name})`);

    // Check images on page (at default desktop)
    const imgEval = await send('Runtime.evaluate', {
      expression: `Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayedWidth: img.offsetWidth,
        displayedHeight: img.offsetHeight
      }))`,
      returnByValue: true,
    });

    const pageImages = imgEval?.result?.value || [];
    for (const img of pageImages) {
      if (img.complete && img.naturalWidth === 0) {
        console.warn(`  [BROKEN IMAGE]: ${img.src} (alt: "${img.alt}")`);
        auditResults.brokenImages.push({ route: r.path, src: img.src, alt: img.alt });
      }
    }

    // Test across all 4 viewports
    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.isMobile,
      });
      await new Promise((resolve) => setTimeout(resolve, 400));

      const overflowEval = await send('Runtime.evaluate', {
        expression: `({
          innerWidth: window.innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          hasOverflow: document.documentElement.scrollWidth > window.innerWidth,
          clientWidth: document.documentElement.clientWidth
        })`,
        returnByValue: true,
      });

      const res = overflowEval?.result?.value;
      if (res?.hasOverflow) {
        console.error(`  [OVERFLOW DETECTED] Route: ${r.path} at ${vp.name}: innerWidth=${res.innerWidth}px, scrollWidth=${res.scrollWidth}px`);
        auditResults.overflowIssues.push({ route: r.path, viewport: vp.name, innerWidth: res.innerWidth, scrollWidth: res.scrollWidth });
      } else {
        console.log(`  [PASS] ${r.path.padEnd(30)} @ ${vp.name.padEnd(8)}: Width=${res.innerWidth}px (No horizontal scroll)`);
      }

      // Capture screenshot at 1440px and 375px for key routes
      if (vp.name === '1440px' || vp.name === '375px') {
        const shot = await send('Page.captureScreenshot', { format: 'png' });
        if (shot?.data) {
          const buffer = Buffer.from(shot.data, 'base64');
          fs.writeFileSync(`test-screenshots/qa/${r.name}-${vp.name}.png`, buffer);
        }
      }
    }

    auditResults.testedRoutes.push(r.path);
  }

  console.log('\n3. Testing Interactive Controls on Home Route...');
  await send('Page.navigate', { url: 'http://localhost:3000/' });
  await new Promise((r) => setTimeout(r, 1000));

  // A. Mobile menu toggle test at 375px
  await send('Emulation.setDeviceMetricsOverride', { width: 375, height: 812, deviceScaleFactor: 1, mobile: true });
  await new Promise((r) => setTimeout(r, 400));

  const mobileMenuOpenEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('button[aria-label*="navigation menu"]');
      if (!btn) return { error: 'Mobile hamburger button not found' };
      btn.click();
      return { success: true, label: btn.getAttribute('aria-label') };
    })()`,
    returnByValue: true,
  });
  console.log('Mobile menu opened:', mobileMenuOpenEval?.result?.value);
  await new Promise((r) => setTimeout(r, 400));

  const mobileDrawerVisible = await send('Runtime.evaluate', {
    expression: `!!document.querySelector('div[role="dialog"][aria-label="Mobile Navigation"]')`,
    returnByValue: true,
  });
  console.log('Mobile navigation drawer visible in DOM:', mobileDrawerVisible?.result?.value);

  // Capture open mobile drawer screenshot
  const drawerShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('test-screenshots/qa/mobile-drawer-open.png', Buffer.from(drawerShot.data, 'base64'));

  // Close mobile drawer
  await send('Runtime.evaluate', {
    expression: `(() => {
      const closeBtn = document.querySelector('button[aria-label="Close menu"]');
      if (closeBtn) closeBtn.click();
    })()`,
  });
  await new Promise((r) => setTimeout(r, 300));

  // B. Test FAQ Accordion interaction
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send('Runtime.evaluate', {
    expression: `document.getElementById('process')?.scrollIntoView()`,
  });
  await new Promise((r) => setTimeout(r, 500));

  const faqEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const btn = document.querySelector('#faq-header-1');
      if (!btn) return { error: 'FAQ header not found' };
      btn.click();
      return { clicked: true, expanded: btn.getAttribute('aria-expanded') };
    })()`,
    returnByValue: true,
  });
  console.log('FAQ Accordion Item 1 Clicked:', faqEval?.result?.value);

  // C. Test Theme Switcher
  const themeToggleEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const initialDark = document.documentElement.classList.contains('dark');
      const toggle = document.querySelector('button[title*="mode"]');
      if (toggle) toggle.click();
      const afterClickDark = document.documentElement.classList.contains('dark');
      // Click back
      if (toggle) toggle.click();
      return { initialDark, afterClickDark, toggled: initialDark !== afterClickDark };
    })()`,
    returnByValue: true,
  });
  console.log('Theme Toggle test:', themeToggleEval?.result?.value);

  // D. Verify Call and WhatsApp Links
  const linkEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const phoneLinks = Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => a.href);
      const waLinks = Array.from(document.querySelectorAll('a[href*="wa.me"]')).map(a => a.href);
      return {
        phoneLinks: [...new Set(phoneLinks)],
        waLinks: [...new Set(waLinks)]
      };
    })()`,
    returnByValue: true,
  });
  console.log('Verified Telephony links:', linkEval?.result?.value?.phoneLinks);
  console.log('Verified WhatsApp links:', linkEval?.result?.value?.waLinks);

  // E. Location search interaction test
  await send('Page.navigate', { url: 'http://localhost:3000/locations' });
  await new Promise((r) => setTimeout(r, 1200));

  const searchTestEval = await send('Runtime.evaluate', {
    expression: `(() => {
      const input = document.querySelector('input[placeholder*="Search city"]');
      if (!input) return { error: 'Search input not found' };
      input.value = 'Jaipur';
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return { success: true, value: input.value };
    })()`,
    returnByValue: true,
  });
  console.log('Locations Search input test:', searchTestEval?.result?.value);

  // Check console logs
  console.log('\n4. Checking Browser Console Errors:');
  const errorLogs = consoleLogs.filter((l) => l.type === 'error');
  if (errorLogs.length === 0) {
    console.log('Clean: Zero client-side JavaScript errors detected across all tested routes!');
  } else {
    console.error('Console errors detected:', errorLogs);
  }

  console.log('\n--- QA AUDIT COMPLETED ---');
  console.log(`Routes Audited: ${auditResults.testedRoutes.length}`);
  console.log(`Viewports Tested: ${auditResults.testedViewports.join(', ')}`);
  console.log(`Layout Overflow Failures: ${auditResults.overflowIssues.length}`);
  console.log(`Broken Images Detected: ${auditResults.brokenImages.length}`);

  ws.close();
  chrome.kill();
}

runQAAudit().catch((err) => {
  console.error('Audit failed with error:', err);
  process.exit(1);
});
