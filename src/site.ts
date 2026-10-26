export const SITE = { name: 'VetTV Handheld News', tagline: 'Steam Deck, Legion Go & handheld PC news, guides and reviews', youtube: 'https://youtube.com/@VetTVHandheld' };
export const CATS: Record<string, string> = {
  'news': 'News', 'steamos-news': 'SteamOS News', 'guides': 'Guides', 'reviews': 'Reviews', 'decky-plugins': 'Decky Plugins', 'windows': 'Windows', 'reactos-open-nt': 'ReactOS & Open NT',
  'project-updates': 'Project Updates', 'cloud-gaming': 'Cloud Gaming', 'steam-deals': 'Steam Deals', 'retro-emulation': 'Retro & Emulation',
};
export const url = (p = '') => { const b = import.meta.env.BASE_URL.replace(/\/$/, ''); p = p.replace(/^\/|\/$/g, ''); return p ? `${b}/${p}/` : `${b}/`; };
export const asset = (p: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + p.replace(/^\//, '');
export const fmt = (d: Date) => d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
// Newest day first; same day: explicit `order` (higher first), then publishedAt (draft mtime), then id. Deterministic.
type P = { id: string; data: { pubDate: Date; publishedAt?: Date; order?: number } };
export const sortPosts = <T extends P>(p: T[]) => p.sort((a, b) =>
  (+b.data.pubDate - +a.data.pubDate) || ((b.data.order ?? 0) - (a.data.order ?? 0)) ||
  ((+(b.data.publishedAt ?? 0)) - (+(a.data.publishedAt ?? 0))) || a.id.localeCompare(b.id));
export const CAT_DESC: Record<string, string> = {
  'news': 'The latest from Steam Deck, Legion Go, SteamOS, Proton and the wider handheld PC scene.',
  'steamos-news': 'SteamOS itself: client and OS updates, betas, Proton and compatibility news, and the tools that change what runs on Steam Deck and other SteamOS handhelds.',
  'guides': 'Step-by-step help for setting up, tuning and getting more out of your handheld.',
  'reviews': 'Hands-on verdicts on handhelds, accessories and the games that run on them.',
  'decky-plugins': 'Decky Loader plugins worth installing, including VetTV-built ones.',
  'windows': 'Windows 11, PC gaming and Xbox on PC.',
  'reactos-open-nt': 'Free, open Windows-compatible systems: ReactOS, its forks, and the people pushing them.',
  'project-updates': "Progress reports from VetTV's own builds and experiments.",
  'cloud-gaming': 'Stream it, don\'t install it. News, tests and deals for Amazon Luna, Xbox Cloud Gaming, GeForce NOW and Boosteroid, with a handheld player\'s eye on latency, battery and what actually runs.',
  'steam-deals': 'Game deals for SteamOS players: bundles and sales checked against Valve\'s Steam Deck ratings, with native Linux builds, prices and end times called out.',
  'retro-emulation': 'Classic games, emulators, compatibility layers and the old-school tech that keeps them running.',
};
