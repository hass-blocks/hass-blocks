/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx,json,css,md,html}': ['prettier --write'],
  '*.{jsx,ts,tsx}': ['vitest related'],
};

module.exports = config;
