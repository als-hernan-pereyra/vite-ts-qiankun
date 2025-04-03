import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite';

// export default defineConfig({
//   define: {
//     // Mock process to avoid issues when using process.env or similar
//     'process.env': {},
//   },
//   plugins: [vue()],
//   server: {
//     port: 3002, // Configura el puerto que deseas
//     open: true,  // Esto abrirá automáticamente el navegador al iniciar el servidor
//     cors: true,
//     // cors: {
//     //   origin: 'http://localhost:3000', // Allow only requests from your shell app
//     //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     //   allowedHeaders: ['Content-Type', 'Authorization'],
//     // },
//     // cors: {
//     //   origin: 'http://localhost:3000', // Allow requests from the shell app
//     //   methods: ['GET', 'POST'],
//     // },
//     // proxy: {
//     //   '/': {
//     //     target: 'http://localhost:3002',  // Replace with your micro-frontend server URL
//     //     changeOrigin: true,
//     //     secure: false, // If using HTTPS, set to true
//     //   },
//     // },
//   },
//   base: '/',
//   build: {
//     outDir: 'dist',
//     lib: {
//       entry: './src/main.ts',
//       //entry: './src/VueApp.vue',
//       name: 'VueApp',
//       fileName: 'vueApp',
//     },
//     rollupOptions: {
//       output: {
//         format: 'system',
//         //entryFileNames: '/index.html',
//         entryFileNames: 'vueApp.js',
//       },
//     },
//   },
// });

export default defineConfig({
  plugins: [vue()],
  base: '/',  // Make sure base is set correctly, depending on where you deploy
  build: {
    target: 'esnext',  // Use esnext for modern browsers
    rollupOptions: {
      output: {
        format: 'system',  // This is crucial to make it compatible with Qiankun
        name: 'vueApp',    // Name to expose the Vue app globally
        globals: {
          vue: 'Vue',  // Global Vue variable if using external CDN for Vue
        },
      },
    },
  },
});
