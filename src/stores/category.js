import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([])
    // actions 获取导航列表数据
    const getCategory = async () => {
        const res = await getCategoryAPI()
        console.log(res)
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }
})
