<template>
  <article class="markdown">
    <ExampleHeaderArea name="Tag" title="标签" desc="进行标记和分类的小标签。">
      <li>用于标记事物的属性和维度。</li>
      <li>进行分类。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-tag>标签一</r-tag>
        <r-tag>标签二</r-tag>
        <r-tag closable="true" id="closeTag">标签三</r-tag>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>简单的展示，添加属性<code>closable="true"</code>可以关闭标签。</p>
        <p>点击关闭标签时，可以使用<code>onClose</code>方法添加回调事件</p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tag type="border">标签三</r-tag>
        <r-tag type="border" closable="true">标签四</r-tag>
        <r-tag type="dot">标签一</r-tag>
        <r-tag type="dot" closable="true">标签二</r-tag>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>
          通过设置<code>type</code>属性为<code>border</code>或<code>dot</code>来选择不同的样式类型。建议有关闭的某些场景下使用
          border，图例的场景下使用 dot。
        </p>
      </template>
      <template #code><StyleTypes /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tag color="default">default</r-tag>
        <r-tag color="primary">primary</r-tag>
        <r-tag color="success">success</r-tag>
        <r-tag color="error">error</r-tag>
        <r-tag color="warning">warning</r-tag>
        <r-tag color="magenta">magenta</r-tag>
        <r-tag color="red">red</r-tag>
        <r-tag color="volcano">volcano</r-tag>
        <r-tag color="orange">orange</r-tag>
        <r-tag color="gold">gold</r-tag>
        <r-tag color="yellow">yellow</r-tag>
        <r-tag color="lime">lime</r-tag>
        <r-tag color="green">green</r-tag>
        <r-tag color="cyan">cyan</r-tag>
        <r-tag color="blue">blue</r-tag>
        <r-tag color="geekblue">geekblue</r-tag>
        <r-tag color="purple">purple</r-tag>
        <r-tag color="#FFA2D3">Custom Color</r-tag>
        <br /><br />
        <r-tag type="border" closable="true" color="primary">标签一</r-tag>
        <r-tag type="border" closable="true" color="success">标签二</r-tag>
        <r-tag type="border" closable="true" color="warning">标签三</r-tag>
        <r-tag type="border" closable="true" color="error">标签四</r-tag>
        <br /><br />
        <r-tag type="dot" closable="true" color="primary">标签一</r-tag>
        <r-tag type="dot" closable="true" color="success">标签二</r-tag>
        <r-tag type="dot" closable="true" color="warning">标签三</r-tag>
        <r-tag type="dot" closable="true" color="error">标签四</r-tag>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>多种预设颜色，可自定义颜色。</p>
      </template>
      <template #code><Colors /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tag checkable="true" color="primary" id="checkedTag">标签一</r-tag>
        <r-tag checkable="true" color="success">标签二</r-tag>
        <r-tag checkable="true" color="error">标签三</r-tag>
        <r-tag checkable="true" color="warning">标签四</r-tag>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>
          设置属性<code>checkable="true"</code>，可以对标签进行选择，属性 `checked`
          控制当前选择状态。
        </p>
      </template>
      <template #code><CanSelect /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tag>默认标签</r-tag>
        <r-tag size="medium">中号标签</r-tag>
        <r-tag size="large">大号标签</r-tag>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>设置属性<code>size</code>可以显示不同尺寸的标签。</p>
      </template>
      <template #code><Size /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Tag from '../../../../../src/components/tag'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Size,
  StyleTypes,
  Colors,
  CanSelect,
  APITable
} from '../../../examples-code/components/tag'

onMounted(() => {
  const tag = new Tag()

  tag.config('#closeTag').events({
    onClose: ($this) => {
      console.log($this)
    }
  })
  tag.config('#checkedTag').events({
    onChange: (checked) => {
      console.log(checked)
    }
  })
})

const anchors: string[] = ['基础用法', '样式类型', '各种颜色', '可选择', '尺寸', 'API']
</script>