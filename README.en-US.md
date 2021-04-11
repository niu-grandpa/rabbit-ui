<p align="center">
    <a href="https://github.com/niu-grandpa/rabbit-ui">
        <img width="200" src="./assets/logo.svg">
    </a>
</p>

English | [简体中文](./README.md)

<h1>
RabbitUI
    <h3>A lightweight UI plug-in library written in TypeScript and based on JavaScript</h3>
</h1>

> At present, the project is still in the production stage. In the future, more components will be updated and more detailed documentation and official website details page will be produced

### Features

- Elegant, concise, and huge and bloated people look dazzling structure Say goodbye

- It does not rely on any third party framework, and is based on native JavaScript

- Custom tags that use small amounts of HTML code and are semantically readable

- Can be used directly in Vue, React, or other existing projects

- Rich components and features to meet most site scenarios

- Careful, beautiful UI

-Documentation in detail

### Install

- Using npm:

```text
npm install rabbit-simple-ui --save
```

- Using a script tag for global use:

Import the file directly in the browser using the script and link tags, and use the global variable `Rabbit`.

```html
<!--import the style-->
<link rel="stylesheet" href="dist/styles/rabbit.css">
<!--import RabbitUI -->
<script type="text/javascript" src="rabbit.min.js"></script>
```

## Usage

Browser environment example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
     <!--import the style-->
    <link rel="stylesheet" href="dist/styles/rabbit.css">
</head>
    
<body>
    <!--Alert component-->
    <r-alert type="success" message="Success Text"></r-alert>
    <!--Tooltip component-->
    <r-tooltip content="这里是提示文字">鼠标经过这段文字时，会显示一个气泡框</r-tooltip>
    <!--Collapse component-->
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
<!--import Rabbit.js-->
<script type="text/javascript" src="rabbit.min.js"></script>
<script>
    const Alert = new Rabbit.Alert();   
    const Tooltip = new Rabbit.Tooltip();  
    const Collapse = new Rabbit.Collapse();  
</script>
</html>
```

NPM environment

It is recommended to use NPM for installation, enjoy the convenience of the ecosystem and tools, and work well with Webpack. Of course, we also recommend using ES2015.

```js
import Rabbit from 'rabbit-simple-ui';

const Alert = new Rabbit.Alert();   
const Tooltip = new Rabbit.Tooltip();  
const Collapse = new Rabbit.Collapse();  
```

Using css via import:

```js
import 'rabbit-simple-ui/dist/styles/rabbit.css';
```

## Import as needed

With the help of [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), you can load components on demand and reduce file size. First install and configure it in file '.babelrc ':

```js
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "rabbit-simple-ui",
    "libraryDirectory": "src/components"
  }]]
}
```

Then import the components as needed to reduce the size:

```js
import { Alert, Message } from 'rabbit-simple-ui';
```

### Especially remind

-According to the need to still need to import the reference style that the **main js** or the root component `import 'rabbit-simple-ui/dist/styles/rabbit. CSS';`

## Browser Support

Modern browsers and Internet Explorer 10+.

## Related links

- [TypeScript](https://www.tslang.cn/)
- [Webpack](http://webpack.github.io/)
- [Iconfont](https://www.iconfont.cn/)
- [ViewUI](https://www.iviewui.com/)
- [Ant Design](https://ant.design/index-cn)
- [Ant Design of Vue](https://2x.antdv.com/docs/vue/introduce-cn/)
- [Element](https://element.eleme.cn/)
- [Element-angular](https://element-angular.faas.ele.me/guide/install)

## Contribute

If you wish to participate in contribution, welcome [Pull Request](https://github.com/vueComponent/ant-design-vue/pulls) or email contact 2864103063@qq.com, the contribution guide has not yet been produced

## LICENSE

[MIT](https://github.com/niu-grandpa/RabbitUI/blob/master/LICENSE)