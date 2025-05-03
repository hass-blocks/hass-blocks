/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*': () => `pnpm install --lockfile-only`,
  '*.{js,jsx,ts,tsx,json,css,md,html,mts,mjs,cts,cjs,astro}': [
    'prettier --write',
  ],
};

module.exports = config;
