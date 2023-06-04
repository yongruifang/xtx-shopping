import { useIntersectionObserver } from '@vueuse/core'
//定义懒加载插件
export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑
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
    }
}