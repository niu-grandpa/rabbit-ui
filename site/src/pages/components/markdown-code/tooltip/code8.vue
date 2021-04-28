<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="tooltip" class="md-header-anchor"></a><span>Tooltip</span></h3>
            <figure>
                <table>
                    <thead>
                        <tr>
                            <th style="text-align: left"><span>属性</span></th>
                            <th style="text-align: left"><span>说明</span></th>
                            <th style="text-align: left"><span>默认值</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="text-align: left"><span>content</span></td>
                            <td style="text-align: left"><span>显示的内容</span></td>
                            <td style="text-align: left"><span>空</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>placement</span></td>
                            <td style="text-align: left">
                                <span>提示框出现的位置，可选值为</span
                                ><code
                                    >top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end</code
                                ><span>，自动识别</span>
                            </td>
                            <td style="text-align: left"><span>top</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>disabled</span></td>
                            <td style="text-align: left"><span>是否禁用提示框</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>delay</span></td>
                            <td style="text-align: left"><span>延迟显示，单位毫秒</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>always</span></td>
                            <td style="text-align: left"><span>是否总是可见</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>theme</span></td>
                            <td style="text-align: left"><span>背景颜色</span></td>
                            <td style="text-align: left"><span>dark</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>max-width</span></td>
                            <td style="text-align: left">
                                <span>最大宽度，超出最大值后，文本将自动换行，并两端对齐</span>
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>offset</span></td>
                            <td style="text-align: left"><span>出现位置的偏移量</span></td>
                            <td style="text-align: left"><span>0</span></td>
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
                            <td><span>配置当前选定的 tooltip，必须是选择器名称或者元素名</span></td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下两个值：</span></p>
            <ul>
                <li><code>content</code></li>
                <li><code>disabled</code></li>
                <li><code>always</code></li>
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
                            <td><span>content</span></td>
                            <td><span>响应式设置或更新提示框的内容</span></td>
                            <td><span>String </span><span>|</span><span> Number</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>disabled</span></td>
                            <td><span>响应式设置是否禁用提示框</span></td>
                            <td><span>Boolean</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>always</span></td>
                            <td><span>响应式设置是否总是可见</span></td>
                            <td><span>Boolean</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>events</span></td>
                            <td><span>非响应式API，添加提示框的事件</span></td>
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
                            <td style="text-align: left"><span>onVisibleChange</span></td>
                            <td style="text-align: left"><span>显示隐藏的回调</span></td>
                            <td style="text-align: left">
                                <span>(visible:boolean) =&gt; void</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>