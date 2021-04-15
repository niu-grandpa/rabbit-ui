<template>
    <Header :logo="Logo" />
    <Slider v-if="show" :docs="showDocsOpts" />
    <Home v-if="!show" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import Logo from 'assets/logo.svg';
import Slider from 'pages/common/Sider.vue';
import Header from 'comps/Header.vue';
import Home from 'pages/Home/Index.vue';

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
