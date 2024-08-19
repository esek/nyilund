import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { locales, DEFAULT_LOCALE } from "./src/lib/localization";

const otherLocales = Object.values(locales).reduce(
  (acc, curr) => ({
    ...acc,
    [curr.key]: curr.key,
  }),
  {}
);

export default defineConfig({
  site: process.env.DEPLOY_URL
    ? `https://${process.env.DEPLOY_URL}`
    : "http://localhost:3000",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: otherLocales,
      },
    }),
    tailwind(),
    robotsTxt(),
  ],
});
