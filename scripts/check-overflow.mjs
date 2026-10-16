import http from 'http';

async function check() {
  const page = await new Promise((resolve, reject) => {
    http.get('http://localhost:9222/json/list', (res) => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => resolve(JSON.parse(d)[0]));
    }).on('error', reject);
  });

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === msgId) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await send('Emulation.setDeviceMetricsOverride', { width: 1024, height: 768, deviceScaleFactor: 1, mobile: false });
  await new Promise(r => setTimeout(r, 600));

  const evalRes = await send('Runtime.evaluate', {
    expression: `Array.from(document.querySelectorAll('*')).filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.right > window.innerWidth + 1;
    }).map(el => ({
      tag: el.tagName,
      id: el.id,
      className: typeof el.className === 'string' ? el.className.slice(0, 80) : '',
      right: Math.round(el.getBoundingClientRect().right),
      width: Math.round(el.getBoundingClientRect().width)
    })).slice(0, 15)`,
    returnByValue: true
  });

  console.log('Overflow elements at 1024px:');
  console.log(evalRes.result.value);

  ws.close();
}

check().catch(console.error);
