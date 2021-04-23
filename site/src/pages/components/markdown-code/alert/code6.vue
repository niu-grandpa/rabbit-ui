<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h4><a name="alert" class="md-header-anchor"></a><span>Alert</span></h4>
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
                            <td><span>type</span></td>
                            <td>
                                <span>警告提示样式，可选值为</span><code>info</code><span>、</span
                                ><code>success</code><span>、</span><code>warning</code
                                ><span>、</span><code>error</code>
                            </td>
                            <td><span>info</span></td>
                        </tr>
                        <tr>
                            <td><span>title</span></td>
                            <td><span>提示标题</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>show-icon</span></td>
                            <td><span>是否显示图标</span></td>
                            <td><span>false</span></td>
                        </tr>
                        <tr>
                            <td><span>closable</span></td>
                            <td><span>是否可关闭</span></td>
                            <td><span>false</span></td>
                        </tr>
                        <tr>
                            <td><span>close-text</span></td>
                            <td><span>关闭按钮自定义文本</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>banner</span></td>
                            <td><span>应用顶部公告的样式</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>icon</span></td>
                            <td><span>自定义图标内容</span></td>
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
                            <td><span>配置当前选定的 alert，必须是选择器名称或者元素名</span></td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下值：</span></p>
            <ul>
                <li><code>title</code></li>
                <li><code>icon</code></li>
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
                            <td><span>title</span></td>
                            <td><span>响应式设置或更新警告提示内容</span></td>
                            <td><span>String</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>icon</span></td>
                            <td><span>响应式设置或更新图标内容</span></td>
                            <td><span>String</span></td>
                            <td><span>-</span></td>
                        </tr>
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
                            <td style="text-align: left"><span>onClose</span></td>
                            <td style="text-align: left"><span>关闭时触发的回调函数</span></td>
                            <td style="text-align: left">
                                <span>(event: MouseEvent) =&gt; void</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>