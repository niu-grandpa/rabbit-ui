# Drawer 抽屉

屏幕边缘滑出的浮层面板。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Drawer()`。
>
> 该元素标签能够添加额外的子元素节点作为内容部分，并自动追加到指定的内部节点上，且额外添加的所有节点必须只能具有一个父元素包裹

## 何时使用

抽屉从父窗体边缘滑入，覆盖住部分父窗体内容。用户在抽屉内操作时不必离开当前任务，操作完成后，可以平滑地回到到原任务。

- 当需要一个附加的面板来控制父窗体内容，这个面板在需要时呼出。比如，控制界面展示样式，往界面中添加内容。
- 当需要在当前任务流中插入临时任务，创建或预览附加内容。比如展示协议条款，创建子对象。


## 代码示例

基础抽屉

- 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。

```html
<button class="rab-btn rab-btn-primary" onclick="Op1()">Open</button>
<r-drawer title="Basic Drawer" id="test1">
  <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
  </div>
</r-drawer>
<script>
    let f1 = false;
    Op1 = () => {
       f1 === false ? (f1 = !f1) : f1;
       drawer.config('#test1').visable = f1;
    };
    drawer.config('#test1').events({
        onClose: () => {
            console.log('关闭抽屉');
        }
    });
</script>
```

自定义位置

- 自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭

```html
<button class="rab-btn" onclick="handleTop()">Top</button>
<button class="rab-btn" onclick="handleLeft()">Left</button>
<button class="rab-btn" onclick="handleBottom()">Bottom</button>
<button class="rab-btn" onclick="handleRight()">Right</button>

<r-drawer id="test2" title="Basic Drawer" placement="top">
  <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
  </div>
</r-drawer>

<r-drawer id="test3" title="Basic Drawer" placement="left">
  <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
  </div>
</r-drawer>

<r-drawer id="test4" title="Basic Drawer" placement="bottom">
  <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
  </div>
</r-drawer>

<r-drawer id="test5" title="Basic Drawer">
  <div>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
  </div>
</r-drawer>

<script>
    let top = false;
    handleTop = () => {
        top === false ? (top = !top) : top;
        drawer.config('#test2').visable = top;
    };

    let left = false;
    handleLeft = () => {
        left === false ? (left = !left) : left;
        drawer.config('#test3').visable = left;
    };

    let bottom = false;
    handleBottom = () => {
        bottom === false ? (bottom = !bottom) : bottom;
        drawer.config('#test4').visable = bottom;
    };

    let right = false;
    handleRight = () => {
        right === false ? (right = !right) : right;
        drawer.config('#test5').visable = right;
    };
</script>
```

在当前 DOM  内打开

- 设置抽屉在当前元素内打开

```html
<button class="rab-btn rab-btn-primary" onclick="handleOpenInner()">Open Inner</button>
<r-drawer title="Basic Drawer" id="test6" inner="true">
    <p>Some contents...</p>
</r-drawer>
<script>
    let inner = false;
    handleOpenInner = () => {
      inner === false ? (inner = !inner) : inner;
      drawer.config('#test6').visable = inner;
    };
</script>
```

多层抽屉 

- 在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。

```html
<button class="rab-btn rab-btn-primary" onclick="multilayerDrawer()">多层抽屉</button>

<r-drawer id="test7" title="多层抽屉" width="512px">
  <button class="rab-btn rab-btn-primary" onclick="secondDrawer()">打开第二层抽屉</button>
</r-drawer>

<r-drawer id="test8" title="第二层抽屉">
  <p>这是第二层抽屉。</p>
</r-drawer>
<script>
	let first = false;
    multilayerDrawer = () => {
      first === false ? (first = !first) : first;
      drawer.config('#test7').visable = first;
    };

    let second = false;
    secondDrawer = () => {
      second === false ? (second = !second) : second;
      drawer.config('#test8').visable = second;
    };
</script>
```

<p style="font-size: 32px">Attributes</p>

### Drawer

| 属性          | 说明                                                | 默认值 |
| :------------ | :-------------------------------------------------- | :----- |
| visible       | 初始 Drawer 是否可见                                | false  |
| title         | 抽屉标题                                            | -      |
| width         | 抽屉宽度。需要带像素单位                            | 256px  |
| closable      | 是否显示右上角的关闭按钮                            | false  |
| mask-closable | 是否允许点击遮罩层关闭                              | true   |
| mask          | 是否显示遮罩层                                      | true   |
| scrollable    | 页面是否可以滚动                                    | false  |
| placement     | 抽屉的方向，可选值为 top、  right、  bottom 、 left | right  |
| inner         | 是否设置抽屉在某个元素内打开，该元素需要有相对定位  | false  |
| lock-scroll   | 是否禁止对页面滚动条的修改                          | false  |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                              | 类型   |
| ---- | ------------------------------------------------- | ------ |
| el   | 配置当前选定的 drawer，必须是选择器名称或者元素名 | String |

该方法返回以下两个值：

- `title`

- `events(options)`

| 返回值 | 说明                        | 类型     | 默认值 |
| ------ | --------------------------- | -------- | ------ |
| title  | 响应式设置抽屉的标题        | String   | -      |
| events | 非响应式API，添加抽屉事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性    | 说明           | 回调参数 |
| :------ | :------------- | :------- |
| onClose | 关闭抽屉时触发 | 无       |