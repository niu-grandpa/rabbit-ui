<template>
  <article class="markdown">
    <ExampleHeaderArea name="Carousel" title="走马灯" desc="旋转木马，一组轮播的区域。">
      <li>当有一组平级的内容。</li>
      <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。</li>
      <li>常用于一组图片或卡片轮播。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-carousel>
          <div>
            <div class="demo-carousel">1</div>
            <div class="demo-carousel">2</div>
            <div class="demo-carousel">3</div>
            <div class="demo-carousel">4</div>
          </div>
        </r-carousel>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>最基本的用法。</p>
        <p>标签容器下必须具有一个父元素</p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-carousel autoplay="true" id="test">
          <div>
            <div class="demo-carousel">1</div>
            <div class="demo-carousel">2</div>
            <div class="demo-carousel">3</div>
            <div class="demo-carousel">4</div>
          </div>
        </r-carousel>
      </template>
      <template #header><span id="自动切换">自动切换</span></template>
      <template #desc>
        <p>
          设置属性<code>autoplay="true"</code>可以自动轮播，同时可以设置属性<code>autoplay-speed</code>改变自动播放的速度。
        </p>
      </template>
      <template #code><AutoPlay /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-carousel effect="fade" autoplay="true">
          <div>
            <div class="demo-carousel">1</div>
            <div class="demo-carousel">2</div>
            <div class="demo-carousel">3</div>
            <div class="demo-carousel">4</div>
          </div>
        </r-carousel>
      </template>
      <template #header><span id="渐显">渐显</span></template>
      <template #desc>
        <p>设置属性<code>effect="fade"</code>切换效果为渐显。</p>
      </template>
      <template #code><Fade /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Carousel from '../../../../../../src/components/carousel'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../components'
import { Basic, AutoPlay, Fade, APITable } from '../../../../examples-code/components/carousel'

let carousel: Carousel

onMounted(() => {
  carousel = new Carousel()
  carousel.config('#test').events({
    onChange: ([oldValue, value]) => {
      console.log(`原幻灯片索引: ${oldValue}`, `目前激活索引: ${value}`)
    },
    onClick: (index) => {
      console.log(index)
    }
  })
})

const anchors: string[] = ['基础用法 ', '自动切换', '渐显', 'API']
</script>

<style scope>
r-carousel li {
  margin-left: 2px !important;
  margin-right: 2px !important;
  padding-left: 0 !important;
}

.demo-carousel {
  height: 250px;
  color: #fff;
  line-height: 250px;
  text-align: center;
  font-size: 20px;
  background: #364d79;
}
</style>