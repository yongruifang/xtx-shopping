<script setup>
import layoutNav from './components/layoutNav.vue'
import layoutHeader from './components/layoutHeader.vue'
import layoutFooter from './components/layoutFooter.vue'
import layoutSticky from './components/layoutSticky.vue'
</script>

<template>
    <layoutSticky />
    <layoutNav />
    <layoutHeader />
    <RouterView />
    <layoutFooter />
</template>