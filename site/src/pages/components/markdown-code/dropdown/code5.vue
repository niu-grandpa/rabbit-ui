<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="dropdown" class="md-header-anchor"></a><span>Dropdown</span></h3>
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
                                <span>触发方式，可选值为 </span><code>hover</code
                                ><span>（悬停）</span><code>click</code><span>（点击）</span
                                ><code>contextMenu</code><span>（右键）</span>
                            </td>
                            <td style="text-align: left"><span>hover</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>placement</span></td>
                            <td style="text-align: left">
                                <span>下拉菜单出现的位置，可选值为</span
                                ><code
                                    >top``top-start``top-end``bottom``bottom-start``bottom-end``left``left-start``left-end``right``right-start``right-end</code
                                ><span>, 支持自动识别</span>
                            </td>
                            <td style="text-align: left"><span>bottom</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>visible</span></td>
                            <td style="text-align: left">
                                <span>手动控制下拉框的显示，在 trigger = 'custom' 时使用</span>
                            </td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>stop-propagation</span></td>
                            <td style="text-align: left">
                                <span
                                    >是否开启 stop-propagation，在trigger = 'custom'
                                    时，如果将事件绑定到 r-dropdown 上时最好使用</span
                                >
                            </td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <h3><a name="dropdownitem" class="md-header-anchor"></a><span>DropdownItem</span></h3>
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
                            <td style="text-align: left"><span>key</span></td>
                            <td style="text-align: left"><span>用来标识这一项</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>disabled</span></td>
                            <td style="text-align: left"><span>禁用该项</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>divided</span></td>
                            <td style="text-align: left"><span>显示分割线</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>selected</span></td>
                            <td style="text-align: left"><span>标记该项为选中状态</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>danger</span></td>
                            <td style="text-align: left">
                                <span>标记为危险项，用于删除项操作</span>
                            </td>
                            <td style="text-align: left">&nbsp;</td>
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
                            <td><span>配置当前选定的 drawer，必须是选择器名称或者元素名</span></td>
                            <td><span>String</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <p><span>该方法返回以下方法：</span></p>
            <ul>
                <li><code>visible</code></li>
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
                            <td><span>visible</span></td>
                            <td><span>响应式设置或更新下拉框的显示</span></td>
                            <td><span>Boolean</span></td>
                            <td><span>false</span></td>
                        </tr>
                        <tr>
                            <td><span>events</span></td>
                            <td><span>非响应式API，添加下拉菜单事件</span></td>
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
                            <td style="text-align: left"><span>onClick</span></td>
                            <td style="text-align: left">
                                <span>点击菜单项时触发，返回 r-dropdown-item 的 key 值</span>
                            </td>
                            <td style="text-align: left"><span>(key:String) =&gt; void</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>onVisibleChange</span></td>
                            <td style="text-align: left"><span>菜单显示状态改变时调用</span></td>
                            <td style="text-align: left">
                                <span>(visible:Boolean) =&gt; void</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>onClickOutside</span></td>
                            <td style="text-align: left">
                                <span>点击外部关闭下拉菜单时触发</span>
                            </td>
                            <td style="text-align: left"><span>(event:Event) =&gt; void</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>