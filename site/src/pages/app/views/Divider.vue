<template>
  <article class="markdown">
    <ExampleHeaderArea name="Divider" title="分割线" desc="区隔内容的分割线。">
      <li>对不同章节的文本段落进行分割。</li>
      <li>对行内文字/链接进行分割，例如表格的操作列。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
        <r-divider></r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
        <r-divider>标题居中</r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
        <r-divider dashed="true"></r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
      </template>
      <template #header><span id="水平分割线">水平分割线</span></template>
      <template #desc>默认为水平分割线，可在中间加入文字。</template>
      <template #code><Horizontal /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        文本
        <r-divider type="vertical"></r-divider>
        <a href="#">链接</a>
        <r-divider type="vertical"></r-divider>
        <a href="#">链接</a>
      </template>
      <template #header><span id="垂直分割线">垂直分割线</span></template>
      <template #desc>使用<code>type="vertical"</code>设置为行内的垂直分割线。</template>
      <template #code><Vertical /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-divider>标题居中</r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
        <r-divider orientation="left">右侧标题</r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
        <r-divider orientation="right">右侧标题</r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
      </template>
      <template #header><span id="标题位置">标题位置</span></template>
      <template #desc>修改分割线标题的位置。</template>
      <template #code><HeaderPosition /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-divider plain="true">标题居中</r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
        <r-divider plain="true" orientation="left">右侧标题</r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
        <r-divider plain="true" orientation="right">右侧标题</r-divider>
        <p>
          从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事从前有座山山里有座庙，庙里有个老和尚给小和尚讲故事
        </p>
      </template>
      <template #header><span id="分割文字使用正文样式">分割文字使用正文样式</span></template>
      <template #desc>使用<code>plain</code>可以设置为更轻量的分割文字样式。</template>
      <template #code><TextStyle /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Divider from '../../../../../src/components/divider'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Vertical,
  Horizontal,
  TextStyle,
  HeaderPosition,
  APITable
} from '../../../examples-code/components/divider'

onMounted(() => new Divider())

const anchors: string[] = ['水平分割线 ', '垂直分割线', '标题位置', '分割文字使用正文样式', 'API']
</script>