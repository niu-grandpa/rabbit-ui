# Affix 固钉

将页面元素钉在可视范围。

## 何时使用

- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
- 页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 代码示例

基础用法

- 简单使用，当元素不可见时，直接固定在最顶端。

```html
<style>
    .demo-affix {
        display: inline-block;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        background: #1890ff;
    }
</style>

<r-affix>
  <span class="demo-affix">固定在最顶部</span>
</r-affix>
```

偏移

- 当滚动到一定距离时再固定。

```html
<r-affix offset-top="50">
  <span class="demo-affix">固定在顶部 50px 的位置</span>
</r-affix>
```

固定在底部

- 在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。

- 注意，`offset-top`和`offset-bottom`只可以设置一个，如果都设置，会使用`offset-top`。

```html
<r-affix offset-bottom="20">
  <span class="demo-affix">固定在底部 20px 的位置</span>
</r-affix>
```

固定状态改变时的回调

- 当固定状态发生改变时，会触发事件。

```html
<r-affix offset-top="100" id="test">
  <span class="demo-affix">固定在顶部 100px 的位置</span>
</r-affix>

<script>
    const affix = new Rabbit.Affix();

    affix.config('#test').events({
        onChange: (affixed) => {
            Rabbit.Message.info(`当前状态：${affixed}`);
        }
    });
</script>
```

<p style="font-size: 32px">Attributes</p>

### Affix

| 属性          | 说明                                    | 默认值 |
| ------------- | --------------------------------------- | ------ |
| offset-top    | 距离窗口顶部达到指定偏移量后触发        | 0      |
| offset-bottom | 距离窗口底部达到指定偏移量后触发        | -      |
| use-capture   | addEventListener 原生的 useCapture 选项 | false  |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                             | 类型   |
| ---- | ------------------------------------------------ | ------ |
| el   | 配置当前选定的 alert，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `events(options)`

| 返回值 | 说明                            | 类型     | 默认值 |
| ------ | ------------------------------- | -------- | ------ |
| events | 非响应式API，添加提示框的事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                         | 回调参数                      |
| :------- | :--------------------------- | :---------------------------- |
| onChange | 固定状态改变时触发的回调函数 | (affixed:  boolean)  =>  void |