<template>
  <a-row style="margin-left: -8px; margin-right: -8px">
    <a-col
      :span="props.span"
      v-for="item in colors"
      :key="item.name"
      style="padding-left: 8px; padding-right: 8px"
    >
      <a-card :style="'background:' + item.desc" size="small">
        <div :class="['demo-color-name', item.dark ? 'dark' : '']">{{ item.name }}</div>
        <div :class="['demo-color-desc', item.dark ? 'dark' : '']">{{ item.desc }}</div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  span: number;
  colors: {
    name: string;
    desc: string;
  }[];
}

const props: Readonly<Props> = defineProps({
  span: Number,
  colors: Object,
});
</script>

<style lang="less" scoped>
.ant-card {
  margin-bottom: 12px;
  &:hover {
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
    border-color: #eee;
  }
}

.demo-color {
  &-name {
    color: #fff;
    font-size: 16px;
    &.dark {
      color: #657180;
    }
  }
  &-desc {
    color: #fff;
    opacity: 0.7;
    &.dark {
      color: #657180;
    }
  }
}
</style>
