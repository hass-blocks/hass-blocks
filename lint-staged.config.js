const { relative } = require('node:path');
const { __disposeResources } = require('tslib');

/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*': () => `pnpm install --lockfile-only`,
  '*.{js,jsx,ts,tsx,json,css,md,html,mts,mjs,cts,cjs,astro}': [
    'prettier --write',
    (files) => {
      const theFiles = files.map((file) => relative(__dirname, file));
      return `nx affected --target lint --files ${theFiles.join(',')}`;
    },
  ],
};

module.exports = config;
