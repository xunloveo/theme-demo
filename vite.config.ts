import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { join } from 'path'

function resolve(dir) {
  return join(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/theme-demo',
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: name => {
            name = name.slice(3)
            return `element-plus/packages/theme-chalk/src/${name}.scss`
          },
          resolveComponent: name => {
            return `element-plus/lib/${name}`
          },
        },
      ],
    }),
  ],
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@important "@/styles/index.scss";`,
    //   },
    // },
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  build: {
    // sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          'element-plus': ['element-plus'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
})
