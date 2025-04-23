import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hass-blocks.com',
  prefetch: {
    prefetchAll: true,
  },
});
