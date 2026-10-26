import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const posts = { 'win11-cd': 'windows-11-iso-on-a-cd', 'win7-kernel': 'win7-userspace-win10-kernel-wearr' };
for (const [k, slug] of Object.entries(posts)) for (const [v, w] of [['desktop', 1280], ['mobile', 390]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  const r = await p.goto(B + 'posts/' + slug + '/', { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const h1 = await p.$eval('h1', e => e.textContent); const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: `${S}${k}-article-${v}.png`, fullPage: true }); console.log(`${k}-article-${v}`, r.status(), h1.slice(0, 45), sw > w ? 'OVERFLOW' : 'ok'); await ctx.close();
}
for (const w of [1440, 1280, 1180, 1024, 820]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } }); await p.goto(B, { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready);
  const rows = await p.evaluate(() => { const a = [...document.querySelectorAll('header nav a, .nav a')].filter(e => e.offsetParent); return { n: a.length, tops: [...new Set(a.map(e => Math.round(e.getBoundingClientRect().top)))].length, sw: document.documentElement.scrollWidth }; });
  console.log('nav', w, rows);
  if (w === 1280) { await p.screenshot({ path: S + 'windows-home-desktop.png', fullPage: true });
    console.log('hero:', await p.$eval('.hero-main h1', e => e.textContent.slice(0, 50)));
    console.log('side:', await p.$$eval('.hero-side .card', e => e.map(x => (x.querySelector('.pill')?.textContent + ': ' + x.querySelector('h2,h3')?.textContent).slice(0, 60)))); }
  if (w === 1180) await p.screenshot({ path: S + 'windows-nav-1180.png' });
  await p.close();
}
const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); const r = await p.goto(B + 'windows/', { waitUntil: 'networkidle' });
await p.screenshot({ path: S + 'windows-section-desktop.png', fullPage: true }); console.log('section', r.status(), await p.$eval('h1', e => e.textContent));
const m = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 }); const mp = await m.newPage(); await mp.goto(B + 'windows/', { waitUntil: 'networkidle' });
await mp.screenshot({ path: S + 'windows-section-mobile.png' }); console.log('mobile sw', await mp.evaluate(() => document.documentElement.scrollWidth));
await b.close();
