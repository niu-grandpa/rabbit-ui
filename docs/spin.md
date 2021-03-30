# Spin 加载中

用于页面和区块的加载中状态。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Spin()`

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 代码示例

 基础用法

- 最简单使用 Spin 的方法。

```html
<r-spin></r-spin>
```

各种尺寸

- 通过设置`size`属性为`large`和`small`将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。

```html
<r-spin size="small"></r-spin>
<r-spin></r-spin>
<r-spin size="large"></r-spin>
```

居中固定

- 设置属性 `fix` 在容器内部垂直居中固定，需要父级有`relative`或`absolute`。

```html
<style>
    .demo-spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<div class="demo-spin-container">
    <r-spin fix></r-spin>
</div>
```

自定义内容

- 自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。

```html
<r-spin fix>加载中...</r-spin>
<r-spin fix>
  <i class="rab-icon rab-icon-loading1 rab-load-loop" style="font-size: 22px; height: 30px"></i>
  <div>Loading...</div>
</r-spin>
```

状态切换

- 控制 Spin 组件的显示和消失。

```html
<style>
    .demo-spin-article {
        width: 400px;
        height: 200px;
        padding: 10px;
        text-align: center;
        position: relative;
    }
</style>

<div class="demo-spin-article">
  <h3>登金陵凤凰台</h3>
  <address>李白</address>
  <article>
      <p>凤凰台上凤凰游，凤去台空江自流。</p>
      <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
      <p>三山半落青天外，二水中分白鹭洲。</p>
      <p>总为浮云能蔽日，长安不见使人愁。</p>
  </article>
  <r-spin fix size="large" id="demo_spin"></r-spin>
</div>
<br /> 切换显示状态：
<r-switch></r-switch>

<script>
    const spin = new Rabbit.Spin();
    const _switch = new Rabbit.Switch();
    _switch.onChange('r-switch', ([status]) => {
       document.querySelector('#demo_spin').style.display = status ? 'none' : '';
    });
</script>
```

整页加载 

- 使用Spin提供的 `show` 和 `hide` 方法可以全局加载和隐藏。

```html
<button class="rab-btn rab-btn-primary" onclick="handle1()">整页显示，3秒后关闭</button>
<button class="rab-btn rab-btn-primary" onclick="handle2()">自定义显示内容</button>
<script>
    window.handle1 = () => {
        spin.show();
        setTimeout(() => {
            spin.hide();
        }, 3000);
    };

    window.handle2 = () => {
        spin.show({
            content: `<i class="rab-icon rab-icon-loading1 rab-load-loop" 
						 style="font-size: 22px;height: 30px"
					  ></i>
           			  <div>Loading...</div>`
        });
        setTimeout(() => {
            spin.hide();
        }, 3000);
    };
</script>
```

<p style="font-size: 32px">Attributes</p>

### Spin

| 属性 | 说明                                         | 默认值 |
| :--- | :------------------------------------------- | :----- |
| size | Spin尺寸，可选值为`large`和`small`或者不设置 | -      |
| fix  | 是否固定，需要父级有`relative`或`absolute`   | -      |