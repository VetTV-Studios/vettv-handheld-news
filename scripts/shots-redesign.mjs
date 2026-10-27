import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const shots = [['home-desktop', '', 1280], ['home-mobile', '', 390], ['section-desktop', 'linux-steamos/', 1280], ['section-mobile', 'open-nt/', 390],
  ['article-desktop', 'posts/fsr-4-1-2-lite-rog-ally-game-bar-widget/', 1280], ['article-mobile', 'posts/steamos-3-9-stable-daily-2026-10-24/', 390], ['videos-desktop', 'videos/', 1280]];
for (const [k, path, w] of shots) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  const r = await p.goto(B + path, { waitUntil: 'networkidle' }); await p.waitForTimeout(300);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: `${S}redesign-${k}.png`, fullPage: true }); console.log(k, r.status(), (await p.$eval('h1', e => e.textContent)).slice(0, 50), sw > w ? 'OVERFLOW ' + sw : 'ok'); await ctx.close();
}
for (const w of [1440, 1280, 1100, 1024, 900, 820]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } }); await p.goto(B, { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => { const c = document.querySelector('.cats .wrap'); const a = [...c.querySelectorAll('a')].filter(e => e.offsetParent);
    return { visible: a.length, rows: new Set(a.map(e => Math.round(e.getBoundingClientRect().top))).size, content: c.scrollWidth, box: c.clientWidth, page: document.documentElement.scrollWidth }; });
  console.log('nav', w, JSON.stringify(r), r.content > r.box ? 'SCROLLS' : 'fits'); if (w === 1024) await p.screenshot({ path: S + 'redesign-nav-1024.png' }); await p.close();
}
const p = await b.newPage(); for (const u of ['steamos-news/', 'reactos-open-nt/', 'decky-plugins/', 'cloud-gaming/', 'steam-deals/', 'guides/', 'reviews/', 'rss.xml', 'search/', 'posts/reactos-community-roundup-2026-10-26/']) { const r = await p.goto(B + u); console.log(u, '->', p.url().replace(B, ''), r.status()); }
await b.close();
