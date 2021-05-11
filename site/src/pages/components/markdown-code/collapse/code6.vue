<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="collapse" class="md-header-anchor"></a><span>Collapse</span></h3>
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
                            <td><span>active-index</span></td>
                            <td>
                                <span>初始化选中面板的 index，格式可以为 </span><code>string</code
                                ><span>、</span><code>number</code><span>、 </span
                                ><code>"[string]"</code><span> 或 </span><code>"[number]"</code>
                            </td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>accordion</span></td>
                            <td><span>是否开启手风琴模式，开启后每次至多展开一个面板</span></td>
                            <td><span>false</span></td>
                        </tr>
                        <tr>
                            <td><span>simple</span></td>
                            <td><span>简洁边框风格的折叠面板</span></td>
                            <td><span>false</span></td>
                        </tr>
                        <tr>
                            <td><span>ghost</span></td>
                            <td><span>使折叠面板透明且无边框</span></td>
                            <td><span>false</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <h3>
                <a name="collapse-panel" class="md-header-anchor"></a><span>Collapse-panel</span>
            </h3>
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
                            <td><span>index</span></td>
                            <td>
                                <span>当前面板的 index，与 r-collapse 的</span
                                ><code>active-index</code><span>对应，不填为索引值</span>
                            </td>
                            <td><span>index</span></td>
                        </tr>
                        <tr>
                            <td><span>hide-arrow</span></td>
                            <td><span>隐藏当前面板上的箭头</span></td>
                            <td><span>false</span></td>
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
                            <td>
                                <span>配置当前选定的 collapse，必须是选择器名称或者元素名</span>
                            </td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下两个值：</span></p>
            <ul>
                <li><code>activeIndex</code></li>
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
                            <td><span>activeIndex</span></td>
                            <td><span>响应式设置当前激活面板的 index</span></td>
                            <td>
                                <span>String </span><span>|</span><span> String[] </span
                                ><span>|</span><span> Number </span><span>|</span
                                ><span> Number[]</span>
                            </td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>events</span></td>
                            <td><span>非响应式API，添加折叠面板事件，</span></td>
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
                                    >切换面板时触发，返回当前已展开的面板的 index，格式为数组</span
                                >
                            </td>
                            <td style="text-align: left">
                                <span>(index: string[]) =&gt; void</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>