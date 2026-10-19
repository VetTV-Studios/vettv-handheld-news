// Usage: node scripts/shots-compare.mjs <outdir> <width> [width...]  — full-page shots of key pages from the local preview.
import { chromium } from 'playwright-core'; import fs from 'node:fs';
const [out, ...ws] = process.argv.slice(2); fs.mkdirSync(out, { recursive: true });
const B = 'http://localhost:4321/vettv-handheld-news/';
const pages = { home: '', section: 'news/', article: 'posts/steamos-proton-daily-2026-10-19/', search: 'search/?q=steamos', cloud: 'cloud-gaming/', subscribe: 'subscribe/' };
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const w of ws.map(Number)) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 });
  const p = await ctx.newPage();
  for (const [n, u] of Object.entries(pages)) {
    await p.goto(B + u, { waitUntil: 'networkidle' });
    if (n === 'search') await p.waitForSelector('.pagefind-ui__result', { timeout: 10000 });
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
    const sw = await p.evaluate(() => document.documentElement.scrollWidth);
    await p.screenshot({ path: `${out}/${n}-${w}.png`, fullPage: true });
    console.log(`${n}-${w}`, sw > w ? `OVERFLOW ${sw}` : 'ok');
  }
  await ctx.close();
}
await b.close();
