import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// element-plus按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
//引入Unocss
import Unocss from 'unocss/vite';
import {presetUno, presetAttributify, presetIcons} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({importStyle: "sass"})],
    }),    
    //使用Unocss
    Unocss({
        presets: [
            presetUno(),
            presetAttributify(),
            presetIcons()],
    }),
  ],
  resolve: {
    // 实际的路径转换工作是由 Node.js 的 fileURLToPath 函数完成的
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入scss文件
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `, 
      }
    }
  }
})
