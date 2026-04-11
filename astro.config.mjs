// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const env = loadEnv('', '.', '');

export default defineConfig({
  site: env.PUBLIC_SITE_URL || 'https://example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
