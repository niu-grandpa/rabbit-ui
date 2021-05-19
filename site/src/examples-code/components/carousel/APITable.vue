<template>
  <div class=""
    ><h3><a name="carousel" class="md-header-anchor"></a><span>Carousel</span></h3
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
            ><td style="text-align: left"><span>autoplay</span></td
            ><td style="text-align: left"><span>是否自动切换</span></td
            ><td style="text-align: left"><span>false</span></td></tr
          ><tr
            ><td style="text-align: left"><span>autoplay-speed</span></td
            ><td style="text-align: left"><span>自动切换的时间间隔，单位为毫秒</span></td
            ><td style="text-align: left"><span>2000</span></td></tr
          ><tr
            ><td style="text-align: left"><span>dots</span></td
            ><td style="text-align: left"
              ><span
                >指示器的位置，可选值为 inside （内部），outside（外部），none（不显示）</span
              ></td
            ><td style="text-align: left"><span>inside</span></td></tr
          ><tr
            ><td style="text-align: left"><span>radius-dot</span></td
            ><td style="text-align: left"><span>是否显示圆形指示器</span></td
            ><td style="text-align: left"><span>false</span></td></tr
          ><tr
            ><td style="text-align: left"><span>trigger</span></td
            ><td style="text-align: left"
              ><span>指示器的触发方式，可选值为 click（点击），hover（悬停）</span></td
            ><td style="text-align: left"><span>click</span></td></tr
          ><tr
            ><td style="text-align: left"><span>arrow</span></td
            ><td style="text-align: left"
              ><span
                >切换箭头的显示时机，可选值为
                hover（悬停），always（一直显示），never（不显示）</span
              ></td
            ><td style="text-align: left"><span>hover</span></td></tr
          ><tr
            ><td style="text-align: left"><span>easing</span></td
            ><td style="text-align: left"><span>动画效果</span></td
            ><td style="text-align: left"><span>ease</span></td></tr
          ><tr
            ><td style="text-align: left"><span>effect</span></td
            ><td style="text-align: left"
              ><span>动画效果函数，可切换为渐显 </span><code>fade</code></td
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
            ><td><span>配置当前选定的 carousel，必须是选择器名称或者元素名</span></td
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
            ><td style="text-align: left"><span>onClick</span></td
            ><td style="text-align: left"><span>点击幻灯片时触发，返回索引值</span></td
            ><td style="text-align: left"><span>(index: number) =&gt; void</span></td></tr
          ><tr
            ><td style="text-align: left"><span>onChange</span></td
            ><td style="text-align: left"
              ><span>幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引</span></td
            ><td style="text-align: left"
              ><span>([ oldValue, value ]: [number,number]) =&gt; void</span></td
            ></tr
          ></tbody
        ></table
      ></figure
    ></div
  >
</template>