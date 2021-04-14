<template>
    <h1 class="logo-wrapper">
        <router-link id="logo" to="/"> <img alt="logo" :src="src" />Rabbit UI </router-link>
    </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        src: String
    }
});
</script>
