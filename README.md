<p align="center">
    <a href="https://github.com/niu-grandpa/rabbit-ui">
        <img width="200" src="./assets/logo.svg">
    </a>
</p>

简体中文 | [English](./README.en-US.md)

<h1>
RabbitUI
    <h3>一个基于 Javascript 并使用 Typescript 编写的轻量级 UI 插件库</h3>
</h1>

> 目前项目仍处于制作阶段，后续将会更新更多的组件，制作更加详细的文档介绍和官网详情页面

### 特性

- 优雅、简洁，与庞大且臃肿让人看了眼花缭乱的结构 Say goodbye

- 不依赖任何第三方框架，底层基于原生 Javascript，引入即用

- 使用少量 HTML 代码且语义化可读性高的自定义标签

- 能够在 Vue、JQuery或者其他现有项目中配合使用

- 丰富的组件和功能，满足大部分网站场景

- 细致、漂亮的 UI

- 事无巨细的文档

### 安装

- 使用 npm

```text
npm install rabbit-simple-ui --save
```

- 浏览器引入

在浏览器中使用 script 和 link 标签直接引入文件，并使用全局变量 `Rabbit`。

```html
<!--引入样式库-->
<link rel="stylesheet" href="dist/styles/rabbit.css">
<!--引入脚本-->
<script type="text/javascript" src="rabbit.min.js"></script>
```

## 示例

浏览器环境示例

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!--引入样式库-->
    <link rel="stylesheet" href="dist/styles/rabbit.css">
</head>
    
<body>
    <!--警告提示组件-->
    <r-alert type="success" message="Success Text"></r-alert>
    <!--工具提示组件-->
    <r-tooltip content="这里是提示文字">鼠标经过这段文字时，会显示一个气泡框</r-tooltip>
    <!--折叠面板组件-->
    <r-collapse defaultActiveKey="1">
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
</body>
<!--引入 Rabbit.js-->
<script type="text/javascript" src="rabbit.min.js"></script>
<script>
    // 需要先实例化组件的构造函数
    const Alert = new Rabbit.Alert();   
    const Tooltip = new Rabbit.Tooltip();  
    const Collapse = new Rabbit.Collapse();  
</script>
</html>
```

NPM 环境

推荐使用 npm 来安装，享受生态圈和工具带来的便利，更好地和 webpack 配合使用，当然，我们也推荐使用 ES2015。

```js
import Rabbit from 'rabbit-simple-ui';

const Alert = new Rabbit.Alert();   
const Tooltip = new Rabbit.Tooltip();
const Collapse = new Rabbit.Collapse();  
```

引入样式：

```js
import 'rabbit-simple-ui/dist/styles/rabbit.css';
```

## 按需引用

 借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积。首先安装，并在文件 `.babelrc` 中配置：

```text
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "rabbit-simple-ui",
    "libraryDirectory": "src/components"
  }]]
}
```

然后这样按需引入组件，就可以减小体积了：

```js
import { Alert, Message } from 'rabbit-simple-ui';
```

### 特别提醒

- 按需引用仍然需要导入样式，即在 **main.js** 或根组件执行 `import 'rabbit-simple-ui/dist/styles/rabbit.css';`

## 浏览器支持

现代浏览器和Internet Explorer 10+。

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