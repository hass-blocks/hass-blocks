import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/homeassistant-typescript',
  plugins: [],
  test: {
    watch: false,
    globals: true,
    globalSetup: "src/test-support/e2e-global-setup.ts",
    setupFiles: "src/test-support/setup-post-release-mock.ts",
    include: ["./src/e2e-tests/*.spec.ts"],
    environment: 'node',
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
