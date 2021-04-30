<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="drawer" class="md-header-anchor"></a><span>Drawer</span></h3>
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
                            <td style="text-align: left"><span>visible</span></td>
                            <td style="text-align: left"><span>初始 Drawer 是否可见</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>title</span></td>
                            <td style="text-align: left"><span>抽屉标题</span></td>
                            <td style="text-align: left"><span>-</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>width</span></td>
                            <td style="text-align: left"><span>抽屉宽度。需要带像素单位</span></td>
                            <td style="text-align: left"><span>256px</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>closable</span></td>
                            <td style="text-align: left"><span>是否显示右上角的关闭按钮</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>mask-closable</span></td>
                            <td style="text-align: left"><span>是否允许点击遮罩层关闭</span></td>
                            <td style="text-align: left"><span>true</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>mask</span></td>
                            <td style="text-align: left"><span>是否显示遮罩层</span></td>
                            <td style="text-align: left"><span>true</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>scrollable</span></td>
                            <td style="text-align: left"><span>页面是否可以滚动</span></td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>placement</span></td>
                            <td style="text-align: left">
                                <span>抽屉的方向，可选值为 top、 right、 bottom 、 left</span>
                            </td>
                            <td style="text-align: left"><span>right</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>inner</span></td>
                            <td style="text-align: left">
                                <span>是否设置抽屉在某个元素内打开，该元素需要有相对定位</span>
                            </td>
                            <td style="text-align: left"><span>false</span></td>
                        </tr>
                        <tr>
                            <td style="text-align: left"><span>lock-scroll</span></td>
                            <td style="text-align: left">
                                <span>是否禁止对页面滚动条的修改</span>
                            </td>
                            <td style="text-align: left"><span>false</span></td>
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
            <p><span>该方法返回以下两个值：</span></p>
            <ul>
                <li><code>title</code></li>
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
                            <td><span>响应式设置抽屉的标题</span></td>
                            <td><span>String</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>events</span></td>
                            <td><span>非响应式API，添加抽屉事件，</span></td>
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
                            <td style="text-align: left"><span>关闭抽屉时触发</span></td>
                            <td style="text-align: left"><span>无</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
        </div>
    </div>
</template>