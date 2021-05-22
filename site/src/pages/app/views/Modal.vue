<template>
  <article class="markdown">
    <ExampleHeaderArea name="Modal" title="模态框" desc="模态对话框。">
      <li>
        需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用<code>Modal</code>
        在当前页面正中打开一个浮层，承载相应的操作。
      </li>
      <li>
        另外当需要一个简洁的确认框询问用户时，可以使用<code>MiniModal.confirm()</code>。
      </li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <button class="rab-btn rab-btn-primary" @click="handleModal1">显示对话框</button>
        <r-modal title="普通的Modal对话框标题" id="m1">
          <div>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </div>
        </r-modal>
      </template>
      <template #header><span id="基础用法">基础用法</span></template>
      <template #desc>
        <p>
          最简单的使用方法，设置属性<code>visable</code>为 true/false 来显示/隐藏对话框。
        </p>
        <p>
          可以使用<code>config</code>方法提供的 API<code>visible</code>动态控制显示隐藏。
        </p>
        <p>默认按键盘<code>ESC</code>键也可以关闭。</p>
        <p>注意！容器内的节点必须具有一个父元素。</p>
      </template>
      <template #code><Basic /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn" @click="handleModal2">不带标题栏</button>
        <button class="rab-btn" @click="handleModal3">国际化</button>
        <button class="rab-btn" @click="handleModal4">设置宽度</button>
        <r-modal id="m2">
          <div>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </div>
        </r-modal>
        <r-modal title="Modal Title" ok-text="ok" cancel-text="cancel" id="m3">
          <div>
            <p>Some Content...</p>
            <p>Some Content...</p>
            <p>Some Content...</p>
          </div>
        </r-modal>
        <r-modal title="自定义宽度" width="360px" id="m4">
          <div>
            <p>自定义宽度，单位 px，默认 520px。</p>
            <p>
              对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动
              <code>auto</code>。
            </p>
          </div>
        </r-modal>
      </template>
      <template #header><span id="自定义外观">自定义外观</span></template>
      <template #desc>控制是否显示标题栏、自定义按钮文字、自定义宽度。</template>
      <template #code><Custom /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn rab-btn-primary" @click="handleModal5">异步关闭</button>
        <r-modal title="对话框标题" loading="true" id="m5">
          <p>点击确定后，对话框将在 2秒 后关闭。</p>
        </r-modal>
      </template>
      <template #header><span id="异步关闭">异步关闭</span></template>
      <template #desc>
        设置属性<code>loading="true"</code>后，点击确定按钮对话框不会自动消失，并显示
        loading 状态，需要手动关闭对话框，常用于表单提交。
      </template>
      <template #code><Aysnc /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn" @click="handleModal6">禁用右上角关闭(含Esc键)</button>
        <button class="rab-btn" @click="handleModal7">禁用遮罩层关闭</button>
        <r-modal title="对话框标题" closable="false" id="m6">
          <div>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </div>
        </r-modal>
        <r-modal title="对话框标题" mask-closable="false" id="m7">
          <div>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </div>
        </r-modal>
      </template>
      <template #header><span id="禁用关闭">禁用关闭</span></template>
      <template #desc>可以禁用关闭和遮罩层关闭</template>
      <template #code><DisabledClose /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn" @click="handleModal8">垂直居中</button>
        <button class="rab-btn" @click="handleModal9">距离顶部20px</button>
        <r-modal title="对话框标题" class-name="vertical-center-modal" id="m8">
          <div>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </div>
        </r-modal>
        <r-modal title="对话框标题" class-name="demo-custom-modal" id="m9">
          <div>
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
          </div>
        </r-modal>
      </template>
      <template #header><span id="自定义位置">自定义位置</span></template>
      <template #desc>
        可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class
        名称，从而实现更多自定义的样式，比如垂直居中。
      </template>
      <template #code><Position /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button class="rab-btn" @click="handleModal10">显示全屏对话框</button>
        <r-modal title="全屏对话框" fullscreen="true" id="m10">
          <p>这是一个全屏的对话框</p>
        </r-modal>
      </template>
      <template #header><span id="全屏">全屏</span></template>
      <template #desc>
        <p>设置属性<code>fullscreen</code>可以全屏显示。</p>
        <p>设置属性<code>footer-hide</code>可以隐藏底部内容。</p>
      </template>
      <template #code><FullScreen /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Message from "../../../../../src/components/message";
import Modal from "../../../../../src/components/modal";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Basic,
  Aysnc,
  Custom,
  Position,
  DisabledClose,
  FullScreen,
  APITable,
} from "../../../examples-code/components/modal";

let modal: Modal,
  timer: any = null;

onMounted(() => {
  modal = new Modal();
});

const handleModal1 = () => {
  modal.config("#m1").visible = true;
  modal.config("#m1").events({
    onOk: () => {
      Message.info("点击了确定");
    },
    onCancel: () => {
      Message.info("点击了取消");
    },
  });
};
const handleModal2 = () => {
  modal.config("#m2").visible = true;
};
const handleModal3 = () => {
  modal.config("#m3").visible = true;
};
const handleModal4 = () => {
  modal.config("#m4").visible = true;
};
const handleModal5 = () => {
  modal.config("#m5").visible = true;
  modal.config("#m5").events({
    onOk: () => {
      timer = setTimeout(() => {
        modal.config("#m5").visible = false;
      }, 2000);
    },
    onCancel: () => {
      clearTimeout(timer);
    },
  });
};
const handleModal6 = () => {
  modal.config("#m6").visible = true;
};
const handleModal7 = () => {
  modal.config("#m7").visible = true;
};
const handleModal8 = () => {
  modal.config("#m8").visible = true;
};
const handleModal9 = () => {
  modal.config("#m9").visible = true;
};
const handleModal10 = () => {
  modal.config("#m10").visible = true;
};

const anchors: string[] = [
  "基础用法",
  "自定义外观",
  "异步关闭",
  "禁用关闭",
  "自定义位置",
  "全屏",
  "API",
];
</script>

<style lang="less" scope>
.rab-btn {
  margin-right: 8px;
}

.vertical-center {
  &-modal {
    display: flex;
    align-items: center;
    justify-content: center;

    .rab-modal {
      top: 0;
    }
  }
}

.rab-modal {
  p {
    margin: 0 !important;
  }
}

.demo-custom-modal .rab-modal {
  top: 20px;
}
</style>
