import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/hass-ts',
  plugins: [],
  test: {
    watch: false,
    globals: true,
    globalSetup: 'src/test-support/e2e-global-setup.ts',
    include: ['./src/e2e-tests/*.spec.ts'],
    environment: 'node',
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
