<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Poptip"
      title="气泡提示"
      desc="点击/鼠标移入元素，弹出气泡式的卡片浮层。"
    >
      <li>
        当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。
      </li>
      <li>
        和<code>Tooltip</code>类似，具有很多相同配置，不同点是<code>Poptip</code>
        以卡片的形式承载了更多的内容，比如链接、表格、按钮等。
      </li>
      <li>
        <code>Poptip</code
        >还<code>confirm</code>确认框，与<code>Modal</code>不同的是，它会出现在就近元素，相对轻量。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <r-poptip trigger="hover" title="标题" content="提示内容">
          <button type="button" class="rab-btn">hover 激活</button>
        </r-poptip>
        <r-poptip title="标题" content="提示内容" id="test1">
          <button type="button" class="rab-btn">click 激活</button>
        </r-poptip>
        <r-poptip trigger="focus" title="标题" content="提示内容">
          <button type="button" class="rab-btn">focus 激活</button>
        </r-poptip>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div class="top">
          <r-poptip title="提示标题" content="提示内容" placement="top-start">
            <button class="rab-btn">上左</button>
          </r-poptip>
          <r-poptip title="提示标题" content="提示内容">
            <button class="rab-btn">上边</button>
          </r-poptip>
          <r-poptip title="提示标题" content="提示内容" placement="top-end">
            <button class="rab-btn">上右</button>
          </r-poptip>
        </div>
        <div class="center">
          <div class="center-left">
            <r-poptip title="提示标题" content="提示内容" placement="left-start">
              <button class="rab-btn">左上</button> </r-poptip
            ><br /><br />
            <r-poptip title="提示标题" content="提示内容" placement="left">
              <button class="rab-btn">左边</button> </r-poptip
            ><br /><br />
            <r-poptip title="提示标题" content="提示内容" placement="left-end">
              <button class="rab-btn">左下</button>
            </r-poptip>
          </div>
          <div class="center-right">
            <r-poptip title="提示标题" content="提示内容" placement="right-start">
              <button class="rab-btn">右上</button> </r-poptip
            ><br /><br />
            <r-poptip title="提示标题" content="提示内容" placement="right">
              <button class="rab-btn">右边</button> </r-poptip
            ><br /><br />
            <r-poptip title="提示标题" content="提示内容" placement="right-end">
              <button class="rab-btn">右下</button>
            </r-poptip>
          </div>
        </div>
        <div class="bottom">
          <r-poptip title="提示标题" content="提示内容" placement="bottom-start">
            <button class="rab-btn">下左</button>
          </r-poptip>
          <r-poptip title="提示标题" content="提示内容" placement="bottom">
            <button class="rab-btn">下边</button>
          </r-poptip>
          <r-poptip title="提示标题" content="提示内容" placement="bottom-end">
            <button class="rab-btn">下右</button>
          </r-poptip>
        </div>
      </template>
      <template #header><span id="位置">位置</span></template>
      <template #desc>
        组件提供了12个不同的方向显示<code>Poptip</code>，具体配置可查看<code>API</code>。
      </template>
      <template #code><Placement /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-poptip id="test2" title="标题" content="<a id='closeBtn'>关闭提示框</a>">
          <a>Click 激活</a>
        </r-poptip>
      </template>
      <template #header><span id="从浮层内关闭">从浮层内关闭</span></template>
      <template #desc>
        通过 config 方法提供的<code>visible</code>api 来控制提示框的显示和隐藏。
      </template>
      <template #code><InsideClosed /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-poptip disabled="true">
          <button class="rab-btn">禁用提示</button>
        </r-poptip>
      </template>
      <template #header><span id="禁用提示">禁用提示</span></template>
      <template #desc> 通过设置属性<code>disabled="true"</code>禁止显示提示框 </template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-poptip width="400" placement="right" id="test3">
          <button class="rab-btn">复杂内容</button>
        </r-poptip>
      </template>
      <template #header><span id="嵌套复杂内容">嵌套复杂内容</span></template>
      <template #desc>实现复杂的内容。</template>
      <template #code><Complex /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-poptip
          word-wrap="true"
          width="200"
          content="史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。"
        >
          <button class="rab-btn">长文本</button>
        </r-poptip>
      </template>
      <template #header><span id="自动换行">自动换行</span></template>
      <template #desc>
        设置属性<code>word-wrap</code>，当超出宽度后，文本将自动换行，并两端对齐。
      </template>
      <template #code><AutoNewLine /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <r-poptip confirm="true" title="您确认删除这条内容吗？" id="test4">
          <button class="rab-btn">删除</button>
        </r-poptip>
        <r-poptip
          confirm="true"
          title="Are you sure delete this task?"
          ok-text="yes"
          cancel-text="no"
        >
          <button class="rab-btn">国际化</button>
        </r-poptip>
      </template>
      <template #header><span id="确认框">确认框</span></template>
      <template #desc>
        通过设置属性<code>confirm</code>开启确认框模式。确认框只会以 click
        的形式激活，并且只会显示 title 的内容，忽略 content。
      </template>
      <template #code><Confirm /> </template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Message from "../../../../../src/components/message";
import Poptip from "../../../../../src/components/poptip";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Placement,
  InsideClosed,
  Disabled,
  Complex,
  AutoNewLine,
  Confirm,
  APITable,
} from "../../../examples-code/components/poptip";

let poptip: Poptip, closeBtn: Element;

onMounted(() => {
  poptip = new Poptip();

  closeBtn = document.querySelector("#closeBtn")!;

  poptip.config("#test1").events({
    onPopperShow: () => {
      console.log("poptip show");
    },
    onPopperHide: () => {
      console.log("poptip hide");
    },
  });

  closeBtn.addEventListener("click", () => (poptip.config("#test2").visible = false));

  poptip.config("#test3").content = table;

  poptip.config("#test4").events({
    onOk: () => {
      Message.info("点击了确定");
    },
    onCancel: () => {
      Message.info("点击了取消");
    },
  });
});

const anchors: string[] = [
  "基础用法",
  "位置",
  "从浮层内关闭",
  "禁用提示",
  "嵌套复杂内容",
  "自动换行",
  "确认框",
  "API",
];

const table = `
      <div class="api">
          <table>
              <thead>
                  <tr>
                      <th>日期</th>
                      <th>姓名</th>
                      <th>地址</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
                  <tr>
                      <td>2021-01-17</td>
                      <td>山本先生</td>
                      <td>日本福冈县福冈市中央区樱坂</td>
                  </tr>
              </tbody>
          </table>
      </div>`;
</script>

<style scoped>
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
