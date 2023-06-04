/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
import httpInstance from '@/utils/http'
export function getBannerAPI() {
    return httpInstance({
        url: 'home/banner'
    })
}
export function getNewAPI() {
    return httpInstance({
        url: 'home/new'
    })
}
export function getHotAPI() {
    return httpInstance({
        url: 'home/hot'
    })
}
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}