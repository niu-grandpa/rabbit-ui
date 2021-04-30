<template>
    <div class="markdown-code">
        <div class="code-write">
            <blockquote>
                <p>
                    <code>title</code><span> 和 </span><code>content</code
                    ><span>
                        属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML
                        是非常危险的，因为容易导致 </span
                    ><a href="https://en.wikipedia.org/wiki/Cross-site_scripting"
                        ><span>XSS 攻击</span></a
                    ><span>。因此在 </span><code>dangerouslyUseHTMLString</code
                    ><span> 打开的情况下，请确保 </span><code>content</code
                    ><span> 的内容是可信的，</span><strong><span>永远不要</span></strong
                    ><span>将用户提交的内容赋值给 </span><code>content</code><span> 属性。</span>
                </p>
            </blockquote>
        </div>
    </div>
</template>