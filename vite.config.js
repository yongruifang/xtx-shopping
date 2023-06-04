import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// element-plus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),    
  ],
  resolve: {
    // 实际的路径转换工作是由 Node.js 的 fileURLToPath 函数完成的
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
