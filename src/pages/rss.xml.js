import rss from '@astrojs/rss'; import { getCollection } from 'astro:content'; import { SITE } from '../site';
export async function GET(context) {
  const posts = (await getCollection('posts')).sort((a, b) => b.data.pubDate - a.data.pubDate);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({ title: SITE.name, description: SITE.tagline, site: context.site + base.slice(1) + '/',
    items: posts.map(p => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `${base}/posts/${p.id}/`, categories: [p.data.category, ...p.data.tags] })) });
}
