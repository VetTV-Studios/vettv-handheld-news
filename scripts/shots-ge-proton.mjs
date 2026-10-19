import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const U = B + 'posts/ge-proton11-11-release/';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [n, w] of [['ge-proton-article-desktop', 1280], ['ge-proton-article-mobile', 390]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  const r = await p.goto(U, { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const h1 = await p.$eval('h1', e => e.textContent); const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: S + n + '.png', fullPage: true }); console.log(n, r.status(), h1.slice(0, 50), sw > w ? 'OVERFLOW' : 'ok'); await ctx.close();
}
const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); await p.goto(B, { waitUntil: 'networkidle' }); await p.waitForTimeout(300);
await p.screenshot({ path: S + 'ge-proton-home-desktop.png', fullPage: true });
console.log('hero:', await p.$eval('.hero-main h1', e => e.textContent.slice(0, 50)), '|', await p.$eval('.hero-main .pill', e => e.textContent));
console.log('side:', await p.$$eval('.hero-side h3, .hero-side h2', e => e.map(x => x.textContent.slice(0, 45))));
await p.goto(B + 'search/?q=ge-proton11-11', { waitUntil: 'networkidle' }); await p.waitForSelector('.pagefind-ui__result', { timeout: 10000 });
console.log('pagefind:', await p.$eval('.pagefind-ui__result-link', a => a.getAttribute('href')));
await b.close();
