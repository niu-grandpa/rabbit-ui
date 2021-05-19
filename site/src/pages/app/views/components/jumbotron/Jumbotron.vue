<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Jumbotron"
      title="巨幕"
      desc="用于排版和分行，以便在较大的容器中分隔内容。"
    >
      <li>当需要展示巨大的标题和段落时使用。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-jumbotron
          title="Hello, world!"
          sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！"
        >
          <div>
            <hr style="margin-bottom: 1.5rem" />
            <p>它使用实用程序类来排版和空格，以便在较大的容器中分隔内容。</p>
            <button class="rab-btn rab-btn-primary rab-btn-lg">了解更多</button>
          </div>
        </r-jumbotron>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc> 最简单的用法，如果添加额外内容则标签容器下必须具有一个父元素 </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-jumbotron
          type="light"
          title="Hello, world!"
          sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！"
        />
        <r-jumbotron
          type="dark"
          title="Hello, world!"
          sub-title="这个世界充满着爱与包容、善良与高尚，美好相伴着我们的每一天。英雄般的人物在这个时代层出不穷，感谢您的使用！"
        />
      </template>
      <template #header><span id="外观">外观</span></template>
      <template #desc>通过设置属性<code>type</code>切换外观背景色 </template>
      <template #code><Appearance /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Jumbotron from '../../../../../../../src/components/jumbotron'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../../components'
import { Basic, Appearance, APITable } from '../../../../../examples-code/components/jumbotron'

onMounted(() => new Jumbotron())

const anchors: string[] = ['基础用法', '外观', 'API']
</script>