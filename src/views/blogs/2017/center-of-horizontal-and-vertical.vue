<template>
    <div class="blog-container">
        <BlogHeader
            title="CSS中不定宽高的垂直水平居中" subTitle="9种方式的代码呈现"
            date="2017-12-04" :tags="['CSS']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>flex</h2>
                <p>
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.center-flex</span> {<br>    <span class="hljs-attribute">display</span>: flex;<br>    <span class="hljs-attribute">justify-content</span>: center;<br>    <span class="hljs-attribute">align-items</span>: center;<br>}</code></pre>
                </p>

                <h2>flex + margin</h2>
                <p>
                    <pre class="hljs stylus"><code class=""><span class="hljs-selector-class">.modal</span> {<br>    <span class="hljs-attribute">display</span>: flex;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;<br>    &gt; <span class="hljs-selector-class">.content</span> {<br>        <span class="hljs-attribute">margin</span>: auto;<br>    }<br>}</code></pre>
                </p>

                <h2>transform + absolute</h2>
                <p>
                    <pre class="hljs scss"><code class=""><span class="hljs-selector-class">.center-transform</span> {<br>    <span class="hljs-selector-tag">img</span> {<br>        <span class="hljs-attribute">position</span>: relative;<br>        <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;<br>        <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;<br>        <span class="hljs-attribute">transform</span>: translate(-<span class="hljs-number">50%</span>, -<span class="hljs-number">50%</span>);<br>    }<br>}</code></pre>
                </p>

                <h2>table-cell</h2>
                <p>
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.center-tb-cell</span> {<br>    <span class="hljs-attribute">display</span>: table-cell;<br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>}</code></pre>
                </p>

                <h2>绝对定位 + 四个方向拉住</h2>
                <p>
                    使用绝对布局，设置<code>margin:auto;</code>，并设置top、left、right、bottom的值<strong>相等即可</strong>，不一定要都是0。
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.main</span> {<br></span>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">350px</span>;<br>    <span class="hljs-attribute">margin</span>: auto;<br>    <span class="hljs-attribute">position</span>: absolute;<br>    <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;<br>}</code></pre>
                </p>

                <h2>writing-mode</h2>
                <p>
                    它可以改变文字的显示方向，比如可以通过 writing-mode 让文字的显示变为垂直方向
                    <pre class="hljs applescript"><code class="">&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"wp"</span>&gt;<br>    &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"wp-inner"</span>&gt;<br>        &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"box"</span>&gt;<span class="hljs-number">center block</span>&lt;/<span class="hljs-keyword">div</span>&gt;<br>    &lt;/<span class="hljs-keyword">div</span>&gt;<br>&lt;/<span class="hljs-keyword">div</span>&gt;</code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wp</span> {<br>    <span class="hljs-attribute">writing-mode</span>: vertical-lr;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}<br><span class="hljs-selector-class">.wp-inner</span> {<br>    <span class="hljs-attribute">writing-mode</span>: horizontal-tb;<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>}<br><span class="hljs-selector-class">.box</span> {<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">margin</span>: auto;<br>    <span class="hljs-attribute">text-align</span>: left;<br>}</code></pre>
                </p>

                <h2>grid</h2>
                <p>
                    css新出的网格布局，但兼容性不如flex，慎用。
                    <pre class="hljs applescript"><code class="">&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"wp"</span>&gt;<br>    &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"box"</span>&gt;center block&lt;/<span class="hljs-keyword">div</span>&gt;<br>&lt;/<span class="hljs-keyword">div</span>&gt;</code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wp</span> {<br>    <span class="hljs-attribute">display</span>: grid;<br>}<br><span class="hljs-selector-class">.box</span> {<br>    <span class="hljs-attribute">align-self</span>: center;<br>    <span class="hljs-attribute">justify-self</span>: center;<br>}</code></pre>
                </p>

                <h2>::after</h2>
                <p>
                    <pre class="hljs scss"><code class=""><span class="hljs-selector-class">.center-ib</span> {<br>    <span class="hljs-attribute">text-align</span>: center;<br>    &amp;::after {<br>        <span class="hljs-attribute">content</span>: <span class="hljs-string">''</span>;<br>        <span class="hljs-attribute">display</span>: inline-block;<br>        <span class="hljs-attribute">vertical-align</span>: middle;<br>        <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>    }<br>    <span class="hljs-selector-tag">img</span> {<br>        <span class="hljs-attribute">vertical-align</span>: middle;<br>    }<br>}</code></pre>
                </p>

                <h2>::before</h2>
                <p>
                    <pre class="hljs scss"><code class=""><span class="hljs-selector-class">.modal</span> {<br>    <span class="hljs-comment">// 水平居中</span><br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-comment">// 消除空隙</span><br>    &amp;::before,<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0</span>;<br>    &gt;<span class="hljs-selector-class">.modal-content</span> {<br>        <span class="hljs-attribute">display</span>: inline-block;<br>        <span class="hljs-attribute">vertical-align</span>: middle;<br>        <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;<br>    }<br>    &amp;::before {<br>        <span class="hljs-attribute">content</span>: <span class="hljs-string">''</span>;<br>        <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>    }<br>}</code></pre>
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
