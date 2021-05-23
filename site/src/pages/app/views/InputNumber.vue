<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="InputNumber"
      title="数字输入框"
      desc="通过鼠标或键盘，输入范围内的数值。"
    >
      <li>当需要获取标准数值时。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-input-number value="1" min="1" max="10" id="test1" />
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>可以通过输入、鼠标点击或键盘的上下键来改变数值大小。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-input-number value="1" min="1" max="10" step="1.2" />
      </template>
      <template #header><span id="小数">小数</span></template>
      <template #desc>通过设置<code>step</code>属性控制每次改变的精度。</template>
      <template #code><Step /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-input-number
          value="1000"
          :formatter="formatter1"
          parser="[/\$\s?|(,*)/g, '']"
        />
        <r-input-number value="100" :formatter="formatter2" />
      </template>
      <template #header><span id="格式化展示">格式化展示</span></template>
      <template #desc>
        <p>
          通过<code>formatter</code>格式化数字，以展示具有具体含义的数据，往往需要配合<code>parser</code>一起使用。
        </p>
        <p><code>formatter</code>属性的值的字符串格式为：反引号包裹 ${value}。</p>
        <p>
          <code>parser</code
          >属性的值需为字符串的数组，第一个位置为要匹配替换的内容，第二个位置为替换后的结果；若无该属性则使用默认的匹配规则转换。
        </p>
      </template>
      <template #code><Formatter /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-input-number value="3" size="small" />
        <r-input-number value="3" />
        <r-input-number value="3" size="large" />
      </template>
      <template #header><span id="尺寸">尺寸</span></template>
      <template #desc>
        <p>
          通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认尺寸。
        </p>
      </template>
      <template #code><Size /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-input-number value="1" disabled="true" id="test2" />
        <button class="rab-btn rab-btn-primary" @click="handleClick">禁用状态</button>
      </template>
      <template #header><span id="不可用">不可用</span></template>
      <template #desc>
        通过设置<code>disabled="true"</code>属性禁用输入框，点击按钮切换状态。
      </template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-input-number value="1" readOnly="true" />
      </template>
      <template #header><span id="只读">只读</span></template>
      <template #desc>通过设置<code>readonly="true"</code>属性开启只读。</template>
      <template #code><ReadOnly /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-input-number value="1" editable="false" />
      </template>
      <template #header><span id="不可编辑">不可编辑</span></template>
      <template #desc>通过设置<code>editable="false"</code>属性控制是否能编辑。</template>
      <template #code><Editable /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-input-number value="1" controls-outside="true" />
      </template>
      <template #header><span id="按钮位置">按钮位置</span></template>
      <template #desc>
        通过设置<code>controls-outside="true"</code>属性可以将按钮位置置于输入框两侧。
      </template>
      <template #code><ControlsOutside /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import InputNumber from "../../../../../src/components/input-number";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Size,
  Editable,
  Formatter,
  Step,
  ReadOnly,
  Disabled,
  ControlsOutside,
  APITable,
} from "../../../examples-code/components/input-number";

let inputNumber: InputNumber,
  flag = true;

onMounted(() => {
  inputNumber = new InputNumber();
  inputNumber.config("#test1").events({
    onChange: (value) => {
      console.log("changed!", value);
    },
  });
});

const formatter1 = "`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')";
const formatter2 = "`${value}%`";

const handleClick = () => {
  flag ? (flag = !flag) : (flag = true);
  inputNumber.config("#test2").disabled = flag;
};

const anchors: string[] = [
  "基础用法",
  "小数",
  "格式化展示",
  "尺寸",
  "不可用",
  "只读",
  "不可编辑",
  "按钮位置",
  "API",
];
</script>

<style scoped>
r-input-number {
  margin-right: 12px;
}
</style>
