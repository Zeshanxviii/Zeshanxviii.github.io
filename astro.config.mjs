import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Zeshanxviii.github.io',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'hi', 'ur', 'ar', 'ja', 'zh'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
