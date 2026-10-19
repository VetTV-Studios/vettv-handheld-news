import { chromium } from 'playwright-core';
const B = 'http://localhost:4321/vettv-handheld-news/'; const S='/workspace/vettv-handheld-news/screenshots/';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const shots = [['steam-deals-home-desktop',1280,'',true],['steam-deals-section-desktop',1280,'steam-deals/',true],['steam-deals-article-desktop',1280,'posts/double-fine-humble-bundle-steam-deck/',true],['steam-deals-article-mobile',390,'posts/double-fine-humble-bundle-steam-deck/',true],['steam-deals-section-mobile',390,'steam-deals/',true]];
for (const [n,w,u,full] of shots) {
  const ctx = await b.newContext({ viewport: { width: w, height: w<769?844:900 }, deviceScaleFactor: w<769?2:1 }); const p = await ctx.newPage();
  await p.goto(B+u,{waitUntil:'networkidle'}); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(300);
  const sw = await p.evaluate(()=>document.documentElement.scrollWidth);
  await p.screenshot({path:S+n+'.png',fullPage:full}); console.log(n, sw>w?'OVERFLOW '+sw:'ok');
  if (n==='steam-deals-section-mobile') { // chips + drawer
    const chip = await p.$$eval('a', as=>as.filter(a=>a.textContent.trim()==='Steam Deals').map(a=>a.className+'|'+a.closest('nav,div,aside')?.className));
    console.log('steam deals links:', chip);
    await p.evaluate(()=>vhnNav()); await p.waitForTimeout(400); await p.screenshot({path:S+'steam-deals-sections-drawer-mobile.png'});
  }
  await ctx.close();
}
const ctx = await b.newContext(); const p = await ctx.newPage();
await p.goto(B+'search/?q=double%20fine',{waitUntil:'networkidle'}); await p.waitForSelector('.pagefind-ui__result',{timeout:10000});
console.log('pagefind:', await p.$$eval('.pagefind-ui__result-link', a=>a.slice(0,3).map(x=>x.textContent.slice(0,60)+' '+x.getAttribute('href'))));
await b.close();
