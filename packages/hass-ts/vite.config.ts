import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/hass-ts',
  plugins: [tsconfigPaths()],
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/lib/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      thresholds: {
        lines: 100,
        functions: 100,
        statements: 100,
        branches: 100,
      },
      include: ['src/lib/**/*.ts'],
      exclude: [
        '**/index.ts',
        '**/types/**/*.ts',
        '**/websocket-client/messages/**/*.ts',
        '**/websocket-message.ts',
      ],
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
