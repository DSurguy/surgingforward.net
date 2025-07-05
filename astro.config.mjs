// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

import pdf from 'astro-pdf';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.surgingforward.net',
  integrations: [mdx(), sitemap(), tailwind(), pdf({
    pages: {
      '/resume': [{
        path: 'resume.pdf',
        pdf: {
          margin: {
            top: 20
          }
        }
      }]
    }
  })],
  outDir: './dist',
  cacheDir: './cache',
  prefetch: true,
  adapter: vercel(),
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