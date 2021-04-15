<template>
    <Header />
    <Home v-if="!show" />
    <Detail v-if="show" :docs="showDocsOpts" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Header from 'comps/header/Index.vue';
import Detail from 'pages/detail/Index.vue';
import Home from 'pages/home/Index.vue';

const route = useRoute();
const reg = /(docs\/|components\/)/;
const isDocs = /docs\//;

const show = ref(false);
const showDocsOpts = ref(false);

watchEffect(() => {
    reg.test(route.path) ? (show.value = true) : (show.value = false);
    isDocs.test(route.path) ? (showDocsOpts.value = true) : (showDocsOpts.value = false);
});
</script>
