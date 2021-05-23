<template>
  <article class="markdown">
    <h1>Color 色彩</h1>
    <h2>概述</h2>
    <p>
      Rabbit UI
      推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。
    </p>
    <h3>主色</h3>
    <p>
      Rabbit UI 使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark
      Primary 常用于 active。
    </p>
    <ColorCard :span="8" :colors="mainColors" />
    <h3>辅助色</h3>
    <p>辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。</p>
    <ColorCard :span="6" :colors="auxiliaryColors" />
    <h3>中性色</h3>
    <p>中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。</p>
    <ColorCard :span="6" :colors="neutralColors" />
  </article>
</template>

<script lang="ts" setup>
import { ColorCard } from "../../../components";

interface Color {
  name: string;
  desc: string;
  dark?: boolean;
}

const mainColors: Color[] = [
  {
    name: "Primary",
    desc: "#1890ff",
  },
  {
    name: "Light Primary",
    desc: "#5cadff",
  },
  {
    name: "Dark Primary",
    desc: "#2b85e4",
  },
];
const auxiliaryColors: Color[] = [
  {
    name: "Info",
    desc: "#2db7f5",
  },
  {
    name: "Success",
    desc: "#52c41a",
  },
  {
    name: "Warning",
    desc: "#faad14",
  },
  {
    name: "Error",
    desc: "#ff4d4f",
  },
];
const neutralColors: Color[] = [
  {
    name: "标题 Title",
    desc: "#2c3e50",
  },
  {
    name: "正文 Content",
    desc: "#55585e",
  },
  {
    name: "辅助/图标 Sub Color",
    desc: "#808695",
  },
  {
    name: "失效 Disabled",
    desc: "#c5c8ce",
  },
  {
    name: "边框 Border",
    desc: "#dcdee2",
    dark: true,
  },
  {
    name: "分割线 Divider",
    desc: "#e8eaec",
    dark: true,
  },
  {
    name: "背景 Background",
    desc: "#fafafa",
    dark: true,
  },
];
</script>
