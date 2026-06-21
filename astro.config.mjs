import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Zeshanxviii.github.io',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'zh'],
    // hi, ur, ar temporarily disabled
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
