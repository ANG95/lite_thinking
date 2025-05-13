import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Esto asegura que Vite busque en la raíz del proyecto
  build: {
    outDir: 'dist', // Esta es la carpeta donde se construirá el proyecto
  },
  server: {
    port: 5173,
    open: true,
  },
});
