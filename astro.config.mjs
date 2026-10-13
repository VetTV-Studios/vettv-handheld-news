import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// GitHub Pages project site: https://vettv-studios.github.io/vettv-handheld-news/
// If a custom domain is added later, set site to it and base to '/'.
export default defineConfig({
  site: 'https://vettv-studios.github.io',
  base: '/vettv-handheld-news',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
