<template>
  <article class="markdown">
    <ExampleHeaderArea name="Tooltip" title="文字提示" desc="简单的文字提示气泡框。">
      <li>鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。</li>
      <li>可用来代替系统默认的 ‘title’ 提示，提供一个’按钮/文字/操作’的文案解释。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-tooltip content="这里是提示文字" id="test">
          鼠标经过这段文字时，会显示一个气泡框
        </r-tooltip>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>最简单的用法</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div class="top">
          <r-tooltip content="Top Left 文字提示" placement="top-start">
            <button class="rab-btn">上左</button>
          </r-tooltip>
          <r-tooltip content="Top Center 文字提示">
            <button class="rab-btn">上边</button>
          </r-tooltip>
          <r-tooltip content="Top Right 文字提示" placement="top-end">
            <button class="rab-btn">上右</button>
          </r-tooltip>
        </div>
        <div class="center">
          <div class="center-left">
            <r-tooltip content="Left Top 文字提示" placement="left-start">
              <button class="rab-btn">左上</button> </r-tooltip
            ><br /><br />
            <r-tooltip content="Left Center 文字提示" placement="left">
              <button class="rab-btn">左边</button> </r-tooltip
            ><br /><br />
            <r-tooltip content="Left Bottom 文字提示" placement="left-end">
              <button class="rab-btn">左下</button>
            </r-tooltip>
          </div>
          <div class="center-right">
            <r-tooltip content="Right Top 文字提示" placement="right-start">
              <button class="rab-btn">右上</button> </r-tooltip
            ><br /><br />
            <r-tooltip content="Right Center 文字提示" placement="right">
              <button class="rab-btn">右边</button> </r-tooltip
            ><br /><br />
            <r-tooltip content="Right Bottom 文字提示" placement="right-end">
              <button class="rab-btn">右下</button>
            </r-tooltip>
          </div>
        </div>
        <div class="bottom">
          <r-tooltip content="Bottom Left 文字提示" placement="bottom-start">
            <button class="rab-btn">下左</button>
          </r-tooltip>
          <r-tooltip content="Bottom Center 文字提示" placement="bottom">
            <button class="rab-btn">下边</button>
          </r-tooltip>
          <r-tooltip content="Bottom Right 文字提示" placement="bottom-end">
            <button class="rab-btn">下右</button>
          </r-tooltip>
        </div>
      </template>
      <template #header><span id="位置">位置</span></template>
      <template #desc>组件提供了12个不同的方向显示Tooltip，具体配置可查看API。</template>
      <template #code><Placement /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tooltip content="content of tooltip" placement="top" id="test2">
          <button class="rab-btn">多行</button>
        </r-tooltip>
      </template>
      <template #header><span id="自定义内容">自定义内容</span></template>
      <template #desc>
        如果需要添加带有HTML代码或其他复杂的内容，抑或是需要动态更新内容，请使用组件提供的响应式API渲染
      </template>
      <template #code><CustomContent /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tooltip placement="top" disabled="true">
          <button class="rab-btn">禁用提示</button>
        </r-tooltip>
      </template>
      <template #header><span id="禁用">禁用</span></template>
      <template #desc>通过设置属性<code>disabled</code>可以禁用文字提示。</template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tooltip content="Tooltip 文字提示" delay="1000">
          <button class="rab-btn">延时1秒显示</button>
        </r-tooltip>
      </template>
      <template #header><span id="延时">延时</span></template>
      <template #desc>
        通过设置属性<code>delay</code>可以延时显示文字提示，单位毫秒。
      </template>
      <template #code><Delay /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tooltip content="content of tooltip">
          <button class="rab-btn">Dark(default)</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="light">
          <button class="rab-btn">Light</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="pink">
          <button class="rab-btn">pink</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="red">
          <button class="rab-btn">red</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="yellow">
          <button class="rab-btn">yellow</button>
        </r-tooltip>
        <br /><br />
        <r-tooltip content="content of tooltip" theme="orange">
          <button class="rab-btn">orange</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="cyan">
          <button class="rab-btn">cyan</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="green">
          <button class="rab-btn">green</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="blue">
          <button class="rab-btn">blue</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="purple">
          <button class="rab-btn">purple</button>
        </r-tooltip>
        <br /><br />
        <r-tooltip content="content of tooltip" theme="geekblue">
          <button class="rab-btn">geekblue</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="magenta">
          <button class="rab-btn">magenta</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="volcano">
          <button class="rab-btn">volcano</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="gold">
          <button class="rab-btn">gold</button>
        </r-tooltip>
        <r-tooltip content="content of tooltip" theme="lime">
          <button class="rab-btn">lime</button>
        </r-tooltip>
      </template>
      <template #header><span id="主题">主题</span></template>
      <template #desc>
        <p>设置属性<code>theme</code>可以显示不同的颜色。</p>
        <p>有多种预设色彩的文字提示样式，用作不同场景使用。</p>
      </template>
      <template #code><Theme /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tooltip
          max-width="200"
          content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
        >
          <button class="rab-btn">长文本</button>
        </r-tooltip>
      </template>
      <template #header><span id="自动换行">自动换行</span></template>
      <template #desc>
        设置属性<code>max-width</code>，当超出最大值后，文本将自动换行，并两端对齐。
      </template>
      <template #code><AutoNewLine /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Tooltip from "../../../../../src/components/tooltip";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Delay,
  Theme,
  Disabled,
  Placement,
  AutoNewLine,
  CustomContent,
  APITable,
} from "../../../examples-code/components/tooltip";

onMounted(() => {
  const tooltip = new Tooltip();

  tooltip.config("#test").events({
    onVisibleChange: (visable) => {
      console.log(visable);
    },
  });

  const custom = "<div><p>显示多行信息</p> <p><i>可以自定义样式</i></p></div>";
  tooltip.config("#test2").content = custom;
});

const anchors: string[] = [
  "基础用法",
  "位置 ",
  "自定义内容",
  "禁用",
  "延时",
  "主题",
  "自动换行",
  "API",
];
</script>

<style scope>
.top,
.bottom {
  text-align: center;
}

.center {
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
}

.center-left {
  float: left;
}

.center-right {
  float: right;
}
</style>
