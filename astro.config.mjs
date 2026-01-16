// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

import pdf from 'astro-pdf';

const generatePdf = process?.argv?.includes('--pdf');

// https://astro.build/config
export default defineConfig({
  site: 'https://astro.surgingforward.net',
  integrations: [mdx(), sitemap(), tailwind(), generatePdf && pdf({
    pages: {
      '/resume': [{
        path: 'build-artifacts/resume.pdf',
        pdf: {
          margin: {
            top: 20
          }
        },
        throwOnFail: true,
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