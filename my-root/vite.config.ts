import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'my_root',
      remotes: {
        subApp: 'http://localhost:5001/assets/remoteEntry.js',
        // subApp: 'subApp@http://localhost:5001/assets/remoteEntry.js'
      },
      shared: require("./package.json").dependencies,
    }),
  ],
  build: {
    target: 'esnext',
  },
  optimizeDeps:{
    include: ['vue', 'vue-router','flowbite','tailwindcss'], 
  },
})
