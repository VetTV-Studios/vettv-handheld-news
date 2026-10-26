// Imports VetTV Article Desk drafts (read-only) from /workspace/articles (or m.dir) into src/content/posts.
// Usage: node scripts/import-articles.mjs [slug ...]   (no args = all). Dates are the CT byline date.
import fs from 'node:fs'; import path from 'node:path';
const SRC0 = process.env.ARTICLES_DIR || '/workspace/articles';
const OUT = new URL('../src/content/posts/', import.meta.url).pathname;
const COV = new URL('../public/covers/', import.meta.url).pathname;
const map = {
  'steamos-3-9-2-beta-legion-go': { cat: 'news', tags: ['steamos','legion-go','beta'], cover: 'steamos-3-9-2', featured: true },
  'steamos-proton-daily-2026-10-13': { cat: 'news', tags: ['steamos','proton','steam-deck','remote-play'], cover: 'steamos-proton-daily-2026-10-13' },
  'planet-zoo-2-geforce-now': { cat: 'cloud-gaming', tags: ['cloud-gaming','geforce-now','planet-zoo-2'], cover: 'planet-zoo-2' },
  'oclp-3-0-0-rc3-hackintosh': { cat: 'project-updates', tags: ['macos','oclp','hackintosh'], cover: 'oclp-3-0-0-rc3' },
  'steamos-legion-go-setup-guide': { cat: 'guides', cover: 'steamos-legion-go-setup-guide' },
  'steamos-handheld-performance-battery-tuning': { cat: 'guides', cover: 'steamos-handheld-performance-battery-tuning' },
  'decky-deck-live-plugin': { cat: 'decky-plugins', cover: 'decky-deck-live-plugin' },
  'steamos-proton-evening-2026-10-13': { cat: 'news', cover: 'steamos-proton-evening-2026-10-13' },
  'steam-frame-steamos-0-4-steamvr-2-18-3': { cat: 'news', cover: 'steam-frame-steamos-0-4-steamvr-2-18-3' },
  'steam-frame-backorder-2027': { cat: 'news', cover: 'steam-frame-backorder-2027' },
  'winui-gallery-3-0': { cat: 'windows', tags: ['windows','winui','dev'], cover: 'winui-gallery-3-0' },
  'valve-index-discontinued-steam-frame-port': { cat: 'news', cover: 'valve-index-discontinued-steam-frame-port' },
  'xbox-nano-controller': { cat: 'news', cover: 'xbox-nano-controller' },
  'steamos-proton-daily-2026-10-15': { cat: 'news', cover: 'steamos-proton-daily-2026-10-15' },
  'steam-frame-audio-strap-oled-plano-rumor': { cat: 'news', cover: 'steam-frame-audio-strap-oled-plano-rumor' },
  'rog-xbox-ally-x20': { cat: 'news', cover: 'rog-xbox-ally-x20' },
  'xbox-windows-roundup-2026-10-15': { cat: 'news', cover: 'xbox-windows-roundup-2026-10-15', offTopic: true },
  'steam-linux-64-bit': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'steam-linux-64-bit' },
  'windows-11-start-menu-phone-settings-store': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'windows-11-start-menu-phone-settings-store', offTopic: true },
  'gmail-gemini-work-emails': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'gmail-gemini-work-emails', offTopic: true },
  'beam-desktop-app-linux': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'beam-desktop-app-linux' },
  'steamos-proton-daily-2026-10-17': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'steamos-proton-daily-2026-10-17' },
  'steam-frame-steamvr-2026-10-17': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'steam-frame-steamvr-2026-10-17' },
  'jamie-craven-spedley-securities': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'jamie-craven-spedley-securities', offTopic: true },
  'windows-11-gaming-task-view-run-dialog': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'windows-11-gaming-task-view-run-dialog' },
  'windows-11-ms-dos-8-3-file-names': { dir: '/workspace/vettv-articles', cat: 'retro-emulation', cover: 'windows-11-ms-dos-8-3-file-names', offTopic: true },
  'reactos-nt6-users-folder': { dir: '/workspace/vettv-articles', cat: 'retro-emulation', cover: 'reactos-nt6-users-folder', offTopic: true },
  'legion-go-s-steamos-deal-best-buy': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'legion-go-s-steamos-deal-best-buy' },
  'gta-6-ps5-install-size-rumor': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'gta-6-ps5-install-size-rumor', offTopic: true },
  'disney-character-ai-hiring': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'disney-character-ai-hiring', offTopic: true },
  'luna-free-games-caravan-sandwitch-swansong': { dir: '/workspace/vettv-articles', cat: 'cloud-gaming', cover: 'luna-free-games-caravan-sandwitch-swansong' },
  'steamos-proton-daily-2026-10-19': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'steamos-proton-daily-2026-10-19' },
  'double-fine-humble-bundle-steam-deck': { dir: '/workspace/vettv-articles', cat: 'steam-deals', cover: 'double-fine-humble-bundle-steam-deck' },
  'xbox-ai-strategy-sharma-labs-stirrup': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'xbox-ai-strategy-sharma-labs-stirrup', offTopic: true },
  'steam-beta-linux-alt-tab-fix-incomplete': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'steam-beta-linux-alt-tab-fix-incomplete' },
  'xodus-nexus-game-pass-steam-deck': { dir: '/workspace/vettv-articles', cat: 'steamos-news', cover: 'xodus-nexus-game-pass-steam-deck' },
  'vettv-retro-os-progress-update-oct-2026': { dir: '/workspace/vettv-articles', cat: 'project-updates', cover: 'vettv-retro-os-progress-update-oct-2026', offTopic: true },
  'vettv-channel-guide-status-oct-2026': { dir: '/workspace/vettv-articles', cat: 'project-updates', cover: 'vettv-channel-guide-status-oct-2026', offTopic: true },
  'ge-proton11-11-release': { dir: '/workspace/vettv-articles', cat: 'steamos-news', cover: 'ge-proton11-11-release' },
  'steamos-3-9-stable-daily-2026-10-24': { dir: '/workspace/vettv-articles', cat: 'steamos-news', cover: 'steamos-3-9-stable-daily-2026-10-24', order: 1 },
  'steam-frame-steamvr-2026-10-24': { dir: '/workspace/vettv-articles', cat: 'news', cover: 'steam-frame-steamvr-2026-10-24' },
  'windows-11-iso-on-a-cd': { dir: '/workspace/vettv-articles', cat: 'windows', tags: ['windows','windows-11','tiny11','ntdev','retro-computing','debloat'], cover: 'windows-11-iso-on-a-cd', offTopic: true },
  'win7-userspace-win10-kernel-wearr': { dir: '/workspace/vettv-articles', cat: 'windows', tags: ['windows','windows-7','windows-10','retro-computing','reverse-engineering','hobbyist-projects'], cover: 'win7-userspace-win10-kernel-wearr', offTopic: true, author: 'Vet, VetTV Studios', soften: [['wearr posted "doing some bullshit', 'wearr posted that they were "doing some BS']] },
  'reactos-community-roundup-2026-10-26': { dir: '/workspace/vettv-articles', cat: 'reactos-open-nt', tags: ['reactos','open-source','libernt','cusdeb-os','retro-computing'], cover: 'reactos-community-roundup-2026-10-26', offTopic: true, date: '2026-10-26', desk2: true, author: 'Vet, VetTV Studios' },
  'advanced-shader-delivery-all-rtx-2026-10': { dir: '/workspace/vettv-articles', cat: 'windows', tags: ['windows','advanced-shader-delivery','directx','pc-gaming','nvidia','windows-11'], cover: 'advanced-shader-delivery-all-rtx-2026-10', offTopic: true, date: '2026-10-26', desk2: true, author: 'Vet, VetTV Studios' },
  'windows-xbox-week-2026-10-26': { dir: '/workspace/vettv-articles', cat: 'windows', tags: ['windows','xbox','game-pass','id-xbox','windows-insider','arkane'], cover: 'windows-xbox-week-2026-10-26', offTopic: true, date: '2026-10-26', desk2: true, author: 'Vet, VetTV Studios', soften: [['](./advanced-shader-delivery-all-rtx-2026-10)', '](/vettv-handheld-news/posts/advanced-shader-delivery-all-rtx-2026-10/)']] },
  'game-pass-october-wave-2-2026': { dir: '/workspace/vettv-articles', cat: 'windows', tags: ['windows','xbox-game-pass','final-fantasy-vii-remake','pc-game-pass','xbox','steam-deck'], cover: 'game-pass-october-wave-2-2026', offTopic: true, date: '2026-10-26', desk2: true, author: 'Vet, VetTV Studios', soften: [['](./windows-xbox-week-2026-10-26)', '](/vettv-handheld-news/posts/windows-xbox-week-2026-10-26/)']] },
  'steam-frame-cd-rom-kernel-support': { dir: '/workspace/vettv-articles', cat: 'steamos-news', tags: ['steam-frame','steamos','valve','linux-kernel','vr'], cover: 'steam-frame-cd-rom-kernel-support', offTopic: true, author: 'Vet, VetTV Studios' },
  'fsr-4-1-2-lite-rog-ally-game-bar-widget': { dir: '/workspace/vettv-articles', cat: 'handhelds', tags: ['rog-ally','fsr-4','amd','optiscaler','handheld-pc'], cover: 'fsr-4-1-2-lite-rog-ally-game-bar-widget', offTopic: true, date: '2026-10-26', desk2: true, author: 'Vet, VetTV Studios' },
  'windows-refs-removable-media-block-2027': { dir: '/workspace/vettv-articles', cat: 'windows', tags: ['windows','windows-11','refs','windows-update','usb','storage'], cover: 'windows-refs-removable-media-block-2027', offTopic: true, date: '2026-10-26', desk2: true, author: 'Vet, VetTV Studios' },
};
// Auto-section rule for drafts without an explicit `cat`: cloud services -> Cloud Gaming, a 'steam-deals' tag -> Steam Deals, a 'steamos-news' tag -> SteamOS News, else News.
const CLOUD = /\b(amazon[- ]?luna|luna|xbox[- ]cloud[- ]gaming|xcloud|geforce[- ]?now|boosteroid)\b/i;
const autoCat = (tags, title) => tags.includes('steam-deals') ? 'steam-deals' : tags.includes('steamos-news') ? 'steamos-news' : (tags.some(t => CLOUD.test(t.replace(/-/g, ' '))) || CLOUD.test(title)) ? 'cloud-gaming' : 'news';
const q = s => JSON.stringify(s);
const only = process.argv.slice(2);
for (const [slug, m] of Object.entries(map)) {
  if (only.length && !only.includes(slug)) continue;
  const SRC = m.dir || SRC0;
  const f = path.join(SRC, slug + '.md'); if (!fs.existsSync(f)) { console.warn('missing', f); continue; }
  let lines = fs.readFileSync(f, 'utf8').split('\n'); let seo2 = '';
  if (m.desk2) { const o = []; let skip = false, dek = false;
    for (const l of lines) { const t = l.trim();
      if (/^\*\*Alternate headlines/.test(t)) { skip = true; continue; } if (skip) { if (/^[-*]\s/.test(t)) continue; skip = false; }
      const sm = t.match(/^\*\*SEO title:\*\*\s*(.+)$/); if (sm) { seo2 = sm[1]; continue; }
      if (/^\*\*(Tags|Recommended section):\*\*/.test(t)) continue;
      if (/^\*By [^|]+\*$/.test(t)) { o.push(t.replace(/\*$/, ` | ${m.date}*`)); continue; }
      if (!dek && /^\*[^*].+[^*]\*$/.test(t) && !/^\*(By|Disclosure)/.test(t)) { dek = true; o.splice(1, 0, '### ' + t.slice(1, -1)); continue; }
      o.push(l); }
    lines = o; }
  let title = '', desc = '', author = 'Vet', date = '2026-10-13', i = 0;
  for (; i < lines.length; i++) {
    const l = lines[i].trim();
    if (!title && l.startsWith('# ')) { title = l.slice(2); continue; }
    if (!desc && l.startsWith('### ')) { desc = l.slice(4); continue; }
    const by = l.match(/^\*By (.+?)\s*\|\s*(.+?)\*$/);
    if (by) { author = by[1]; const d = new Date(by[2] + ' 12:00'); if (!isNaN(d)) date = d.toISOString().slice(0,10); i++; break; }
    if (l && title && desc) break;
  }
  if (!m.tags) { const c = path.join(SRC, slug + '.captions.md'); const blk = fs.existsSync(c) && fs.readFileSync(c, 'utf8').match(/## Pickax tags[^\n]*\n+((?:(?!#)[^\n]*\n?)+)/);
    const raw = blk ? (/^\s*[-*]\s/m.test(blk[1]) ? blk[1].split('\n').filter(l => /^\s*[-*]\s/.test(l)).map(l => l.replace(/^\s*[-*]\s+/, '')) : blk[1].split('\n')[0].split(',')) : [];
    m.tags = raw.map(x => x.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')).filter(Boolean); }
  const capF = path.join(SRC, slug + '.captions.md'); const cap = fs.existsSync(capF) ? fs.readFileSync(capF, 'utf8') : '';
  const seo = cap.match(/## SEO title[^\n]*\n+([^\n]+)/); const seoTitle = seo ? seo[1].trim() : seo2;
  const sources = []; const si = lines.findIndex(l => /^##\s+Sources/i.test(l));
  if (si >= 0) for (const l of lines.slice(si + 1)) { if (/^#/.test(l)) break; const mm = l.match(/^[-*]\s+(.+?):\s+(https?:\/\/\S+)\s*$/); if (mm) sources.push({ title: mm[1], url: mm[2] }); const lk = l.match(/^[-*]\s+\[(.+?)\]\((https?:\/\/[^)\s]+)\)\s*$/); if (lk) sources.push({ title: lk[1], url: lk[2] }); }
  if (m.author) author = m.author; if (m.date) date = m.date;
  let body = lines.slice(i).join('\n').trim(); for (const [a, b] of m.soften || []) body = body.replaceAll(a, b);
  const src = path.join(SRC, m.cover + '-cover-pickax-1920x1080.jpg');
  let cover; if (fs.existsSync(src)) { fs.copyFileSync(src, path.join(COV, slug + '.jpg')); cover = `covers/${slug}.jpg`; }
  const fm = ['---', `title: ${q(title)}`, `description: ${q(desc)}`, `summary: ${q(desc)}`, seoTitle ? `seoTitle: ${q(seoTitle)}` : '', `pubDate: ${date}`, `publishedAt: ${new Date(fs.statSync(f).mtimeMs).toISOString()}`, `author: ${q(author)}`,
    `category: ${m.cat || autoCat(m.tags, title)}`, `tags: ${q(m.tags)}`, cover ? `cover: ${q(cover)}` : '', m.featured ? 'featured: true' : '', m.order ? `order: ${m.order}` : '', m.offTopic ? 'offTopic: true' : '',
    sources.length ? 'sources:\n' + sources.map(x => `  - title: ${q(x.title)}\n    url: ${q(x.url)}`).join('\n') : '',
    `source: ${q('Article Desk: ' + slug + '.md')}`, '---', ''].filter(Boolean).join('\n');
  fs.writeFileSync(path.join(OUT, slug + '.md'), fm + '\n' + body + '\n');
  console.log('imported', slug);
}
