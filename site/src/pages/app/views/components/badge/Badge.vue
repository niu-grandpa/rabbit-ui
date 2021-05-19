<template>
  <article class="markdown">
    <ExampleHeaderArea name="Badge" title="徽标数" desc="图标右上角的圆形徽标数字。">
      <li>
        一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-badge count="3">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="0" show-zero="true">
          <a class="demo-badge"></a>
        </r-badge>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>最简单的使用方法。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-badge dot="true">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge dot="true">
          <i class="rab-icon rab-icon-ios-notifications-outline" style="font-size: 26px"></i>
        </r-badge>
        <r-badge dot="true">
          <a>可以是一个链接</a>
        </r-badge>
      </template>
      <template #header><span id="小红点">小红点</span></template>
      <template #desc>强迫症患者慎用！</template>
      <template #code><RedDot /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-badge count="99">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="100">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="99" max-count="10">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="1000" max-count="999">
          <a class="demo-badge"></a>
        </r-badge>
      </template>
      <template #header></template>
      <template #desc>
        通过设置<code>overflow-count</code>属性设置一个封顶值，当超过时，会显示
        <code>${overflowCount}+</code>
      </template>
      <template #code><MaxCount /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-badge count="25" />
        <r-badge count="15" class="demo-badge-alone" />
      </template>
      <template #header><span id="封顶数字">封顶数字</span></template>
      <template #desc>
        不包裹任何元素即是独立使用，可自定样式展现。在右上角的 badge 则限定为红色。
      </template>
      <template #code><Alone /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-badge text="new">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge text="hot">
          <a class="demo-badge"></a>
        </r-badge>
      </template>
      <template #header><span id="独立使用及自定义样式">独立使用及自定义样式</span></template>
      <template #desc> 设置<code>text</code>属性，可以自定义显示内容。 </template>
      <template #code><CustomContent /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-badge count="3" offset="[5,10]">
          <a class="demo-badge"></a>
        </r-badge>
      </template>
      <template #header><span id="自定义内容">自定义内容</span></template>
      <template #desc> 设置<code>offset</code>属性，可以自定义徽标的位置 </template>
      <template #code><CustomPosition /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-badge status="success" />
        <r-badge status="error" />
        <r-badge status="default" />
        <r-badge status="processing" />
        <r-badge status="warning" />
        <r-badge status="error" />
        <br />
        <r-badge status="success" text="Success" />
        <br />
        <r-badge status="error" text="Error" />
        <br />
        <r-badge status="default" text="Default" />
        <br />
        <r-badge status="processing" text="Processing" />
        <br />
        <r-badge status="warning" text="Warning" />
      </template>
      <template #header><span id="自定义位置">自定义位置</span></template>
      <template #desc>用于表示状态的小圆点。</template>
      <template #code><StatusDot /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <strong>预设：</strong>
        <br />
        <r-badge color="blue" text="blue" /> <br />
        <r-badge color="green" text="green" /> <br />
        <r-badge color="red" text="red" /> <br />
        <r-badge color="yellow" text="yellow" /> <br />
        <r-badge color="pink" text="pink" /> <br />
        <r-badge color="magenta" text="magenta" /> <br />
        <r-badge color="volcano" text="volcano" /> <br />
        <r-badge color="orange" text="orange" /> <br />
        <r-badge color="gold" text="gold" /> <br />
        <r-badge color="lime" text="lime" /> <br />
        <r-badge color="cyan" text="cyan" /> <br />
        <r-badge color="geekblue" text="geekblue" /> <br />
        <r-badge color="purple" text="purple" /> <br />
        <br />
        <strong>自定义：</strong>
        <br />
        <r-badge color="#2db7f5" text="#2db7f5" /> <br />
      </template>
      <template #header><span id="状态点">状态点</span></template>
      <template #desc
        >属性<code>color</code>可以设置更多预设的状态点颜色，或者自定义颜色。</template
      >
      <template #code><Colors /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-badge count="6" type="primary">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="6" type="success">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="6" type="normal">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="6" type="info">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="6" type="error">
          <a class="demo-badge"></a>
        </r-badge>
        <r-badge count="6" type="warning">
          <a class="demo-badge"></a>
        </r-badge>
      </template>
      <template #header><span id="多彩徽标">多彩徽标</span></template>
      <template #desc>使用<code>type</code>属性，可以设置不同的颜色。</template>
      <template #code><PresetColor /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import Badge from '../../../../../../../src/components/badge'
import { Anchor, ExampleHeaderArea, CodeBox } from '../../../../../components'
import {
  Basic,
  RedDot,
  MaxCount,
  Alone,
  CustomContent,
  CustomPosition,
  StatusDot,
  Colors,
  PresetColor,
  APITable
} from '../../../../../examples-code/components/badge'

onMounted(() => new Badge())

const anchors: string[] = [
  '基础用法',
  '小红点',
  '封顶数字',
  '独立使用及自定义样式',
  '自定义内容',
  '自定义位置',
  '状态点',
  '多彩徽标',
  '预设颜色',
  'API'
]
</script>

<style lang="less" scope>
r-badge {
  margin-right: 24px;
}

.demo-badge {
  width: 42px;
  height: 42px;
  background: #eee;
  border-radius: 6px;
  display: inline-block;

  &-alone sup {
    background: #5cb85c !important;
  }
}
</style>