// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import 'dotenv/config';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    envPrefix: 'RESEND_',
    plugins: [tailwindcss()]
  },

  site: 'https://jissenglobal.com',
  integrations: [sitemap()],
  output: 'server',
  adapter: vercel()
});