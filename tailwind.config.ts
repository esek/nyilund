import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ['"E-Sek Font"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          black: "#222222",
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
