import { chromium } from 'playwright-core';
const B = process.env.BASE || 'https://vettv-studios.github.io/vettv-handheld-news/';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const [vp, w, h] of [['desktop', 1280, 900], ['mobile', 390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2 })).newPage();
  await p.goto(B + 'subscribe/', { waitUntil: 'networkidle' });
  await p.screenshot({ path: `screenshots/subscribe-page-${vp}.png` });
  await p.goto(B + 'posts/decky-deck-live-plugin/', { waitUntil: 'networkidle' });
  await p.locator('.post-sub .subscribe').screenshot({ path: `screenshots/subscribe-article-${vp}.png` });
  await p.locator('footer .subscribe').screenshot({ path: `screenshots/subscribe-footer-${vp}.png` });
}
await b.close();
