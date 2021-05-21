<template>
  <div class=""
    ><h3><a name="inputnumber" class="md-header-anchor"></a><span>InputNumber</span></h3
    ><figure
      ><table
        ><thead
          ><tr
            ><th style="text-align: left"><span>属性</span></th
            ><th style="text-align: left"><span>说明</span></th
            ><th style="text-align: left"><span>默认值</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td style="text-align: left"><span>max</span></td
            ><td style="text-align: left"><span>最大值</span></td
            ><td style="text-align: left"><span>Infinity</span></td></tr
          ><tr
            ><td style="text-align: left"><span>min</span></td
            ><td style="text-align: left"><span>最小值</span></td
            ><td style="text-align: left"><span>-Infinity</span></td></tr
          ><tr
            ><td style="text-align: left"><span>value</span></td
            ><td style="text-align: left"><span>输入框当前值</span></td
            ><td style="text-align: left"><span>-</span></td></tr
          ><tr
            ><td style="text-align: left"><span>controls-outside</span></td
            ><td style="text-align: left"><span>按钮位置是否置于两侧</span></td
            ><td style="text-align: left"><span>false</span></td></tr
          ><tr
            ><td style="text-align: left"><span>step</span></td
            ><td style="text-align: left"><span>每次改变的步伐，可以是小数</span></td
            ><td style="text-align: left"><span>1</span></td></tr
          ><tr
            ><td style="text-align: left"><span>size</span></td
            ><td style="text-align: left"
              ><span>输入框尺寸，可选值为</span><code>large</code><span>、</span><code>small</code
              ><span>或者不填</span></td
            ><td style="text-align: left"><span>-</span></td></tr
          ><tr
            ><td style="text-align: left"><span>disabled</span></td
            ><td style="text-align: left"><span>设置禁用状态</span></td
            ><td style="text-align: left"><span>false</span></td></tr
          ><tr
            ><td style="text-align: left"><span>placeholder</span></td
            ><td style="text-align: left"><span>占位文本</span></td
            ><td style="text-align: left"><span>-</span></td></tr
          ><tr
            ><td style="text-align: left"><span>formatter</span></td
            ><td style="text-align: left"><span>指定输入框展示值的格式</span></td
            ><td style="text-align: left"><span>-</span></td></tr
          ><tr
            ><td style="text-align: left"><span>parser</span></td
            ><td style="text-align: left"
              ><span>指定从 formatter 里转换回数字的方式，和 formatter 搭配使用</span></td
            ><td style="text-align: left"><span>-</span></td></tr
          ><tr
            ><td style="text-align: left"><span>readonly</span></td
            ><td style="text-align: left"><span>是否设置为只读</span></td
            ><td style="text-align: left"><span>false</span></td></tr
          ><tr
            ><td style="text-align: left"><span>editable</span></td
            ><td style="text-align: left"><span>是否可编辑</span></td
            ><td style="text-align: left"><span>true</span></td></tr
          ><tr
            ><td style="text-align: left"><span>precision</span></td
            ><td style="text-align: left"><span>数值精度</span></td
            ><td style="text-align: left"><span>-</span></td></tr
          ><tr
            ><td style="text-align: left"><span>input-id</span></td
            ><td style="text-align: left"
              ><span>给内部实际的输入框元素设置 </span><code>id</code></td
            ><td style="text-align: left"><span>-</span></td></tr
          ></tbody
        ></table
      ></figure
    ><h3><a name="config--方法" class="md-header-anchor"></a><span>Config 方法</span></h3
    ><p
      ><span
        >配置指定的组件，并提供一些必要的响应式更新DOM内容或其他操作的
        API。（并不是每个组件都会有）</span
      ></p
    ><figure
      ><table
        ><thead
          ><tr
            ><th><span>参数</span></th
            ><th><span>说明</span></th
            ><th><span>类型</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td><span>el</span></td
            ><td><span>配置当前选定的 input-number，必须是选择器名称或者元素名</span></td
            ><td><span>String</span></td></tr
          ></tbody
        ></table
      ></figure
    ><p><span>该方法返回以下值：</span></p
    ><ul>
      <li><code>endTime</code></li>
      <li><code>step</code></li>
      <li><code>disabled</code></li>
      <li><code>readOnly</code></li>
      <li><code>editable</code></li>
      <li><code>events(options)</code></li></ul
    ><figure
      ><table
        ><thead
          ><tr
            ><th><span>返回值</span></th
            ><th><span>说明</span></th
            ><th><span>类型</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td><span>value</span></td
            ><td><span>响应式设置输入框当前值</span></td
            ><td><span>Boolean</span></td></tr
          ><tr
            ><td><span>step</span></td
            ><td><span>响应式设置每次改变的步伐</span></td
            ><td><span>Number</span></td></tr
          ><tr
            ><td><span>disabled</span></td
            ><td><span>响应式设置禁用状态</span></td
            ><td><span>Boolean</span></td></tr
          ><tr
            ><td><span>readOnly</span></td
            ><td><span>响应式设置是否设置为只读</span></td
            ><td><span>Boolean</span></td></tr
          ><tr
            ><td><span>editable</span></td
            ><td><span>响应式设置是否可编辑</span></td
            ><td><span>Boolean</span></td></tr
          ><tr
            ><td><span>events</span></td
            ><td><span>非响应式API，添加 InputNumber 的事件，</span></td
            ><td><span>Functioin</span></td></tr
          ></tbody
        ></table
      ></figure
    ><ul
      ><li><code>events</code><span>的参数 options 为对象，具体说明如下：</span></li></ul
    ><figure
      ><table
        ><thead
          ><tr
            ><th style="text-align: left"><span>属性</span></th
            ><th style="text-align: left"><span>说明</span></th
            ><th style="text-align: left"><span>回调参数</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td style="text-align: left"><span>onChange</span></td
            ><td style="text-align: left"><span>数值改变时的回调，返回当前值</span></td
            ><td style="text-align: left"><span>(value: number) =&gt; void</span></td></tr
          ><tr
            ><td style="text-align: left"><span>onFocus</span></td
            ><td style="text-align: left"><span>聚焦时触发</span></td
            ><td style="text-align: left"><span>(event: InputEvent) =&gt; void</span></td></tr
          ><tr
            ><td style="text-align: left"><span>onBlur</span></td
            ><td style="text-align: left"><span>失焦时触发</span></td
            ><td style="text-align: left"><span>无</span></td></tr
          ></tbody
        ></table
      ></figure
    ></div
  >
</template>