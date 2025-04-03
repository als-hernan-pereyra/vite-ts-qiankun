// import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Configura el puerto que deseas
    open: true,  // Esto abrirá automáticamente el navegador al iniciar el servidor
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
        entryFileNames: 'reactApp.js', // Nombre del archivo de salida
      },
    },
  },
});
