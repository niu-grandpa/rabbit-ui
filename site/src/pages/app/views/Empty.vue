<template>
  <article class="markdown">
    <ExampleHeaderArea name="Empty" title="空状态" desc="空状态时的展示占位图。">
      <li>当目前没有数据时，用于显式的用户提示。</li>
      <li>初始化场景时的引导创建流程。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-empty />
      </template>
      <template #header><span id="基础用法"></span></template>
      <template #desc>简单的展示。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-empty
          desc="自定义的<a>描述</a>"
          image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
          image-style="height: 60px"
        >
          <button class="rab-btn rab-btn-primary">立即创建</button>
        </r-empty>
      </template>
      <template #header><span id="自定义">自定义</span></template>
      <template #desc>
        <p>设置属性<code>image</code>自定义图片、<code>desc</code>设置描述、 </p>
        <p>如果设置附属内容，容器下有且只能由一个父节点</p>
      </template>
      <template #code><Custom /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-empty desc="false" />
      </template>
      <template #header><span id="无描述">无描述</span></template>
      <template #desc>
        <p>设置属性<code>desc="false"</code>不显示描述。</p>
      </template>
      <template #code><NoDesc /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Empty from '../../../../../src/components/empty'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import { Basic, Custom, NoDesc, APITable } from '../../../examples-code/components/empty'

onMounted(() => new Empty())

const anchors: string[] = ['基础用法', '自定义', '无描述', 'API']
</script>