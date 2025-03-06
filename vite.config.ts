import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 1776,
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
});
