import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S = new URL('../screenshots/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const shots = [['home-desktop', '', 1280], ['home-mobile', '', 390], ['upcoming-desktop', 'upcoming/', 1280], ['soft-launches-desktop', 'soft-launches/', 1280], ['delistings-desktop', 'delistings/', 1280]];
for (const [k, path, w] of shots) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage();
  const r = await p.goto(B + path, { waitUntil: 'networkidle' }); await p.waitForTimeout(300);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  await p.screenshot({ path: `${S}redesign2-${k}.png`, fullPage: true }); console.log(k, r.status(), (await p.$eval('h1', e => e.textContent)).slice(0, 50), sw > w ? 'OVERFLOW ' + sw : 'ok'); await ctx.close();
}
for (const w of [1440, 1280, 1100, 1024, 900, 820]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } }); await p.goto(B, { waitUntil: 'networkidle' });
  const r = await p.evaluate(() => { const c = document.querySelector('.cats .wrap'); const a = [...c.querySelectorAll('a')].filter(e => e.offsetParent);
    return { visible: a.length, rows: new Set(a.map(e => Math.round(e.getBoundingClientRect().top))).size, content: c.scrollWidth, box: c.clientWidth, page: document.documentElement.scrollWidth }; });
  console.log('nav', w, JSON.stringify(r), r.content > r.box ? 'SCROLLS' : 'fits'); await p.close();
}
for (const [k, w] of [['footer-desktop', 1280], ['footer-mobile', 390], ['carousel-mobile', 390], ['carousel-desktop', 1280]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 769 ? 844 : 900 }, deviceScaleFactor: w < 769 ? 2 : 1 }); const p = await ctx.newPage(); await p.goto(B, { waitUntil: 'networkidle' });
  const el = await p.$(k.startsWith('footer') ? 'footer.foot' : '.carousel'); await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(400); await el.screenshot({ path: `${S}redesign2-${k}.png` });
  if (k === 'carousel-desktop') { const a = await p.$eval('.car-dot.on', e => e.getAttribute('aria-label').slice(0, 30)); await p.mouse.move(5, 890); await p.waitForTimeout(7200); console.log('autoplay', a, '->', await p.$eval('.car-dot.on', e => e.getAttribute('aria-label').slice(0, 30)));
    await p.keyboard.press('Tab'); await p.focus('[data-next]'); await p.keyboard.press('Enter'); await p.waitForTimeout(700); console.log('next ->', await p.$eval('.car-dot.on', e => e.getAttribute('aria-label').slice(0, 30))); }
  console.log(k, 'sw', await p.evaluate(() => document.documentElement.scrollWidth)); await ctx.close(); }
{ const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' }); const p = await ctx.newPage(); await p.goto(B); await p.mouse.move(5, 890); await p.waitForTimeout(7200); console.log('reduced-motion dot', await p.$eval('.car-dot.on', e => e.getAttribute('aria-label').slice(0, 30)), 'pause hidden', await p.$eval('[data-pause]', e => e.hidden));
  console.log('groups', await p.$$eval('.day-group', g => g.map(x => x.querySelector('.day-h span').textContent + (x.hidden ? '(hidden)' : '')).join(' | ')));
  await p.click('button.load-more'); console.log('after load more visible', await p.$$eval('.day-group', g => g.filter(x => !x.hidden).length)); await ctx.close(); }
{ const ctx = await b.newContext({ viewport: { width: 1280, height: 900 }, javaScriptEnabled: false }); const p = await ctx.newPage(); await p.goto(B); await p.screenshot({ path: S + 'redesign2-home-nojs.png' });
  console.log('nojs groups', await p.$$eval('.day-group', g => g.length), 'load-more href', await p.$eval('.load-more', e => e.tagName + ' ' + e.getAttribute('href'))); await ctx.close(); }
const p = await b.newPage(); for (const u of ['about/', 'official-links/', 'contact/', 'privacy/', 'terms/', 'affiliate-disclosure/', 'content-disclosure/', 'rss.xml', 'search/', 'posts/steamos-3-9-stable-daily-2026-10-24/']) { const r = await p.goto(B + u); console.log(u, '->', p.url().replace(B, ''), r.status()); }
await b.close();
