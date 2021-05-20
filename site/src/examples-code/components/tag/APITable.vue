<template>
  <div class=""
    ><h3><a name="tag" class="md-header-anchor"></a><span>Tag</span></h3
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
            ><td style="text-align: left"><span>closable</span></td
            ><td style="text-align: left"><span>标签是否可以关闭</span></td
            ><td style="text-align: left"><span>false</span></td></tr
          ><tr
            ><td style="text-align: left"><span>checkable</span></td
            ><td style="text-align: left"><span>标签是否可以选择</span></td
            ><td style="text-align: left"><span>false</span></td></tr
          ><tr
            ><td style="text-align: left"><span>checked</span></td
            ><td style="text-align: left"><span>标签的选中状态</span></td
            ><td style="text-align: left"><span>true</span></td></tr
          ><tr
            ><td style="text-align: left"><span>type</span></td
            ><td style="text-align: left"
              ><span>标签的样式类型，可选值为 </span><code>border</code><span>、</span
              ><code>dot</code><span>或不填</span></td
            ><td style="text-align: left"><span>-</span></td></tr
          ><tr
            ><td style="text-align: left"><span>color</span></td
            ><td style="text-align: left"
              ><span>标签颜色，预设颜色值为</span><code>default</code><span>、</span
              ><code>primary</code><span>、</span><code>success</code><span>、</span
              ><code>warning</code><span>、</span><code>error</code><span>、</span><code>blue</code
              ><span>、</span><code>green</code><span>、</span><code>red</code><span>、</span
              ><code>yellow</code><span>、</span><code>pink</code><span>、</span><code>magenta</code
              ><span>、</span><code>volcano</code><span>、</span><code>orange</code><span>、</span
              ><code>gold</code><span>、</span><code>lime</code><span>、</span><code>cyan</code
              ><span>、</span><code>geekblue</code><span>、</span><code>purple</code
              ><span>，也可以自定义颜色值。</span></td
            ><td style="text-align: left"><span>default</span></td></tr
          ><tr
            ><td style="text-align: left"><span>size</span></td
            ><td style="text-align: left"><span>尺寸，可选值为 large、medium</span></td
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
            ><td><span>配置当前选定的 tag，必须是选择器名称或者元素名</span></td
            ><td><span>String</span></td></tr
          ></tbody
        ></table
      ></figure
    ><p><span>该方法返回以下值：</span></p
    ><ul
      ><li><code>events(options)</code></li></ul
    ><figure
      ><table
        ><thead
          ><tr
            ><th><span>返回值</span></th
            ><th><span>说明</span></th
            ><th><span>类型</span></th
            ><th><span>默认值</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td><span>events</span></td
            ><td><span>非响应式API，添加标签事件，</span></td
            ><td><span>Function</span></td
            ><td><span>-</span></td></tr
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
            ><td style="text-align: left"><span>onClose</span></td
            ><td style="text-align: left"><span>关闭时触发</span></td
            ><td style="text-align: left"><span>($this: element) =&gt; void</span></td></tr
          ><tr
            ><td style="text-align: left"><span>onChange</span></td
            ><td style="text-align: left"><span>切换选中状态时触发</span></td
            ><td style="text-align: left"><span>(checked: boolean) =&gt; void</span></td></tr
          ></tbody
        ></table
      ></figure
    ></div
  >
</template>