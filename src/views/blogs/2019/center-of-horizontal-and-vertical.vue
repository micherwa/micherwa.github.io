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

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br>}<br><br><span class="hljs-selector-class">.flex-center</span> {<br>    <span class="hljs-attribute">display</span>: flex;<br>    <span class="hljs-attribute">justify-content</span>: center;<br>    <span class="hljs-attribute">align-items</span>: center;<br>}</code></pre>
                    利用到了 2 个关键属性：<code>justify-content</code> 和 <code>align-items</code>，都设置为 <code>center</code>，即可实现居中。
                </p>
                <p>
                    需要注意的是，一定要把这里的 <code>flex-center</code> 挂在父级元素，才能使得其中 <code>唯一的</code> 子元素居中。
                </p>

                <h4>2、flex + margin</h4>
                <p>
                    这是 flex 方法的变种。父级元素设置 flex，子元素设置 <code>margin: auto;</code>。可以理解为子元素被四周的 margin “挤” 到了中间。
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>horizontal and vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">display</span>: flex;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">p</span> {<br>    <span class="hljs-attribute">margin</span>: auto;<br>}</code></pre>
                </p>

                <h4>3、transform + absolute</h4>
                <p>
                    这个组合，常用于图片的居中显示。
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"wrapper"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"test.png"</span>&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br>    <span class="hljs-attribute">position</span>: relative;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">img</span> {<br>    <span class="hljs-attribute">position</span>: absolute;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;<br>    <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;<br>    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">translate</span>(-50%, -50%);<br>}</code></pre>
                    当然，也可以将父元素 wrapper 的相对定位，移入子元素 img 中，替换掉绝对定位。效果是一样的。
                </p>

                <h4>4、table-cell</h4>
                <p>
                    利用 table 的单元格居中效果展示。与 flex 一样，需要写在父级元素上。
                    <pre class="hljs xml"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>horizontal and vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">display</span>: table-cell;<br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>}</code></pre>
                </p>

                <h4>5、absolute + 四个方向的值相等</h4>
                <p>
                    使用绝对定位布局，设置 <code>margin:auto;</code>，并设置 top、left、right、bottom 的 <code>值相等即可</code>（不一定要都是 0）。
                    <pre class="hljs xml"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>horizontal and vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br>    <span class="hljs-attribute">position</span>: relative;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">p</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">170px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;<br>    <span class="hljs-attribute">margin</span>: auto;<br>    <span class="hljs-attribute">position</span>: absolute;<br>    <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;<br>}</code></pre>
                    这种方法一般用于弹出层，需要设置弹出层的宽高。
                </p>

                <h4>6、writing-mode</h4>
                <p>
                    这个方法可以改变文字的显示方向，比如让文字的显示变为垂直方向。
                    <pre class="hljs xml"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper-inner"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>horizontal and vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">writing-mode</span>: vertical-lr;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-class">.wrapper-inner</span> {<br>    <span class="hljs-attribute">writing-mode</span>: horizontal-tb;<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-class">.wrapper-inner</span> &gt; <span class="hljs-selector-tag">p</span> {<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">margin</span>: auto;<br>    <span class="hljs-attribute">text-align</span>: left;<br>}</code></pre>
                    兼容性上还有些小瑕疵，但大部分浏览器，包括手机端已支持 writing-mode 的写法了。
                </p>

                <h4>7、grid</h4>
                <p>
                    像表格一样，网格布局让我们能够按行或列来对齐元素。 然而在布局上，网格比表格更可能做到或更简单。
                    <pre class="hljs xml"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>horizontal and vertical<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">display</span>: grid;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">p</span> {<br>    <span class="hljs-attribute">align-self</span>: center;<br>    <span class="hljs-attribute">justify-self</span>: center;<br>}</code></pre>
                    但它在兼容性上不如 flex，特别是 IE 浏览器，只支持 IE10 及以上。
                </p>

                <h4>8、::after</h4>
                <p>
                    伪元素也能用来实现居中么？感觉还是挺神奇的，看下面这个例子：
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"wrapper"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"test.png"</span>&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">text-align</span>: center;<br>}<br><br><span class="hljs-selector-class">.wrapper</span><span class="hljs-selector-pseudo">::after</span> {<br>    <span class="hljs-attribute">content</span>: <span class="hljs-string">''</span>;<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">img</span> {<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>}</code></pre>
                    水平方向很好理解。垂直方向，可以理解为 ::after 把 img 往下拉到了中间。
                </p>

                <h4>9、::before</h4>
                <p>
                    另一种是配合 <code>font-size: 0;</code> 共同施展的魔法。
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"wrapper"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"test.png"</span>&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0</span>;<br>}<br><br><span class="hljs-selector-class">.wrapper</span><span class="hljs-selector-pseudo">::before</span> {<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;<br>    <span class="hljs-attribute">content</span>: <span class="hljs-string">''</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">img</span> {<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">14px</span>;<br>}</code></pre>
                    <code>font-size: 0;</code> 的神秘之处在于，可以消除标签之间的间隙。另外，因为伪元素搭配的，都是最基础的 CSS 写法，所以不存在兼容性的风险。
                </p>

                <h2>总结</h2>
                <p>
                    今天共介绍了 9 种居中的方法。像 flex、absolute、grid，这些常用的方法往往可以在工作中，帮我们解决布局的问题。而像 writing-mode、::after、::before，这些神奇的特性仿佛帮我们掀开了 CSS 魔法大陆的一角，让人神往，期待着去探索更多神秘之地。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
