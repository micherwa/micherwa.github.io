<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    上一篇 <a href="" target="_blank">一些有趣的 CSS 魔法和布局（上）</a> 中，我们聊了一些有趣且实用的布局。今天，将呈现一些 CSS 带来的魔法特效，有部分特效可以帮我们省去不少工作量。
                </p>

                <h2>鼠标悬浮使内容自撑开</h2>
                <p>
                    在以前遇到这个需求的时候，我们可能会想到用 JS 来操作内容的显式与否。现在，CSS3 的 <code>transition</code> 可以帮我们更简单地实现。
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"padding-bottom: 20px;"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"head"</span>&gt;</span><br>            列表1<br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"body"</span>&gt;</span><br>            列表内容<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br>            内容列表内容<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br>            内容列表内容<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br>            内容<br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"head"</span>&gt;</span><br>            列表2<br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"body"</span>&gt;</span><br>            列表内容<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br>            内容列表内容<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br>            内容列表内容<span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br>            内容<br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.body</span> {<br>  <span class="hljs-attribute">max-height</span>:<span class="hljs-number"> 0</span>;<br>  <span class="hljs-attribute">overflow</span>: hidden;<br>  <span class="hljs-attribute">transition</span>: all <span class="hljs-number">1s</span> ease-out;<br>}<br><br><span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:hover</span> <span class="hljs-selector-class">.body</span> {<br>  <span class="hljs-attribute">max-height</span>: <span class="hljs-number">300px</span>;<br>  <span class="hljs-attribute">transition-timing-function</span>: ease-in;<br>}</code></pre>

                    <code>transition: all 1s ease-out;</code> 这是一种简写，transition 有 4 个过渡属性：<code>transition-property</code>、<code>transition-duration</code>、<code>transition-timing-function</code>、<code>transition-delay</code>。transition-timing-function 规定了速度效果的速度曲线，它有以下几种约定的属性。

                    <pre class="hljs fortran"><code style="word-break: break-word; white-space: initial;" class="">transition-timing-<span class="hljs-function"><span class="hljs-keyword">function</span></span>: linear|ease|ease-<span class="hljs-keyword">in</span>|ease-<span class="hljs-keyword">out</span>|ease-<span class="hljs-keyword">in</span>-<span class="hljs-keyword">out</span>|cubic-bezier(n,n,n,n);</code></pre>
                </p>

                <h2>让图片变成黑白色</h2>
                <p>
                    有一些特殊的时段，比如需要降半旗，在大环境下，各大网站为了表示默哀，会把颜色鲜艳的图片变灰变暗，过了这段时间后再恢复原本的颜色。
                </p>
                <p>
                    过去，会让 UI 同学临时赶工改图，然后再上传更新，过程麻烦，还会造成存储空间的浪费。现在，CSS3 的 <code>filter</code> (滤镜) 属性可以更快地实现该需求。UI 同学改的，其实也是源图片的滤镜。所以，可以这样实现：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.header</span> {<br>    <span class="hljs-attribute">background</span>: no-repeat center center;<br>    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ccc</span>;<br>    <span class="hljs-attribute">background-attachment</span>: scroll;<br>    <span class="hljs-attribute">background-size</span>: cover;<br>    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">0</span>;<br>    <br>    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(xxx.jpg);<br>    <span class="hljs-attribute">filter</span>: <span class="hljs-built_in">grayscale</span>(100%);<br>}</code></pre>

                    未加 filter 的效果如下：
                    <img src="~@/assets/blog/bg-20190327-01.png">
                    加了 filter 的效果：
                    <img src="~@/assets/blog/bg-20190327-02.png">
                </p>
                <p>
                    filter 的属性还有很多，其中 <code>blur</code> 可以实现高斯模糊，类似 IOS7 的毛玻璃效果。<code>contrast</code> 可以调整图片的对比度。<code>drop-shadow</code> 会在图片的下方合成阴影效果，等等。
                </p>

                <h2>自定义输入框光标的颜色</h2>
                <p>
                    之前遇到过一个需求，注册登录界面的整体色调偏蓝色，连输入框的边框色都偏蓝。所以，产品希望输入框的颜色和光标都变为蓝色。
                </p>
                <p>
                    设置文本的颜色方便，但光标该怎么设置颜色？CSS3 的 <code>caret-color</code> 可以解决这个问题。
                    <pre class="hljs css"><code class=""><span class="hljs-selector-tag">input</span>, <span class="hljs-selector-tag">textarea</span> {<br>    <span class="hljs-attribute">caret-color</span>: blue;<br>}</code></pre>
                    它不仅对于原生的输入控件有效，对设置 contenteditable 的普通 HTML 标签也适用。
                </p>
                <p>
                    不过兼容性上，safari 的 PC 版从 V11.1 开始支持，wap 版从 V11.4 也开始支持了。当然 IE 目前还没有支持。
                </p>

                <h2>禁用文本选中</h2>
                <p>
                    在以前，如果不想让别人选中你的页面里的内容，可以用 JS 来阻止鼠标事件。而现在，只需要一句 <code>user-select:none;</code> 的样式就可以搞定了。
                    <pre class="hljs groovy"><code class="">body {<br>    user-<span class="hljs-string">select:</span> none; <span class="hljs-comment">// 页面中的文本不能被选中</span><br>}</code></pre>
                    除了 IE，兼容性都不错。在 IE 6-9 上，可以通过给 body 添加 JS 代码 <code>onselectstart="return false;"</code> 来解决。
                </p>
                <p>
                    反过来，<strong>对于无法被选中文本的页面，如果真想复制，也是有技巧的</strong>。方法很简单：打开 chrome 的 debug 模式，在 console 下输入 <code>document.body.innerText</code>，回车后就能愉快地复制了，嘿嘿~
                </p>

                <h2>控制表格单元格宽度</h2>
                <p>
                    手写原生 table 的时候，直接给单元格设置宽度并没什么作用，因为单元格的宽度是根据其内容进行调整的。但是，在使用 element-ui 的 el-table 组件时，却可以给每个单元格设置宽度。这是如何做到的呢？
                </p>
                <p>
                    打开 debug，看 table 的结构，会发现在 CSS 上有个属性：<code>table-layout: fixed;</code>。
                </p>
                <p>
                    table-layout 的默认值是 auto，当设置为 fixed 时，在 单元格 td 上设置的宽度就起作用了。用法很简单：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-tag">table</span> {<br>    <span class="hljs-attribute">table-layout</span>: fixed;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>}</code></pre>
                </p>

                <h2>流光效果</h2>
                <p>
                    某个商城上曾看到过的，鼠标 hover 出现一道流光划过的效果。用到了 CSS3 的 transform、linear-gradient、transition 等特性。
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"img-light"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"xxx.jpg"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"640"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"384"</span>&gt;</span><br></span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code><span class="hljs-selector-class">.img-light</span> {<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">640px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">384px</span>;<br>}<br><br><span class="hljs-selector-class">.img-light</span><span class="hljs-selector-pseudo">::after</span> {<br>    <span class="hljs-attribute">content</span>: <span class="hljs-string">""</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100px</span>;<br>    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">skewX</span>(-25deg) <span class="hljs-built_in">translateZ</span>(0);<br>    <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">linear-gradient</span>(90deg, hsla(0, 0%, 100%, 0), <span class="hljs-built_in">hsla</span>(0, 0%, 100%, 0.3) <span class="hljs-number">50%</span>, <span class="hljs-built_in">hsla</span>(0, 0%, 100%, 0));<br>    <span class="hljs-attribute">position</span>: absolute;<br>    <span class="hljs-attribute">left</span>: -<span class="hljs-number">150%</span>;<br>    <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">2</span>;<br>}<br><br><span class="hljs-selector-class">.img-light</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">::after</span> {<br>    <span class="hljs-attribute">transition</span>: left <span class="hljs-number">2s</span> ease-in-out;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">150%</span>;<br>}</code></pre>
                </p>

                <h2>透传事件层</h2>
                <p>
                    遇到过一种情况，点击当前层无需触发自己的事件，但可以触发下面那层的事件，我把这种情况理解为“透传”。也就是，点击自身并无反应，相当于直接点击在了下面那层上。
                </p>

                <p>
                    用 CSS3 的 <code>pointer-events</code> 实现很简单：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-tag">div</span> {<br>    <span class="hljs-attribute">pointer-events</span>: none;<br>}</code></pre>
                    设置为 none，在 MDN 上的解释是：元素永远不会成为鼠标事件的 target。但是，当其后代元素的 pointer-events 属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器。
                </p>

                <h2>美化表单的 radio 和 checkbox</h2>
                <p>
                    在某个博客中看到的美化 radio 和 checkbox 的写法。
                    <pre class="hljs scss"><code class=""><span class="hljs-selector-class">.radio-beauty-container</span> {<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-variable">$bgc</span>: green;<br><br>    %common {<br>        <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span>;<br>        <span class="hljs-attribute">background-color</span>: <span class="hljs-variable">$bgc</span>;<br>        <span class="hljs-attribute">background-clip</span>: content-box;<br>    }<br>    <span class="hljs-selector-class">.radio-name</span> {<br>        <span class="hljs-attribute">vertical-align</span>: middle;<br>        <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;<br>    }<br>    <span class="hljs-selector-class">.radio-beauty</span> {<br>        <span class="hljs-attribute">width</span>: <span class="hljs-number">18px</span>;<br>        <span class="hljs-attribute">height</span>: <span class="hljs-number">18px</span>;<br>        <span class="hljs-attribute">box-sizing</span>: border-box;<br>        <span class="hljs-attribute">display</span>: inline-block;<br>        <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-variable">$bgc</span>;<br>        <span class="hljs-attribute">vertical-align</span>: middle;<br>        <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">15px</span> <span class="hljs-number">0</span> <span class="hljs-number">3px</span>;<br>        <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;<br><br>        &amp;:hover {<br>            <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">7px</span> <span class="hljs-variable">$bgc</span>;<br>            @<span class="hljs-keyword">extend</span> %common;<br>        }<br>    }<br>    <span class="hljs-selector-tag">input</span><span class="hljs-selector-attr">[type="radio"]</span>:checked+<span class="hljs-selector-class">.radio-beauty</span> {<br>        @<span class="hljs-keyword">extend</span> %common;<br>    }<br>}</code></pre>
                    其原理是：
                    <ul>
                        <li>
                            伪类选择器 :checked，表示对应控件元素（单选框或是复选框）选中时的样式
                        </li>
                        <li>
                            加号 + 相邻兄弟选择器，这个符号表示选择后面的兄弟节点
                        </li>
                        <li>
                            两者配合，就可以轻松自如控制后面元素的显示或者隐藏，或是其他样式了
                        </li>
                        <li>
                            用 label 标签控制单/复选框的选中与否，for 属性锚定对应的单选框或是复选框，然后点击这里的 label 标签元素的时候，对应的单/复选框就会选中或是取消选中。
                        </li>
                    </ul>
                </p>

                <h2>总结</h2>
                <p>
                    CSS3 有许多很赞的特性，可以呈现非常神奇且炫酷的效果。在这儿仅展示了一些我搜罗到的，觉得有意思的特效。大家如果有值得推荐的 CSS 特效，也欢迎一起探讨学习哈~
                </p>

                <h2>岗位内推</h2>
                <p>
                    莉莉丝游戏招 <code>中高级前端工程师</code> 和 <code>广告系统开发工程师（Python 方向）</code>啦！！！
                </p>
                <p>
                    你玩过《<strong>小冰冰传奇</strong>（[刀塔传奇]）》么？你玩过《<strong>剑与家园</strong>》么？
                </p>
                <p>
                    你想和 <strong>薛兆丰老师</strong> 成为朋友么？有兴趣的同学，可以 <strong>关注下面的公众号 加我微信</strong> 详聊哈~
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
