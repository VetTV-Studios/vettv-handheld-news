import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
export const CATEGORIES = ['news','handhelds','gaming','windows','linux-steamos','macos','open-nt','deals','projects'] as const;
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(), description: z.string(), pubDate: z.coerce.date(), publishedAt: z.coerce.date().optional(), order: z.number().optional(),
    author: z.string().default('Vet'), category: z.enum(CATEGORIES), tags: z.array(z.string()).default([]),
    cover: z.string().optional(), featured: z.boolean().default(false), sample: z.boolean().default(false),
    source: z.string().optional(), summary: z.string().optional(), seoTitle: z.string().optional(), offTopic: z.boolean().default(false),
    type: z.enum(['news','opinion','guide','review','deal']).default('news'), trending: z.boolean().default(false), platforms: z.array(z.string()).default([]),
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
  }),
});
export const TYPES = ['news','opinion','guide','review','deal'] as const;
export const collections = { posts };
