<script setup>
import homeBanner from './components/homeBanner.vue'
import homeCategory from './components/homeCategory.vue'
import homeHot from './components/homeHot.vue'
import homeNew from './components/homeNew.vue'
import homeProduct from './components/homeProduct.vue'
</script>
<template>
    <div class="container">
        <homeCategory />
        <homeBanner />      
    </div>
    <homeHot />
    <homeNew />
    <homeProduct />
</template>