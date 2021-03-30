# Carousel走马灯

旋转木马，一组轮播的区域。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Carousel()`。
>
> 该元素标签能够添加额外的子元素节点作为内容部分，并自动追加到指定的内部节点上，且额外添加的所有节点必须只能具有一个父元素包裹

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## 代码示例

基础用法

- 最基本的用法。

```html
<r-carousel>
  <div>
      <div class="demo-carousel">1</div>
      <div class="demo-carousel">2</div>
      <div class="demo-carousel">3</div>
      <div class="demo-carousel">4</div>
  </div>
</r-carousel>
```

自动切换

- 设置属性 `autoplay="true"` 可以自动轮播，同时可以设置属性 `autoplay-speed` 改变自动播放的速度。

```html
<r-carousel autoplay="true" id="test">
  <div>
      <div class="demo-carousel">1</div>
      <div class="demo-carousel">2</div>
      <div class="demo-carousel">3</div>
      <div class="demo-carousel">4</div>
  </div>
</r-carousel>

<script>
	const carousel = new Rabbit.Carousel();
    carousel.config('#test').events({
        onChange: ([oldValue, value]) => {
            console.log(`原幻灯片索引: ${oldValue}`, `目前激活索引: ${value}`);
        },
        onClick: (index) => {
            console.log(index);
        }
    });
</script>
```

渐显

- 设置属性 `effect="fade"` 切换效果为渐显。

```html
<r-carousel effect="fade" autoplay="true">
  <div>
      <div class="demo-carousel">1</div>
      <div class="demo-carousel">2</div>
      <div class="demo-carousel">3</div>
      <div class="demo-carousel">4</div>
  </div>
</r-carousel>
```

<p style="font-size: 32px">Attributes</p>

### Carousel

| 属性           | 说明                                                         | 默认值 |
| :------------- | :----------------------------------------------------------- | :----- |
| autoplay       | 是否自动切换                                                 | false  |
| autoplay-speed | 自动切换的时间间隔，单位为毫秒                               | 2000   |
| dots           | 指示器的位置，可选值为 inside （内部），outside（外部），none（不显示） | inside |
| radius-dot     | 是否显示圆形指示器                                           | false  |
| trigger        | 指示器的触发方式，可选值为 click（点击），hover（悬停）      | click  |
| arrow          | 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示） | hover  |
| easing         | 动画效果                                                     | ease   |
| effect         | 动画效果函数，可切换为渐显 `fade`                            | -      |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                                | 类型   |
| ---- | --------------------------------------------------- | ------ |
| el   | 配置当前选定的 carousel，必须是选择器名称或者元素名 | String |

该方法返回以下值：

- `events(options)`

| 返回值 | 说明                            | 类型     | 默认值 |
| ------ | ------------------------------- | -------- | ------ |
| events | 非响应式API，添加提示框的事件， | Function | -      |

- `events`的参数 options 为对象，具体说明如下：

| 属性     | 说明                                                     | 回调参数                                       |
| :------- | :------------------------------------------------------- | :--------------------------------------------- |
| onClick  | 点击幻灯片时触发，返回索引值                             | (index:Number) => void                         |
| onChange | 幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引 | ([ oldValue, value ]: [Number,Number]) => void |