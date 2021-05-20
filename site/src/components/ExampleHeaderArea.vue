<template>
  <h1>{{ props.name }} {{ props.title }}</h1>
  <p>{{ desc }}</p>
  <blockquote v-if="props.showTip">
    特别提醒：使用前需要先初始化组件 <code>new Rabbit.{{ props.name }}()</code>，如果为 NPM
    环境则无需添加 <code>Rabbit</code> 前缀
  </blockquote>
  <template v-if="props.showWhenToUse">
    <h2>何时使用</h2>
    <ul>
      <slot />
    </ul>
  </template>
  <h2>代码示例</h2>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

interface Props {
  name: string
  title: string
  desc: string
}

const props: Readonly<Props> = defineProps({
  name: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  desc: {
    type: String,
    require: true
  },
  showWhenToUse: {
    type: Boolean,
    default: true
  },
  showTip: {
    type: Boolean,
    default: true
  }
})
</script>