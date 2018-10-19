<template>
    <div class="blog-container">
        <BlogHeader
            title="window.open被浏览器拦截的解决方案" subTitle=""
            date="2018-03-06" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="false">
            <div slot="content">
                <p>
                    <strong>当浏览器检测到非用户操作产生的新弹出窗口，则会对其进行阻止。</strong>因为浏览器认为这不是一个用户希望看到的页面。
                </p>

                <p>
                    另外可以发现，当window.open为用户触发事件内部或者加载时，不会被拦截。而一旦将弹出代码移动到ajax或者一段异步代码内部，马上就出现被拦截的表现。
                </p>

                <h2>解决方案：</h2>

                <h4>1.使用a标签替代</h4>
                <p>
                    <pre class="hljs qml"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">newWin</span>(<span class="hljs-params">url, id</span>) </span>{<br>    <span class="hljs-built_in">var</span> a = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'a'</span>);<br>    a.setAttribute(<span class="hljs-string">'href'</span>, <span class="hljs-built_in">url</span>);<br>    a.setAttribute(<span class="hljs-string">'target'</span>, <span class="hljs-string">'_blank'</span>);<br>    a.setAttribute(<span class="hljs-string">'id'</span>, id);<br>    <span class="hljs-comment">// 防止反复添加</span><br>    <span class="hljs-keyword">if</span>(!<span class="hljs-built_in">document</span>.getElementById(id)) <span class="hljs-built_in">document</span>.body.appendChild(a);<br>    a.click();<br>}</code></pre>
                    将此函数绑定到click的事件回调中，就可以避免大部分浏览器对窗口弹出的拦截
                </p>

                <h4>2.先弹出窗口，然后重定向</h4>
                <p>
                    这其实是一种变通方案，核心思想是:先通过用户点击打开页面，然后再对页面进行重定向。
                    <pre class="hljs haxe"><code class="">xx.addEventListener(<span class="hljs-string">'click'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> </span>() {<br>    <span class="hljs-comment">// 打开页面，此处最好使用提示页面</span><br>    <span class="hljs-keyword">var</span> <span class="hljs-keyword">newWin</span> = window.open(<span class="hljs-string">'loading page'</span>);<br><br>    ajax().done(<span class="hljs-function"><span class="hljs-keyword">function</span></span>() {<br>        <span class="hljs-comment">// 重定向到目标页面</span><br>        <span class="hljs-keyword">newWin</span>.location.href = <span class="hljs-string">'target url'</span>;<br>    });<br>});</code></pre>
                </p>

                <p>
                    以上方法其实是打开了两个地址，为了避免打开两次真正的目标页面，让用户察觉到页面的重定向，可以在打开第一个地址的时候给出一个类似‘当前页面正在加载中，请稍后。。’的简单提示页。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {
        created () {

        }
    };
</script>
