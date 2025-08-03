import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/** 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
*/

/** */
export default defineConfig({
  base: '/', // 👈 MUST match your repo name
  plugins: [react()],
})
