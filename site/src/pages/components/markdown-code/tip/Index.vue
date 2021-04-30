<template>
    <div class="markdown-code">
        <div class="code-write">
            <blockquote>
                <p v-if="!props.isMethods">
                    <span>提示：在使用之前需要先实例化： </span>
                    <code>new Rabbit.{{ props.name }}()</code>， 如果为 NPM 环境则不需要添加全局变量
                    Rabbit
                </p>
                <p v-else>
                    <span>提示：使用时直接调用 </span>
                    <code>Rabbit.{{ props.name }}</code> 的实例方法， 如果为 NPM
                    环境则不需要添加全局变量 Rabbit
                </p>
            </blockquote>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    isMethods: Boolean
});
</script>