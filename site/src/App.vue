<template>
    <div>
        <Header :logo="logo" />
        <router-view></router-view>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Logo from 'assets/logo.svg';
import Header from 'comps/Header.vue';

const logo = ref(Logo);
</script>
