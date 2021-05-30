# Circle 进度环

通过图表展示操作的当前进度。

## 何时使用

图表类组件。一般有两种用途：

- 显示某项任务进度的百分比；

- 统计某些指标的占比。

## 代码示例

基础用法

* 圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。

```html
<r-circle percent="80">
  <span style="font-size: 24px">80%</span>
</r-circle>
<r-circle percent="100" stroke-color="#5cb85c">
  <i class="rab-icon rab-icon-ios-checkmark" style="font-size: 60px; color: #5cb85c"></i>
</r-circle>
<r-circle percent="35" stroke-color="#ff5500">
  <i class="rab-icon rab-icon-ios-close" style="font-size: 50px; color: #ff5500"></i>
</r-circle>
```

配合外部组件使用

- 通过数据的联动和逻辑控制，实现交互效果。

```html
<r-circle percent="0" id="test">
  <span id="percentText" style="font-size: 24px">0%</span>
</r-circle>
<div class="rab-btn-group rab-btn-group-lg">
  <button type="button" class="rab-btn rab-btn-icon-only" onclick="add()">
    <i class="rab-icon rab-icon-ios-add"></i>
  </button>
  <button type="button" class="rab-btn rab-btn-icon-only" onclick="minus()">
    <i class="rab-icon rab-icon-ios-remove"></i>
  </button>
</div>

<script>
    const circle = new Rabbit.Circle();
    const test = circle.config('#test');
    const percentText = document.querySelector('#percentText')!;

    let percent = 0;

    add = () => {
        if (percent >= 100) {
            return false;
        }
        percent += 10;
        percent == 100 ? (test.strokeColor = '#5cb85c') : '';
        test.percent = percent;
        percentText.textContent = `${percent}%`;
    };

    minus = () => {
        if (percent <= 0) {
            return false;
        }
        percent -= 10;
        test.percent = percent;
        test.strokeColor = '#1890ff';
        percentText.textContent = `${percent}%`;
    };
</script>
```

自定义更多样式

- 通过自定义内容和丰富的配置，可以组合出很多统计效果。
- 注意！标签容器下必须具有一个父元素。

```html
<style>
   .demo-circle-custom h1 {
        display: inline-block;
        color: #3f414d;
        font-size: 28px;
        font-weight: normal;
        margin: 24px 0;
    }
    
    .demo-circle-custom p {
        color: #657180;
        margin: 16px;
        font-size: 14px;
    }
    
    .demo-circle-custom span {
        display: block;
        padding-top: 15px;
        color: #657180;
        font-size: 14px;
    }
    
    .demo-circle-custom span:before {
        content: '';
        display: block;
        width: 50px;
        height: 1px;
        margin: 0 auto;
        background: #e0e3e6;
        position: relative;
        top: -15px;
    }
    
    .demo-circle-custom span i {
        font-style: normal;
        color: #3f414d;
    }
</style>

<r-circle 
  size="250" 
  trail-width="4" 
  stroke-width="5" 
  percent="75" 
  stroke-linecap="square" 
  stroke-color="#43a3fb"
>
  <div class="demo-circle-custom">
    <h1>42,001,776</h1>
    <p>消费人群规模</p>
    <span>
      总占人数
      <i>75%</i>
    </span>
  </div>
</r-circle>
```

仪表盘

- 通过设置属性 `dashboard="true"`，可以很方便地实现仪表盘样式的进度环。

```html
<r-circle percent="80" dashboard="true">
  <span style="font-size: 24px">80%</span>
</r-circle>
```

<p style="font-size: 32px">Attributes</p>

### Collapse

| 属性           | 说明                                                         | 默认值   |
| -------------- | ------------------------------------------------------------ | -------- |
| percent        | 百分比                                                       | 0        |
| size           | 图表的宽度和高度，单位 px                                    | 120      |
| stroke-linecap | 进度环顶端的形状，可选值为`square`（方）和`round`（圆）      | round    |
| stroke-width   | 进度环的线宽，单位 px                                        | 6        |
| stroke-color   | 进度环的颜色，支持传入数组显示为渐变色，标签属性上设置数组的格式的值为`'["xxxx","xxx"]'` | \#1890ff |
| trail-width    | 进度环背景的线宽，单位 px                                    | 5        |
| trail-color    | 进度环背景的颜色                                             | \#eaeef2 |
| dashboard      | 是否显示为仪表盘                                             | false    |

### Config  方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 参数 | 说明                                              | 类型   |
| ---- | ------------------------------------------------- | ------ |
| el   | 配置当前选定的 circle，必须是选择器名称或者元素名 | String |

该方法返回以下两个值：

- `percent`

- `strokeColor`

| 返回值      | 说明                   | 类型                 | 默认值  |
| ----------- | ---------------------- | -------------------- | ------- |
| percent     | 响应式设置百分比       | Number               | 0       |
| strokeColor | 响应式设置进度环的颜色 | String  \| String[ ] | #1890ff |
