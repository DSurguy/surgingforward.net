// @ts-check
import { defineConfig, envField } from 'astro/config';
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
  prefetch: true,
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    port: 3000
  },
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({ context: "server", access: "secret" })
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});