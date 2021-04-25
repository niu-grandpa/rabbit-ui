<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="steps" class="md-header-anchor"></a><span>Steps</span></h3>
            <p><span>整体步骤条</span></p>
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
                            <td style="text-align: left"><span>current</span></td>
                            <td style="text-align: left"><span>当前步骤，从 0 开始计数</span></td>
                            <td style="text-align: left"><span>0</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>status</span></td>
                            <td style="text-align: left">
                                <span>当前步骤的状态，可选值为</span><code>wait</code><span>、</span
                                ><code>process</code><span>、</span><code>finish</code
                                ><span>、</span><code>error</code>
                            </td>
                            <td style="text-align: left"><span>process</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>size</span></td>
                            <td style="text-align: left">
                                <span>步骤条的尺寸，可选值为</span><code>small</code
                                ><span>或者不写</span>
                            </td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>direction</span></td>
                            <td style="text-align: left">
                                <span>步骤条的方向，可选值为</span><code>horizontal</code
                                ><span>（水平）或</span><code>vertical</code><span>（垂直）</span>
                            </td>
                            <td style="text-align: left"><span>horizontal</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <h3><a name="step" class="md-header-anchor"></a><span>Step</span></h3>
            <p><span>子项步骤</span></p>
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
                            <td style="text-align: left"><span>status</span></td>
                            <td style="text-align: left">
                                <span>步骤的状态，可选值为</span><code>wait</code><span>、</span
                                ><code>process</code><span>、</span><code>finish</code
                                ><span>、</span><code>error</code><span>，不设置时自动判断</span>
                            </td>
                            <td style="text-align: left"><span>process</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>title</span></td>
                            <td style="text-align: left"><span>标题</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>content</span></td>
                            <td style="text-align: left"><span>步骤的详细描述，可选</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>icon</span></td>
                            <td style="text-align: left"><span>步骤的图标，可选</span></td>
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
                            <td><span>配置当前选定的 steps，必须是选择器名称或者元素名</span></td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下值：</span></p>
            <ul>
                <li><code>current</code></li>
                <li><code>status</code></li>
                <li><code>title</code></li>
                <li><code>content</code></li>
                <li><code>itemStatus</code></li>
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
                            <td><span>current</span></td>
                            <td><span>响应式设置或更新当前步骤</span></td>
                            <td><span>Number</span></td>
                            <td><span>0</span></td>
                        </tr>
                        <tr>
                            <td><span>status</span></td>
                            <td>
                                <span>响应式设置或更新当前步骤的状态，可选值为</span
                                ><code>wait</code><span>、</span><code>process</code><span>、</span
                                ><code>finish</code><span>、</span><code>error</code>
                            </td>
                            <td><span>String</span></td>
                            <td><span>process</span></td>
                        </tr>
                        <tr>
                            <td><span>title</span></td>
                            <td><span>响应式设置或更新 title</span></td>
                            <td><span>String</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>content</span></td>
                            <td><span>响应式设置或更新 content</span></td>
                            <td><span>String</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>itemStatus</span></td>
                            <td><span>响应式设置或更新每一个子项步骤的状态</span></td>
                            <td><span>Array</span><string></string></td>
                            <td><span>-</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>