<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Progress"
      title="进度条"
      desc="用于展示操作进度，告知用户当前状态和预期。"
    >
      <li>在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。</li>
      <li>当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；</li>
      <li>当需要显示一个操作完成的百分比时。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-progress percent="30" />
        <r-progress percent="50" status="active" />
        <r-progress percent="70" status="wrong" />
        <r-progress percent="100" status="success" />
        <r-progress percent="50" status="warning" />
        <r-progress percent="50" show-text="false" />
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>标准的进度条。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-progress text-inside="true" stroke-width="20" percent="30" />
        <r-progress text-inside="true" stroke-width="20" percent="70" status="active" />
        <r-progress text-inside="true" stroke-width="20" percent="100" status="success" />
        <r-progress text-inside="true" stroke-width="20" percent="80" status="warning" />
        <r-progress text-inside="true" stroke-width="20" percent="50" status="wrong" />
      </template>
      <template #header><span id="百分比内显">百分比内显</span></template>
      <template #desc>
        <p>设置属性<code>text-inside="true"</code>可以将百分比显示在进度条内部。</p>
        <p>需要通过属性<code>stroke-width</code>设置一个足够的高度。</p>
      </template>
      <template #code><Percent /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-progress percent="99" stroke-color="['#108ee9', '#87d068']" />
        <r-progress percent="99" stroke-color="['#108ee9', '#87d068']" status="active" />
      </template>
      <template #header><span id="渐变色">渐变色</span></template>
      <template #desc>
        <p>设置属性<code>stroke-color</code>为数组时，可以显示为渐变色。</p>
        <p>数组只能设置为两项。</p>
      </template>
      <template #code><StrokeColor /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-progress percent="60" success-percent="30" />
      </template>
      <template #header><span id="分段进度条">分段进度条</span></template>
      <template #desc>
        <p>标准的分段进度条。</p>
      </template>
      <template #code><FDJDT /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Progress from '../../../../../../src/components/progress'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../components'
import {
  Basic,
  FDJDT,
  Percent,
  StrokeColor,
  APITable
} from '../../../../examples-code/components/progress'

onMounted(() => new Progress())

const anchors: string[] = ['基础用法', '百分比内显', '渐变色', '分段进度条', 'API']
</script>

