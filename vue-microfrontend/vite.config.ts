// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Mock process to avoid issues when using process.env or similar
    'process.env': {},
  },
  plugins: [vue()],
  server: {
    port: 3002, // Configura el puerto que deseas
    open: true,  // Esto abrirá automáticamente el navegador al iniciar el servidor
    //cors: true,
    // cors: {
    //   origin: 'http://localhost:3000', // Allow only requests from your shell app
    //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //   allowedHeaders: ['Content-Type', 'Authorization'],
    // },
    cors: {
      origin: 'http://localhost:3000', // Allow requests from the shell app
      methods: ['GET', 'POST'],
    },
    proxy: {
      '/': {
        target: 'http://localhost:3002',  // Replace with your micro-frontend server URL
        changeOrigin: true,
        secure: false, // If using HTTPS, set to true
      },
    },
  },
  base: '/',
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
