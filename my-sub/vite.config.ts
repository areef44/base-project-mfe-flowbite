import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 5001
  },
  server: {
    port: 5001
  },
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'my_sub',
      filename: 'remoteEntry.js',
      exposes: {
        './ProfilePage': './src/pages/profile.vue', // Example of exposing a component
        './IndexPage': './src/pages/index.vue', // Example of exposing a component
      },
      shared: require("./package.json").dependencies,
    }),
  ],
  optimizeDeps:{
    include: ['vue', 'vue-router', 'flowbite', 'tailwindcss'], 
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
})
