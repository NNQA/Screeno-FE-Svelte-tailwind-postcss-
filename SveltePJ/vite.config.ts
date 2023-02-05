import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import t from'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
})
