import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: [
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
      { find: '@', replacement: path.resolve(__dirname, '/src') },
    ],
  },
});
