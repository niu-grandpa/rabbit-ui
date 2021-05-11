<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="radio" class="md-header-anchor"></a><span>Radio</span></h3>
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
                            <td style="text-align: left"><span>checked</span></td>
                            <td style="text-align: left"><span>单个是否选中</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>label</span></td>
                            <td style="text-align: left">
                                <span
                                    >只在组合使用时有效。指定当前选项的 value
                                    值，组合会自动判断当前选择的项目</span
                                >
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>disabled</span></td>
                            <td style="text-align: left"><span>是否禁用当前项</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>size</span></td>
                            <td style="text-align: left">
                                <span>单选框的尺寸，可选值为 </span><code>large</code><span>，</span
                                ><code>small</code><span> 或者不设置</span>
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>border</span></td>
                            <td style="text-align: left"><span>是否显示边框</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>icon</span></td>
                            <td style="text-align: left"><span>设置前缀图标</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <h3><a name="radiogroup" class="md-header-anchor"></a><span>RadioGroup</span></h3>
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
                            <td style="text-align: left"><span>value</span></td>
                            <td style="text-align: left"><span>指定当前选中的项目数据</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>type</span></td>
                            <td style="text-align: left">
                                <span>可选值为 button 或不填，为 button 时使用按钮样式</span>
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>button-style</span></td>
                            <td style="text-align: left"><span>按钮样式，可选值为 solid</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>size</span></td>
                            <td style="text-align: left">
                                <span>单选框的尺寸，可选值为 </span><code>large</code><span>，</span
                                ><code>small</code><span> 或者不设置</span>
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>direction</span></td>
                            <td style="text-align: left">
                                <span>是否垂直排列，按钮样式下无效，可选值为 </span
                                ><code>vertical</code>
                            </td>
                            <td style="text-align: left"><span>-</span></td>
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
                            <td><span>配置当前选定的 radio，必须是选择器名称或者元素名</span></td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下三个值：</span></p>
            <ul>
                <li><code>checked</code></li>
                <li><code>value</code></li>
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
                            <td><span>checked</span></td>
                            <td><span>响应式设置单个是否选中</span></td>
                            <td><span>Boolean</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>value</span></td>
                            <td><span>响应式设置 radio-group 当前选中的项目数据</span></td>
                            <td><span>String</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>events</span></td>
                            <td><span>非响应式API，添加 Radio 的事件，</span></td>
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
                            <td style="text-align: left"><span>onChange</span></td>
                            <td style="text-align: left">
                                <span
                                    >在选项状态发生改变时触发，当选中的配置目标是 radio-group
                                    时，则返回一个对象，为当前选中的项，如果是单个 radio
                                    则返回当前选中状态</span
                                >
                            </td>
                            <td style="text-align: left">
                                <span>(state: boolean </span><span>|</span
                                ><span> item: object) =&gt; void</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>