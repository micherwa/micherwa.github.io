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
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
