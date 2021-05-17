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
import { onMounted } from 'vue'
import Timeline from '../../../../../../../src/components/timeline'

onMounted(() => new Timeline())

const updateInfo: {
  version: string
  time: string
  content: string[]
}[] = [
  {
    version: '1.5.0',
    time: '2021-05-10',
    content: ['']
  },
  {
    version: '1.4.0',
    time: '2021-04-29',
    content: ['']
  },
  {
    version: '1.3.0',
    time: '2021-04-29',
    content: ['']
  },
  {
    version: '1.2.0',
    time: '2021-04-22',
    content: ['']
  },
  {
    version: '1.1.0',
    time: '2021-04-20',
    content: ['']
  },
  {
    version: '1.0.2',
    time: '2021-04-16',
    content: ['']
  },
  {
    version: '1.0.1',
    time: '2021-04-12',
    content: ['']
  },
  {
    version: '1.0.0 The Jade Hare',
    time: '2021-04-10',
    content: ['月亮之兔 - 玉兔诞生']
  }
]
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