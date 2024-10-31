import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        }
      ],
    })
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: './index.html',
        content: './src/scripts/content.ts',
      },
      // preserveEntrySignatures: 'strict',
      // output: {
      //   entryFileNames: '[name].js',
      //   chunkFileNames: '[name].js',
      //   assetFileNames: '[name].[ext]',
      //   // preserveModules: true,
      //   dir: 'build/assets',
      // },
    },
  },
})
