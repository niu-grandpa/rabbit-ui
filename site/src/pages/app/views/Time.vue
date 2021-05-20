<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Time"
      title="相对时间"
      desc="常用于表示几分钟前、几小时前等相对于此时此刻的时间描述。"
      :showWhenToUse="false"
    />
    <CodeBox>
      <template #case>
        <r-time time="new Date().getTime() - 60 * 3 * 1000" />
        <br />
        <r-time time="new Date().getTime() - 86400 * 3 * 1000" />
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        属性<code>time</code>设置一个时间戳或 Date，可自动转为相对于当前的时间。
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-time time="new Date()" interval="1" />
      </template>
      <template #header><span id="自动更新间隔">自动更新间隔</span></template>
      <template #desc>设置自动更新间隔，默认为 60 秒。</template>
      <template #code><AutoUpdate /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-time time="new Date().getTime() - 86400 * 3 * 1000" />
        <br />
        <r-time time="new Date().getTime() - 86400 * 3 * 1000" type="date" />
        <br />
        <r-time time="new Date().getTime() - 86400 * 3 * 1000" type="datetime" />
      </template>
      <template #header><span id="不同类型">不同类型</span></template>
      <template #desc> 设置属性<code>type</code>可以根据情况，设置不同的显示类型。 </template>
      <template #code><Types /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-time time="new Date().getTime() - 86400 * 3 * 1000" hash="#hash" />
      </template>
      <template #header><span id="锚点">锚点</span></template>
      <template #desc> 设置<code>hash</code>属性，相对时间可以点击并定位锚点。 </template>
      <template #code><WithAnchor /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Time from '../../../../../src/components/time'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  AutoUpdate,
  Types,
  WithAnchor,
  APITable
} from '../../../examples-code/components/time'

onMounted(() => new Time())

const anchors: string[] = ['基础用法', '自动更新间隔', '不同类型', '锚点', 'API']
</script>