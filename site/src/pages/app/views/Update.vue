<template>
  <article class="markdown">
    <h1>更新日志</h1>
    <p>
      <code>rabbit-simple-ui</code> 严格遵循
      <a href="http://semver.org/lang/zh-CN/" rel="nofollow">Semantic Versioning 2.0.0</a>
      语义化版本规范。
    </p>
    <h3>发布周期</h3>
    <ul>
      <li>修订版本号：日常 bugfix 更新</li>
      <li>次版本号：带有新特性的向下兼容的版本。</li>
      <li>主版本号：含有破坏性更新和新特性，不在发布周期内。</li>
    </ul>
    <div class="update-wrapper">
      <r-timeline>
        <r-timeline-item v-for="item in updateInfo" :key="item.version">
          <div class="version">{{ item.version }}</div>
          <p class="time">
            <code>{{ item.time }}</code>
          </p>
          <ul>
            <li v-for="content in item.content" :key="content">{{ content }}</li>
          </ul>
        </r-timeline-item>
      </r-timeline>
    </div>
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Timeline from "../../../../../src/components/timeline";

onMounted(() => new Timeline());

const updateInfo: {
  version: string;
  time: string;
  content: string[];
}[] = [
  {
    version: "1.5.0",
    time: "2021-05-10",
    content: ["新增组件 InputNumber。"],
  },
  {
    version: "1.4.0",
    time: "2021-04-29",
    content: [
      "重写 poptip，优化代码逻辑并且修复若干个bug。",
      "poptip 新增属性 visible。",
      "poptip 新增事件 onPopperShow 和 onPopperHide，删除事件 onShow 和 onHide。",
    ],
  },
  {
    version: "1.3.0",
    time: "2021-04-29",
    content: [
      "重写 dropdown，优化代码逻辑并且修复若干个bug。",
      "dropdown 新增属性 stop-propagation，新增 visible 属性，用于手动控制下拉框的显示。",
      "dropdown 新增事件 onVisibleChange，菜单显示状态改变时调用，新增事件 onClickOutside，点击外部关闭下拉菜单时触发。",
      "dropdown-item 新增属性 key，用来标识这一项，新增属性 danger。",
    ],
  },
  {
    version: "1.2.0",
    time: "2021-04-22",
    content: ["新增组件 MiniModal，用来创建一次性的轻量级对话框。"],
  },
  {
    version: "1.1.0",
    time: "2021-04-20",
    content: [
      "重写 tooltip。",
      "新增 tooltip 多种预设色彩的文字提示样式。",
      "修复 1.0.x 版本中，tooltip 的箭头方向无法随着气泡方向更新的问题。",
    ],
  },
  {
    version: "1.0.2",
    time: "2021-04-16",
    content: [
      "修复 BackTop 组件样式外观异常",
      "修复 Button 组件内显示的加载中图标旋转摇晃",
    ],
  },
  {
    version: "1.0.0 The Jade Hare",
    time: "2021-04-10",
    content: ["月亮之兔 - 玉兔诞生"],
  },
];
</script>

<style lang="less" scoped>
.update-wrapper {
  margin-top: 2rem;

  .version {
    font-size: 24px;
    margin-top: -9px;
  }

  .time {
    margin: 0 !important;
  }
}
</style>
