import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://Ashukla-portfolio.github.io',
  base: '/portfolio-a3',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});