<template>
  <a-anchor wrapperClass="toc-affix" showInkInFixed :affix="false">
    <a-anchor-link
      v-for="link in props.linkList"
      :href="link.href"
      :title="link.title"
      :key="link.title"
    />
  </a-anchor>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  linkList: {
    type: Array,
    require: true
  }
})
</script>

<style lang="less" scope>
.toc-affix {
  position: fixed;
  z-index: 10;
  top: 90px;
  right: -50px;
  width: 213px;

  .ant-anchor {
    font-size: 12px;
    max-width: 110px;

    &-link {
      padding-right: 16px;
    }
  }
}
</style>