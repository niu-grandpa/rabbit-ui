<template>
  <div class=""
    ><p><span>LoadingBar instance</span></p
    ><p><span>通过直接调用以下方法来使用组件：</span></p
    ><ul
      ><li><code>Rabbit.Loading.start()</code></li
      ><li><code>Rabbit.Loading.finish()</code></li
      ><li><code>Rabbit.Loading.error()</code></li
      ><li><code>Rabbit.Loading.update(percent)</code></li></ul
    ><p><span>函数及参数说明如下：</span></p
    ><figure
      ><table
        ><thead
          ><tr
            ><th><span>函数名</span></th
            ><th><span>说明</span></th
            ><th><span>参数</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td><span>start</span></td
            ><td><span>开始从 0 显示进度条，并自动加载进度</span></td
            ><td><span>无</span></td></tr
          ><tr
            ><td><span>finish</span></td
            ><td><span>结束进度条，自动补全剩余进度</span></td
            ><td><span>无</span></td></tr
          ><tr
            ><td><span>error</span></td
            ><td><span>以错误的类型结束进度条，自动补全剩余进度</span></td
            ><td><span>无</span></td></tr
          ><tr
            ><td><span>update</span></td
            ><td><span>精确加载到指定的进度</span></td
            ><td><span>percent，指定的进度百分比</span></td></tr
          ></tbody
        ></table
      ></figure
    ><p><span>另外提供了全局配置和全局销毁的方法：</span></p
    ><ul
      ><li><code>Rabbit.Loading.config(options)</code></li
      ><li><code>Rabbit.Loading.destroy()</code></li></ul
    >
    <pre
      spellcheck="false"
      class="md-fences md-end-block ty-contain-cm modeLoaded"
      lang="js"
    ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="js"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">Rabbit</span>.<span class="cm-property">Loading</span>.<span class="cm-property">config</span>({</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">color</span>: <span class="cm-string">'#5cb85c'</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">failedColor</span>: <span class="cm-string">'#f0ad4e'</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">height</span>: <span class="cm-number">5</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">});</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 112px;"></div><div class="CodeMirror-gutters" style="display: none; height: 112px;"></div></div></div></pre
    ><figure
      ><table
        ><thead
          ><tr
            ><th style="text-align: left"><span>属性</span></th
            ><th style="text-align: left"><span>说明</span></th
            ><th style="text-align: left"><span>类型</span></th
            ><th style="text-align: left"><span>默认值</span></th></tr
          ></thead
        ><tbody
          ><tr
            ><td style="text-align: left"><span>color</span></td
            ><td style="text-align: left"><span>进度条的颜色，默认为 Rabbit 主色</span></td
            ><td style="text-align: left"><span>String</span></td
            ><td style="text-align: left"><span>primary</span></td></tr
          ><tr
            ><td style="text-align: left"><span>failedColor</span></td
            ><td style="text-align: left"><span>失败时的进度条颜色，默认为 Rabbit 主色</span></td
            ><td style="text-align: left"><span>String</span></td
            ><td style="text-align: left"><span>error</span></td></tr
          ><tr
            ><td style="text-align: left"><span>height</span></td
            ><td style="text-align: left"><span>进度条高度，单位 px</span></td
            ><td style="text-align: left"><span>Number</span></td
            ><td style="text-align: left"><span>2</span></td></tr
          ><tr
            ><td style="text-align: left"><span>duration</span></td
            ><td style="text-align: left"><span>隐藏时的持续时间，单位 ms</span></td
            ><td style="text-align: left"><span>Number</span></td
            ><td style="text-align: left"><span>800</span></td></tr
          ></tbody
        ></table
      ></figure
    ></div
  >
</template>