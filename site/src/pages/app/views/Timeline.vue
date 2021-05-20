<template>
  <article class="markdown">
    <ExampleHeaderArea name="Timeline" title="时间轴" desc="可视化地呈现时间流信息。">
      <li>当有一系列信息需按时间排列时，可正序和倒序。</li>
      <li>需要有一条时间轴进行视觉上的串联时。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-timeline>
          <r-timeline-item>
            <p class="time">1976s</p>
            <p class="content">第一代苹果问世</p>
          </r-timeline-item>
          <r-timeline-item>
            <p class="time">1984s</p>
            <p class="content">发布麦金塔电脑</p>
          </r-timeline-item>
          <r-timeline-item>
            <p class="time">2007s</p>
            <p class="content">发布 iPhone</p>
          </r-timeline-item>
          <r-timeline-item>
            <p class="time">2010s</p>
            <p class="content">发布 iPad</p>
          </r-timeline-item>
          <r-timeline-item color="gray">
            <p class="time">2011.10.05</p>
            <p class="content">史蒂夫·乔布斯去世</p>
          </r-timeline-item>
        </r-timeline>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>最简单定义一个时间轴的用法。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-timeline>
          <r-timeline-item color="green">发布1.0版本</r-timeline-item>
          <r-timeline-item color="green">发布2.0版本</r-timeline-item>
          <r-timeline-item color="red">重大Bug</r-timeline-item>
          <r-timeline-item color="gray">推迟发布</r-timeline-item>
          <r-timeline-item>发布3.0版本</r-timeline-item>
        </r-timeline>
      </template>
      <template #header><span id="圆圈颜色">圆圈颜色</span></template>
      <template #desc>
        圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，灰色表示当前任务状态停滞或取消，蓝色可表示正在进行或其他默认状态。
      </template>
      <template #code><Colors /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-timeline pending="true">
          <r-timeline-item>2021-04-01 创建服务器网站</r-timeline-item>
          <r-timeline-item>2021-04-01 解决了初始化网络问题</r-timeline-item>
          <r-timeline-item>2021-04-01 技术人员进行测试</r-timeline-item>
          <r-timeline-item><a href="#">查看更多</a></r-timeline-item>
        </r-timeline>
      </template>
      <template #header><span id="最后一个">最后一个</span></template>
      <template #desc>
        通过添加属性<code>pending="true"</code>来标记最后一个为幽灵节点，标识还未完成。
      </template>
      <template #code><Pending /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-timeline>
          <r-timeline-item dot="<i class='rab-icon rab-icon-ios-trophy'></i>" color="green">
            发布里程碑版本
          </r-timeline-item>
          <r-timeline-item>发布1.0版本</r-timeline-item>
          <r-timeline-item>发布2.0版本</r-timeline-item>
          <r-timeline-item>发布3.0版本</r-timeline-item>
        </r-timeline>
      </template>
      <template #header><span id="自定义时间轴点">自定义时间轴点</span></template>
      <template #desc>可根据实际场景⾃定义节点</template>
      <template #code><Custom /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Timeline from '../../../../../src/components/timeline'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../components'
import {
  Basic,
  Colors,
  Custom,
  Pending,
  APITable
} from '../../../examples-code/components/timeline'

onMounted(() => new Timeline())

const anchors: string[] = ['基础用法', '圆圈颜色 ', '最后一个', '自定义时间轴点', 'API']
</script>

<style scoped>
.time {
  font-size: 14px;
  font-weight: bold;
  margin: 0 !important;
}

.content {
  padding-left: 5px;
  margin: 0 !important;
}
</style>