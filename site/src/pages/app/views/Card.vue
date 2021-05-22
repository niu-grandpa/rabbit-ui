<template>
  <article class="markdown">
    <ExampleHeaderArea name="Card" title="卡片" desc="通用卡片容器。">
      <li>最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-card title="卡片标题" extra="<a>更多</a>" style="width: 340px">
          <div>
            <p>卡片内容 1</p>
            <p>卡片内容 2</p>
            <p>卡片内容 3</p>
          </div>
        </r-card>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>包含标题、内容、操作区域。</p>
        <p>注意：标签容器内必须具有一个父元素</p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div style="background: #eee; padding: 20px">
          <r-card title="无边框" no-border="true">
            <p>
              这是没有边框类型的卡片这是没有边框类型的卡片这是没有边框类型的卡片这是没有边框类型的卡片
            </p>
          </r-card>
        </div>
      </template>
      <template #header><span id="无边框">无边框</span></template>
      <template #desc>
        通过设置属性<code>no-border="true"</code> ，可以不添加边框，建议在灰色背景下使用。
      </template>
      <template #code><NoBorder /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <a-row>
          <a-col :span="10" style="margin-right: 24px">
            <r-card title="卡片标题">
              <div>
                <p>卡片内容 1</p>
                <p>卡片内容 2</p>
                <p>卡片内容 3</p>
              </div>
            </r-card>
          </a-col>
          <a-col :span="10">
            <r-card title="卡片标题" dis-hover="true">
              <div>
                <p>卡片内容 1</p>
                <p>卡片内容 2</p>
                <p>卡片内容 3</p>
              </div>
            </r-card>
          </a-col>
        </a-row>
      </template>
      <template #header><span id="禁用悬停阴影">禁用悬停阴影</span></template>
      <template #desc>
        通过设置属性<code>dis-hover="true"</code>来禁用鼠标悬停显示阴影的效果。
      </template>
      <template #code><DisHover /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div style="background: #eee; padding: 20px">
          <a-row>
            <a-col :span="10" style="margin-right: 24px">
              <r-card title="卡片标题" no-border="true">
                <div>
                  <p>卡片内容 1</p>
                  <p>卡片内容 2</p>
                  <p>卡片内容 3</p>
                </div>
              </r-card>
            </a-col>
            <a-col :span="10">
              <r-card title="卡片标题" shadow="true">
                <div>
                  <p>卡片内容 1</p>
                  <p>卡片内容 2</p>
                  <p>卡片内容 3</p>
                </div>
              </r-card>
            </a-col>
          </a-row>
        </div>
      </template>
      <template #header><span id="卡片阴影">卡片阴影</span></template>
      <template #desc>
        通过设置属性<code>shadow="true"</code>来显示卡片阴影，使用该属性后，<code>no-border</code>和<code>dis-hover</code>将无效，建议在灰色背景下使用。
      </template>
      <template #code><Shadow /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-card style="width: 340px">
          <div style="text-align: center">
            <img src="/src/assets/logo.svg" style="height: 95px" />
            <h3 style="margin: 8px 0">一套基于TS构建的UI组件库</h3>
          </div>
        </r-card>
      </template>
      <template #header><span id="简洁卡片">简洁卡片</span></template>
      <template #desc>只包含内容区域，没有标题。</template>
      <template #code><Simple /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Card from '../../../../../src/components/card'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Simple,
  DisHover,
  Shadow,
  NoBorder,
  APITable
} from '../../../examples-code/components/card'

onMounted(() => new Card())

const anchors: string[] = ['基础用法', '无边框', '禁用悬停阴影', '卡片阴影', '简洁卡片', 'API']
</script>