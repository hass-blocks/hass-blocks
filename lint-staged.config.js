const path = require('path');

/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx,json,css,md,html,mts,mjs,cts,cjs}': ['prettier --write'],
  '*.{js,jsx,ts,tsx,mts,mjs,cts,cjs}': [
    'vitest related',
    (paths) => {
      try {
        const cwd = process.cwd();
        const relativePaths = paths.map((file) => path.relative(cwd, file));
        console.log('end');
        return `npx nx affected --targets rollup-api --files ${relativePaths.join(' ')}`;
      } catch (error) {
        console.log(error);
      }
    },
  ],
};

module.exports = config;
