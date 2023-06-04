<script setup>
import homeBanner from './components/homeBanner.vue'
import homeCategory from './components/homeCategory.vue'
import homeHot from './components/homeHot.vue'
import homeNew from './components/homeNew.vue'
import homeProduct from './components/homeProduct.vue'
import homePanel from './components/homePanel.vue'
</script>
<template>
    <div class="container">
        <homeCategory />
        <homeBanner />      
    </div>
    <homeHot />
    <homeNew />
    <homeProduct />
    <homePanel title="新鲜好物" subTitle="新品上市 好多商品" >
        <div>
            我是新鲜好物的插槽内容
        </div>
    </homePanel>
    <homePanel title="人气推荐" subTitle="人气推荐 好多商品">
        <div>
            我是人气推荐的插槽内容
        </div>        
    </homePanel>
</template>