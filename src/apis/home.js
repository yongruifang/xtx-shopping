/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
import httpInstance from '@/utils/http'
export function getBannerAPI(params = {}) {
    // 默认
    const {distributionSite = '1'} = params
    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite
        }
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