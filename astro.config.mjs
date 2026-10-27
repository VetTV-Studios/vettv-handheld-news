import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// GitHub Pages project site: https://vettv-studios.github.io/vettv-handheld-news/
// If a custom domain is added later, set site to it and base to '/'.
export default defineConfig({
  site: 'https://vettv-studios.github.io',
  base: '/vettv-handheld-news',
  trailingSlash: 'always',
  // Renamed/merged section slugs keep working (Oct 2026 redesign). /guides/ and /reviews/ are real type pages.
  redirects: {
    '/retro-emulation-cloud': '/vettv-handheld-news/gaming/',
    '/steamos-news': '/vettv-handheld-news/linux-steamos/',
    '/decky-plugins': '/vettv-handheld-news/tags/decky-loader/',
    '/reactos-open-nt': '/vettv-handheld-news/open-nt/',
    '/cloud-gaming': '/vettv-handheld-news/gaming/',
    '/retro-emulation': '/vettv-handheld-news/gaming/',
    '/steam-deals': '/vettv-handheld-news/deals/',
    '/project-updates': '/vettv-handheld-news/projects/',
  },
  integrations: [sitemap({ filter: (page) => !/\/(contact|privacy|terms|affiliate-disclosure|content-disclosure|retro-emulation-cloud|steamos-news|decky-plugins|reactos-open-nt|cloud-gaming|retro-emulation|steam-deals|project-updates)\/$/.test(page) })],
});
