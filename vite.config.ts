import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// vite.config.ts
export default defineConfig({
  base: '/', // 👈 must match your repo name
  plugins: [react()],
})
