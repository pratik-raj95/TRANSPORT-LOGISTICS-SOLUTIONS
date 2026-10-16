import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import os from 'os';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = path.join(os.tmpdir(), 'chrome-hero-test-' + Date.now());

const viewports = [
  { name: '320px', width: 320, height: 640 },
  { name: '375px', width: 375, height: 812 },
  { name: '430px', width: 430, height: 932 },
  { name: '768px', width: 768, height: 1024 },
  { name: '1024px', width: 1024, height: 768 },
  { name: '1440px', width: 1440, height: 900 },
];

async function runHeroVerification() {
  console.log('--- STARTING HERO VERIFICATION VIA CHROME CDP ---');
  fs.mkdirSync('test-screenshots/hero', { recursive: true });

  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9225',
    '--disable-gpu',
    '--disable-extensions',
    '--no-sandbox',
    '--user-data-dir=' + userDataDir,
    'http://localhost:3000',
  ]);

  await new Promise((r) => setTimeout(r, 2500));

  try {
    const targets = await new Promise((resolve, reject) => {
      http.get('http://localhost:9225/json/list', (res) => {
        let d = '';
        res.on('data', (c) => (d += c));
        res.on('end', () => resolve(JSON.parse(d)));
      }).on('error', reject);
    });

    console.log('Available targets:', targets.map(t => ({ type: t.type, url: t.url })));

    const page = targets.find((t) => t.type === 'page' && t.url.includes('3000')) || targets.find((t) => t.type === 'page');
    if (!page) throw new Error('No page target found');

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

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const resolve = pending.get(data.id);
        pending.delete(data.id);
        resolve(data.result);
      }
    };

    await new Promise((r) => (ws.onopen = r));
    await send('Page.enable');
    await send('DOM.enable');

    console.log('Reloading target page at http://localhost:3000...');
    await send('Page.navigate', { url: 'http://localhost:3000' });
    await new Promise((r) => setTimeout(r, 3500));

    // Verify DOM: card removal & content checks
    const domCheck = await send('Runtime.evaluate', {
      expression: `(() => {
        const hero = document.getElementById('hero');
        if (!hero) return { error: 'Hero element not found', url: window.location.href };

        const text = hero.innerText;
        const img = hero.querySelector('img');

        const hasOperationsCard = text.includes('TLS Transport Operations') || text.includes('TLS TRANSPORT OPERATIONS');
        const hasCardLine = text.includes('Your Logistics. Our Commitment.');
        const hasCardTruckBadge = Boolean(hero.querySelector('.rounded-3xl'));
        const hasActiveHubCardFooter = Boolean(hero.querySelector('.bg-emerald-400'));

        const headline = hero.querySelector('h1')?.innerText || '';
        const hasPrimaryCTA = Boolean(hero.querySelector('a[href="/contact#quote"]'));
        const hasSecondaryCTA = Boolean(hero.querySelector('a[href="/services"]'));
        const hasMobileCall = Boolean(hero.querySelector('a[href^="tel:"]'));

        return {
          hasHero: true,
          hasOperationsCard,
          hasCardLine,
          hasCardTruckBadge,
          hasActiveHubCardFooter,
          headline,
          hasPrimaryCTA,
          hasSecondaryCTA,
          hasMobileCall,
          imgSrc: img?.src,
          imgComplete: img?.complete,
          imgNaturalWidth: img?.naturalWidth,
          imgNaturalHeight: img?.naturalHeight,
        };
      })()`,
      returnByValue: true,
    });

    console.log('DOM Inspection Results:', JSON.stringify(domCheck.result.value, null, 2));

    // Viewport and Overflow checks
    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.width < 1024,
      });

      await new Promise((r) => setTimeout(r, 1000));

      const overflowCheck = await send('Runtime.evaluate', {
        expression: `(() => {
          const docEl = document.documentElement;
          const hero = document.getElementById('hero');
          return {
            windowWidth: window.innerWidth,
            docScrollWidth: docEl.scrollWidth,
            docClientWidth: docEl.clientWidth,
            heroScrollWidth: hero ? hero.scrollWidth : 0,
            heroClientWidth: hero ? hero.clientWidth : 0,
            hasHorizontalOverflow: docEl.scrollWidth > window.innerWidth,
          };
        })()`,
        returnByValue: true,
      });

      const res = overflowCheck.result.value;
      console.log('Viewport ' + vp.name + ': overflow=' + res.hasHorizontalOverflow + ' (' + res.docScrollWidth + 'px / ' + res.windowWidth + 'px)');

      const screenshot = await send('Page.captureScreenshot', {
        format: 'png',
        clip: {
          x: 0,
          y: 0,
          width: vp.width,
          height: Math.min(vp.height, 900),
          scale: 1,
        },
      });

      fs.writeFileSync('test-screenshots/hero/hero-' + vp.name + '.png', Buffer.from(screenshot.data, 'base64'));
      console.log('Captured test-screenshots/hero/hero-' + vp.name + '.png');
    }

    ws.close();
  } catch (err) {
    console.error('Error during CDP verification:', err);
  } finally {
    chrome.kill();
  }
}

runHeroVerification();
