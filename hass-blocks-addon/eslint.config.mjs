import nx from '@nx/eslint-plugin';
import baseConfig from '../eslint.config.mjs';

export default [
  {
    ignores: ['./types/**/*'],
  },
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/blocks-codegen/**'],
    rules: {
      'no-var': 'off',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
