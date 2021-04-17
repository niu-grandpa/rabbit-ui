<template>
    <div class="anchor">
        <h2 :id="props.title">{{ props.title }}</h2>
        <a :href="'#' + props.title">#</a>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        require: true
    }
});
</script>
