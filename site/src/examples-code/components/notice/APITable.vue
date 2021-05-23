<template>
  <div class="">
    <h3><a name="notice-实例" class="md-header-anchor"></a><span>Notice 实例</span></h3>
    <p><span>通过直接调用以下方法来使用组件：</span></p>
    <ul>
      <li><code>Rabbit.Notice.open(config)</code></li>
      <li><code>Rabbit.Notice.info(config)</code></li>
      <li><code>Rabbit.Notice.success(config)</code></li>
      <li><code>Rabbit.Notice.warning(config)</code></li>
      <li><code>Rabbit.Notice.error(config)</code></li>
    </ul>
    <p><span>组件同时提供 promise 接口。</span></p>
    <ul>
      <li><code>Rabbit.Notice[level](config).then(afterClose)</code></li>
    </ul>
    <p>
      <span>其中 </span><code>Rabbit.Notice[level]</code
      ><span> 是组件已经提供的静态方法。</span><code>then</code
      ><span> 接口返回值是 Promise。</span>
    </p>
    <p><span>参数 config 为对象，具体说明如下：</span></p>
    <figure>
      <table>
        <thead>
          <tr>
            <th><span>属性</span></th>
            <th><span>说明</span></th>
            <th><span>类型</span></th>
            <th><span>默认值</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>title</span></td>
            <td><span>通知提醒的标题</span></td>
            <td><span>String</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>desc</span></td>
            <td><span>通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式</span></td>
            <td><span>String</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>duration</span></td>
            <td><span>自动关闭的延时，单位秒，不关闭可以写 0</span></td>
            <td><span>Number</span></td>
            <td><span>4.5</span></td>
          </tr>
          <tr>
            <td><span>key</span></td>
            <td><span>当前通知的唯一标识</span></td>
            <td><span>String </span><span>|</span><span> Number</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>closable</span></td>
            <td><span>是否显示关闭按钮</span></td>
            <td><span>Boolean</span></td>
            <td><span>true</span></td>
          </tr>
          <tr>
            <td><span>style</span></td>
            <td><span>自定义内联样式</span></td>
            <td><span>String</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>className</span></td>
            <td><span>自定义 CSS class</span></td>
            <td><span>String</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>dangerouslyUseHTMLString</span></td>
            <td><span>是否将 title 或 desc 属性作为 HTML 片段处理</span></td>
            <td><span>Boolean</span></td>
            <td><span>false</span></td>
          </tr>
          <tr>
            <td><span>icon</span></td>
            <td><span>自定义图标</span></td>
            <td><span>String</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>onClose</span></td>
            <td><span>点击默认关闭按钮时触发的回调函数</span></td>
            <td><span>Function</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>onClick</span></td>
            <td><span>点击通知时触发的回调函数</span></td>
            <td><span>Function</span></td>
            <td><span>-</span></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <h4><a name="全局方法" class="md-header-anchor"></a><span>全局方法</span></h4>
    <p><span>还提供了全局配置、全局关闭某个通知和全局销毁的方法：</span></p>
    <ul>
      <li><code>Rabbit.Notice.config(options)</code></li>
      <li><code>Rabbit.Notice.close(key)</code></li>
      <li><code>Rabbit.Notice.destroy()</code></li>
    </ul>
    <pre
      spellcheck="false"
      class="md-fences md-end-block ty-contain-cm modeLoaded"
      lang="js"
    ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="js"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">Rabbit</span>.<span class="cm-property">Notice</span>.<span class="cm-property">config</span>({</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">top</span>: <span class="cm-number">50</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">duration</span>: <span class="cm-number">3</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">});</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 90px;"></div><div class="CodeMirror-gutters" style="display: none; height: 90px;"></div></div></div></pre>
    <figure>
      <table>
        <thead>
          <tr>
            <th><span>属性</span></th>
            <th><span>说明</span></th>
            <th><span>类型</span></th>
            <th><span>默认值</span></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span>top</span></td>
            <td><span>通知组件距离顶端的距离，单位像素</span></td>
            <td><span>Number</span></td>
            <td><span>24</span></td>
          </tr>
          <tr>
            <td><span>duration</span></td>
            <td><span>默认自动关闭的延时，单位秒</span></td>
            <td><span>Number</span></td>
            <td><span>4.5</span></td>
          </tr>
        </tbody>
      </table>
    </figure>
  </div>
</template>
