<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    布局和样式，是每个前端的必修课。在日常的工作中，也会碰到一些特定场景的布局需求，配合上样式，就能实现一些神奇的效果。我搜罗了一些日常开发中遇到的布局，以及浏览各大网站时碰巧发现的神奇特效写法，在此做个分享。
                </p>

                <p>由于篇幅原因，会分为 2 篇。今天，会先介绍一些有趣而又实用的布局的写法。之后的一篇，将展现样式的神奇魔法。</p>

                <h2>懒加载占位图自适应</h2>
                <p>
                    在商城中展示商品图片时，如果图片较多，一种比较好的体验是：会先有一个占位图，目的是为了让页面无抖动，也就是所谓的图片懒加载效果。但是，当遇到适配时就比较头痛，特别是手机的横竖屏切换。如果是通过 JavaScript 计算的话，就可能会出现抖动现象。
                </p>
                <p>
                    本着能用 CSS，就不用 JS 去实现的原则，就有了下面这种方案：
                    <pre class="hljs javascript"><code>&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"img-ratio"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://via.placeholder.com/640x384"</span>&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.img-ratio</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">75%</span>;<br>}<br><br><span class="hljs-selector-class">.img-ratio</span> &gt; <span class="hljs-selector-tag">img</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">position</span>: absolute;<br>    <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;<br>}</code></pre>
                    可以适配不同屏幕，只要 UI 提供一张 4:3 的占位图即可。下图展示了不同宽高，但比例相同的 2 张图，都能完美地居中显示。

                    <img src="~@/assets/blog/bg-20190321-01.png">
                </p>
                <p>
                    它的原理是：
                    <ul>
                        <li>
                            根据容器的宽度，按照宽高比例，自动计算出容器的实际大小，并且让容器内的如 img 等子元素自适应宽高。
                        </li>
                        <li>
                            图片父容器宽度 100%，父容器的高度百分比为：100 * 3 / 4 = 75%。
                        </li>
                        <li>
                            图片 absolute 并且完全铺满父容器。
                        </li>
                    </ul>
                </p>

                <h2>移动端的横向滚动条</h2>
                <p>
                    移动端的界面，寸土寸金。有时为了控制屏幕的滚动长度，会将一些模块横向排列。但是，横向排列会产生一些布局问题。
                </p>
                <p>
                    比如，移动端的滚动条样式，依赖与手机浏览器，各不相同。一种解决方案是：把滚动轴隐藏掉，但不能 <code>overflow-x:hidden;</code>，不然就滚不动了。然后算好每一个横向的块的宽度，让最右侧的块露出一部分，这样用户就知道右侧的屏幕之外还有内容，可以横向滑动。
                </p>

                <p>
                    又如果横向滚动的宽度是未知的，因为可能会随着业务的需要，改变横向模块的个数，那么横向排布就没法用 float 了。因为用了浮动，就得知道整个横向滚动的宽度，整个的宽度要比浮动块累加起来的宽度更宽，才能保证浮动不换行。
                </p>

                <p>
                    所以，就有了下面这样的写法：
                    <pre class="hljs xml"><code><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"wrapper"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>6<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">340px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">overflow</span>: hidden;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> <span class="hljs-selector-tag">ul</span> {<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">96px</span>;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">white-space</span>: nowrap;<br>    <span class="hljs-attribute">overflow-x</span>: scroll;<br>    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> <span class="hljs-selector-tag">li</span> {<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ddd</span>;<br>    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;<br>    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">10px</span>;<br>}</code></pre>
                    它的思路是：ul 设置 <code>white-space:nowrap;</code>，li 设置 <code>display:inline-block;</code>。最外层的 div 利用高度差，把横向滚动条藏起来。

                    <img src="~@/assets/blog/bg-20190321-02.png">
                </p>

                <h2>顶部导航不定宽的居中展示</h2>
                <p>
                    一些官网，有顶部导航栏，导航栏的内容区往往需要居中展示，两旁则留白，导航栏的下方可能还有根线或者阴影，作为区分顶部与主体内容。
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.center-float</span> {<br>    <span class="hljs-attribute">float</span>: left;<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;<br>}<br><br><span class="hljs-selector-class">.center-float</span> &gt; <span class="hljs-selector-tag">ul</span> {<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">left</span>: -<span class="hljs-number">50%</span>;<br>}</code></pre>
                    这是居中浮动的一种做法，再配合相对定位。
                </p>

                <h2>footer 置底</h2>
                <p>
                    当页面主内容区高度不够时，footer 依然显示在最下面。这里当然不是指 <code>position: fixed</code>，footer是紧跟在内容区下方的。有 2 种方法。
                </p>
                <p>
                    html 结构如下：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"content"</span>&gt;</span>....<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"footer"</span>&gt;</span>....<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></pre>
                </p>

                <h4>1、margin & padding</h4>
                <p>
                    <pre class="hljs stylus"><code class=""><span class="hljs-selector-tag">html</span>, <span class="hljs-selector-tag">body</span> {<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>}<br><span class="hljs-variable">$footer</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;<br><br><span class="hljs-selector-id">#content</span> {<br>    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">margin-bottom</span>: -<span class="hljs-variable">$footer</span>-height;<br>    <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-variable">$footer</span>-height;<br>}<br><br><span class="hljs-selector-id">#footer</span> {<br>    <span class="hljs-attribute">line-height</span>: <span class="hljs-variable">$footer</span>-height;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}</code></pre>
                </p>

                <h4>2、flex 布局</h4>
                <p>
                    <pre class="hljs stylus"><code class=""><span class="hljs-variable">$footer</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;<br><br><span class="hljs-selector-tag">html</span> {<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>}<br><br><span class="hljs-selector-tag">body</span> {<br>    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">display</span>: flex;<br>    <span class="hljs-attribute">flex-direction</span>: column;<br>}<br><br><span class="hljs-selector-id">#content</span> {<br>    <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>;<br>}<br><br><span class="hljs-selector-id">#footer</span> {<br>    <span class="hljs-attribute">line-height</span>: <span class="hljs-variable">$footer</span>-height;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}</code></pre>
                </p>

                <h2>超宽的背景图片居中</h2>
                <p>
                    一些传统的门户网站，它们的主内容区宽度大致为 980px 或 1000px 这样的经典宽度。有时候，会把较宽的图片作为整体背景图，居中放置，并且不要横向滚动轴，可以这么做：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span>{<br>    <span class="hljs-attribute">min-width</span>: <span class="hljs-number">1000px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">800px</span>;<br>    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">url</span>(test.jpg) no-repeat center top;<br>}<br><br><span class="hljs-selector-class">.mainContent</span>{<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">1000px</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;<br>}</code></pre>
                </p>

                <h2>::after 实现水平垂直居中</h2>
                <p>
                    伪元素也能用来实现居中么？当时看到的一感觉就觉得挺神奇的，看下面这个例子：
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"wrapper"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"test.png"</span>&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">300px</span>;<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#ccc</span>;<br><br>    <span class="hljs-attribute">text-align</span>: center;<br>}<br><br><span class="hljs-selector-class">.wrapper</span><span class="hljs-selector-pseudo">::after</span> {<br>    <span class="hljs-attribute">content</span>: <span class="hljs-string">''</span>;<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>}<br><br><span class="hljs-selector-class">.wrapper</span> &gt; <span class="hljs-selector-tag">img</span> {<br>    <span class="hljs-attribute">vertical-align</span>: middle;<br>}</code></pre>
                    水平方向很好理解。垂直方向，可以理解为 ::after 把 img 往下拉到了中间。
                </p>

                <h2>总结</h2>
                <p>
                    今天介绍的内容，主要以布局为主，或是工作中遇到的，或者是在某个网站看到的，就研究了一把，顺道在此做个分享。
                </p>
                <p>
                    它们的解法当然不唯一，如果你有更好的布局方案，也欢迎留言，我会再做更新，期待更多的交流。
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
