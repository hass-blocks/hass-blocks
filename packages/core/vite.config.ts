import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/blocks',
  plugins: [tsconfigPaths()],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: ['src/test-support/matcher.ts'],
    reporters: ['default'],
    coverage: {
      include: ['src/**/*.ts'],
      exclude: [
        '**/index.ts',
        'src/test-support/**/*',
        'src/tests/**/*',
        'src/**/*test-d.ts',
        'src/types/**/*.ts',
        'src/utils/prettify.ts',
        'src/utils/remove-undefined.ts',
        'src/sequence-validator/**/*.ts',
        'src/building-blocks/get-results.ts',
        'src/building-blocks/resolve-to-anything-if-compatible.ts',
      ],
      thresholds: {
        autoUpdate: true,
        statements: 98.83,
        branches: 95.8,
        functions: 100,
        lines: 98.83,
      },
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
