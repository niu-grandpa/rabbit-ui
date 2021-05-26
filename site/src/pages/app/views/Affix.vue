<template>
  <article class="markdown">
    <ExampleHeaderArea name="Affix" title="固钉" desc="将页面元素钉在可视范围。">
      <li>
        当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
      </li>
      <li>页面可视范围过小时，慎用此功能以免遮挡页面内容。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-affix>
          <span class="demo-affix">固定在最顶部</span>
        </r-affix>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>简单使用，当元素不可见时，直接固定在最顶端。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-affix offset-top="50">
          <span class="demo-affix">固定在顶部 50px 的位置</span>
        </r-affix>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>当滚动到一定距离时再固定。</template>
      <template #code><Offset /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-affix offset-bottom="20">
          <span class="demo-affix">固定在底部 20px 的位置</span>
        </r-affix>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。</p>
        <p>
          注意，<code>offset-top</code>和<code>offset-bottom</code>只可以设置一个，如果都设置，会使用<code>offset-top</code>。
        </p>
      </template>
      <template #code><FixedBottom /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-affix offset-top="100" id="test">
          <span class="demo-affix">固定在顶部 100px 的位置</span>
        </r-affix>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>当固定状态发生改变时，会触发事件。</template>
      <template #code><StatusChange /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Affix from "../../../../../src/components/affix";
import Message from "../../../../../src/components/message";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Offset,
  FixedBottom,
  StatusChange,
  APITable,
} from "../../../examples-code/components/affix";

onMounted(() => {
  const affix = new Affix();

  affix.config("#test").events({
    onChange: (affixed) => {
      Message.info(`当前状态：${affixed}`);
    },
  });
});

const anchors: string[] = [
  "基础用法",
  "偏移",
  "固定在底部",
  "固定状态改变时的回调",
  "API",
];
</script>

<style scope>
.demo-affix {
  display: inline-block;
  color: #fff;
  padding: 10px 30px;
  text-align: center;
  background: #1890ff;
}
</style>
