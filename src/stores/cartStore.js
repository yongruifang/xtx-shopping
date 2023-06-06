// 封装购物车模块
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useUserStore } from './user'
import {insertCartAPI, findNewCartListAPI, delCartAPI} from '@/apis/cart.js'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 定义state
    const cartList = ref([])
    // 定义action
    const addCart = async(goods) => {
        const { skuId, count } = goods
        if (isLogin) {
            // 登录之后的加入购物车逻辑   
            await insertCartAPI({ skuId, count })
            // 获取最新的购物车列表
            const res = await findNewCartListAPI()
            cartList.value = res.result
        } else {
            //购物车已有，数量加1
            //购物车没有，添加到购物车
            const item = cartList.value.find((item) =>  goods.skuId === item.skuId )
            if (item) {
                console.log('购物车已有，数量加1')
                item.count += goods.count    
            } else {
                console.log('购物车没有，添加到购物车')
                cartList.value.push(goods)
            }            
        }
    }
    const delCart = async (skuId) => {
        if (isLogin) {
            await delCartAPI([skuId])
            // 获取最新的购物车列表
            const res = await findNewCartListAPI()
            cartList.value = res.result
        } else {
            const index = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(index, 1)     
        }

    }
    // 单选功能
    const singleCheck = (skuId, selected) => {
        // 通过skuId找到对应的商品， 然后把它的selected属性修改
        const item = cartList.value.find((item) => skuId === item.skuId)
        item.selected = selected
    }
    // 全选功能
    const checkAll = (selected) => { 
        cartList.value.forEach((item) => (item.selected = selected))
    }
    // 统计购物车商品count之和
    const total = computed(() => cartList.value.reduce((prev, cur) => prev + cur.count, 0))
    // 统计购物车商品总价
    const totalPrice = computed(() => cartList.value.reduce((prev, cur) => prev + cur.count * cur.price, 0))
    // 是否全选
    const isCheckAll = computed(() => cartList.value.every((item) => item.selected))
    // 统计选中商品的数量
    const selectedTotal = computed(() => cartList.value.filter((item) => item.selected).reduce((prev, cur) => prev + cur.count, 0))
    // 统计选中商品的总价
    const selectedTotalPrice = computed(() => cartList.value.filter((item) => item.selected).reduce((prev, cur) => prev + cur.count * cur.price, 0))
    return {
        cartList,
        total,
        totalPrice,
        addCart,
        delCart,
        singleCheck,
        checkAll,
        isCheckAll,
        selectedTotal,
        selectedTotalPrice
    }
}, {
    persist: true,
});