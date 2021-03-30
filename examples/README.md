# 运行测试

1. 修改config文件夹下的webpack.dev.js里的代码， `plugins` ->  `new HtmlWebpackPlugin` -> `template`,
修改其路径

2. 把要测试的组件在main.ts 里将对应的 `xxxTest()` 取消注释

3. 运行`npm run dev`
