// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://surgingforward.net',
  integrations: [mdx(), react(), sitemap(), tailwind()],
  outDir: './dist',
  cacheDir: './cache',

  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: 3000
  }
});