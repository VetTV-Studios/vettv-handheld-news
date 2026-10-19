export const SITE = { name: 'VetTV Handheld News', tagline: 'Steam Deck, Legion Go & handheld PC news, guides and reviews', youtube: 'https://youtube.com/@VetTVHandheld' };
export const CATS: Record<string, string> = {
  'news': 'News', 'guides': 'Guides', 'reviews': 'Reviews', 'decky-plugins': 'Decky Plugins',
  'project-updates': 'Project Updates', 'retro-emulation-cloud': 'Retro / Emulation / Cloud',
};
export const url = (p = '') => { const b = import.meta.env.BASE_URL.replace(/\/$/, ''); p = p.replace(/^\/|\/$/g, ''); return p ? `${b}/${p}/` : `${b}/`; };
export const asset = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '');
export const fmt = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
// Newest day first; same day: explicit `order` (higher first), then publishedAt (draft mtime), then id. Deterministic.
type P = { id: string; data: { pubDate: Date; publishedAt?: Date; order?: number } };
export const sortPosts = <T extends P>(p: T[]) => p.sort((a, b) =>
  (+b.data.pubDate - +a.data.pubDate) || ((b.data.order ?? 0) - (a.data.order ?? 0)) ||
  ((+(b.data.publishedAt ?? 0)) - (+(a.data.publishedAt ?? 0))) || a.id.localeCompare(b.id));
