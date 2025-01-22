import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CryptoX/', // Укажите базовый путь
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

