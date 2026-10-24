import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const posts = { steamos39: 'steamos-3-9-stable-daily-2026-10-24', 'steam-frame': 'steam-frame-steamvr-2026-10-24' };
for (const [k, slug] of Object.entries(posts)) for (const [v, w] of [['desktop', 1280], ['mobile', 390]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  const r = await p.goto(B + 'posts/' + slug + '/', { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const h1 = await p.$eval('h1', e => e.textContent); const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: `${S}${k}-article-${v}.png`, fullPage: true }); console.log(`${k}-article-${v}`, r.status(), h1.slice(0, 45), sw > w ? 'OVERFLOW' : 'ok'); await ctx.close();
}
const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); await p.goto(B, { waitUntil: 'networkidle' }); await p.waitForTimeout(300);
await p.screenshot({ path: S + 'oct24-home-desktop.png', fullPage: true });
console.log('hero:', await p.$eval('.hero-main h1', e => e.textContent.slice(0, 50)), '|', await p.$eval('.hero-main .pill', e => e.textContent));
console.log('side:', await p.$$eval('.hero-side .card', e => e.map(x => (x.querySelector('.pill')?.textContent + ': ' + x.querySelector('h2,h3')?.textContent).slice(0, 60))));
for (const q of ['steamos 3.9.5', 'factorio']) { await p.goto(B + 'search/?q=' + encodeURIComponent(q), { waitUntil: 'networkidle' }); await p.waitForSelector('.pagefind-ui__result', { timeout: 10000 });
  console.log('pagefind', q, await p.$eval('.pagefind-ui__result-link', a => a.getAttribute('href'))); }
await b.close();
