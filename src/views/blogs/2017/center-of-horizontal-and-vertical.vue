<template>
    <div class="blog-container">
        <BlogHeader
            title="CSS中不定宽高的垂直水平居中" subTitle="5种方式的代码呈现"
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
