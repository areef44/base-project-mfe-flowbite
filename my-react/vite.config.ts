import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 5002,
  },
  server: {
    port: 5002,
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'sub_app_react',
      exposes: {
        './ReactIndex': './src/pages/index.tsx'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  optimizeDeps:{
    include: ['react','react-dom,','flowbite', 'tailwindcss'], 
  },
})
