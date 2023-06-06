// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入Uno.css
import 'uno.css'

// 引入懒加载插件并且注册
import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) //注册持久化插件
app.use(pinia)
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')
