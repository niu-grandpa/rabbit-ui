<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Notice"
      title="通知提醒框"
      desc="全局展示通知提醒信息。"
      :showTip="false"
    >
      <li>较为复杂的通知内容。</li>
      <li>带有交互的通知，给出用户下一步的行动点。</li>
      <li>系统主动推送。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn rab-btn-primary" @click="open">
          打开提醒
        </button>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>
          基本用法，默认在 4.5秒后关闭。如果<code>desc</code>
          参数为空或不填，则自动应用仅标题模式下的样式。
        </p>
        <p>建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。</p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <p>带描述信息</p>
        <button type="button" class="rab-btn" @click="notice('info')">消息</button>
        <button type="button" class="rab-btn" @click="notice('success')">成功</button>
        <button type="button" class="rab-btn" @click="notice('warning')">警告</button>
        <button type="button" class="rab-btn" @click="notice('error')">错误</button>
        <p>仅标题</p>
        <button type="button" class="rab-btn" @click="notice('info', true)">消息</button>
        <button type="button" class="rab-btn" @click="notice('success', true)">
          成功
        </button>
        <button type="button" class="rab-btn" @click="notice('warning', true)">
          警告
        </button>
        <button type="button" class="rab-btn" @click="notice('error', true)">错误</button>
      </template>
      <template #header><span id="提醒类型">提醒类型</span></template>
      <template #desc>
        <p>带有状态图标的提醒。</p>
        <p>带描述信息和仅标题。</p>
      </template>
      <template #code><Type /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn rab-btn-primary" @click="time">
          打开提醒
        </button>
      </template>
      <template #header><span id="自定义时长">自定义时长</span></template>
      <template #desc>自定义时长，为 0 则不自动关闭。</template>
      <template #code><Time /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="promise">打开提醒</button>
      </template>
      <template #header><span id="Promise 接口">Promise 接口</span></template>
      <template #desc>
        <p>
          可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Notice 将要结束时通过
          then 显示新的 Notice 。
        </p>
        <p>如果手动通过关闭按钮结束则无效。</p>
      </template>
      <template #code><Promise /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn rab-btn-primary" @click="html">
          打开提醒
        </button>
      </template>
      <template #header><span id="使用 HTML 片段">使用 HTML 片段</span></template>
      <template #desc>
        <p><code>title</code>和<code>desc</code>属性支持传入 HTML 片段</p>
        <p>
          将<code>dangerouslyUseHTMLString</code>属性设置为 true， 就会被当作 HTML
          片段处理。
        </p>
      </template>
      <template #code><UseHTML /></template>
    </CodeBox>
    <blockquote>
      <code>desc</code>属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML
      是非常危险的，因为容易导致<a
        href="https://en.wikipedia.org/wiki/Cross-site_scripting"
        target="_blank"
        >XSS 攻击</a
      >
      。因此在<code>dangerouslyUseHTMLString</code>
      打开的情况下，请确保<code>desc</code>的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给<code>desc</code>属性。
    </blockquote>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="closable">打开提醒</button>
      </template>
      <template #header><span id="隐藏关闭按钮">隐藏关闭按钮</span></template>
      <template #desc>
        设置属性<code>closable</code>为<code>false</code>可以不显示关闭按钮
      </template>
      <template #code><Closable /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import Notice from "../../../../../src/components/notice";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Type,
  Time,
  Promise,
  UseHTML,
  Closable,
  APITable,
} from "../../../examples-code/components/notice";

const open = () => {
  Notice.open({
    title: "这是通知标题",
    desc:
      "这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述",
    onClick: () => {
      console.log("Notification Clicked!");
    },
    onClose: () => {
      console.log("Notification Close!");
    },
  });
};

const notice = (
  type: "open" | "info" | "success" | "warning" | "error",
  nodesc = false
) => {
  Notice[type]({
    title: "这是通知标题",
    desc: nodesc
      ? ""
      : "这里是通知的描述,这里是通知的描述这里,是通知的描述,这里是通知的描述,这里是通知的描述",
  });
};

const time = () => {
  Notice.open({
    title: "这是通知标题",
    desc: "这条通知不会自动关闭，需要点击关闭按钮才可以关闭。",
    duration: 0,
  });
};

const promise = () => {
  Notice.open({
    title: "行程已发布",
    desc: "您的行程订单已发布，正在等待待车主接单...",
  }).then(() => {
    Notice.info({
      title: "已有车主接单啦！",
      desc: "你发布的行程订单已有车主接单了，请提前付款以免被取消订单！",
    }).then(() => {
      Notice.success({
        title: "费用支付成功",
        desc: "您的行程将在2021.9.9 12:30 开始",
      });
    });
  });
};

const html = () => {
  Notice.open({
    title: "HTML片段",
    desc: `<strong>这是 <i>HTML</i> 片段</strong>`,
    dangerouslyUseHTMLString: true,
  });
};

const closable = () => {
  Notice.open({
    title: "这是通知标题",
    closable: false,
  });
};
const anchors: string[] = [
  "基础用法",
  "提醒类型",
  "自定义时长",
  "Promise 接口",
  "使用 HTML 片段",
  "隐藏关闭按钮",
  "API",
];
</script>

<style scoped>
.rab-btn {
  margin-right: 8px;
}
</style>
