import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: process.env.DEPLOY_URL
    ? `https://${process.env.DEPLOY_URL}`
    : 'http://localhost:3000',
  integrations: [sitemap(), image(), tailwind()],
});
