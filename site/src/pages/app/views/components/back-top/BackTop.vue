<template>
  <article class="markdown">
    <ExampleHeaderArea name="BackTop" title="返回顶部" desc="返回页面顶部的操作按钮。">
      <li>当页面内容区域比较长时；</li>
      <li>当用户需要频繁返回顶部查看相关内容时。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>向下滚动页面，灰色的按钮为默认效果。</template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case> 向下滚动页面，蓝色的按钮为自定义效果。 </template>
      <template #header><span id="自定义样式">自定义样式</span></template>
      <template #desc>自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。</template>
      <template #code>
        <CustomStyle />
      </template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
    <r-back-top height="100" bottom="200">
      <div class="top">返回顶端</div>
    </r-back-top>
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import BackTop from '../../../../../../../src/components/back-top'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../../components'
import { Basic, CustomStyle, APITable } from '../../../../../examples-code/components/back-top'

onMounted(() => new BackTop())

const anchors: string[] = ['基础用法', '自定义样式', 'API']
</script>

<style lang="less" scoped>
.top {
  padding: 8px;
  background: rgba(0, 153, 229, 0.7);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
</style>