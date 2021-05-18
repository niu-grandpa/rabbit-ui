<template>
  <div
    ><h3><a name="avatar" class="md-header-anchor"></a><span>Avatar</span></h3
    ><figure
      ><table
        ><thead
          ><tr
            ><th><span>属性</span></th
            ><th><span>说明</span></th
            ><th><span>默认值</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td><span>shape</span></td
            ><td
              ><span>指定头像的形状，可选值为 </span><code>circle</code><span>、</span
              ><code>square</code></td
            ><td><span>circle</span></td></tr
          ><tr
            ><td><span>size</span></td
            ><td
              ><span>设置头像的大小，可选值为 </span><code>large</code><span>、</span
              ><code>small</code><span>，支持设置具体数值</span></td
            ><td><span>-</span></td></tr
          ><tr
            ><td><span>src</span></td
            ><td><span>图片类头像的资源地址</span></td
            ><td><span>-</span></td></tr
          ><tr
            ><td><span>icon</span></td
            ><td><span>设置头像的图标类型，参考 </span><code>icon</code></td
            ><td><span>-</span></td></tr
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
            ><td><span>配置当前选定的 avatar，必须是选择器名称或者元素名</span></td
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
            ><td><span>非响应式API，添加提示框的事件，</span></td
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
            ><td style="text-align: left"><span>onError</span></td
            ><td style="text-align: left"><span>在设置 src 且图片加载不成功时触发</span></td
            ><td style="text-align: left"><span>(event:Event) =&gt; void</span></td></tr
          ></tbody
        ></table
      ></figure
    ></div
  >
</template>