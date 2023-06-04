// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入Uno.css
import 'uno.css'

import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) { 
        //el: 指令所绑定的元素，可以用来直接操作 DOM 。
        //binding: 一个对象
        console.log(el, binding.value)
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => { 
                console.log(isIntersecting)
                if (isIntersecting) { 
                    el.src = binding.value
                }
            }
        )
    }
})
