// Publish gate: fails the build while placeholder tracker rows or DRAFT pages remain. Preview: ALLOW_PLACEHOLDERS=1.
import fs from 'fs'; import path from 'path'; 
const root = new URL('..', import.meta.url).pathname; const hits = [];
for (const f of ['upcoming', 'soft-launches', 'delistings']) {
  const rows = JSON.parse(fs.readFileSync(path.join(root, 'src/data', f + '.json'), 'utf8'));
  rows.forEach((r, i) => { if (r.placeholder || /placeholder/i.test(r.title) || /example\.com/.test(r.source_url || '')) hits.push(`src/data/${f}.json row ${i + 1} (placeholder)`); });
}
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const f of walk(path.join(root, 'src/pages'))) if (/\.(astro|md)$/.test(f) && fs.readFileSync(f, 'utf8').includes('PUBLISH_BLOCKER:DRAFT')) hits.push(path.relative(root, f) + ' (DRAFT page)');
if (hits.length) {
  const msg = `Placeholder/DRAFT content remains (${hits.length}):\n  ` + hits.join('\n  ');
  if (process.env.ALLOW_PLACEHOLDERS === '1') console.warn('[check-placeholders] ALLOW_PLACEHOLDERS=1, preview build only.\n' + msg);
  else { console.error('[check-placeholders] Production build blocked.\n' + msg + '\nReplace them, or run `npm run build:preview` for a local preview.'); process.exit(1); }
} else console.log('[check-placeholders] OK, no placeholders.');
