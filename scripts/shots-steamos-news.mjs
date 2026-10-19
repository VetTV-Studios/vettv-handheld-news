import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [n, w, u] of [['steamos-news-section-desktop', 1280, 'steamos-news/'], ['steamos-news-section-mobile', 390, 'steamos-news/'], ['steamos-news-home-desktop', 1280, '']]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  await p.goto(B + u, { waitUntil: 'networkidle' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  await p.screenshot({ path: S + n + '.png', fullPage: true }); console.log(n); await ctx.close();
}
const pages = ['', 'news/', 'steamos-news/', 'steam-deals/', 'cloud-gaming/', 'search/', 'subscribe/', 'posts/xodus-nexus-game-pass-steam-deck/', 'posts/double-fine-humble-bundle-steam-deck/'];
for (const w of [1280, 1024, 390]) { const p = await b.newPage({ viewport: { width: w, height: 800 } });
  for (const u of pages) { await p.goto(B + u, { waitUntil: 'networkidle' }); const sw = await p.evaluate(() => document.documentElement.scrollWidth); if (sw > w) console.log('OVERFLOW', w, u, sw); }
  const nav = await p.$eval('.cats .wrap', e => e.scrollWidth > e.clientWidth); console.log(w, 'pages ok; nav scrolls:', nav); await p.close(); }
const p = await b.newPage(); await p.goto(B, { waitUntil: 'networkidle' });
console.log('hero:', await p.$eval('.hero-main h1', e => e.textContent.slice(0, 50)), '| pill:', await p.$eval('.hero-main .pill', e => e.textContent));
console.log('side:', await p.$$eval('.hero-side h3, .hero-side h2', e => e.map(x => x.textContent.slice(0, 40))));
await p.goto(B + 'search/?q=xodus%20nexus', { waitUntil: 'networkidle' }); await p.waitForSelector('.pagefind-ui__result', { timeout: 10000 });
console.log('pagefind:', await p.$eval('.pagefind-ui__result-link', a => a.getAttribute('href')));
await b.close();
