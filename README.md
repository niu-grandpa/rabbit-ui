<p align="center">
    <a href="https://github.com/niu-grandpa/rabbit-ui">
        <img width="200" src="./assets/logo.svg">
    </a>
</p>

简体中文 | [English](./README.en-US.md)

# RabbitUI

### 一个基于 JavaScript 的简洁 UI 组件库

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)
[![](https://img.shields.io/badge/npm-v1.5.0-orange)](https://www.npmjs.com/package/rabbit-simple-ui)
[![](https://data.jsdelivr.com/v1/package/npm/rabbit-simple-ui/badge)](https://www.jsdelivr.com/package/npm/rabbit-simple-ui) 

### 特性

- 使用语义化的自定义元素，易于分辨

- 优雅、简洁，与庞大且臃肿令人眼花缭乱的结构 say goodbye

- 不依赖任何第三方框架，底层基于原生 Javascript，引入即用

- 能够在 Vue、JQuery或者其他现有项目中配合使用

- 丰富的组件和功能，满足大部分网站场景

- 细致、漂亮的 UI

- 事无巨细的文档

### 安装

- 使用 npm，你将需要使用`TypeScript`，并在ts文件里编写和使用代码。 请确保你了解过它，并能够大致使用

```text
npm install rabbit-simple-ui --save
```

- 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `Rabbit`。

```html
<!--引入样式库-->
<link rel="stylesheet" href="dist/styles/rabbit.css">
<!--引入脚本-->
<script type="text/javascript" src="rabbit.min.js"></script>
```

## 示例

通过 CDN 的方式我们可以很容易地使用 Rabbit UI 写出一个示例：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>RabbitUI demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/rabbit-simple-ui/dist/styles/rabbit.css">
</head>
<body>
    <button type="button" class="rab-btn" onclick="show">Hello Rabbit UI</button>
    <r-modal title="Welcome" id="exampleModal">
       <p>Welcome to RabbitUI</p>
    </r-modal>
</body>
<script src="https://cdn.jsdelivr.net/npm/rabbit-simple-ui/dist/rabbit.min.js"></script>
<script>
    // 初始化modal
    const modal = new Rabbit.Modal();
    show = function() {
        modal.config('#exampleModal').visable = true;  
    }
</script>
</html>
```

NPM 环境

使用 npm 来安装，享受工具带来的便利，更好地和 webpack 配合使用，且推荐使用 ES2015。

```ts
import Alert from 'rabbit-simple-ui/src/components/alert';
import Tooltip from 'rabbit-simple-ui/src/components/alert';
import Collapse from 'rabbit-simple-ui/src/components/alert';

new Alert();   
new Tooltip();
new Collapse();  
```

引入样式：

```ts
import 'rabbit-simple-ui/dist/styles/rabbit.css';
```

## 按需引用

 借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积。首先安装，并在文件 `.babelrc` 中配置：

```text
npm install babel-plugin-import --save-dev
```

```json
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "rabbit-simple-ui",
    "libraryDirectory": "src/components"
  }]]
}
```

然后这样按需引入组件，就可以减小体积了：

```ts
import { Alert, Message } from 'rabbit-simple-ui';
```

### 特别提醒

- 按需引用仍然需要导入样式，即在 **main.js** 或根组件执行 `import 'rabbit-simple-ui/dist/styles/rabbit.css';`

## 浏览器支持

现代浏览器和Internet Explorer 9+。

## 相关链接

- [TypeScript](https://www.tslang.cn/)

- [Webpack](http://webpack.github.io/)
- [阿里巴巴矢量图标库](https://www.iconfont.cn/)
- [ViewUI](https://www.iviewui.com/)
- [Ant Design](https://ant.design/index-cn)

- [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Element](https://element.eleme.cn/)
- [Element-angular](https://element-angular.faas.ele.me/guide/install)

## 如何贡献

如果你希望参与贡献，欢迎 [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls)或者邮件联系 2864103063@qq.com ，贡献指南暂时还未制作

## LICENSE

[MIT](https://github.com/niu-grandpa/RabbitUI/blob/master/LICENSE)