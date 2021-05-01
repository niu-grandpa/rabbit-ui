# Modal 对话框

模态对话框。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Modal()`

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Modal` 在当前页面正中打开一个浮层，承载相应的操作。

- 另外当需要一个简洁的确认框询问用户时，可以使用 `MiniModal.confirm()` 。

## 代码示例

基础用法

- 最简单的使用方法，设置属性`visable` 为 true / false 来显示 / 隐藏对话框。

- 可以使用 `config` 方法提供的 API `visible` 动态控制显示隐藏。

- 默认按键盘`ESC`键也可以关闭。
- 注意！容器内的节点必须具有一个父元素。

```html
<button class="rab-btn rab-btn-primary" onclick="handleModal1()">显示对话框</button>

<r-modal title="普通的Modal对话框标题" id="m1">
  <div>
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </div>
</r-modal>

<script>
		const modal = new Rabbit.Modal();
        handleModal1 = () => {
            modal.config('#m1').visible = true;
            modal.config('#m1').events({
                onOk: () => {
                    Rabbit.Message.info('点击了确定');
                },
                onCancel: () => {
                    Rabbit.Message.info('点击了取消');
                }
            });
   	    };
</script>
```

自定义外观

- 控制是否显示标题栏、自定义按钮文字、自定义宽度。

```html
<button class="rab-btn" onclick="handleModal2()">不带标题栏</button>
<button class="rab-btn" onclick="handleModal3()">国际化</button>
<button class="rab-btn" onclick="handleModal4()">设置宽度</button>

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

<script>
    const modal = new Rabbit.Modal();
    handleModal2 = () => {
        modal.config('#m2').visible = true;
    };
    handleModal3 = () => {
        modal.config('#m3').visible = true;
    };
    handleModal4 = () => {
        modal.config('#m4').visible = true;
    };
</script>
```

异步关闭

- 设置属性`loading=“true”`后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。

```html
<button class="rab-btn rab-btn-primary" onclick="handleModal5()">异步关闭</button>

<r-modal title="对话框标题" loading="true" id="m5">
  <p>点击确定后，对话框将在 2秒 后关闭。</p>
</r-modal>

<script>
    const modal = new Rabbit.Modal();
    let timer = null;
    
	handleModal5 = () => {
        modal.config('#m5').visible = true;
    };
    
    modal.config('#m5').events({
      onOk: () => {
          timer = setTimeout(() => {
              modal.config('#m5').visible = false;
          }, 2000);
      },
      onCancel: () => {
          clearTimeout(timer);
      }
    });
</script>
```

禁用关闭

- 可以禁用关闭和遮罩层关闭。

```html
<button class="rab-btn" onclick="handleModal6()">禁用右上角关闭(含Esc键)</button>
<button class="rab-btn" onclick="handleModal7()">禁用遮罩层关闭</button>

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

<script>
	const modal = new Rabbit.Modal();
    handleModal6 = () => {
      modal.config('#m6').visible = true;
    };
    handleModal7 = () => {
      modal.config('#m7').visible = true;
    };
</script>
```

自定义位置

- 可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。

```html
<style>
    .vertical-center-modal {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .vertical-center-modal .rab-modal {
        top: 0;
    }

    .demo-custom-modal .rab-modal {
        top: 20px;
    }
</style>

<button class="rab-btn" onclick="handleModal8()">垂直居中</button>
<button class="rab-btn" onclick="handleModal9()">距离顶部20px</button>

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

<script>
	const modal = new Rabbit.Modal();
    handleModal8 = () => {
      modal.config('#m8').visible = true;
    };
    handleModal9 = () => {
      modal.config('#m9').visible = true;
    };
</script>
```

全屏

- 设置属性 `fullscreen` 可以全屏显示。

- 设置属性 `footer-hide` 可以隐藏底部内容。

```html
<button class="rab-btn" onclick="handleModal10()">显示全屏对话框</button>

<r-modal title="全屏对话框" fullscreen="true" id="m10">
  <p>这是一个全屏的对话框</p>
</r-modal>

<script>
	const modal = new Rabbit.Modal();
    handleModal10 = () => {
      modal.config('#m10').visible = true;
    };
</script>
```

<p style="font-size: 32px">Attributes</p>

### Modal

| 属性          | 说明                                                         | 默认值 |
| ------------- | ------------------------------------------------------------ | ------ |
| visible       | 对话框默认是否显示                                           | false  |
| title         | 对话框标题                                                   | -      |
| closable      | 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭            | true   |
| mask-closable | 是否允许点击遮罩层关闭                                       | true   |
| loading       | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动关闭对话框 | false  |
| scrollable    | 页面是否可以滚动                                             | false  |
| fullscreen    | 是否全屏显示                                                 | false  |
| mask          | 是否显示遮罩层                                               | true   |
| ok-text       | 确定按钮文字                                                 | 确定   |
| cancel-text   | 取消按钮文字                                                 | 取消   |
| width         | 对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动`auto`。 | 520px  |
| footer-hide   | 不显示底部                                                   | false  |
| class-name    | 设置对话框容器`.rab-modal-wrap`的类名，可辅助实现垂直居中等自定义效果 | -      |
| z-index       | 层级                                                         | 1000   |
| lock-scroll   | 是否禁止对页面滚动条的修改                                   | false  |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 modal，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `visible`
- `title`
- `events(options)`

| 返回值  | 说明                         | 类型     | 默认值 |
| ------- | ---------------------------- | -------- | ------ |
| visible | 响应式设置或更新对话框的显示 | Boolean  | false  |
| title   | 响应式设置或更新对话框标题   | String   | -      |
| events  | 非响应式API，添加对话框事件  | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明           | 回调参数 |
| :------- | :------------- | :------- |
| onOk     | 点击确定的回调 | 无       |
| onCancel | 点击取消的回调 | 无       |