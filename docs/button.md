# Button 按钮

按钮用于开始一个即时操作。

> 无需先实例化组件 ，如果使用组件提供的 API 则需要先实例化后使用。 `new Rabbit.Button()`

## 何时使用

- 标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

## 代码示例

- 按钮类型

按钮类型有：默认按钮、主按钮、虚线按钮、文字按钮以及四种颜色按钮。

通过添加不同的类名创建不同样式的按钮

```html
<button type="button" class="rab-btn">默认按钮</button>
<button type="button" class="rab-btn rab-btn-primary">主要按钮</button>
<button type="button" class="rab-btn rab-btn-dashed">虚线按钮</button>
<button type="button" class="rab-btn rab-btn-text">文本按钮</button>
<button type="button" class="rab-btn rab-btn-info">信息按钮</button>
<button type="button" class="rab-btn rab-btn-success">成功按钮</button>
<button type="button" class="rab-btn rab-btn-warning">警告按钮</button>
<button type="button" class="rab-btn rab-btn-error">危险按钮</button>
```

- 幽灵按钮

幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。

```html
<button type="button" class="rab-btn rab-btn-ghost">默认按钮</button>
<button type="button" class="rab-btn rab-btn-primary rab-btn-ghost">主要按钮</button>
<button type="button" class="rab-btn rab-btn-dashed rab-btn-ghost">虚线按钮</button>
<button type="button" class="rab-btn rab-btn-text rab-btn-ghost">文本按钮</button>
<button type="button" class="rab-btn rab-btn-info rab-btn-ghost">信息按钮</button>
<button type="button" class="rab-btn rab-btn-success rab-btn-ghost">成功按钮</button>
<button type="button" class="rab-btn rab-btn-warning rab-btn-ghost">警告按钮</button>
<button type="button" class="rab-btn rab-btn-error rab-btn-ghost">危险按钮</button>
```

- 图标按钮及按钮形状

通过设置`icon`属性在`button`内嵌入一个`icon`，或者直接在`button`内添加 `icon` 标签。

使用`button`的`icon`属性，图标位置将添加在最左边，如果需要自定义位置，则直接在`Button`内添加 `icon` 标签。

通过添加类名 `rab-btn-circle`，可将按钮置为圆的形状。

```html
<button type="button" icon="ios-search" class="rab-btn rab-btn-primary rab-btn-circle"></button>
<button type="button" icon="ios-search" class="rab-btn rab-btn-primary">搜索</button>
<button type="button" icon="ios-search" class="rab-btn rab-btn-primary rab-btn-circle">
  搜索
</button>
<button type="button" class="rab-btn rab-btn-primary rab-btn-circle">圆角按钮</button>
<button type="button" icon="ios-search" class="rab-btn rab-btn-circle"></button>
<button type="button" icon="ios-search" class="rab-btn">搜索</button>
<button type="button" icon="ios-search" class="rab-btn rab-btn-circle">搜索</button>
<button type="button" class="rab-btn rab-btn-circle">圆角按钮</button>

```

- 按钮尺寸

按钮有三种尺寸：大、默认（中）、小

通过添加类名`rab-btn-lg`和`rab-btn-sm`将按钮设置为大和小尺寸，不设置为默认（中）尺寸。

```html
<button type="button" class="rab-btn rab-btn-primary rab-btn-lg">主要按钮</button>
<button type="button" class="rab-btn">默认按钮</button>
<button type="button" class="rab-btn rab-btn-dashed rab-btn-sm">虚线按钮</button>
```

- 长按钮 

通过添加类名 `rab-btn-long` 可将按钮宽度设置为 100% 使按钮适合其父宽度,常用于弹窗内操作按钮。

```html
<button type="button" class="rab-btn rab-btn-success rab-btn-long">提交按钮</button>
<button type="button" class="rab-btn rab-btn-error rab-btn-long">删除按钮</button>
```

- 不可用状态

通过添加`disabled`属性可将按钮设置为不可用状态。

```html
<button disabled type="button" class="rab-btn">默认按钮(禁用)</button>
<button disabled type="button" class="rab-btn rab-btn-primary">主要按钮(禁用)</button>
<button disabled type="button" class="rab-btn rab-btn-dashed">虚线按钮(禁用)</button>
<button disabled type="button" class="rab-btn rab-btn-text">文本按钮(禁用)</button>
```

- 加载中状态	

通过添加`loading="true"`属性可以让按钮处于加载中状态

```html
<button type="button" loading="true" class="rab-btn rab-btn-primary">Loading...</button>
<button type="button" loading="true" class="rab-btn rab-btn-circle"></button>
<button type="button" loading="true" class="rab-btn rab-btn-primary rab-btn-circle"></button>

```

- 按钮组合

实现按钮组合的效果

```html
<h4>基本</h4>

<div class="rab-btn-group">
  <button type="button" class="rab-btn">Cancel</button>
  <button type="button" class="rab-btn rab-btn-primary">Confirm</button>
</div>

<div class="rab-btn-group">
  <button disabled type="button" class="rab-btn">Yesterday</button>
  <button disabled type="button" class="rab-btn">Today</button>
  <button disabled type="button" class="rab-btn">Tomorrow</button>
</div>

<div class="rab-btn-group">
  <button type="button" class="rab-btn rab-btn-primary">L</button>
  <button type="button" class="rab-btn">M</button>
  <button type="button" class="rab-btn">M</button>
  <button type="button" class="rab-btn rab-btn-dashed">R</button>
</div>

<h4>图标</h4>

<div class="rab-btn-group">
  <button type="button" class="rab-btn rab-btn-primary">
    <i class="rab-icon rab-icon-ios-arrow-back"></i>
    <span>Backward</span>
  </button>
  <button type="button" class="rab-btn rab-btn-primary">
    <span>Forward</span>
    <i class="rab-icon rab-icon-ios-arrow-forward"></i>
  </button>
</div>

<div class="rab-btn-group">
  <button type="button" icon="ios-skip-backward" class="rab-btn rab-btn-primary"></button>
  <button type="button" icon="ios-skip-forward" class="rab-btn rab-btn-primary"></button>
</div>

<div class="rab-btn-group">
  <button type="button" icon="ios-color-wand" class="rab-btn"></button>
  <button type="button" icon="ios-sunny" class="rab-btn"></button>
  <button type="button" icon="ios-crop" class="rab-btn"></button>
  <button type="button" icon="ios-color-filter" class="rab-btn"></button>
</div>

<h4>圆角</h4>

<div class="rab-btn-group rab-btn-group-circle">
  <button type="button" class="rab-btn rab-btn-primary">
    <i class="rab-icon rab-icon-ios-arrow-back"></i>
    <span>Backward</span>
  </button>
  <button type="button" class="rab-btn rab-btn-primary">
    <span>Forward</span>
    <i class="rab-icon rab-icon-ios-arrow-forward"></i>
  </button>
</div>

<div class="rab-btn-group rab-btn-group-circle">
  <button type="button" icon="ios-skip-backward" class="rab-btn rab-btn-primary"></button>
  <button type="button" icon="ios-skip-forward" class="rab-btn rab-btn-primary"></button>
</div>

<div class="rab-btn-group rab-btn-group-circle">
  <button type="button" icon="ios-color-wand" class="rab-btn"></button>
  <button type="button" icon="ios-sunny" class="rab-btn"></button>
  <button type="button" icon="ios-crop" class="rab-btn"></button>
  <button type="button" icon="ios-color-filter" class="rab-btn"></button>
</div>

<h4>尺寸</h4>

<div class="rab-btn-group rab-btn-group-lg">
  <button type="button" class="rab-btn">Large</button>
  <button type="button" class="rab-btn">Large</button>
</div>

<div class="rab-btn-group">
  <button type="button" class="rab-btn">Default</button>
  <button type="button" class="rab-btn">Default</button>
</div>

<div class="rab-btn-group rab-btn-group-sm">
  <button type="button" class="rab-btn">Small</button>
  <button type="button" class="rab-btn">Small</button>
</div>

<div class="rab-btn-group rab-btn-group-lg rab-btn-group-circle">
  <button type="button" class="rab-btn">Large</button>
  <button type="button" class="rab-btn">Large</button>
</div>

<div class="rab-btn-group rab-btn-group-circle">
  <button type="button" class="rab-btn">Default</button>
  <button type="button" class="rab-btn">Default</button>
</div>

<div class="rab-btn-group rab-btn-group-sm rab-btn-group-circle">
  <button type="button" class="rab-btn">Small</button>
  <button type="button" class="rab-btn">Small</button>
</div>

```

- 按钮组纵向排列

按钮组纵向排列

```html
<div class="rab-btn-group rab-btn-group-vertical">
  <button type="button" icon="logo-facebook" class="rab-btn"></button>
  <button type="button" icon="logo-twitter" class="rab-btn"></button>
  <button type="button" icon="logo-googleplus" class="rab-btn"></button>
  <button type="button" icon="logo-tumblr" class="rab-btn"></button>
</div>
```

<p style="font-size: 32px">Attributes</p>

### Button

| 属性       | 说明                                                 | 默认值 |
| ---------- | ---------------------------------------------------- | ------ |
| loading | 设置按钮为加载中状态，如果为动态设置请看下面方法介绍 | false  |
| disabled   | 设置按钮为禁用状态                                   | false  |
| icon    | 设置按钮的图标类型                                   | -      |

### Config 方法

配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的 API。（并不是每个组件都会有）

| 名称   | 参数                                            | 可设置的属性 |
| ------ | ----------------------------------------------- | ------------ |
| config | `el`，配置选定的 button 组件 | `loading`    |

## config 使用

### 动态设置按钮是否加载状态

常用于点击按钮后等待验证或其他异步操作，在这段时间按钮是被设为加载中的状态，并且在等待响应完成后按钮需切换为原始状态，所以这就需要用到 方法 `config(el).loading`。

示例：

```html
<button type="button" onclick="Validation()" class="rab-btn" id="check">验证</button>
<script>
	const btn = new Button();
    const btnCheck = btn.config('#check');
    
    Validation = () => {
        btnCheck.loading = true;
        setTimeout(() => {
    		btnCheck.loading = false;
            console.log('加载完成!');
 		}, 3000);
    }
</script>
```

