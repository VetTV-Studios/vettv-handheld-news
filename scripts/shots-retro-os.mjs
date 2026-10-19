import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [n, w] of [['retro-os-article-desktop', 1280], ['retro-os-article-mobile', 390]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  await p.goto(B + 'posts/vettv-retro-os-progress-update-oct-2026/', { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: S + n + '.png', fullPage: true }); console.log(n, sw > w ? 'OVERFLOW ' + sw : 'ok'); await ctx.close();
}
const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); await p.goto(B + 'project-updates/', { waitUntil: 'networkidle' });
await p.screenshot({ path: S + 'project-updates-section-desktop.png', fullPage: true }); await p.goto(B, { waitUntil: 'networkidle' }); console.log('hero:', await p.$eval('.hero-main h1', e => e.textContent.slice(0, 60)));
console.log('side:', await p.$$eval('.hero-side h3, .hero-side h2', e => e.map(x => x.textContent.slice(0, 40))));
await p.goto(B + 'search/?q=retro%20os%20launcher', { waitUntil: 'networkidle' }); await p.waitForSelector('.pagefind-ui__result', { timeout: 10000 });
console.log('pagefind:', await p.$eval('.pagefind-ui__result-link', a => a.getAttribute('href')));
await b.close();
