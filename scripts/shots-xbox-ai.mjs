import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [n, w] of [['xbox-ai-article-desktop', 1280], ['xbox-ai-article-mobile', 390]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  await p.goto(B + 'posts/xbox-ai-strategy-sharma-labs-stirrup/', { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: S + n + '.png', fullPage: true }); console.log(n, sw > w ? 'OVERFLOW ' + sw : 'ok'); await ctx.close();
}
const p = await b.newPage(); await p.goto(B, { waitUntil: 'networkidle' });
console.log('hero:', await p.$eval('.hero-main h1', e => e.textContent.slice(0, 60)));
console.log('side:', await p.$$eval('.hero-side h3, .hero-side h2', e => e.map(x => x.textContent.slice(0, 40))));
await p.goto(B + 'search/?q=xbox%20labs', { waitUntil: 'networkidle' }); await p.waitForSelector('.pagefind-ui__result', { timeout: 10000 });
console.log('pagefind:', await p.$eval('.pagefind-ui__result-link', a => a.getAttribute('href')));
await b.close();
