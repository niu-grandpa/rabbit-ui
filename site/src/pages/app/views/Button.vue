<template>
  <article class="markdown">
    <ExampleHeaderArea name="Button" title="按钮" desc="按钮用于开始一个即时操作。">
      <li>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</li>
    </ExampleHeaderArea>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn">默认按钮</button>
        <button type="button" class="rab-btn rab-btn-primary">主要按钮</button>
        <button type="button" class="rab-btn rab-btn-dashed">虚线按钮</button>
        <button type="button" class="rab-btn rab-btn-text">文本按钮</button>
        <br /><br />
        <button type="button" class="rab-btn rab-btn-info">信息按钮</button>
        <button type="button" class="rab-btn rab-btn-success">成功按钮</button>
        <button type="button" class="rab-btn rab-btn-warning">警告按钮</button>
        <button type="button" class="rab-btn rab-btn-error">危险按钮</button>
      </template>
      <template #header><span id="按钮类型">按钮类型</span></template>
      <template #desc>
        <p>按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
        <p>通过添加不同的类名创建不同样式的按钮</p>
      </template>
      <template #code><Type /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div style="background: rgb(190, 200, 200); padding: 20px">
          <button type="button" class="rab-btn rab-btn-ghost">默认按钮</button>
          <button type="button" class="rab-btn rab-btn-primary rab-btn-ghost">
            主要按钮
          </button>
          <button type="button" class="rab-btn rab-btn-dashed rab-btn-ghost">
            虚线按钮
          </button>
          <button type="button" class="rab-btn rab-btn-text rab-btn-ghost">
            文本按钮
          </button>
          <br /><br />
          <button type="button" class="rab-btn rab-btn-info rab-btn-ghost">
            信息按钮
          </button>
          <button type="button" class="rab-btn rab-btn-success rab-btn-ghost">
            成功按钮
          </button>
          <button type="button" class="rab-btn rab-btn-warning rab-btn-ghost">
            警告按钮
          </button>
          <button type="button" class="rab-btn rab-btn-error rab-btn-ghost">
            危险按钮
          </button>
        </div>
      </template>
      <template #header><span id="幽灵按钮">幽灵按钮</span></template>
      <template #desc>
        幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
      </template>
      <template #code><Ghost /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button
          type="button"
          icon="ios-search"
          class="rab-btn rab-btn-primary rab-btn-circle"
        ></button>
        <button type="button" icon="ios-search" class="rab-btn rab-btn-primary">
          搜索
        </button>
        <button
          type="button"
          icon="ios-search"
          class="rab-btn rab-btn-primary rab-btn-circle"
        >
          搜索
        </button>
        <button type="button" class="rab-btn rab-btn-primary rab-btn-circle">
          圆角按钮
        </button>
        <br /><br />
        <button type="button" icon="ios-search" class="rab-btn rab-btn-circle"></button>
        <button type="button" icon="ios-search" class="rab-btn">搜索</button>
        <button type="button" icon="ios-search" class="rab-btn rab-btn-circle">
          搜索
        </button>
        <button type="button" class="rab-btn rab-btn-circle">圆角按钮</button>
      </template>
      <template #header><span id="图标按钮及按钮形状">图标按钮及按钮形状</span></template>
      <template #desc>
        <p>
          通过设置<code>icon</code>属性在<code>button</code>内嵌入一个<code>icon</code>，或者直接在<code>button</code>内添加<code>i</code>标签。
        </p>
        <p>
          使用<code>button</code>的<code>icon</code>属性，图标位置将添加在最左边，如果需要自定义位置，则直接在<code>button</code>内添加
          <code>i</code>标签。
        </p>
        <p>通过添加类名<code>rab-btn-circle</code>，可将按钮置为圆的形状。</p>
      </template>
      <template #code><IconWithCircle /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn rab-btn-primary rab-btn-lg">主要按钮</button>
        <button type="button" class="rab-btn">默认按钮</button>
        <button type="button" class="rab-btn rab-btn-dashed rab-btn-sm">虚线按钮</button>
      </template>
      <template #header><span id="按钮尺寸">按钮尺寸</span></template>
      <template #desc>
        <p>按钮有三种尺寸：大、默认（中）、小</p>
        <p>
          通过添加类名<code>rab-btn-lg</code>和<code>rab-btn-sm</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。
        </p>
      </template>
      <template #code><Size /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" class="rab-btn rab-btn-success rab-btn-long">
          提交按钮
        </button>
        <br /><br />
        <button type="button" class="rab-btn rab-btn-error rab-btn-long">删除按钮</button>
      </template>
      <template #header><span id="长按钮">长按钮</span></template>
      <template #desc>
        通过添加类名<code>rab-btn-long</code>可将按钮宽度设置为 100%
        使按钮适合其父宽度,常用于弹窗内操作按钮。
      </template>
      <template #code><Long /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button disabled type="button" class="rab-btn">默认按钮(禁用)</button>
        <button disabled type="button" class="rab-btn rab-btn-primary">
          主要按钮(禁用)
        </button>
        <button disabled type="button" class="rab-btn rab-btn-dashed">
          虚线按钮(禁用)
        </button>
        <button disabled type="button" class="rab-btn rab-btn-text">
          文本按钮(禁用)
        </button>
      </template>
      <template #header><span id="不可用状态">不可用状态</span></template>
      <template #desc>
        通过添加<code>disabled</code>属性可将按钮设置为不可用状态。
      </template>
      <template #code><Disabled /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <button type="button" loading="true" class="rab-btn rab-btn-primary">
          Loading...
        </button>
        <button
          type="button"
          id="testBtn1"
          class="rab-btn rab-btn-primary"
          @click="handleClick1"
        >
          Click me!
        </button>
        <button
          type="button"
          id="testBtn2"
          class="rab-btn rab-btn-primary"
          icon="ios-power"
          @click="handleClick2"
        >
          Click me!
        </button>
        <button type="button" loading="true" class="rab-btn rab-btn-circle" />
        <button
          type="button"
          loading="true"
          class="rab-btn rab-btn-primary rab-btn-circle"
        />
      </template>
      <template #header><span id="加载中状态">加载中状态</span></template>
      <template #desc>
        通过添加<code>loading="true"</code>属性可以让按钮处于加载中状态
      </template>
      <template #code><Loading /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <h4>基本</h4>
        <div class="rab-btn-group">
          <button type="button" class="rab-btn">Cancel</button>
          <button type="button" class="rab-btn rab-btn-primary">Confirm</button>
        </div>
        <div class="rab-btn-group">
          <button disabled type="button" class="rab-btn">Yesterday</button>
          <button disabled type="button" class="rab-btn">Today</button>
          <button disabled type="button" class="rab-btn">Tomorrow</button>
        </div>
        <div class="rab-btn-group">
          <button type="button" class="rab-btn rab-btn-primary">L</button>
          <button type="button" class="rab-btn">M</button>
          <button type="button" class="rab-btn">M</button>
          <button type="button" class="rab-btn rab-btn-dashed">R</button>
        </div>
        <h4>图标</h4>
        <div class="rab-btn-group">
          <button type="button" class="rab-btn rab-btn-primary">
            <i class="rab-icon rab-icon-ios-arrow-back"></i>
            <span>Backward</span>
          </button>
          <button type="button" class="rab-btn rab-btn-primary">
            <span>Forward</span>
            <i class="rab-icon rab-icon-ios-arrow-forward"></i>
          </button>
        </div>
        <div class="rab-btn-group">
          <button
            type="button"
            icon="ios-skip-backward"
            class="rab-btn rab-btn-primary"
          ></button>
          <button
            type="button"
            icon="ios-skip-forward"
            class="rab-btn rab-btn-primary"
          ></button>
        </div>
        <div class="rab-btn-group">
          <button type="button" icon="ios-color-wand" class="rab-btn"></button>
          <button type="button" icon="ios-sunny" class="rab-btn"></button>
          <button type="button" icon="ios-crop" class="rab-btn"></button>
          <button type="button" icon="ios-color-filter" class="rab-btn"></button>
        </div>
        <h4>圆角</h4>
        <div class="rab-btn-group rab-btn-group-circle">
          <button type="button" class="rab-btn rab-btn-primary">
            <i class="rab-icon rab-icon-ios-arrow-back"></i>
            <span>Backward</span>
          </button>
          <button type="button" class="rab-btn rab-btn-primary">
            <span>Forward</span>
            <i class="rab-icon rab-icon-ios-arrow-forward"></i>
          </button>
        </div>
        <div class="rab-btn-group rab-btn-group-circle">
          <button
            type="button"
            icon="ios-skip-backward"
            class="rab-btn rab-btn-primary"
          ></button>
          <button
            type="button"
            icon="ios-skip-forward"
            class="rab-btn rab-btn-primary"
          ></button>
        </div>
        <div class="rab-btn-group rab-btn-group-circle">
          <button type="button" icon="ios-color-wand" class="rab-btn"></button>
          <button type="button" icon="ios-sunny" class="rab-btn"></button>
          <button type="button" icon="ios-crop" class="rab-btn"></button>
          <button type="button" icon="ios-color-filter" class="rab-btn"></button>
        </div>
        <h4>尺寸</h4>
        <div class="rab-btn-group rab-btn-group-lg">
          <button type="button" class="rab-btn">Large</button>
          <button type="button" class="rab-btn">Large</button>
        </div>
        <div class="rab-btn-group">
          <button type="button" class="rab-btn">Default</button>
          <button type="button" class="rab-btn">Default</button>
        </div>
        <div class="rab-btn-group rab-btn-group-sm">
          <button type="button" class="rab-btn">Small</button>
          <button type="button" class="rab-btn">Small</button>
        </div>
        <br /><br />
        <div class="rab-btn-group rab-btn-group-lg rab-btn-group-circle">
          <button type="button" class="rab-btn">Large</button>
          <button type="button" class="rab-btn">Large</button>
        </div>
        <div class="rab-btn-group rab-btn-group-circle">
          <button type="button" class="rab-btn">Default</button>
          <button type="button" class="rab-btn">Default</button>
        </div>
        <div class="rab-btn-group rab-btn-group-sm rab-btn-group-circle">
          <button type="button" class="rab-btn">Small</button>
          <button type="button" class="rab-btn">Small</button>
        </div>
      </template>
      <template #header><span id="按钮组合">按钮组合</span></template>
      <template #desc>实现按钮组合的效果</template>
      <template #code><Group /></template>
    </CodeBox>
    <CodeBox>
      <template #case>
        <div class="rab-btn-group rab-btn-group-vertical">
          <button type="button" icon="logo-facebook" class="rab-btn"></button>
          <button type="button" icon="logo-twitter" class="rab-btn"></button>
          <button type="button" icon="logo-googleplus" class="rab-btn"></button>
          <button type="button" icon="logo-tumblr" class="rab-btn"></button>
        </div>
      </template>
      <template #header><span id="按钮组纵向排列">按钮组纵向排列</span></template>
      <template #desc>按钮组纵向排列</template>
      <template #code><Placement /></template>
    </CodeBox>
    <h2 id="API">API</h2>
    <APITable />
    <Anchor :linkList="anchors" />
  </article>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import Button from "../../../../../src/components/button";
import { Anchor, ExampleHeaderArea, CodeBox } from "../../../components";
import {
  Type,
  Ghost,
  IconWithCircle,
  Size,
  Long,
  Disabled,
  Loading,
  Group,
  Placement,
  APITable,
} from "../../../examples-code/components/button";

let button: Button;

onMounted(() => {
  button = new Button();
});

const handleClick1 = () => {
  button.config("#testBtn1").loading = true;
};
const handleClick2 = () => {
  button.config("#testBtn2").loading = true;
  setTimeout(() => {
    button.config("#testBtn2").loading = false;
  }, 2000);
};

const anchors: string[] = [
  "按钮类型",
  "幽灵按钮",
  "图标按钮及按钮形状",
  "按钮尺寸",
  "长按钮",
  "不可用状态",
  "加载中状态",
  "按钮组合",
  "按钮组纵向排列",
  "API",
];
</script>

<style lang="less" scope>
.rab-btn-group {
  margin-right: 8px;
  .rab-btn {
    margin-right: 0;
  }
}
</style>
