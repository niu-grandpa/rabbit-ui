# Collapse折叠面板

可以折叠/展开的内容区域。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Collapse()`

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。


## 代码示例

基础用法

- 通过设置属性 `defaultActiveKey` 可以同时展开多个面板，这个例子默认展开了第一个。

```html
<r-collapse defaultActiveKey="1" id="demoCollapse">
  <r-collapse-panel key="1" title="面板标题1">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="2" title="面板标题2">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="3" title="面板标题3">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
</r-collapse>

<script>
    const collapse = new Rabbit.Collapse();
    collapse.config('#demoCollapse').events({
        onChange: (key) => {
            console.log(key);
        }
    });
</script>
```

手风琴

- 通过设置属性`accordion="true"`开启手风琴模式，每次只能打开一个面板。

```html
<r-collapse defaultActiveKey="1" accordion="true">
  <r-collapse-panel key="1" title="面板标题1">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="2" title="面板标题2">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="3" title="面板标题3">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
</r-collapse>
```

简洁风格

- 设置属性 `simple="true"` 可以显示为一套没有边框的简洁样式。

```html
<r-collapse defaultActiveKey="1" simple="true">
  <r-collapse-panel key="1" title="面板标题1">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="2" title="面板标题2">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="3" title="面板标题3">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
</r-collapse>
```

隐藏箭头

- 通过给 `r-collapse-panel` 设置属性 `hide-arrow="true"` 可以隐藏面板的箭头图标

```html
<r-collapse defaultActiveKey="1">
  <r-collapse-panel key="1" title="面板标题1">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="2" title="面板标题2" hide-arrow="true">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
</r-collapse>
```

幽灵折叠面板

- 通过设置属性 `ghost="true"` 将折叠面板的背景变成透明。

```html
<r-collapse defaultActiveKey="1" ghost="true">
  <r-collapse-panel key="1" title="面板标题1">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="2" title="面板标题2">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
  <r-collapse-panel key="3" title="面板标题3">
      <p>狗是一种家养动物。它以忠诚和忠诚而闻名，在世界各地的许多家庭中，它都是受欢迎的客人。</p>
  </r-collapse-panel>
</r-collapse>
```

<p style="font-size: 32px">Attributes</p>

### Collapse

| 属性             | 说明                                                         | 默认值 |
| ---------------- | ------------------------------------------------------------ | ------ |
| defaultActiveKey | 初始化选中面板的 key，格式可以为 `string`、`number`、 `"[string]"` 或 `"[number]"` | -      |
| accordion        | 是否开启手风琴模式，开启后每次至多展开一个面板               | false  |
| simple           | 简洁边框风格的折叠面板                                       | false  |
| ghost            | 使折叠面板透明且无边框                                       | false  |

### Collapse-panel

| 属性       | 说明                                                         | 默认值 |
| ---------- | ------------------------------------------------------------ | ------ |
| key        | 当前面板的 key，与 r-collapse 的`defaultActiveKey`对应，不填为索引值 | index  |
| hide-arrow | 隐藏当前面板上的箭头                                         | false  |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                                | 类型   |
| ---- | --------------------------------------------------- | ------ |
| el   | 配置当前选定的 collapse，必须是选择器名称或者元素名 | String |

该方法返回以下两个值：

- `activeKey`

- `events(options)`

| 返回值    | 说明                            | 类型                                        | 默认值 |
| --------- | ------------------------------- | ------------------------------------------- | ------ |
| activeKey | 响应式设置当前激活面板的 key    | String  \| String[ ] \| Number \| Number[ ] | -      |
| events    | 非响应式API，添加折叠面板事件， | Function                                    | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                                                   | 回调参数               |
| :------- | :----------------------------------------------------- | :--------------------- |
| onChange | 切换面板时触发，返回当前已展开的面板的 key，格式为数组 | (key:string[]) => void |