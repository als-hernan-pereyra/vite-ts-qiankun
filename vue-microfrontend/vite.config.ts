// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/VueApp.vue',
      name: 'VueApp',
      fileName: 'vueApp',
    },
    rollupOptions: {
      output: {
        format: 'system',
        entryFileNames: 'vueApp.js',
      },
    },
  },
});
