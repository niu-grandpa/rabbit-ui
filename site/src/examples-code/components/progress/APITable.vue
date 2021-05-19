<template>
  <div class=""
    ><h3><a name="progress" class="md-header-anchor"></a><span>Progress</span></h3
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
            ><td><span>percent</span></td
            ><td><span>百分比</span></td
            ><td><span>0</span></td></tr
          ><tr
            ><td><span>status</span></td
            ><td
              ><span>状态，可选值为</span><code>normal</code><span>、</span><code>active</code
              ><span>、</span><code>wrong</code><span>、</span><code>success</code><span>、</span
              ><code>warning</code></td
            ><td><span>normal</span></td></tr
          ><tr
            ><td><span>stroke-width</span></td
            ><td><span>进度条的线宽，单位 px</span></td
            ><td><span>10</span></td></tr
          ><tr
            ><td><span>stroke-color</span></td
            ><td><span>进度条的颜色，传入格式为数组，显示为渐变色</span></td
            ><td><span>-</span></td></tr
          ><tr
            ><td><span>show-text</span></td
            ><td><span>隐藏数值或状态图标</span></td
            ><td><span>false</span></td></tr
          ><tr
            ><td><span>success-percent</span></td
            ><td><span>已完成的分段百分比</span></td
            ><td><span>0</span></td></tr
          ><tr
            ><td><span>text-inside</span></td
            ><td><span>百分比是否置于进度条内</span></td
            ><td><span>false</span></td></tr
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
            ><td><span>配置当前选定的 progress，必须是选择器名称或者元素名</span></td
            ><td><span>String</span></td></tr
          ></tbody
        ></table
      ></figure
    ><p><span>该方法返回以下值：</span></p
    ><ul
      ><li><code>percent</code></li
      ><li><code>successPercent</code></li></ul
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
            ><td><span>percent</span></td
            ><td><span>响应式设置或更新进度条百分比</span></td
            ><td><span>Number</span></td
            ><td><span>-</span></td></tr
          ><tr
            ><td><span>successPercent</span></td
            ><td><span>响应式设置或更新已完成的分段百分比</span></td
            ><td><span>Number</span></td
            ><td><span>-</span></td></tr
          ></tbody
        ></table
      ></figure
    ><h3><a name="使用示例" class="md-header-anchor"></a><span>使用示例</span></h3
    ><ul
      ><li><span>动态设置进度</span></li></ul
    ><p
      ><span>进度条的进度不可能是固定不变的，这就需要在异步场景下使用组件内置的方法 </span
      ><code>config(el).percent</code><span> 进行设置，以 jQuery 的 ajax 为例：</span></p
    >
    <pre
      lang="html"
      class="md-fences md-end-block ty-contain-cm modeLoaded"
      spellcheck="false"
      style="break-inside: unset"
    ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="html"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">r-progress</span> <span class="cm-attribute">percent</span>=<span class="cm-string">"0"</span> <span class="cm-attribute">id</span>=<span class="cm-string">"upload"</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">r-progress</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">script</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">progress</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Rabbit</span>.<span class="cm-property">Progress</span>();</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">let</span> <span class="cm-def">num</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-comment">// 假设场景是在下载数据 &nbsp; &nbsp;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-variable">$</span>.<span class="cm-property">ajax</span>({</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-property">url</span>: <span class="cm-string">'/api/someurl'</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-property">type</span>: <span class="cm-string">'get'</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-comment">// ....相关代码省略</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-property">success</span>() {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-comment">// ...相关代码省略</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-variable">num</span><span class="cm-operator">++</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-variable">progress</span>.<span class="cm-property">config</span>(<span class="cm-string">'#upload'</span>).<span class="cm-property">percent</span> <span class="cm-operator">=</span> <span class="cm-variable">num</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-keyword">if</span>(<span class="cm-variable">num</span> <span class="cm-operator">&gt;=</span> <span class="cm-number">100</span>) <span class="cm-variable">$</span>(<span class="cm-string">'#upload'</span>).<span class="cm-property">attr</span>(<span class="cm-string">'status'</span>,<span class="cm-string">'success'</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">error</span>() {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; <span class="cm-tab" role="presentation" cm-text="	"> </span> &nbsp; <span class="cm-comment">// 设置进度的状态为wrong</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-variable">$</span>(<span class="cm-string">'#upload'</span>).<span class="cm-property">attr</span>(<span class="cm-string">'status'</span>,<span class="cm-string">'wrong'</span>);</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;  } &nbsp; &nbsp; &nbsp; &nbsp;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  })</span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">script</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 470px;"></div><div class="CodeMirror-gutters" style="display: none; height: 470px;"></div></div></div></pre
    ><p>&nbsp;</p></div
  >
</template>