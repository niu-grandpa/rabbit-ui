<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="pageheader" class="md-header-anchor"></a><span>PageHeader</span></h3>
            <figure>
                <table>
                    <thead>
                        <tr>
                            <th><span>属性</span></th>
                            <th><span>说明</span></th>
                            <th><span>默认值</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>title</span></td>
                            <td><span>自定义标题文字</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>sub-title</span></td>
                            <td><span>自定义的二级标题文字</span></td>
                            <td><span>-</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <h3><a name="config--方法" class="md-header-anchor"></a><span>Config 方法</span></h3>
            <p>
                <span
                    >配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的
                    API。（并不是每个组件都会有）</span
                >
            </p>
            <figure>
                <table>
                    <thead>
                        <tr>
                            <th><span>参数</span></th>
                            <th><span>说明</span></th>
                            <th><span>类型</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>el</span></td>
                            <td><span>配置当前选定的 poptip，必须是选择器名称或者元素名</span></td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下值：</span></p>
            <ul>
                <li><code>events(options)</code></li>
            </ul>
            <figure>
                <table>
                    <thead>
                        <tr>
                            <th><span>返回值</span></th>
                            <th><span>说明</span></th>
                            <th><span>类型</span></th>
                            <th><span>默认值</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span>events</span></td>
                            <td><span>非响应式API，添加提示框的事件，</span></td>
                            <td><span>Function</span></td>
                            <td><span>-</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <ul>
                <li><code>events</code><span>的参数 options 为对象，具体说明如下：</span></li>
            </ul>
            <figure>
                <table>
                    <thead>
                        <tr>
                            <th style="text-align: left"><span>属性</span></th>
                            <th style="text-align: left"><span>说明</span></th>
                            <th style="text-align: left"><span>回调参数</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="text-align: left"><span>onBack</span></td>
                            <td style="text-align: left"><span>返回按钮的点击事件</span></td>
                            <td style="text-align: left"><span>无</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>