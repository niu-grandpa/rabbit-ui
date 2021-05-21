<template>
  <article class="markdown">
    <ExampleHeaderArea name="Collapse" title="折叠面板" desc="可以折叠/展开的内容区域。">
      <li>对复杂区域进行分组和隐藏，保持页面的整洁。</li>
      <li><code>手风琴</code>是一种特殊的折叠面板，只允许单个内容区域展开。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-collapse active-index="1" id="demoCollapse">
          <r-collapse-panel index="1" title="面板标题1">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="2" title="面板标题2">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="3" title="面板标题3">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
        </r-collapse>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>通过设置属性<code>active-index</code>可以同时展开多个面板，这个例子默认展开了第一个。</p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-collapse active-index="1" accordion="true">
          <r-collapse-panel index="1" title="面板标题1">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="2" title="面板标题2">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="3" title="面板标题3">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
        </r-collapse>
      </template>
      <template #header><span id="手风琴">手风琴</span></template>
      <template #desc>
        <p>通过设置属性<code>accordion="true"</code>开启手风琴模式，每次只能打开一个面板。</p>
      </template>
      <template #code><According /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-collapse active-index="1" simple="true">
          <r-collapse-panel index="1" title="面板标题1">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="2" title="面板标题2">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="3" title="面板标题3">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
        </r-collapse>
      </template>
      <template #header><span id="简洁风格">简洁风格</span></template>
      <template #desc>
        <p>设置属性<code>simple="true"</code>可以显示为一套没有边框的简洁样式。</p>
      </template>
      <template #code><Simple /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-collapse active-index="1">
          <r-collapse-panel index="1" title="面板标题1">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="2" title="面板标题2" hide-arrow="true">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
        </r-collapse>
      </template>
      <template #header><span id="隐藏箭头">隐藏箭头</span></template>
      <template #desc>
        <p>
          通过给<code>r-collapse-panel</code>设置属性<code>hide-arrow="true"</code>可以隐藏面板的箭头图标
        </p>
      </template>
      <template #code><HiddenArrow /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-collapse active-index="1" ghost="true">
          <r-collapse-panel index="1" title="面板标题1">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="2" title="面板标题2">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
          <r-collapse-panel index="3" title="面板标题3">
            <p>
              狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。
            </p>
          </r-collapse-panel>
        </r-collapse>
      </template>
      <template #header><span id="幽灵折叠面板">幽灵折叠面板</span></template>
      <template #desc>
        <p>通过设置属性<code>ghost="true"</code>将折叠面板的背景变成透明。</p>
      </template>
      <template #code><Ghost /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Collapse from '../../../../../src/components/collapse'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Simple,
  Ghost,
  According,
  HiddenArrow,
  APITable
} from '../../../examples-code/components/collapse'

onMounted(() => {
  const collapse = new Collapse()
  collapse.config('#demoCollapse').events({
    onChange: (key) => {
      console.log(key)
    }
  })
})

const anchors: string[] = ['基础用法', '手风琴', '简洁风格', '隐藏箭头', '幽灵折叠面板', 'API']
</script>