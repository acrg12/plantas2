import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Integración de React
    legacy({
      targets: ['defaults', 'not IE 11'] // Soporte para navegadores antiguos
    })
  ],
  server: {
    host: 'localhost', // Cambiado a localhost
    port: 5173 // Puerto que desees utilizar
  }
});

