import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: process.env.DEPLOY_URL
    ? `https://${process.env.DEPLOY_URL}`
    : 'http://localhost:3000',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sv',
        locales: {
          en: 'en',
          sv: 'sv',
        },
      },
    }),
    image(),
    tailwind(),
    robotsTxt(),
  ],
});
