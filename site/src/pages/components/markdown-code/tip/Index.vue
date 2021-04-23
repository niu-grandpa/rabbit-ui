<template>
    <div class="markdown-code">
        <div class="code-write">
            <blockquote>
                <p>
                    <span>注意！在使用之前需要先实例化： </span
                    ><code>new Rabbit.{{ props.name }}()</code>
                </p>
            </blockquote>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String
});
</script>