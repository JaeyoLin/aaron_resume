import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/aaron_resume/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, 'src/Assets'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Routes': path.resolve(__dirname, 'src/Routes'),
      '@Utils': path.resolve(__dirname, 'src/Utils'),
    },
  },
});
