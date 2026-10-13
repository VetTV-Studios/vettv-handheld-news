import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/';
const pages = { home: '', section: 'news/', article: 'posts/steamos-3-9-2-beta-legion-go/', search: 'search/?q=steamos' };
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [vp, w, h] of [['desktop', 1280, 900], ['mobile', 390, 844]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: vp === 'mobile' ? 2 : 1 });
  const p = await ctx.newPage();
  for (const [n, u] of Object.entries(pages)) {
    await p.goto(B + u, { waitUntil: 'networkidle' });
    if (n === 'search') await p.waitForSelector('.pagefind-ui__result', { timeout: 10000 }).catch(() => console.log('no results?'));
    await p.screenshot({ path: `screenshots/${n}-${vp}.png`, fullPage: n !== 'article' });
    console.log(`screenshots/${n}-${vp}.png`);
  }
  await ctx.close();
}
await b.close();
