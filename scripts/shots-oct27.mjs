import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const slug of (process.argv.slice(2).length ? process.argv.slice(2) : ['steam-client-beta-2026-10-26','decky-loader-v3-3-1','bazzite-stable-44-20261026','half-life-alyx-foveated-rendering-desktop'])) {
  const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
  const r = await p.goto(B + 'posts/' + slug + '/', { waitUntil: 'networkidle' }); await p.waitForTimeout(300);
  const img = await p.$$eval('img', a => a.filter(i => i.src.includes('covers/' + slug)).map(i => i.naturalWidth));
  await p.screenshot({ path: `${S}${process.env.PREFIX || 'oct27'}-${slug}.png`, fullPage: true }); console.log(slug, r.status(), (await p.$eval('h1', e => e.textContent)).slice(0, 40), 'cover', img); await p.close();
}
const p = await b.newPage({ viewport: { width: 1280, height: 900 } }); await p.goto(B, { waitUntil: 'networkidle' });
console.log('hero:', await p.$eval('.hero-main h1', e => e.textContent.slice(0, 50)).catch(()=>'?')); await b.close();
