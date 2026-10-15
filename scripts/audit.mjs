import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import os from 'os';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome-audit-' + Date.now());

async function runAudit() {
  console.log('Launching headless Chrome with CDP...');
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--disable-gpu',
    '--no-sandbox',
    '--user-data-dir=' + userDataDir
  ]);

  await new Promise(r => setTimeout(r, 1500));

  // Get active page target
  const versionData = await new Promise((resolve, reject) => {
    http.get('http://localhost:9222/json/list', (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)));
    }).on('error', reject);
  });

  const page = versionData.find(t => t.type === 'page') || versionData[0];
  console.log('Target Page WS URL:', page.webSocketDebuggerUrl);

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 1;
  const pending = new Map();

  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      pending.set(msgId, resolve);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  const consoleLogs = [];
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.method === 'Runtime.consoleAPICalled') {
      consoleLogs.push({ type: msg.params.type, args: msg.params.args.map(a => a.value) });
    }
    if (msg.id && pending.has(msg.id)) {
      const cb = pending.get(msg.id);
      pending.delete(msg.id);
      cb(msg.result);
    }
  };

  await new Promise(r => ws.onopen = r);

  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  console.log('Navigating to http://localhost:3000 ...');
  await send('Page.navigate', { url: 'http://localhost:3000' });
  await new Promise(r => setTimeout(r, 2000));

  fs.mkdirSync('test-screenshots', { recursive: true });

  const viewports = [
    { name: '320px-mobile', width: 320, height: 600, isMobile: true },
    { name: '375px-mobile', width: 375, height: 812, isMobile: true },
    { name: '430px-mobile', width: 430, height: 932, isMobile: true },
    { name: '768px-tablet', width: 768, height: 1024, isMobile: false },
    { name: '1024px-laptop', width: 1024, height: 768, isMobile: false },
    { name: '1440px-desktop', width: 1440, height: 900, isMobile: false },
    { name: '1920px-wide-desktop', width: 1920, height: 1080, isMobile: false }
  ];

  console.log('\n--- Viewport Responsiveness & Layout Audit ---');

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.isMobile
    });
    await new Promise(r => setTimeout(r, 500));

    // Check overflow
    const overflowEval = await send('Runtime.evaluate', {
      expression: `({
        innerWidth: window.innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        hasOverflow: document.documentElement.scrollWidth > window.innerWidth,
        clientWidth: document.documentElement.clientWidth
      })`,
      returnByValue: true
    });

    const res = overflowEval.result.value;
    console.log(`Viewport ${vp.name.padEnd(20)}: Width=${res.innerWidth}px, scrollWidth=${res.scrollWidth}px -> Overflow: ${res.hasOverflow ? 'FAIL' : 'PASS (No horizontal scroll)'}`);

    // Capture screenshot
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const buffer = Buffer.from(shot.data, 'base64');
    fs.writeFileSync(`test-screenshots/${vp.name}.png`, buffer);
  }

  console.log('\n--- Image Loading & Logo Verification ---');
  const imgEval = await send('Runtime.evaluate', {
    expression: `Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      complete: img.complete,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      isVisible: img.offsetWidth > 0 && img.offsetHeight > 0
    }))`,
    returnByValue: true
  });

  const images = imgEval.result.value;
  console.log(`Total images detected: ${images.length}`);
  for (const img of images) {
    console.log(`- Image: ${img.src}`);
    console.log(`  Dimensions: ${img.naturalWidth}x${img.naturalHeight}, Complete: ${img.complete}, Alt: "${img.alt}"`);
  }

  console.log('\n--- Dark / Light Theme Switching Audit ---');
  // Check initial theme
  const initialThemeEval = await send('Runtime.evaluate', {
    expression: `document.documentElement.classList.contains('dark')`,
    returnByValue: true
  });
  console.log(`Initial root dark class: ${initialThemeEval.result.value}`);

  // Click toggle
  await send('Runtime.evaluate', {
    expression: `document.querySelector('button[aria-label*="Switch to"]').click()`,
  });
  await new Promise(r => setTimeout(r, 600));

  const toggledThemeEval = await send('Runtime.evaluate', {
    expression: `document.documentElement.classList.contains('dark')`,
    returnByValue: true
  });
  console.log(`Theme after first toggle: dark = ${toggledThemeEval.result.value}`);

  // Take screenshot in dark/light toggled state
  const themeShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('test-screenshots/theme-toggled.png', Buffer.from(themeShot.data, 'base64'));

  // Toggle back
  await send('Runtime.evaluate', {
    expression: `document.querySelector('button[aria-label*="Switch to"]').click()`,
  });
  await new Promise(r => setTimeout(r, 400));

  console.log('\n--- Mobile Drawer Menu Audit ---');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 375,
    height: 812,
    deviceScaleFactor: 1,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 300));

  // Click burger button
  await send('Runtime.evaluate', {
    expression: `document.querySelector('button[aria-label*="navigation menu"]').click()`,
  });
  await new Promise(r => setTimeout(r, 500));

  const drawerEval = await send('Runtime.evaluate', {
    expression: `!!document.querySelector('[role="dialog"][aria-label="Mobile Navigation"]')`,
    returnByValue: true
  });
  console.log(`Mobile navigation drawer rendered: ${drawerEval.result.value}`);

  const mobileMenuShot = await send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync('test-screenshots/mobile-menu-opened.png', Buffer.from(mobileMenuShot.data, 'base64'));

  // Close drawer
  await send('Runtime.evaluate', {
    expression: `document.querySelector('[role="dialog"] button[aria-label="Close menu"]').click()`,
  });
  await new Promise(r => setTimeout(r, 400));

  console.log('\n--- Console Logs / Hydration Warnings ---');
  if (consoleLogs.length === 0) {
    console.log('Clean: Zero console warnings or errors detected!');
  } else {
    for (const log of consoleLogs) {
      console.log(`[${log.type}]`, ...log.args);
    }
  }

  ws.close();
  chrome.kill();
  console.log('\nAudit complete.');
}

runAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
