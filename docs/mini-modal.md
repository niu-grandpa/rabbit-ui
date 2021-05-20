# MiniModal 轻量对话框

创建一次性的轻量级对话框。

## 何时使用

- 当需要一个简洁的确认框询问用户时，可以调用 `Rabbit.MiniModal.confirm()` 实例方法创建。

## 代码示例

基本用法

- 四种基本的对话框，只提供一个确定按钮。

```html
<button class="rab-btn" onclick="instance('info')">消息</button>
<button class="rab-btn" onclick="instance('success')">成功</button>
<button class="rab-btn" onclick="instance('warning')">警告</button>
<button class="rab-btn" onclick="instance('error')">错误</button>

<script>
	const title = '对话框标题';
    const content = '这是一段对话框的内容';

    instance = (type) => {
      switch (type) {
          case 'info':
              Rabbit.MiniModal.info({
                  title,
                  content
              });
              break;
          case 'success':
              Rabbit.MiniModal.success({
                  title,
                  content
              });
              break;
          case 'warning':
              Rabbit.MiniModal.warning({
                  title,
                  content
              });
              break;
          case 'error':
              Rabbit.MiniModal.error({
                  title,
                  content
              });
              break;
      }
    };
</script>
```

确认对话框

- 快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。
- 将`dangerouslyUseHTMLString`属性设置为 true，`content` 就会被当作 HTML 片段处理。

```html
-
```

> `title` 和 `content` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `content` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `content` 属性。

#### Modal instance

通过直接调用以下方法来使用：

- `Rabbit.MiniModal.info(config)`
- `Rabbit.MiniModal.success(config)`
- `Rabbit.MiniModal.warning(config)`
- `Rabbit.MiniModal.error(config)`
- `Rabbit.MiniModal.confirm(config)`

以上方法隐式地创建及维护。参数 config 为对象，具体说明如下：

## API

| 属性       | 说明                                                         | 类型             | 默认值 |
| ---------- | ------------------------------------------------------------ | ---------------- | ------ |
| title      | 标题                                                         | String           | -      |
| content    | 内容                                                         | String           | -      |
| width      | 宽度，单位 px                                                | Number \| String | 416    |
| okText     | 确定按钮的文字                                               | String           | 确定   |
| cancelText | 取消按钮的文字，只在`Modal.confirm()`下有效                  | String           | 取消   |
| loading    | 点击确定按钮时是否显示 loading 状态，开启则需手动调用`Modal.remove()`来关闭对话框 | Boolean          | false  |
| scrollable | 页面是否可以滚动                                             | Boolean          | false  |
| keyboard   | 是否可以按 Esc 键关闭                                        | Boolean          | false  |
| onOk       | 点击确定的回调                                               | Function         | -      |
| onCancel   | 点击取消的回调，只在`Modal.confirm()`下有效                  | Function         | -      |
| lockScroll | 是否禁止对页面滚动条的修改                                   | Boolean          | true   |

另外提供了全局关闭对话框的方法：

- `Rabbit.MiniModal.remove()`