<template>
  <article class="markdown">
    <ExampleHeaderArea name="Tabs" title="选项卡" desc="选项卡切换组件。">
      <li>提供平级的区域将大块内容进行收纳和展现，保持界面整洁。</li>
      <li>卡片式的页签，提供可关闭的样式，常用于容器顶部。</li>
      <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-tabs active-index="1" id="test">
          <r-tab-pane tab="标签一" index="1">标签一的内容</r-tab-pane>
          <r-tab-pane tab="标签二" index="2">标签二的内容</r-tab-pane>
          <r-tab-pane tab="标签三" index="3">标签三的内容</r-tab-pane>
        </r-tabs>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <code>active-index</code
        >与<code>r-tab-pane</code>的<code>index</code>对应，用于标识当前激活的是哪一项，key
        值默认从 0 开始，默认激活第一项。可以使用提供的<code>config</code>方法返回的
        <code>activeIndex</code>进行动态改变
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tabs>
          <r-tab-pane tab="macOS" icon="logo-apple">标签一的内容</r-tab-pane>
          <r-tab-pane tab="Windows" icon="logo-windows">标签二的内容</r-tab-pane>
          <r-tab-pane tab="Linux" icon="logo-tux">标签三的内容</r-tab-pane>
        </r-tabs>
      </template>
      <template #header><span id="图标">图标</span></template>
      <template #desc> 通过设置属性<code>icon</code>，可以显示一个图标。 </template>
      <template #code><WithIcon /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tabs size="small">
          <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
          <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
          <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
        </r-tabs>
      </template>
      <template #header><span id="迷你型">迷你型</span></template>
      <template #desc>
        设置属性<code>size="small"</code>可以显示为迷你型，只在<code>type="line"</code>时有效。
      </template>
      <template #code><Size /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tabs>
          <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
          <r-tab-pane tab="标签二" disabled="true">标签二的内容</r-tab-pane>
          <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
        </r-tabs>
      </template>
      <template #header><span id="禁用">禁用</span></template>
      <template #desc>禁用某一项。</template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tabs type="card">
          <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
          <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
          <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
        </r-tabs>
      </template>
      <template #header><span id="卡片样式">卡片样式</span></template>
      <template #desc>
        设置属性<code>type="card"</code>可以显示卡片样式，常用于容器顶部。
      </template>
      <template #code><CardType /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tabs type="card" closable="true">
          <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
          <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
          <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
        </r-tabs>
      </template>
      <template #header><span id="可关闭">可关闭</span></template>
      <template #desc>
        <p>
          通过设置属性<code>closable</code>可以关闭某一项，仅在<code>type="card"</code>时有效。
        </p>
        <p>当设置了可关闭后，面板的切换将不使用切换动画。</p>
      </template>
      <template #code><Closable /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-tabs animated="false">
          <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
          <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
          <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
        </r-tabs>
      </template>
      <template #header><span id="不使用动画">不使用动画</span></template>
      <template #desc> 通过设置属性<code>animated="fasle"</code>可以禁用动画。 </template>
      <template #code><Animated /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <a-row>
          <a-col
            :span="11"
            class="demo-tabs-style1"
            style="background: #e3e8ee; padding: 16px; margin-right: 12px"
          >
            <r-tabs type="card">
              <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
              <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
              <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
            </r-tabs>
          </a-col>
          <a-col :span="11" class="demo-tabs-style2">
            <r-tabs type="card">
              <r-tab-pane tab="标签一">标签一的内容</r-tab-pane>
              <r-tab-pane tab="标签二">标签二的内容</r-tab-pane>
              <r-tab-pane tab="标签三">标签三的内容</r-tab-pane>
            </r-tabs>
          </a-col>
        </a-row>
      </template>
      <template #header><span id="其它样式">其它样式</span></template>
      <template #desc>可以根据业务自定义 UI，需要一点额外的样式覆盖。</template>
      <template #code><CustomStyle /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Tabs from "../../../../../src/components/tabs";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  WithIcon,
  Small,
  Disabled,
  CardType,
  Closable,
  Animated,
  CustomStyle,
  APITable,
} from "../../../examples-code/components/tabs";

onMounted(() => {
  const tabs = new Tabs();
  tabs.config("#test").events({
    onClick: (index) => {
      console.log("当前点击的tab", index);
    },
  });
});

const anchors: string[] = [
  "基础用法",
  "图标",
  "迷你型",
  "禁用",
  "卡片样式",
  "可关闭",
  "不使用动画",
  "其它样式",
  "API",
];
</script>

<style lang="less" scope>
.demo-tabs {
  &-style1 {
    & > .rab-tabs-card {
      & > .rab-tabs-content {
        height: 120px;
        margin-top: -16px;

        & > r-tab-pane {
          background: #fff;
          padding: 16px;
        }
      }

      & > .rab-tabs-bar {
        .rab-tabs-tab {
          border-color: transparent;
        }
        .rab-tabs-tab-active {
          border-color: #fff;
        }
      }
    }
  }

  &-style2 {
    & > .rab-tabs-card {
      & > .rab-tabs-bar {
        .rab-tabs-tab {
          border-radius: 0;
          background: #fff;
        }
        .rab-tabs-tab-active {
          border-top: 1px solid #3399ff;

          &::before {
            content: "";
            display: block;
            width: 100%;
            height: 1px;
            background: #3399ff;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
