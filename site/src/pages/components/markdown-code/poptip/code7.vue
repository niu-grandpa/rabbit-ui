<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="poptip" class="md-header-anchor"></a><span>Poptip</span></h3>
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
                            <td style="text-align: left"><span>trigger</span></td>
                            <td style="text-align: left">
                                <span>触发方式，可选值为</span><code>hover</code
                                ><span>（悬停）</span><code>click</code><span>（点击）</span
                                ><code>focus</code
                                ><span>（聚焦）,在 confirm 模式下，只有 click 有效</span>
                            </td>
                            <td style="text-align: left"><span>click</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>title</span></td>
                            <td style="text-align: left"><span>显示的标题</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>content</span></td>
                            <td style="text-align: left">
                                <span>显示的正文内容，只在非 confirm 模式下有效-</span>
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>placement</span></td>
                            <td style="text-align: left">
                                <span>提示框出现的位置，可选值为</span
                                ><code
                                    >top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end</code
                                ><span>，支持自动识别top</span>
                            </td>
                            <td style="text-align: left"><span>top</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>width</span></td>
                            <td style="text-align: left">
                                <span
                                    >宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为
                                    300px</span
                                >
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>confirm</span></td>
                            <td style="text-align: left"><span>是否开启对话框模式</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>disabled</span></td>
                            <td style="text-align: left"><span>是否禁用</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>ok-text</span></td>
                            <td style="text-align: left">
                                <span>确定按钮的文字，只在 confirm 模式下有效</span>
                            </td>
                            <td style="text-align: left"><span>确定</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>cancel-text</span></td>
                            <td style="text-align: left">
                                <span>取消按钮的文字，只在 confirm 模式下有效</span>
                            </td>
                            <td style="text-align: left"><span>取消</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>padding</span></td>
                            <td style="text-align: left"><span>自定义间距值</span></td>
                            <td style="text-align: left"><span>8px 16px</span></td>
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
                            <td><span>配置当前选定的 poptip，必须是选择器名称或者元素名</span></td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下三个值：</span></p>
            <ul>
                <li><code>title</code></li>
                <li><code>content</code></li>
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
                            <td><span>响应式设置提示框标题</span></td>
                            <td><span>String </span><span>|</span><span> Number</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>content</span></td>
                            <td><span>响应式设置提示框的内容</span></td>
                            <td><span>String</span><span>|</span><span> Number</span></td>
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
                            <td style="text-align: left"><span>onShow</span></td>
                            <td style="text-align: left"><span>在提示框显示时触发</span></td>
                            <td style="text-align: left"><span>无</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>onHide</span></td>
                            <td style="text-align: left"><span>在提示框消失时触发</span></td>
                            <td style="text-align: left"><span>无</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>onOK</span></td>
                            <td style="text-align: left">
                                <span>点击确定的回调，只在 confirm 模式下有效</span>
                            </td>
                            <td style="text-align: left"><span>无</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>onCancel</span></td>
                            <td style="text-align: left">
                                <span>点击取消的回调，只在 confirm 模式下有效</span>
                            </td>
                            <td style="text-align: left"><span>无</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>