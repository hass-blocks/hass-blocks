import { defineConfig } from 'vite';

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/hass-mqtt',
  plugins: [],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  test: {
    watch: false,
    globals: true,
    environment: 'node',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
      include: ['src/lib/**/*.ts'],
      exclude: [
        '**/index.ts',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/*.test.d.ts',
        '**/*.spec.d.ts',
        '**/src/lib/types/**',
        '**/node_modules/**',
        '**/dist/**',
        'eslint.config.mjs',
        'vite.config.ts',
        '**/src/lib/devices/specific-mqtt-device-config.ts',
      ],
      thresholds: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
  },
}));
