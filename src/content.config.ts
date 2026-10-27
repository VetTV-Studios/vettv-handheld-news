import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
export const CATEGORIES = ['news','handhelds','gaming','windows','linux-steamos','macos','open-nt','deals','projects'] as const;
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(), description: z.string(), pubDate: z.coerce.date(), publishedAt: z.coerce.date().optional(), order: z.number().optional(),
    author: z.string().default('Vet'), category: z.enum(CATEGORIES), tags: z.array(z.string()).default([]),
    cover: z.string().optional(), featured: z.boolean().default(false), sample: z.boolean().default(false),
    source: z.string().optional(), summary: z.string().optional(), seoTitle: z.string().optional(), offTopic: z.boolean().default(false),
    type: z.enum(['news','opinion','guide','review','deal']).default('news'), trending: z.boolean().default(false), draft: z.boolean().default(false), platforms: z.array(z.string()).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});
export const TYPES = ['news','opinion','guide','review','deal'] as const;
// Trackers: src/data/*.json (seed data from Article Desk, kept verbatim; snake_case). No id field, so the parser derives one from the title.
// A date is only shown when status is 'confirmed'; otherwise `window` text if present, else TBA.
const slug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const parser = (text: string) => JSON.parse(text).map((r: any, i: number) => ({ id: `${String(i + 1).padStart(2, '0')}-${slug(r.title)}`, ...r }));
const row = z.object({
  title: z.string().min(1), platforms: z.array(z.string()).min(1), date: z.coerce.date().nullable(), window: z.string().optional(),
  status: z.enum(['confirmed', 'rumored', 'TBA']), source_url: z.string().url(), source_name: z.string().optional(),
  last_verified: z.coerce.date(), note: z.string().optional(), placeholder: z.boolean().default(false),
});
const upcoming = defineCollection({ loader: file('src/data/upcoming.json', { parser }), schema: row });
const softLaunches = defineCollection({ loader: file('src/data/soft-launches.json', { parser }), schema: row.extend({ region: z.array(z.union([z.string().regex(/^[A-Z]{2}$/), z.literal('others')])).min(1) }) });
const delistings = defineCollection({ loader: file('src/data/delistings.json', { parser }), schema: row });
export const collections = { posts, upcoming, softLaunches, delistings };
