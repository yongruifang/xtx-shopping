<script setup>
import layoutNav from './components/layoutNav.vue'
import layoutHeader from './components/layoutHeader.vue'
import layoutFooter from './components/layoutFooter.vue'
</script>

<template>
    <layoutNav />
    <layoutHeader />
    <RouterView />
    <layoutFooter />
</template>