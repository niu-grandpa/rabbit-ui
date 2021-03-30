# Timeline 时间轴

可视化地呈现时间流信息。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Timeline()`

## 何时使用

- 当有一系列信息需按时间排列时，可正序和倒序。
- 需要有一条时间轴进行视觉上的串联时。

## 代码示例

- 基础用法

最简单定义一个时间轴的用法。

```html
<r-timeline>
  <r-timeline-item>
      <p class="time">1976s</p>
      <p class="content">第一代苹果问世</p>
  </r-timeline-item>
  <r-timeline-item>
      <p class="time">1984s</p>
      <p class="content">发布麦金塔电脑</p>
  </r-timeline-item>
  <r-timeline-item>
      <p class="time">2007s</p>
      <p class="content">发布 iPhone</p>
  </r-timeline-item>
  <r-timeline-item>
      <p class="time">2010s</p>
      <p class="content">发布 iPad</p>
  </r-timeline-item>
  <r-timeline-item color="gray">
      <p class="time">2011.10.05</p>
      <p class="content">史蒂夫·乔布斯去世</p>
  </r-timeline-item>
</r-timeline>
```

- 圆圈颜色 

圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，灰色表示当前任务状态停滞或取消，蓝色可表示正在进行或其他默认状态。

```html
<r-timeline>
  <r-timeline-item color="green">发布1.0版本</r-timeline-item>
  <r-timeline-item color="green">发布2.0版本</r-timeline-item>
  <r-timeline-item color="red">重大Bug</r-timeline-item>
  <r-timeline-item color="gray">推迟发布</r-timeline-item>
  <r-timeline-item>发布3.0版本</r-timeline-item>
</r-timeline>
```

- 最后一个 

通过添加属性`pending="true"`来标记最后一个为幽灵节点，标识还未完成。

```html
<r-timeline pending="true">
  <r-timeline-item>2021-04-01 创建服务器网站</r-timeline-item>
  <r-timeline-item>2021-04-01 解决了初始化网络问题</r-timeline-item>
  <r-timeline-item>2021-04-01 技术人员进行测试</r-timeline-item>
  <r-timeline-item><a href="#">查看更多</a></r-timeline-item>
</r-timeline>
```

- 自定义时间轴点

可根据实际场景⾃定义节点

```html
<r-timeline>
  <r-timeline-item
    dot="<i class='rab-icon rab-icon-ios-trophy'></i>" 
    color="green">
   发布里程碑版本
  </r-timeline-item>
  <r-timeline-item>发布1.0版本</r-timeline-item>
  <r-timeline-item>发布2.0版本</r-timeline-item>
  <r-timeline-item>发布3.0版本</r-timeline-item>
</r-timeline>
```

<p style="font-size: 32px">Attributes</p>

#### Timeline

| 属性       | 说明                           | 默认值 |
| ---------- | ------------------------------ | ------ |
| pending | 指定是否最后一个节点为幽灵节点 | -      |

#### Timeline-item 

| 属性     | 说明                                                         | 默认值 |
| -------- | ------------------------------------------------------------ | ------ |
| color | 圆圈颜色，可选值为`blue`、`red`、`green`、`gray`，或自定义色值 | blue   |
| dot   | 自定义时间轴点                                               | -      |

