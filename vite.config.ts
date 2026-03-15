import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'WebLib',
      fileName: (format) => `wc-lib.${format}.js`
    },
    rollupOptions: {
      external: [/^lit/],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name || 'style.css';
        },
        globals: {
          'lit': 'lit',
          'lit/decorators.js': 'litDecorators'
        }
      }
    }
  }
});
