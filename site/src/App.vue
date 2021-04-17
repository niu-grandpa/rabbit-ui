<template>
    <Header />
    <Home v-if="!homePage" />
    <Detail v-else />
    <r-back-top></r-back-top>
</template>

<script lang="ts" setup>
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Header from 'comps/header/Index.vue';
import Detail from 'pages/detail/Index.vue';
import Home from 'pages/home/Index.vue';
import BackTop from 'rabbitSrc/components/back-top';

const route = useRoute();
const reg = /(docs\/|components\/)/;
const homePage = ref(false);

onMounted(() => {
    new BackTop();
});

watchEffect(() => (reg.test(route.path) ? (homePage.value = true) : (homePage.value = false)));
</script>
