// Imports VetTV Article Desk drafts (read-only) from /workspace/articles into src/content/posts.
import fs from 'node:fs'; import path from 'node:path';
const SRC = process.env.ARTICLES_DIR || '/workspace/articles';
const OUT = new URL('../src/content/posts/', import.meta.url).pathname;
const COV = new URL('../public/covers/', import.meta.url).pathname;
const map = {
  'steamos-3-9-2-beta-legion-go': { cat: 'news', tags: ['steamos','legion-go','beta'], cover: 'steamos-3-9-2', featured: true },
  'steamos-proton-daily-2026-10-13': { cat: 'news', tags: ['steamos','proton','steam-deck','remote-play'], cover: 'steamos-proton-daily-2026-10-13' },
  'planet-zoo-2-geforce-now': { cat: 'retro-emulation-cloud', tags: ['cloud-gaming','geforce-now','planet-zoo-2'], cover: 'planet-zoo-2' },
  'oclp-3-0-0-rc3-hackintosh': { cat: 'project-updates', tags: ['macos','oclp','hackintosh'], cover: 'oclp-3-0-0-rc3' },
  'steamos-legion-go-setup-guide': { cat: 'guides', cover: 'steamos-legion-go-setup-guide' },
  'steamos-handheld-performance-battery-tuning': { cat: 'guides', cover: 'steamos-handheld-performance-battery-tuning' },
  'decky-deck-live-plugin': { cat: 'decky-plugins', cover: 'decky-deck-live-plugin' },
  'steamos-proton-evening-2026-10-13': { cat: 'news', cover: 'steamos-proton-evening-2026-10-13' },
  'winui-gallery-3-0': { cat: 'news', tags: ['windows','winui','dev'], cover: 'winui-gallery-3-0' },
};
const q = s => JSON.stringify(s);
for (const [slug, m] of Object.entries(map)) {
  const f = path.join(SRC, slug + '.md'); if (!fs.existsSync(f)) { console.warn('missing', f); continue; }
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  let title = '', desc = '', author = 'Vet', date = '2026-10-13', i = 0;
  for (; i < lines.length; i++) {
    const l = lines[i].trim();
    if (!title && l.startsWith('# ')) { title = l.slice(2); continue; }
    if (!desc && l.startsWith('### ')) { desc = l.slice(4); continue; }
    const by = l.match(/^\*By (.+?)\s*\|\s*(.+?)\*$/);
    if (by) { author = by[1]; const d = new Date(by[2] + ' 12:00'); if (!isNaN(d)) date = d.toISOString().slice(0,10); i++; break; }
    if (l && title && desc) break;
  }
  if (!m.tags) { const c = path.join(SRC, slug + '.captions.md'); const t = fs.existsSync(c) && fs.readFileSync(c, 'utf8').match(/## Pickax tags\s*\n+([^\n]+)/);
    m.tags = t ? t[1].split(',').map(x => x.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')).filter(Boolean) : []; }
  const body = lines.slice(i).join('\n').trim();
  const src = path.join(SRC, m.cover + '-cover-pickax-1920x1080.jpg');
  let cover; if (fs.existsSync(src)) { fs.copyFileSync(src, path.join(COV, slug + '.jpg')); cover = `covers/${slug}.jpg`; }
  const fm = ['---', `title: ${q(title)}`, `description: ${q(desc)}`, `pubDate: ${date}`, `author: ${q(author)}`,
    `category: ${m.cat}`, `tags: ${q(m.tags)}`, cover ? `cover: ${q(cover)}` : '', m.featured ? 'featured: true' : '',
    `source: ${q('Article Desk: ' + slug + '.md')}`, '---', ''].filter(Boolean).join('\n');
  fs.writeFileSync(path.join(OUT, slug + '.md'), fm + '\n' + body + '\n');
  console.log('imported', slug);
}
