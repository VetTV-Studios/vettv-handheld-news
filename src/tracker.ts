import { fmt } from './site';
export const TRACKERS = {
  upcoming: { name: 'Upcoming', path: 'upcoming', coll: 'upcoming', desc: 'Release dates for games coming to PC, consoles, handhelds and mobile. Dates only when confirmed; otherwise TBA.' },
  'soft-launches': { name: 'Soft Launches', path: 'soft-launches', coll: 'softLaunches', desc: 'Mobile games in regional soft launch or test, with the countries they are live in.' },
  delistings: { name: 'Delistings', path: 'delistings', coll: 'delistings', desc: 'Games and other software leaving stores or shutting down, with the date service ends.' },
} as const;
export const when = (d: { date: Date | null; window?: string; status: string }) =>
  d.status === 'confirmed' && d.date ? fmt(d.date) : d.window ? d.window : 'TBA';
// Confirmed dates first (soonest), then windows, then TBA.
export const sortRows = <T extends { data: { date: Date | null; status: string; title: string } }>(r: T[]) =>
  r.sort((a, b) => { const k = (x: T) => x.data.status === 'confirmed' && x.data.date ? +x.data.date : Infinity; return (k(a) - k(b)) || a.data.title.localeCompare(b.data.title); });
