<template>
  <article class="markdown">
    <ExampleHeaderArea name="Radio" title="单选框" desc="单选框。">
      <li>用于在多个备选项中选中单个状态。</li>
      <li>
        和 Select 的区别是，Radio
        所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-radio checked="true" id="demoRadio">Radio</r-radio>
      </template>
      <template #header><span id="单独使用">单独使用</span></template>
      <template #desc>最简单的用法。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-radio-group value="apple">
          <r-radio label="apple" icon="logo-apple">Apple</r-radio>
          <r-radio label="android" icon="logo-android">Android</r-radio>
          <r-radio label="windows" icon="logo-windows">Windows</r-radio>
        </r-radio-group>
        <br />
        <r-radio-group value="爪哇犀牛" id="demoRadioGroup">
          <r-radio label="金斑蝶">金斑蝶</r-radio>
          <r-radio label="爪哇犀牛">爪哇犀牛</r-radio>
          <r-radio label="印度黑羚">印度黑羚</r-radio>
        </r-radio-group>
      </template>
      <template #header><span id="组合使用">组合使用</span></template>
      <template #desc>
        <p>
          使用<code>r-radio-group</code>实现一组互斥的选项组。在组合使用时，<code>radio</code>使用<code>label</code>来自动判断。每个
          radio 的内容可以自定义。
        </p>
        <p>设置属性<code>icon</code>可以添加前缀图标。</p>
      </template>
      <template #code><Group /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-radio checked="true" disabled>Radio</r-radio>
        <r-radio-group value="爪哇犀牛">
          <r-radio label="金斑蝶" disabled>金斑蝶</r-radio>
          <r-radio label="爪哇犀牛">爪哇犀牛</r-radio>
          <r-radio label="印度黑羚">印度黑羚</r-radio>
        </r-radio-group>
      </template>
      <template #header><span id="不可用">不可用</span></template>
      <template #desc>通过设置属性<code>disabled</code>来禁用单选框。</template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-radio-group value="apple" direction="vertical">
          <r-radio label="apple">Apple</r-radio>
          <r-radio label="android">Android</r-radio>
          <r-radio label="windows">Windows</r-radio>
        </r-radio-group>
      </template>
      <template #header><span id="垂直">垂直</span></template>
      <template #desc>
        设置属性<code>direction="vertical"</code>可以垂直显示，按钮样式下无效。
      </template>
      <template #code><Vertical /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-radio-group value="北京" type="button">
          <r-radio label="北京">北京</r-radio>
          <r-radio label="上海">上海</r-radio>
          <r-radio label="深圳">深圳</r-radio>
          <r-radio label="杭州">杭州</r-radio>
        </r-radio-group>
        <br />
        <br />
        <r-radio-group value="北京" type="button">
          <r-radio label="北京">北京</r-radio>
          <r-radio label="上海" disabled>上海</r-radio>
          <r-radio label="深圳">深圳</r-radio>
          <r-radio label="杭州">杭州</r-radio>
        </r-radio-group>
        <br />
        <br />
        <r-radio-group value="北京" type="button">
          <r-radio label="北京" disabled>北京</r-radio>
          <r-radio label="上海" disabled>上海</r-radio>
          <r-radio label="深圳" disabled>深圳</r-radio>
          <r-radio label="杭州" disabled>杭州</r-radio>
        </r-radio-group>
      </template>
      <template #header><span id="按钮样式">按钮样式</span></template>
      <template #desc>
        组合使用时可以设置属性<code>type="button"</code>为来应用按钮的样式。
      </template>
      <template #code><Button /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-radio-group value="北京" type="button" button-style="solid">
          <r-radio label="北京">北京</r-radio>
          <r-radio label="上海">上海</r-radio>
          <r-radio label="深圳">深圳</r-radio>
          <r-radio label="杭州">杭州</r-radio>
        </r-radio-group>
        <br />
        <r-radio-group
          value="深圳"
          type="button"
          button-style="solid"
          style="margin-top: 16px"
        >
          <r-radio label="北京">北京</r-radio>
          <r-radio label="上海" disabled>上海</r-radio>
          <r-radio label="深圳">深圳</r-radio>
          <r-radio label="杭州">杭州</r-radio>
        </r-radio-group>
      </template>
      <template #header><span id="填底的按钮样式">填底的按钮样式</span></template>
      <template #desc>
        设置属性<code>button-style="solid"</code>可显示为实色填底的单选按钮样式。
      </template>
      <template #code><ButtonStyle /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-radio-group value="金斑蝶">
          <r-radio label="金斑蝶" type="border">金斑蝶</r-radio>
          <r-radio label="爪哇犀牛" type="border">爪哇犀牛</r-radio>
          <r-radio label="印度黑羚" type="border">印度黑羚</r-radio>
        </r-radio-group>
      </template>
      <template #header><span id="显示边框">显示边框</span></template>
      <template #desc> radio 设置属性<code>type="border"</code>可以显示边框。</template>
      <template #code><Border /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-radio-group value="北京" type="button" size="large">
          <r-radio label="北京">北京</r-radio>
          <r-radio label="上海">上海</r-radio>
          <r-radio label="深圳">深圳</r-radio>
          <r-radio label="杭州">杭州</r-radio>
        </r-radio-group>
        <br />
        <br />
        <r-radio-group value="北京" type="button">
          <r-radio label="北京">北京</r-radio>
          <r-radio label="上海">上海</r-radio>
          <r-radio label="深圳">深圳</r-radio>
          <r-radio label="杭州">杭州</r-radio>
        </r-radio-group>
        <br />
        <br />
        <r-radio-group value="北京" type="button" size="small">
          <r-radio label="北京">北京</r-radio>
          <r-radio label="上海">上海</r-radio>
          <r-radio label="深圳">深圳</r-radio>
          <r-radio label="杭州">杭州</r-radio>
        </r-radio-group>
      </template>
      <template #header><span id="尺寸">尺寸</span></template>
      <template #desc>
        通过设置属性<code>size</code>为<code>large</code>或<code>small</code>将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。
      </template>
      <template #code><Size /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Radio from "../../../../../src/components/radio";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Size,
  Disabled,
  Border,
  Button,
  ButtonStyle,
  Vertical,
  Group,
  APITable,
} from "../../../examples-code/components/radio";

onMounted(() => {
  const radio = new Radio();

  radio.config("#demoRadio").events({
    onChange: (state) => {
      console.log(`当前状态：${state}`);
    },
  });
  radio.config("#demoRadioGroup").events({
    onChange: (item) => {
      console.log(item);
    },
  });
});

const anchors: string[] = [
  "单独使用",
  "组合使用",
  "不可用",
  "垂直",
  "按钮样式",
  "填底的按钮样式",
  "显示边框",
  "尺寸",
  "API",
];
</script>
