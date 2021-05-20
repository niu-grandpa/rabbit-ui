<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="PageHeader"
      title="页头"
      desc="页头位于页容器中，页容器顶部，起到了内容概览和引导页级操作的作用。包括由面包屑、标题、页面内容简介、页面级操作等、页面级导航组成。"
    >
      <li>
        当需要使用户快速理解当前页是什么以及方便用户使用页面功能时使用，通常也可被用作页面间导航。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-page-header
          id="test"
          title="首页"
          sub-title="这是副标题描述"
          style="border: 1px solid #f0f0f0"
        />
      </template>
      <template #header>
        <span id="标准样式">标准样式</span>
      </template>
      <template #desc>标准页头，适合使用在需要简单描述的场景。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import PageHeader from '../../../../../src/components/page-header'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import { Basic, APITable } from '../../../examples-code/components/page-header'

let ph: PageHeader
onMounted(() => {
  ph = new PageHeader()
  ph.config('#test').events({
    onBack: () => {
      console.log('点击了返回!')
    }
  })
})

const anchors: string[] = ['基础用法', 'API']
</script>