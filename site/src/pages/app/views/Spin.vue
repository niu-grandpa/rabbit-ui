<template>
  <article class="markdown">
    <ExampleHeaderArea name="Spin" title="加载中" desc="用于页面和区块的加载中状态。">
      <li>
        页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-spin />
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>最简单使用 Spin 的方法。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <a-row>
          <a-col :span="8"> <r-spin size="small" /> </a-col>
          <a-col :span="8"> <r-spin /> </a-col>
          <a-col :span="8"> <r-spin size="large" /> </a-col>
        </a-row>
      </template>
      <template #header><span id="各种尺寸">各种尺寸</span></template>
      <template #desc></template>
      <template #code><Size /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div class="demo-spin-container">
          <r-spin fix />
        </div>
      </template>
      <template #header><span id="居中固定">居中固定</span></template>
      <template #desc></template>
      <template #code><FixCenter /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <a-row>
          <a-col class="demo-spin-col" :span="8">
            <r-spin fix>加载中...</r-spin>
          </a-col>
          <a-col class="demo-spin-col" :span="8">
            <r-spin fix>
              <i class="rab-icon rab-icon-loading1 rab-load-loop"></i>
              <div>Loading...</div>
            </r-spin>
          </a-col>
        </a-row>
      </template>
      <template #header><span id="自定义内容">自定义内容</span></template>
      <template #desc></template>
      <template #code><CustomContent /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div class="demo-spin-article">
          <h3>登金陵凤凰台</h3>
          <address>李白</address>
          <article>
            <p>凤凰台上凤凰游，凤去台空江自流。</p>
            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
            <p>三山半落青天外，二水中分白鹭洲。</p>
            <p>总为浮云能蔽日，长安不见使人愁。</p>
          </article>
          <r-spin v-show="show" fix size="large" />
        </div>
        <br />
        切换显示状态：
        <r-switch />
      </template>
      <template #header><span id="状态切换">状态切换</span></template>
      <template #desc></template>
      <template #code><ChangeState /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn rab-btn-primary" @click="handleShow">
          整页显示，3秒后关闭
        </button>
        <button class="rab-btn rab-btn-primary" @click="handleHide">
          自定义显示内容
        </button>
      </template>
      <template #header><span id="整页加载">整页加载</span></template>
      <template #desc></template>
      <template #code><FullScreen /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Spin from "../../../../../src/components/spin";
import Switch from "../../../../../src/components/switch";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Size,
  FixCenter,
  CustomContent,
  ChangeState,
  FullScreen,
  APITable,
} from "../../../examples-code/components/spin";

const show = ref<boolean>(true);

let spin: Spin;

onMounted(() => {
  const _switch = new Switch();
  spin = new Spin();

  _switch.config("r-switch").events({
    onChange: (checked) => {
      show.value = !checked;
    },
  });
});

const handleShow = () => {
  spin.show();
  setTimeout(() => {
    spin.hide();
  }, 3000);
};
const handleHide = () => {
  spin.show({ content });
  setTimeout(() => {
    spin.hide();
  }, 3000);
};

const content = `
    <i class="rab-icon rab-icon-loading1 rab-load-loop" style="font-size: 28px;"></i>
    <div>Loading...</div>
    `;

const anchors: string[] = [
  "基础用法",
  "各种尺寸",
  "居中固定",
  "自定义内容",
  "状态切换",
  "整页加载",
  "API",
];
</script>

<style scope>
.demo-spin-container {
  display: inline-block;
  width: 200px;
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.demo-spin-col {
  height: 100px;
  position: relative;
  border: 1px solid #eee;
}
.demo-spin-article {
  width: 400px;
  height: 280px;
  padding: 10px;
  text-align: center;
  position: relative;
}
</style>
