import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Configura el puerto que deseas
    open: true,  // Esto abrirá automáticamente el navegador al iniciar el servidor
  },
})
