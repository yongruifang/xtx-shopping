import { ref, computed } from 'vue'
import dayjs from 'dayjs'

// 封装倒计时的逻辑函数
export const useCountDown = () => {
    //1. 响应式的数据
    const time = ref(0)
    // 格式化时间 xx分xx秒
    const formatTime = computed(() => {
        return dayjs.unix(time.value).format('mm分ss秒')
    })
    //2. 开启倒计时的函数
    const start = (currentTime) => {
        //开始倒计时的逻辑
        // 核心： 每隔一秒钟，减1
        time.value = currentTime
        setInterval(() => {
            time.value--
        },1000)
    }
    return {
        formatTime,
        start
    }
}