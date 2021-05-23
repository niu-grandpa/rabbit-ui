<template>
  <div class="">
    <h4><a name="message-实例" class="md-header-anchor"></a><span>Message 实例</span></h4>
    <p><span>通过直接调用以下方法来使用组件：</span></p>
    <ul>
      <li><code>Rabbit.Message.info(config)</code></li>
      <li><code>Rabbit.Message.success(config)</code></li>
      <li><code>Rabbit.Message.warning(config)</code></li>
      <li><code>Rabbit.Message.error(config)</code></li>
      <li><code>Rabbit.Message.loading(config)</code></li>
    </ul>
    <p><span>组件同时提供 promise 接口。</span></p>
    <ul>
      <li><code>Rabbit.Message[level](config).then(afterClose)</code></li>
    </ul>
    <p>
      <span>其中 </span><code>Rabbit.Message[level]</code
      ><span> 是组件已经提供的静态方法。</span><code>then</code
      ><span> 接口返回值是 Promise。</span>
    </p>
    <p>
      <span
        >参数 config
        可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：</span
      >
    </p>
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
            <td><span>content</span></td>
            <td><span>提示内容</span></td>
            <td><span>String</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>duration</span></td>
            <td><span>自动关闭的延时，单位秒，不关闭可以写 0</span></td>
            <td><span>Number</span></td>
            <td><span>3</span></td>
          </tr>
          <tr>
            <td><span>onClose</span></td>
            <td><span>点击消息关闭按钮时的回调</span></td>
            <td><span>Function</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>closable</span></td>
            <td><span>是否显示关闭按钮</span></td>
            <td><span>Boolean</span></td>
            <td><span>false</span></td>
          </tr>
          <tr>
            <td><span>background</span></td>
            <td><span>是否显示背景色</span></td>
            <td><span>Boolean</span></td>
            <td><span>false</span></td>
          </tr>
          <tr>
            <td><span>key</span></td>
            <td><span>当前提示的唯一标志</span></td>
            <td><span>String </span><span>|</span><span> Number</span></td>
            <td><span>-</span></td>
          </tr>
          <tr>
            <td><span>dangerouslyUseHTMLString</span></td>
            <td><span>是否将 content 属性作为 HTML 片段处理</span></td>
            <td><span>Boolean</span></td>
            <td><span>false</span></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <h4><a name="全局方法" class="md-header-anchor"></a><span>全局方法</span></h4>
    <p><span>还提供了全局配置和全局销毁方法：</span></p>
    <ul>
      <li><code>Rabbit.Message.config(options)</code></li>
      <li><code>Rabbit.Message.destroy()</code></li>
    </ul>
    <p>
      <span>也可通过 </span><code>Rabbit.Message.destroy(key)</code
      ><span> 来关闭一条消息。</span>
    </p>
    <pre
      spellcheck="false"
      class="md-fences md-end-block ty-contain-cm modeLoaded"
      lang="js"
    ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="js"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">Rabbit</span>.<span class="cm-property">Message</span>.<span class="cm-property">loading</span>({</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">key</span>: <span class="cm-string">'exampleKey'</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">content</span>: <span class="cm-string">'正在加载中...'</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">duration</span>: <span class="cm-number">0</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">});</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">setTimeout</span>(() <span class="cm-operator">=&gt;</span> <span class="cm-variable">Rabbit</span>.<span class="cm-property">Message</span>.<span class="cm-property">destroy</span>(<span class="cm-string">'exampleKey'</span>), <span class="cm-number">3000</span>);</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 134px;"></div><div class="CodeMirror-gutters" style="display: none; height: 134px;"></div></div></div></pre>
    <pre
      spellcheck="false"
      class="md-fences md-end-block ty-contain-cm modeLoaded"
      lang="js"
    ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="js"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation"><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">Rabbit</span>.<span class="cm-property">Message</span>.<span class="cm-property">config</span>({</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">top</span>: <span class="cm-number">100</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">duration</span>: <span class="cm-number">2</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">});</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 90px;"></div><div class="CodeMirror-gutters" style="display: none; height: 90px;"></div></div></div></pre>
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
            <td><span>提示组件距离顶端的距离，单位像素</span></td>
            <td><span>Number</span></td>
            <td><span>24</span></td>
          </tr>
          <tr>
            <td><span>duration</span></td>
            <td><span>默认自动关闭的延时，单位秒</span></td>
            <td><span>Number</span></td>
            <td><span>3</span></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <h2><a name="faq" class="md-header-anchor"></a><span>FAQ</span></h2>
    <h3>
      <a
        name="通过异步或者关闭按钮关闭消息后为什么-then--接口的回调事件不生效"
        class="md-header-anchor"
      ></a
      ><span>通过异步或者关闭按钮关闭消息后，为什么 </span><code>then</code
      ><span> 接口的回调事件不生效</span>
    </h3>
    <p>
      <span
        >组件提供的
        Promise接口是当实例自动关闭时才会触发的，并不是通过任意方式关闭组件都会调用该接口。</span
      >
    </p>
    <p>
      <span>如果您想通过手动移除消息后接着添加回调事件，请使用 </span><code>onClose</code
      ><span> api，至于要在异步移除后添加事件，建议是在异步的那个时机里添加</span>
    </p>
  </div>
</template>
