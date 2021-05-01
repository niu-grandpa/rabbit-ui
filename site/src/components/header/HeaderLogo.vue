<template>
    <h1 class="logo-wrapper">
        <router-link id="logo" to="/"> <img alt="logo" :src="Logo" /> Rabbit UI </router-link>
    </h1>
</template>

<script lang="ts" setup>
import Logo from '../../assets/logo.svg';
</script>
