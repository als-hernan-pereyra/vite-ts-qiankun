// import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [svelte()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: './src/SvelteApp.svelte',
      name: 'SvelteApp',
      fileName: 'svelteApp',
    },
    rollupOptions: {
      output: {
        format: 'system',
        entryFileNames: 'svelteApp.js',
      },
    },
  },
});
