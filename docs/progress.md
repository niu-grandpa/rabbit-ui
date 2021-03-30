# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

> 注意：使用前需要先全局实例化一次该构造函数  `new Rabbit.Progress()`

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

## 代码示例

- 基本用法

标准的进度条。

```html
<r-progress percent="30"></r-progress>
<r-progress percent="50" status="active"></r-progress>
<r-progress percent="70" status="wrong"></r-progress>
<r-progress percent="100" status="success"></r-progress>
<r-progress percent="50" status="warning"></r-progress>
<r-progress percent="50" show-text="false"></r-progress>
```

- 百分比内显

设置属性 `text-inside="true"` 可以将百分比显示在进度条内部。

需要通过属性 `stroke-width` 设置一个足够的高度。

```html
<r-progress
  text-inside="true" 
  stroke-width="20" 
  percent="30">
</r-progress>

<r-progress
  text-inside="true" 
  stroke-width="20" 
  percent="70" 
  status="active">
</r-progress>

<r-progress
  text-inside="true" 
  stroke-width="20" 
  percent="100" 
  status="success">
</r-progress>

<r-progress
  text-inside="true" 
  stroke-width="20" 
  percent="80" 
  status="warning">
</r-progress>

<r-progress
  text-inside="true" 
  stroke-width="20" 
  percent="50" 
  status="wrong">
</r-progress>
```

- 渐变色

设置属性 `stroke-color` 为数组时，可以显示为渐变色。

数组只能设置为两项。

```html
<r-progress percent="99" stroke-color="['#108ee9', '#87d068']"></r-progress>
<r-progress
 percent="99" 
 stroke-color="['#108ee9', '#87d068']" 
 status="active">
</r-progress>
```

- 分段进度条

标准的进度条。

```html
<r-progress percent="60" success-percent="30"></r-progress>
```

<p style="font-size: 32px">Attributes</p>

#### Progress

| 属性               | 说明                                                         | 默认值 |
| ------------------ | ------------------------------------------------------------ | ------ |
| percent         | 百分比                                                       | 0      |
| status          | 状态，可选值为`normal`、`active`、`wrong`、`success`、`warning` | normal |
| stroke-width    | 进度条的线宽，单位 px                                        | 10     |
| stroke-color    | 进度条的颜色，传入格式为数组，显示为渐变色                   | -      |
| show-text       | 隐藏数值或状态图标                                           | false  |
| success-percent | 已完成的分段百分比                                           | 0      |
| text-inside     | 百分比是否置于进度条内                                       | false  |

### Config 方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 名称   | 参数                 | 可设置的属性                |
| ------ | -------------------- |  --------------------------- |
| config | `el`，配置选定的 progress 组件 | `percent`、`successPercent` |

## config 使用

### 动态设置进度

进度条的进度不可能是固定不变的，这就需要在异步场景下使用组件内置的方法 `config(el).percent`  进行设置，以  jQuery 的 ajax 为例：

```html
<r-progress percent="0" id="upload"></r-progress>
<script>
    const progress = new Progress();
    let num = 0;
	// 假设场景是在下载数据    
	$.ajax({
        url: '/api/someurl',
        type: 'get',
        // ....相关代码省略
        success() {
           // ...相关代码省略
           num++;
           progress.config('#upload').percent = num;
           if(num >= 100) $('#upload').attr('status','success');
        }
        error() {
       	   // 设置进度的状态为wrong
           $('#upload').attr('status','wrong');
        }        
    })
</script>
```

