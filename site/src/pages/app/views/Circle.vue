<template>
  <article class="markdown">
    <ExampleHeaderArea name="Circle" title="进度环" desc="通过图表展示操作的当前进度。">
      <li>显示某项任务进度的百分比；</li>
      <li>统计某些指标的占比。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <a-row>
          <a-col :span="8">
            <r-circle percent="80">
              <span style="font-size: 24px">80%</span>
            </r-circle>
          </a-col>
          <a-col :span="8">
            <r-circle percent="100" stroke-color="#5cb85c">
              <i
                class="rab-icon rab-icon-ios-checkmark"
                style="font-size: 60px; color: #5cb85c"
              ></i>
            </r-circle>
          </a-col>
          <a-col :span="8">
            <r-circle percent="35" stroke-color="#ff5500">
              <i
                class="rab-icon rab-icon-ios-close"
                style="font-size: 50px; color: #ff5500"
              ></i>
            </r-circle>
          </a-col>
        </a-row>
      </template>
      <template #header><span id="基础用法">基础用法</span>n</template>
      <template #desc>
        圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-circle percent="0" id="test">
          <span style="font-size: 24px">{{ percentText }}%</span>
        </r-circle>
        <div class="rab-btn-group rab-btn-group-lg">
          <button type="button" class="rab-btn rab-btn-icon-only" @click="add">
            <i class="rab-icon rab-icon-ios-add"></i>
          </button>
          <button type="button" class="rab-btn rab-btn-icon-only" @click="minus">
            <i class="rab-icon rab-icon-ios-remove"></i>
          </button>
        </div>
      </template>
      <template #header><span id="配合外部组件使用">配合外部组件使用</span>n</template>
      <template #desc>通过数据的联动和逻辑控制，实现交互效果。</template>
      <template #code><UseWithOther /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-circle
          size="250"
          trail-width="4"
          stroke-width="5"
          percent="75"
          stroke-linecap="square"
          stroke-color="#43a3fb"
        >
          <div class="demo-circle-custom">
            <h1>42,001,776</h1>
            <p>消费人群规模</p>
            <span>
              总占人数
              <i>75%</i>
            </span>
          </div>
        </r-circle>
      </template>
      <template #header><span id="自定义更多样式">自定义更多样式</span></template>
      <template #desc>
        <p>通过自定义内容和丰富的配置，可以组合出很多统计效果。</p>
        <p>注意！标签容器下必须具有一个父元素。</p>
      </template>
      <template #code><CustomStyle /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-circle percent="80" dashboard="true">
          <span style="font-size: 24px">80%</span>
        </r-circle>
      </template>
      <template #header><span id="仪表盘">仪表盘</span></template>
      <template #desc>
        通过设置属性<code>dashboard="true"</code>，可以很方便地实现仪表盘样式的进度环。
      </template>
      <template #code><Dashboard /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Circle from "../../../../../src/components/circle";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  UseWithOther,
  CustomStyle,
  Dashboard,
  APITable,
} from "../../../examples-code/components/circle";

interface CircleAPI {
  percent: number;
  strokeColor: string | string[];
}

let circle: Circle,
  test: CircleAPI,
  percent = 0;

const percentText = ref<number>(percent);

onMounted(() => {
  circle = new Circle();
  test = circle.config("#test");
});

const add = () => {
  if (percent >= 100) {
    return false;
  }
  percent += 10;
  percent == 100 ? (test.strokeColor = "#5cb85c") : "";
  test.percent = percent;
  percentText.value = percent;
};

const minus = () => {
  if (percent <= 0) {
    return false;
  }
  percent -= 10;
  test.percent = percent;
  test.strokeColor = "#1890ff";
  percentText.value = percent;
};

const anchors: string[] = [
  "基础用法",
  "配合外部组件使用",
  "自定义更多样式",
  "仪表盘",
  "API",
];
</script>

<style lang="less">
.demo-Circle-custom {
  & h1 {
    display: inline-block;
    color: #3f414d;
    font-size: 28px;
    font-weight: normal;
    margin: 24px 0;
  }
  & p {
    color: #657180;
    margin: 16px;
    font-size: 14px;
  }
  & span {
    display: block;
    padding-top: 15px;
    color: #657180;
    font-size: 14px;
    &:before {
      content: "";
      display: block;
      width: 50px;
      height: 1px;
      margin: 0 auto;
      background: #e0e3e6;
      position: relative;
      top: -15px;
    }
  }
  & span i {
    font-style: normal;
    color: #3f414d;
  }
}
</style>
