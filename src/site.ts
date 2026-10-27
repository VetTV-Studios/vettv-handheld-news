export const SITE = { name: 'VetTV Handheld News', tagline: 'Gaming, handheld PC, Windows, Linux & SteamOS and macOS news, guides and reviews', youtube: 'https://www.youtube.com/@VetTVHandheld', email: 'Vetgaming1982@outlook.com' };
// Official accounts (given by Vet, Oct 27 2026). Icons are simple generic glyphs.
export const SOCIALS = [
  { k: 'youtube', name: 'YouTube', handle: '@VetTVHandheld', href: 'https://www.youtube.com/@VetTVHandheld', d: '<rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 9v6l5-3z" fill="#0c0414"/>' },
  { k: 'x', name: 'X', handle: '@The_VetX', href: 'https://x.com/The_VetX', d: '<path d="M4 4l16 16M20 4 4 20" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>' },
  { k: 'threads', name: 'Threads', handle: '@vettvstudios', href: 'https://www.threads.com/@vettvstudios', d: '<circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M15.6 12v1.4a2.6 2.6 0 0 0 5.2 0V12a8.8 8.8 0 1 0-3.4 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>' },
  { k: 'instagram', name: 'Instagram', handle: '@vettvstudios', href: 'https://www.instagram.com/vettvstudios/', d: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17.3" cy="6.7" r="1.3" fill="currentColor"/>' },
  { k: 'facebook', name: 'Facebook', handle: 'VetGamingTV', href: 'https://www.facebook.com/VetGamingTV/', d: '<path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4a21 21 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.1H7.7v3h2.6V21z" fill="currentColor"/>' },
];
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
