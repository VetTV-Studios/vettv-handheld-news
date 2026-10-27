export const SITE = { name: 'VetTV Handheld News', tagline: 'Gaming, handheld PC, Windows, Linux & SteamOS and macOS news, guides and reviews', youtube: 'https://www.youtube.com/@VetTVHandheld' };
// Primary sections (nav order). Videos is a nav-only link to /videos/.
export const CATS: Record<string, string> = {
  'news': 'News', 'handhelds': 'Handhelds', 'gaming': 'Gaming', 'windows': 'Windows', 'linux-steamos': 'Linux & SteamOS',
  'macos': 'macOS', 'open-nt': 'Open NT', 'deals': 'Deals', 'projects': 'Projects',
};
export const TYPE_LABEL: Record<string, string> = { news: 'News', opinion: 'Opinion', guide: 'Guide', review: 'Review', deal: 'Deal' };
export const url = (p = '') => { const b = import.meta.env.BASE_URL.replace(/\/$/, ''); p = p.replace(/^\/|\/$/g, ''); return p ? `${b}/${p}/` : `${b}/`; };
export const asset = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '');
export const fmt = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
// Newest day first; same day: explicit `order` (higher first), then publishedAt (draft mtime), then id. Deterministic.
type P = { id: string; data: { pubDate: Date; publishedAt?: Date; order?: number } };
export const sortPosts = <T extends P>(p: T[]) => p.sort((a, b) =>
  (+b.data.pubDate - +a.data.pubDate) || ((b.data.order ?? 0) - (a.data.order ?? 0)) ||
  ((+(b.data.publishedAt ?? 0)) - (+(a.data.publishedAt ?? 0))) || a.id.localeCompare(b.id));
export const readMins = (body = '') => Math.max(1, Math.round(body.split(/\s+/).length / 230));
export const CAT_DESC: Record<string, string> = {
  'news': 'Everything we publish, newest first: gaming, handhelds, Windows, Linux & SteamOS, macOS and more.',
  'handhelds': 'Steam Deck, ROG Ally, Legion Go, Xbox Ally, Steam Frame and Steam Machine: hardware, drivers, tools and tweaks.',
  'gaming': 'Game Pass, Steam and Epic releases, cloud gaming, retro and emulation.',
  'windows': 'Windows 11, PC gaming and Xbox on PC.',
  'linux-steamos': 'SteamOS, Bazzite, Proton and Decky: updates, betas, compatibility and the plugins worth installing.',
  'macos': 'Gaming and tinkering on the Mac: macOS updates, ports, OpenCore Legacy Patcher and Hackintosh.',
  'open-nt': 'Free, open Windows-compatible systems: ReactOS, its forks, and the people pushing them.',
  'deals': 'Game and hardware deals checked against Steam Deck ratings, with prices and end times called out.',
  'projects': "Dev logs and progress reports from VetTV's own builds and experiments.",
};
