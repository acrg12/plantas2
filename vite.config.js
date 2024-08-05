import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  server: {
    host: 'localhost',
    port: 5173,
    proxy: {
      '/datasnap/rest': {
        target: 'https://5d8d-181-204-95-202.ngrok-free.app',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/datasnap\/rest/, '/datasnap/rest'),
      },
    },
  },
  build: {
    sourcemap: true, // Habilitar mapas de origen para la construcción
  },
});

