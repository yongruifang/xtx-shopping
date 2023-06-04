<script setup>
</script>

<template>
<!-- 一级路由出口组件 -->
<RouterView />
<div class="test">
    test scss
</div>
<button bg-red w-100 ml-10 m-1>
    我是个按钮
</button>
</template>

<style scoped lang="scss">
.test {
    color: $priceColor;
}
</style>