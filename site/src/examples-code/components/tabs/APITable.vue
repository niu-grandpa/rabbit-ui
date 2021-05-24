<template>
  <div class="">
    <h3><a name="tabs" class="md-header-anchor"></a><span>Tabs</span></h3>
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
            <td><span>初始化选中面板的 index</span></td>
            <td><span>第一个面板</span></td>
          </tr>
          <tr>
            <td><span>type</span></td>
            <td>
              <span>页签的基本样式，可选值为 </span><code>line</code><span> 和 </span
              ><code>card</code>
            </td>
            <td><span>line</span></td>
          </tr>
          <tr>
            <td><span>size</span></td>
            <td>
              <span>尺寸，可选值为 </span><code>default</code><span> 和 </span
              ><code>small</code><span>，仅在 </span><code>type="line"</code
              ><span> 时有效</span>
            </td>
            <td><span>default</span></td>
          </tr>
          <tr>
            <td><span>closable</span></td>
            <td>
              <span>是否可以关闭页签，仅在 </span><code>type="card"</code
              ><span> 时有效</span>
            </td>
            <td><span>false</span></td>
          </tr>
          <tr>
            <td><span>animated</span></td>
            <td><span>是否使用动画切换 Tabs</span></td>
            <td><span>true</span></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <h3><a name="tabs-pane" class="md-header-anchor"></a><span>Tabs-pane </span></h3>
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
            <td><span>用于标识当前面板，对应 defaultActiveKey，默认为其索引值</span></td>
            <td><span>index</span></td>
          </tr>
          <tr>
            <td><span>tab</span></td>
            <td><span>选项卡头显示文字</span></td>
            <td><span>空</span></td>
          </tr>
          <tr>
            <td><span>icon</span></td>
            <td><span>选项卡图标</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>disabled</span></td>
            <td><span>是否禁用该选项卡</span></td>
            <td><span>false</span></td>
          </tr>
          <tr>
            <td><span>closable</span></td>
            <td>
              <span>是否可以关闭页签，仅在 </span><code>type="card"</code
              ><span> 时有效</span>
            </td>
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
            <td><span>配置当前选定的 tabs，必须是选择器名称或者元素名</span></td>
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
            <td><span>String</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>events</span></td>
            <td><span>非响应式API，添加选项卡事件，</span></td>
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
            <td style="text-align: left"><span>tab 被点击时触发</span></td>
            <td style="text-align: left"><span>(index: string) =&gt; void</span></td>
          </tr>
          <tr>
            <td style="text-align: left"><span>onTabRemove</span></td>
            <td style="text-align: left"><span>tab 被关闭时触发</span></td>
            <td style="text-align: left"><span>(index: string) =&gt; void</span></td>
          </tr>
        </tbody>
      </table>
    </figure>
  </div>
</template>
