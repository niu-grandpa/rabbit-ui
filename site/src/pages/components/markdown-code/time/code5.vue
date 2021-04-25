<template>
    <div class="markdown-code">
        <div class="code-write">
            <p style="font-size: 32px">Attributes</p>
            <h3><a name="time" class="md-header-anchor"></a><span>Time</span></h3>
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
                            <td><span>time</span></td>
                            <td><span>需要对比的时间，可以是时间戳或 Date 类型</span></td>
                            <td><span>-</span></td>
                        </tr>
                        <tr>
                            <td><span>type</span></td>
                            <td><span>类型，可选值为 relative、date 或 datetime</span></td>
                            <td><span>relative</span></td>
                        </tr>
                        <tr>
                            <td><span>interval</span></td>
                            <td><span>自动更新的间隔，单位：秒</span></td>
                            <td><span>60</span></td>
                        </tr>
                        <tr>
                            <td><span>hash</span></td>
                            <td><span>填写该值，点击会定位锚点</span></td>
                            <td><span>-</span></td>
                        </tr>
                    </tbody>
                </table>
            </figure>
            <h2>
                <a name="改变语言配置-全局" class="md-header-anchor"></a
                ><span>改变语言配置 (全局)</span>
            </h2>
            <p>
                <span>在 </span><code>NodeJs</code><span> 或者 </span><code>Webpack</code
                ><span> 环境下，要改变全局语言配置，只需调用实例的内置方法 </span><code>locale</code
                ><span>，并引入 Day.js 的语言文件来自由切换其他语言。</span>
            </p>
            <pre
                spellcheck="false"
                class="md-fences md-end-block ty-contain-cm modeLoaded"
                lang="js"
            ><div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="js"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 12px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre>x</pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">import</span> <span class="cm-def">Time</span> <span class="cm-keyword">from</span> <span class="cm-string">'rabbit-simple-ui/src/components/time'</span>;</span></pre></div><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">import</span> <span class="cm-string">'dayjs/locale/de'</span>; &nbsp;<span class="cm-comment">// ES 2015 </span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-comment">// require('dayjs/locale/de'); // CommonJs</span></span></pre><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div class="" style="position: relative;"><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">const</span> <span class="cm-def">time</span> <span class="cm-operator">=</span> <span class="cm-keyword">new</span> <span class="cm-variable">Time</span>();</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">time</span>.<span class="cm-property">locale</span>(<span class="cm-string">'de'</span>);</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 134px;"></div><div class="CodeMirror-gutters" style="display: none; height: 134px;"></div></div></div></pre>
            <p>
                <a href="https://github.com/iamkun/dayjs/tree/dev/src/locale" target="_blank"
                    ><span>支持的语言列表</span></a
                >
            </p>
        </div>
    </div>
</template>