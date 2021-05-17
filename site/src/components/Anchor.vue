<template>
  <a-anchor wrapperClass="toc-affix" showInkInFixed :affix="false">
    <a-anchor-link v-for="link in linkList" :href="'#' + link" :title="link" :key="link" />
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
  top: 100px;
  right: -90px;
  width: 213px;

  .ant-anchor {
    font-size: 12px;
    max-width: 110px;

    &-link {
      padding-right: 16px;
      &-title {
        color: #55585e;
      }
    }
  }
}
</style>