// 把@/src/components中的组件都进行全局注册
import imageView from './imageView/index.vue'
import sku from './xtxSku/index.vue'
export const componentPlugin = {
    install(app) {
        app.component('XtxImageView', imageView)
        app.component('XtxSku', sku)
    }
}

