<template>
    <Header :logo="Logo" />
    <router-view></router-view>
    <Footer />
</template>

<script lang="ts" setup>
import Logo from 'assets/logo.svg';
import Header from 'comps/Header.vue';
import Footer from 'comps/Footer.vue';
</script>
