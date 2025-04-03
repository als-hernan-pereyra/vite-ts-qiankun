// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3002, // Configura el puerto que deseas
    open: true,  // Esto abrirá automáticamente el navegador al iniciar el servidor
  },
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
