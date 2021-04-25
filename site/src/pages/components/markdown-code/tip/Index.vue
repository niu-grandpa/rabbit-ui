<template>
    <div class="markdown-code">
        <div class="code-write">
            <blockquote>
                <p>
                    <span>注意！在使用之前需要先实例化： </span
                    ><code>new Rabbit.{{ props.name }}()</code>， 如果为 NPM
                    环境则不需要添加全局变量 Rabbit
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