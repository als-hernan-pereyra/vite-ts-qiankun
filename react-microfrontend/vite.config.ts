// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Mock process to avoid issues when using process.env or similar
    'process.env': {},
  },
  plugins: [react()],
  server: {
    port: 3001, // Configura el puerto que deseas
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
        target: 'http://localhost:3001',  // Replace with your micro-frontend server URL
        changeOrigin: true,
        secure: false, // If using HTTPS, set to true
      },
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/main.tsx', // Punto de entrada de tu aplicación
      name: 'ReactApp',         // Nombre del micro-frontend
      fileName: 'reactApp',     // Nombre del archivo generado
    },
    rollupOptions: {
      input: 'index.html',
      output: {
        format: 'system',        // Especifica el formato compatible con Qiankun
        entryFileNames: 'dist/reactApp.js', // Nombre del archivo de salida
      },
    },
  },
});
