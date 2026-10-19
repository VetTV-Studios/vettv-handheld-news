import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// GitHub Pages project site: https://vettv-studios.github.io/vettv-handheld-news/
// If a custom domain is added later, set site to it and base to '/'.
export default defineConfig({
  site: 'https://vettv-studios.github.io',
  base: '/vettv-handheld-news',
  trailingSlash: 'always',
  // Old section slug (renamed Oct 19, 2026) keeps working.
  redirects: { '/retro-emulation-cloud': '/vettv-handheld-news/retro-emulation/' },
  integrations: [sitemap({ filter: (page) => !page.includes('/retro-emulation-cloud') })],
});
