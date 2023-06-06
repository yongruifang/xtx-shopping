// 封装购物车模块
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // 定义state
    const cartList = ref([])
    // 定义action
    const addCart = (goods) => {
        //购物车已有，数量加1
        //购物车没有，添加到购物车
        const item = cartList.value.find((item) =>  goods.skuId === item.skuId )
        if (item) {
            console.log('购物车已有，数量加1')
            item.count += goods.count;
        } else {
            console.log('购物车没有，添加到购物车')
            cartList.value.push(goods)
        }
    }
    const delCart = (skuId) => {
        const index = cartList.value.findIndex((item) => skuId === item.skuId)
        if (index > -1) {
            cartList.value.splice(index, 1)
        }
    }
    return {
        cartList,
        addCart,
        delCart
    }
}, {
    persist: true,
});