import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 实际的路径转换工作是由 Node.js 的 fileURLToPath 函数完成的
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
