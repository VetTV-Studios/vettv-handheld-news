import rss from '@astrojs/rss'; import { getCollection } from 'astro:content'; import { SITE, sortPosts } from '../site';
export async function GET(context) {
  const posts = sortPosts(await getCollection('posts'));
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return rss({ title: SITE.name, description: SITE.tagline, site: context.site + base.slice(1) + '/',
    items: posts.map(p => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `${base}/posts/${p.id}/`, categories: [p.data.category, ...p.data.tags] })) });
}
