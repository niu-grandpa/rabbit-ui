<template>
  <article class="markdown">
    <ExampleHeaderArea
      name="Message"
      title="全局提示"
      desc="全局展示操作反馈信息。"
      :showTip="false"
    >
      <li>可提供成功、警告和错误等反馈信息。</li>
      <li>顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn rab-btn-primary" @click="info">
          显示普通提示
        </button>
      </template>
      <template #header><span id="普通提示">普通提示</span></template>
      <template #desc>最基本的提示，默认在3秒后消失。</template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="success">显示成功提示</button>
        <button type="button" class="rab-btn" @click="warning">显示警告提示</button>
        <button type="button" class="rab-btn" @click="error">显示错误提示</button>
      </template>
      <template #header><span id="提示类型">提示类型</span></template>
      <template #desc>包括成功、失败、警告。</template>
      <template #code><Type /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="background('info')">
          显示普通提示
        </button>
        <button type="button" class="rab-btn" @click="background('success')">
          显示成功提示
        </button>
        <button type="button" class="rab-btn" @click="background('warning')">
          显示警告提示
        </button>
        <button type="button" class="rab-btn" @click="background('error')">
          显示错误提示
        </button>
      </template>
      <template #header><span id="带背景色">带背景色</span></template>
      <template #desc>
        设置属性<code>background</code>为<code>true</code>后，通知提示会显示背景色。
      </template>
      <template #code><Background /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="loading">显示加载中...</button>
      </template>
      <template #header><span id="加载中">加载中</span></template>
      <template #desc>
        进行全局 loading，异步自行移除。需要手动调用<code>destroy</code>方法关闭
      </template>
      <template #code><Loading /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="promise">
          显示一个Promise的提示
        </button>
      </template>
      <template #header><span id="Promise 接口">Promise 接口</span></template>
      <template #desc>
        <p>
          可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 Message
          将要结束时通过 then 显示新的 Message 。
        </p>
        <p>如果手动通过关闭按钮结束则无效。</p>
      </template>
      <template #code><Promise /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="time">显示一个10秒的提示</button>
      </template>
      <template #header><span id="自定义时长">自定义时长</span></template>
      <template #desc>
        自定义时长，也可以在<code>config</code>中全局配置，详见API。
      </template>
      <template #code><Time /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="closable">显示可关闭的提示</button>
      </template>
      <template #header><span id="可关闭">可关闭</span></template>
      <template #desc>设置<code>closable</code>为 true 后可以手动关闭提示。</template>
      <template #code><Closable /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn" @click="useHtml">使用 HTML 片段</button>
      </template>
      <template #header><span id="使用 HTML 片段">使用 HTML 片段</span></template>
      <template #desc>传入 HTML 片段</template>
      <template #code><UseHTML /></template>
    </CodeBox>
    <blockquote>
      <code>content</code>属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML
      是非常危险的，因为容易导致<a
        href="https://en.wikipedia.org/wiki/Cross-site_scripting"
        target="_blank"
        >XSS 攻击</a
      >
      。因此在<code>dangerouslyUseHTMLString</code>
      打开的情况下，请确保<code>content</code>的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给<code>content</code>属性。
    </blockquote>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import Message from "../../../../../src/components/message";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Time,
  Type,
  Promise,
  Loading,
  UseHTML,
  Closable,
  Background,
  APITable,
} from "../../../examples-code/components/message";

const info = () => {
  Message.info("这是一条普通的提示");
};
const success = () => {
  Message.success("这是一条成功的提示");
};
const warning = () => {
  Message.warning("这是一条警告的提示");
};
const error = () => {
  Message.error("这是一条错误的提示");
};
const background = (type: "info" | "success" | "warning" | "error") => {
  Message[type]({
    background: true,
    content: "这是一条带背景色的通知",
  });
};
const loading = () => {
  Message.loading({
    content: "正在加载中...",
    duration: 0,
  });
  setTimeout(() => Message.destroy(), 3000);
};
const promise = () => {
  Message.loading("正在加载中...").then(() => {
    Message.success("加载成功!").then(() => {
      Message.info("加载成功后的提示");
    });
  });
};
const time = () => {
  Message.success({
    content: "这是成功的提示信息，我将在10秒内消失",
    duration: 10,
  });
};
const closable = () => {
  Message.info({
    content: "可手动关闭的提示",
    duration: 8,
    closable: true,
  });
};
const useHtml = () => {
  Message.info({
    content: `<strong>这是 <i>HTML</i> 片段</strong>`,
    dangerouslyUseHTMLString: true,
  });
};

const anchors: string[] = [
  "普通提示",
  "提示类型",
  "带背景色",
  "加载中",
  "Promise 接口",
  "自定义时长",
  "可关闭",
  "使用 HTML 片段",
  "API",
];
</script>

<style scoped>
.rab-btn {
  margin-right: 8px;
}
</style>
