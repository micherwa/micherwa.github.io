<template>
    <div class="blog-container">
        <BlogHeader
            title="前端工程代码规范（二）" subTitle="HTML"
            date="2018-05-26" :tags="['前端代码规范']">
        </BlogHeader>

        <BlogContent>
            <div slot="content">
                <blockquote>
                    <p>
                        这篇文章转自我在segmentfault上发表的
                        <a href="https://segmentfault.com/a/1190000015040592" target="_blank">
                            前端工程代码规范系列文章之二
                        </a>
                        ，共4篇。
                    </p>
                </blockquote>

<h2>
    总原则
</h2>
<ul>
    <li>
        缩进使用soft tab（4个空格）；
    </li>
    <li>
        属性名全小写，用中划线做分隔符；
    </li>
    <li>
        在属性上，使用双引号，而非单引号；
    </li>
    <li>
        不要在自动闭合标签结尾处使用斜线。
    </li>
</ul>
<pre class="hljs xml"><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag"><<span class="hljs-name">html</span>></span>
<span class="hljs-tag"><<span class="hljs-name">head</span>></span>
    <span class="hljs-tag"><<span class="hljs-name">title</span>></span>Page title<span class="hljs-tag"></<span class="hljs-name">title</span>></span>
<span class="hljs-tag"></<span class="hljs-name">head</span>></span>
<span class="hljs-tag"><<span class="hljs-name">body</span>></span>
    <span class="hljs-tag"><<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"xxx/xxx.png"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">"Company"</span>></span>

    <span class="hljs-tag"><<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"xxx"</span>></span>
<span class="hljs-tag"></<span class="hljs-name">body</span>></span>
<span class="hljs-tag"></<span class="hljs-name">html</span>></span></code></pre>
<h2>
    HTML5 doctype
</h2>
<p>
    在页面顶部，用doctype来启用标准模式，使得每个浏览器的展现都尽可能地保持一致。虽然doctype不区分大小写，但是按照惯例，doctype大写，写法见上例。
</p>
<h2>
    lang属性
</h2>
<p>
    根据html5规范
</p>
<blockquote>
    应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。
</blockquote>
<p>
    常用的值有zh，en等，更细分的则有zh-cn(中国大陆)、zh-tw(中国台湾)、zh-hk(中国香港)
</p>
<pre class="hljs xml"><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag"><<span class="hljs-name">html</span> <span class="hljs-attr">lang</span>=<span class="hljs-string">"en-us"</span>></span>
...
<span class="hljs-tag"></<span class="hljs-name">html</span>></span></code></pre>
<h2>
    字符编码与IE兼容模式
</h2>
<ul>
    <li>
        通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。
    </li>
    <li>
        用
        <code>
            &lt;meta&gt;
        </code>
        标签可以指定页面应该用什么版本的IE来渲染，不同doctype在不同浏览器下会触发不同的渲染模式。
    </li>
</ul>
<pre class="hljs xml"><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag"><<span class="hljs-name">html</span>></span>
<span class="hljs-tag"><<span class="hljs-name">head</span>></span>
    <span class="hljs-tag"><<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"UTF-8"</span>></span>
    <span class="hljs-tag"><<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">"X-UA-Compatible"</span> <span class="hljs-attr">content</span>=<span class="hljs-string">"IE=Edge"</span>></span>
<span class="hljs-tag"></<span class="hljs-name">head</span>></span>
...
<span class="hljs-tag"></<span class="hljs-name">html</span>></span></code></pre>
<h2>
    引入CSS，JS
</h2>
<p>
    根据html5规范
</p>
<blockquote>
    通常在引入CSS和JS时不需要指明
    <code>type</code>
    ，因为
    <code>
        text/css
    </code>
    和
    <code>
        text/javascript
    </code>
    分别是他们的默认值。
</blockquote>
<pre class="hljs xml"><code><span class="hljs-comment"></span>
<span class="hljs-tag"><<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">"stylesheet"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"xxx.css"</span>></span>

<span class="hljs-comment"></span>
<span class="hljs-tag"><<span class="hljs-name">style</span>></span><span class="undefined">
...
</span><span class="hljs-tag"></<span class="hljs-name">style</span>></span>

<span class="hljs-comment"></span>
<span class="hljs-tag"><<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"xxx.js"</span>></span><span class="undefined"></span><span class="hljs-tag"></<span class="hljs-name">script</span>></span>

<span class="hljs-comment"></span>
<span class="hljs-tag"><<span class="hljs-name">script</span>></span><span class="undefined">
...
</span><span class="hljs-tag"></<span class="hljs-name">script</span>></span></code></pre>
<h2>
    boolean属性
</h2>
<p>
    boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要。
</p>
<pre class="hljs xml"><code><span class="hljs-tag"><<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">checked</span>></span>

<span class="hljs-tag"><<span class="hljs-name">select</span>></span>
<span class="hljs-tag">     <<span class="hljs-name">option</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">selected</span>></span>1<span class="hljs-tag"></<span class="hljs-name">option</span>></span>
<span class="hljs-tag"></<span class="hljs-name">select</span>></span></code></pre>
<h2>
    属性顺序（<code>推荐</code>）
</h2>
<ul>
    <li>
        class
    </li>
    <li>
        id
    </li>
    <li>
        name
    </li>
    <li>
        data-*
    </li>
    <li>
        src, for, type, href, value , max-length, max, min, pattern
    </li>
    <li>
        placeholder, title, alt
    </li>
    <li>
        aria-*, role
    </li>
    <li>
        required, readonly, disabled
    </li>
</ul>
<p>
    class是为高可复用组件设计的，所以应处在第一位；
    <br>
        id更加具体且应该
        <code>
            尽量少用
        </code>
        ，所以将它放在第二位。
    </br>
</p>
<pre class="hljs scala"><code>&lt;a <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"..."</span> id=<span class="hljs-string">"..."</span> data-modal=<span class="hljs-string">"toggle"</span> href=<span class="hljs-string">"#"</span>>xxx&lt;/a&gt;

&lt;input <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"form-control"</span> <span class="hljs-class"><span class="hljs-keyword">type</span></span>=<span class="hljs-string">"text"</span>&gt;

&lt;img src=<span class="hljs-string">"..."</span> alt=<span class="hljs-string">"..."</span>&gt;</code></pre>
<h2>
    一些建议
</h2>
<ul>
    <li>
        尽量避免用js生成标签，这会使得内容变得更难维护，性能也更差；
    </li>
    <li>
        在编写HTML代码时，需要尽量避免多余的父节点；
    </li>
    <li>
        尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；
    </li>
    <li>
        任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。
    </li>
</ul>
<h2>
    目录索引
</h2>

<p>
    <router-link :to="{ name: 'front-end-code-criterion-1' }">
        前端工程代码规范（一）——命名规则与工程约定
    </router-link>
    <br>
    <router-link :to="{ name: 'front-end-code-criterion-3' }">
        前端工程代码规范（三）——CSS, SCSS
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
