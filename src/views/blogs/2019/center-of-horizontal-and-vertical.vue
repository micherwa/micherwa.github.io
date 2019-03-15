<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>垂直居中，在 CSS 中是一个老生常谈的问题，面试的时候也会时常被提及。所以，今天我们就来聊聊 9 种不同的居中方法。</p>
                <p>
                    有常见的 flex、transform、absolute 等等。也有 CSS3 的网格布局。还有伪元素的方法，是的，你没有看错，::after 和 ::before 也可以实现居中。
                </p>

                <h2>9 种方法呈现</h2>

                <h4>1、flex</h4>
                <p>
                    大家的第一反应，可能就是 flex 了。因为它的写法够简单直观，兼容性也没什么问题。是手机端居中方式的首选。
                    <pre class="hljs xml"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper flex-center"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>horizontal and vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>:<span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br>}<br><br><span class="hljs-selector-class">.flex-center</span> {<br>    <span class="hljs-attribute">display</span>: flex;<br>    <span class="hljs-attribute">justify-content</span>: center;<br>    <span class="hljs-attribute">align-items</span>: center;<br>}</code></pre>
                    利用到了 2 个关键属性：<code>justify-content</code> 和 <code>align-items</code>，都设置为 <code>center</code>，即可实现居中。
                </p>
                <p>
                    需要注意的是，一定要把这里的 <code>flex-center</code> 挂在父级元素，才能使得其中 <code>唯一的</code> 子元素居中。
                </p>

                <h4>2、flex + margin</h4>
                <p>
                    这是 flex 方法的变种。父级元素设置 flex，子元素设置 <code>margin: auto;</code>。可以理解为子元素被四周的 margin “挤” 到了中间。
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>horizontal and vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>:<span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">display</span>: flex;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">p</span> {<br>    <span class="hljs-attribute">margin</span>: auto;<br>}</code></pre>
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

    };
</script>
