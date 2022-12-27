import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [sitemap(), image(), tailwind()],
});
