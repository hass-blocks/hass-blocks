/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx,json,css,md,html,mts,mjs,cts,cjs}': ['prettier --write'],
  '*.{jsx,ts,tsx}': ['vitest related'],
  '*.{jsx,ts,tsx}': ['tsc-files --noEmit'],
};

module.exports = config;
