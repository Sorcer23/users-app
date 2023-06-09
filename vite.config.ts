import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

const config = ({ mode }) =>
  defineConfig({
    server: {
      port: 8000,
    },
    resolve: {
      alias: {
        src: resolve(__dirname, 'src'),
      },
    },
    plugins: [react(), eslint()],
    optimizeDeps: {
      esbuildOptions: {
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis',
        },
      },
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: mode === 'production' ? '[hash:base64:5]' : '[name]_[local]_[hash:base64:5]',
      },
    },
  });

export default config;
