<template>
    <Header />
    <Home v-if="!homePage" />
    <Detail v-else />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Header from 'comps/header/Index.vue';
import Detail from 'pages/detail/Index.vue';
import Home from 'pages/home/Index.vue';

const route = useRoute();
const reg = /(docs\/|components\/)/;
const homePage = ref(false);

watchEffect(() => (reg.test(route.path) ? (homePage.value = true) : (homePage.value = false)));
</script>
