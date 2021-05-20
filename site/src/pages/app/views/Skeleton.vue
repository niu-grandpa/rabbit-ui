<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Skeleton"
      title="骨架屏"
      desc="在需要等待加载内容的位置提供一个占位图形组合。"
    >
      <li>网络较慢，需要长时间等待加载处理的情况下。</li>
      <li>图文信息内容较多的列表/卡片中。</li>
      <li>只在第一次加载数据的时候使用。</li>
      <li>可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-skeleton />
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>最简单的占位效果。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-skeleton avatar="true" paragraph-rows="4" />
      </template>
      <template #header><span id="复杂组合">复杂组合</span></template>
      <template #desc>带有头像占位图的组合。</template>
      <template #code><Complex /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-skeleton active="true" />
        <br />
        <r-skeleton active="true" avatar="true" />
      </template>
      <template #header><span id="动画效果">动画效果</span></template>
      <template #desc>显示动画效果。</template>
      <template #code><WithAnimation /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-skeleton paragraph-width="[60,80,100]" />
      </template>
      <template #header><span id="自定义段落占位图的宽度">自定义段落占位图的宽度</span></template>
      <template #desc>
        设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度
      </template>
      <template #code><Custom /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div class="example">
          <r-skeleton v-show="!show" />
          <div class="example-article">
            <div class="content" v-show="show">
              <h3>Vue.js, the progressive javascript framework</h3>
              <p>
                An incrementally adoptable ecosystem that scales between a library and a
                full-featured framework. Blazing Fast Virtual DOM Minimal Optimization Efforts
              </p>
            </div>
            <button :disabled="!show" type="button" class="rab-btn" @click="handleClick">
              显示骨架图
            </button>
          </div>
        </div>
      </template>
      <template #header><span id="加载占位图">加载占位图</span></template>
      <template #desc>配合其他元素使用</template>
      <template #code><Loading /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Skeleton from '../../../../../src/components/skeleton'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Custom,
  Complex,
  Loading,
  WithAnimation,
  APITable
} from '../../../examples-code/components/skeleton'

onMounted(() => new Skeleton())

const show = ref<boolean>(true)

const anchors: string[] = [
  '基础用法',
  '复杂组合',
  '动画效果',
  '自定义段落占位图的宽度',
  '加载占位图',
  'API'
]

const handleClick = () => {
  show.value = false
  setTimeout(() => {
    show.value = true
  }, 2000)
}
</script>

<style lang="less">
.rab-skeleton-content {
  h3 {
    margin-top: 12px !important;
    margin-bottom: 0 !important;
  }

  .rab-skeleton-paragraph {
    li {
      list-style: none !important;
      margin-left: 0 !important;
      padding-left: 0 !important;
    }
  }
}

.example {
  width: 918px;
  padding: 42px 24px 50px;
  margin: 50px auto;
  border: 1px solid #f0f0f0;

  &-article {
    h3 {
      margin-bottom: 16px;
    }
    button {
      margin-top: 16px;
    }
  }
}
</style>

