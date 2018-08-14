<template>
    <div class="blog-container">
        <BlogHeader
            title="前端工程代码规范（三）" subTitle="CSS, SCSS"
            date="2018-05-26" :tags="['前端代码规范']">
        </BlogHeader>

        <BlogContent>
            <div slot="content">
                <blockquote>
                    <p>
                        这篇文章转自我在segmentfault上发表的
                        <a href="https://segmentfault.com/a/1190000015040656" target="_blank">
                            前端工程代码规范系列文章之三
                        </a>
                        ，共4篇。
                    </p>
                </blockquote>

<h2>
    缩进与分号
</h2>
<ul>
    <li>
        使用soft tab（4个空格）。
    </li>
    <li>
        每个属性声明末尾都要加分号。
    </li>
</ul>

<pre class="hljs css"><code><span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">20px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;

    <span class="hljs-attribute">background-color</span>: red;
}</code></pre>
<h2>
    空格
</h2>
<p>
    1.不需要空格的情况：
</p>
<ul>
    <li>
        属性名后
    </li>
    <li>
        多个规则的分隔符','前
    </li>
    <li>
        <code>
            !important
        </code>
        '!'后
    </li>
    <li>
        行末不要有多余的空格
    </li>
</ul>

<pre class="hljs stylus"><code><span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span> :red! important;
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: red !important;
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> ,
.dialog{
    ...
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span>,
<span class="hljs-selector-class">.dialog</span> {
    ...
}</code></pre>
<p>
    2.需要空格的情况
</p>
<ul>
    <li>
        属性值前
    </li>
    <li>
        选择器'>', '+', '~'前后
    </li>
    <li>
        '{'前
    </li>
    <li>
        <code>
            !important
        </code>
        '!'前
    </li>
    <li>
        <code>
            @else
        </code>
        前后
    </li>
    <li>
        属性值中的','后
    </li>
    <li>
        注释'/
        <em>
            '后和'
        </em>
        /'前
    </li>
</ul>
<h2>
    空行
</h2>
<ul>
    <li>
        文件最后保留一个空行
    </li>
    <li>
        '}'后最好跟一个空行，包括scss中嵌套的规则
    </li>
    <li>
        属性之间需要适当的空行
    </li>
</ul>

<pre class="hljs stylus"><code><span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    ...
}
<span class="hljs-selector-class">.dialog</span> {
    <span class="hljs-attribute">color</span>: red;
    &:after {
        ...
    }
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    ...
}

<span class="hljs-selector-class">.dialog</span> {
    <span class="hljs-attribute">color</span>: red;

    &:after {
        ...
    }
}</code></pre>
<h2>
    换行
</h2>
<ul>
    <li>
        '{'后和'}'前需要换行
    </li>
    <li>
        每个属性独占一行
    </li>
    <li>
        多个规则的分隔符','后
    </li>
</ul>

<pre class="hljs stylus"><code><span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span>
{<span class="hljs-attribute">color</span>: red; <span class="hljs-attribute">background-color</span>: black;}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: red;
    <span class="hljs-attribute">background-color</span>: black;
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span>, <span class="hljs-selector-class">.dialog</span> {
    ...
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span>,
<span class="hljs-selector-class">.dialog</span> {
    ...
}</code></pre>
<h2>
    注释
</h2>
<ul>
    <li>
        统一用'/**/'（scss中也不要用'//'）；
    </li>
    <li>
        缩进与下一行代码保持一致；
    </li>
    <li>
        写在需要注释的代码的上方，不要跟在代码后面。
    </li>
</ul>

<pre class="hljs stylus"><code><span class="hljs-comment">/* Modal header */</span>
<span class="hljs-selector-class">.modal-header</span> {
    ...
}

<span class="hljs-comment">/*
 * Modal header
 */</span>
<span class="hljs-selector-class">.modal-header</span> {
    ...
}

<span class="hljs-selector-class">.modal-header</span> {
    <span class="hljs-comment">/* 50px */</span>
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50px</span>;
}</code></pre>
<h2>
    引号
</h2>
<ul>
    <li>
        url的内容要用引号；
    </li>
    <li>
        属性选择器中的属性值需要引号。
    </li>
</ul>

<pre class="hljs stylus"><code><span class="hljs-selector-class">.element</span>:after {
    <span class="hljs-attribute">content</span>: <span class="hljs-string">""</span>;
    <span class="hljs-attribute">background-image</span>: url(<span class="hljs-string">"logo.png"</span>);
}

<span class="hljs-selector-tag">input</span>[type=<span class="hljs-string">"checkbox"</span>] {
    ...
}</code></pre>
<h2>
    命名
</h2>
<ul>
    <li>
        类名使用小写字母，以中划线分隔；
    </li>
    <li>
        id采用驼峰式命名；
    </li>
    <li>
        scss中的变量、函数、混合、placeholder采用驼峰式命名。
    </li>
</ul>

<pre class="hljs lasso"><code><span class="hljs-comment">/* class */</span>
.element<span class="hljs-params">-content</span> {
    <span class="hljs-params">...</span>
}

<span class="hljs-comment">/* id */</span>
#myDialog {
    <span class="hljs-params">...</span>
}

<span class="hljs-comment">/* 变量 */</span>
$colorBlack: #000;

<span class="hljs-comment">/* 函数 */</span>
@function pxToRem($px) {
    <span class="hljs-params">...</span>
}

<span class="hljs-comment">/* 混合 */</span>
@mixin centerBlock {
    <span class="hljs-params">...</span>
}

<span class="hljs-comment">/* placeholder */</span>
%myDialog {
    <span class="hljs-params">...</span>
}</code></pre>
<h2>
    颜色
</h2>
<p>
    颜色16进制，用小写字母表示，尽量用简写。
</p>

<pre class="hljs css"><code><span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#ABCDEF</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#001122</span>;
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#abcdef</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#012</span>;
}</code></pre>
<h2>
    媒体查询
</h2>
<p>
    尽量将媒体查询的规则靠近与他们相关的规则；
    <br>
        不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，
        <br>
            这样做只会让大家以后更容易忘记他们。
        </br>
    </br>
</p>

<pre class="hljs stylus"><code><span class="hljs-selector-class">.element</span> {
    ...
}

@media (<span class="hljs-attribute">min-width</span>: <span class="hljs-number">480px</span>) {
    <span class="hljs-selector-class">.element</span> {
        ...
    }
}</code></pre>
<h2>
    SCSS相关
</h2>
<p>
    1.提交的代码中不要有 @debug；
    <br>
        2.声明顺序：
    </br>
</p>
<ul>
    <li>
        <code>
            @extend
        </code>
    </li>
    <li>
        不包含
        <code>
            @content
        </code>
        的
        <code>
            @include
        </code>
    </li>
    <li>
        包含
        <code>
            @content
        </code>
        的
        <code>
            @include
        </code>
    </li>
    <li>
        自身属性
    </li>
    <li>
        嵌套规则
    </li>
</ul>
<p>
    3.
    <code>
        @import
    </code>
    引入的文件不需要开头的'_'和结尾的'.scss'；
    <br>
        4.嵌套最多不能超过5层；
        <br>
            5.
            <code>
                @extend
            </code>
            中使用placeholder选择器；
            <br>
                6.去掉不必要的父级引用符号
                <code>
                    &
                </code>
                。
            </br>
        </br>
    </br>
</p>

<pre class="hljs mipsasm"><code><span class="hljs-comment">/* not good */</span>
@import <span class="hljs-string">"_dialog.scss"</span><span class="hljs-comment">;</span>

<span class="hljs-comment">/* good */</span>
@import <span class="hljs-string">"dialog"</span><span class="hljs-comment">;</span>

<span class="hljs-comment">/* not good */</span>
.fatal {
    @<span class="hljs-keyword">extend </span>.error<span class="hljs-comment">;</span>
}

<span class="hljs-comment">/* good */</span>
.fatal {
    @<span class="hljs-keyword">extend </span>%error<span class="hljs-comment">;</span>
}

<span class="hljs-comment">/* not good */</span>
.element {
    & > .<span class="hljs-keyword">dialog </span>{
        ...
    }
}

<span class="hljs-comment">/* good */</span>
.element {
    > .<span class="hljs-keyword">dialog </span>{
        ...
    }
}</code></pre>
<h2>
    一些小建议
</h2>
<ul>
    <li>
        不允许有空的规则；
    </li>
    <li>
        元素选择器用小写字母；
    </li>
    <li>
        去掉小数点前面的0；
    </li>
    <li>
        去掉数字中不必要的小数点和末尾的0；
    </li>
    <li>
        属性值'0'后面不要加单位；
    </li>
    <li>
        同个属性不同前缀的写法需要在垂直方向保持对齐；
    </li>
    <li>
        无前缀的标准属性应该写在有前缀的属性后面；
    </li>
    <li>
        不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系；
    </li>
    <li>
        不要在一个文件里出现两个相同的规则；
    </li>
    <li>
        用 border: 0; 代替 border: none;；
    </li>
    <li>
        选择器不要超过4层（在scss中如果超过4层应该考虑用嵌套的方式来写）；
    </li>
    <li>
        发布的代码中不要有 @import；
    </li>
    <li>
        尽量少用'*'选择器。
    </li>
</ul>

<pre class="hljs scss"><code><span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-tag">LI</span> {
    ...
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-tag">li</span> {
    ...
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0.5</span>);
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, .<span class="hljs-number">5</span>);
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50.0px</span>;
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50px</span>;
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">0px</span>;
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">0</span>;
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;
    -webkit-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;
    -moz-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;

    <span class="hljs-attribute">background</span>: linear-gradient(to bottom, <span class="hljs-number">#fff</span> <span class="hljs-number">0</span>, <span class="hljs-number">#eee</span> <span class="hljs-number">100%</span>);
    <span class="hljs-attribute">background</span>: -webkit-linear-gradient(top, <span class="hljs-number">#fff</span> <span class="hljs-number">0</span>, <span class="hljs-number">#eee</span> <span class="hljs-number">100%</span>);
    <span class="hljs-attribute">background</span>: -moz-linear-gradient(top, <span class="hljs-number">#fff</span> <span class="hljs-number">0</span>, <span class="hljs-number">#eee</span> <span class="hljs-number">100%</span>);
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    -webkit-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;
       -moz-<span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;
            <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">3px</span>;

    <span class="hljs-attribute">background</span>: -webkit-linear-gradient(top, <span class="hljs-number">#fff</span> <span class="hljs-number">0</span>, <span class="hljs-number">#eee</span> <span class="hljs-number">100%</span>);
    <span class="hljs-attribute">background</span>:    -moz-linear-gradient(top, <span class="hljs-number">#fff</span> <span class="hljs-number">0</span>, <span class="hljs-number">#eee</span> <span class="hljs-number">100%</span>);
    <span class="hljs-attribute">background</span>:         linear-gradient(to bottom, <span class="hljs-number">#fff</span> <span class="hljs-number">0</span>, <span class="hljs-number">#eee</span> <span class="hljs-number">100%</span>);
}

<span class="hljs-comment">/* not good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: rgb(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50px</span>;
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, .<span class="hljs-number">5</span>);
}

<span class="hljs-comment">/* good */</span>
<span class="hljs-selector-class">.element</span> {
    <span class="hljs-attribute">color</span>: rgb(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>);
    <span class="hljs-attribute">color</span>: rgba(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, .<span class="hljs-number">5</span>);
}</code></pre>
<h2>
    目录索引
</h2>
<p>
    <router-link :to="{ name: 'front-end-code-criterion-1' }">
        前端工程代码规范（一）——命名规则与工程约定
    </router-link>
    <br>
    <router-link :to="{ name: 'front-end-code-criterion-2' }">
        前端工程代码规范（二）——HTML
    </router-link>
    <br>
    <router-link :to="{ name: 'front-end-code-criterion-4' }">
        前端工程代码规范（四）——JS
    </router-link>
    <br>
</p>
<p>
    <br/>
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
