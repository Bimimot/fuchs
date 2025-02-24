/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    vue(),
    tsconfigPaths(),
    svgLoader({
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  base: '',
  server: {
    origin: 'http://localhost:7000',
    port: 7000,
    watch: {
      usePolling: true,
    },
    open: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: '.',
    rollupOptions: {
      input: {
        main: './src/main.ts',
      },
      output: {
        entryFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: 'vitest-setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
