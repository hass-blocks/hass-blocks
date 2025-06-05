/// <reference types='vitest' />
import { defineConfig, type Plugin } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import commonjs from 'vite-plugin-commonjs';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nxCopyAssetsPlugin } from '@nx/vite/plugins/nx-copy-assets.plugin';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

function remixBrowserPolyfill(alias: Record<string, string>) {
  return {
    name: 'remix-browser-polyfill',
    enforce: 'pre',
    async resolveId(source, importer, options) {
      if (options.ssr || importer?.endsWith('index.html')) return null;
      if (source in alias) {
        const resolution = await this.resolve(alias[source]!, importer, {
          skipSelf: true,
        });
        if (!resolution) {
          throw new Error(`Could not resolve ${alias[source]} module`);
        }
        return resolution.id;
      }
      return null;
    },
  } satisfies Plugin;
}

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/blocks-frontend',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    !process.env['VITEST'] && reactRouter(),
    nxViteTsPaths(),
    tsconfigPaths(),
    nxCopyAssetsPlugin(['*.md']),
    remixBrowserPolyfill({
      path: 'http-browserify',
    }),
    remixBrowserPolyfill({
      path: 'buffer-browserify',
    }),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: '../../dist/apps/blocks-frontend',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: '../../coverage/apps/blocks-frontend',
      provider: 'v8' as const,
    },
  },
}));
