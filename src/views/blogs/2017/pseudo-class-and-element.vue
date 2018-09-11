<template>
    <div class="blog-container">
        <BlogHeader
            title="伪类与伪元素的区别" subTitle=""
            date="2017-11-16" :tags="['CSS']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <blockquote>
                    <p>
                        本文将介绍伪类与伪元素的区别，以及一些常用的场景，最后会附上一些css3中新增的伪类
                    </p>
                </blockquote>

                <h2>区别</h2>
                <p>
                    <ul>
                        <li>
                            css3明确规定了伪类用一个冒号(:)来表示，而伪元素则用两个冒号(::)来表示。但目前因为兼容性的问题，它们的写法是一致的，都是一个冒号(:)，所以容易混淆。
                        </li>
                        <li>
                            伪类，更多的定义的是状态。常见的伪类有:hover，:active，:focus，:visited，:link，:not，:first-child，:last-child等等。
                        </li>
                        <li>
                            伪元素，不存在于DOM树中的虚拟元素，它们可以像正常的html元素一样定义css，但无法使用JavaScript获取。常见伪元素有 ::before，::after，::first-letter，::first-line
                        </li>
                    </ul>
                </p>

                <h2>表单校验中常用的伪类(:required、:valid和:invalid)</h2>
                <p>
                    :required 伪类指定具有 required 属性的表单元素<br>
                    :valid 伪类指定一个通过 匹配正确 的所要求的表单元素<br>
                    :invalid 伪类指定一个 不匹配 指定要求的表单元素
                    <pre class="hljs mipsasm"><code class="">.valid {<br>    <span class="hljs-keyword">border-color: </span>green<span class="hljs-comment">;</span><br>    <span class="hljs-keyword">box-shadow: </span><span class="hljs-keyword">inset </span><span class="hljs-number">5</span>px <span class="hljs-number">0</span> <span class="hljs-number">0</span> green<span class="hljs-comment">;</span><br>}<br>.invalid {<br>    <span class="hljs-keyword">border-color: </span>red<span class="hljs-comment">;</span><br>    <span class="hljs-keyword">box-shadow: </span><span class="hljs-keyword">inset </span><span class="hljs-number">5</span>px <span class="hljs-number">0</span> <span class="hljs-number">0</span> red<span class="hljs-comment">;</span><br>}<br>.required {<br>    <span class="hljs-keyword">border-color: </span>red<span class="hljs-comment">;</span><br>    <span class="hljs-keyword">box-shadow: </span><span class="hljs-keyword">inset </span><span class="hljs-number">5</span>px <span class="hljs-number">0</span> <span class="hljs-number">0</span> red<span class="hljs-comment">;</span><br>}<br>input, textarea {<br>    &amp;:valid {<br>        @<span class="hljs-keyword">extend </span>.valid<span class="hljs-comment">;</span><br>    }<br>    &amp;:invalid {<br>        @<span class="hljs-keyword">extend </span>.invalid<span class="hljs-comment">;</span><br>    }<br>    &amp;:required {<br>        @<span class="hljs-keyword">extend </span>.required<span class="hljs-comment">;</span><br>    }<br>}</code></pre>
                </p>

                <h2>用:target来实现折叠面板</h2>
                <p>
                    :target是文档的内部链接，即 URL 后面跟有锚名称 #，指向文档内某个具体的元素。它可以替代过去只能用js实现的显示或隐藏折叠面板。
                    <pre class="hljs applescript"><code class="">&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"t-collapse"</span>&gt;<br>    &lt;!<span class="hljs-comment">-- 在url最后添加 #modal1，使得target生效 —&gt;</span><br>    &lt;a <span class="hljs-built_in">class</span>=<span class="hljs-string">"collapse-target"</span> href=<span class="hljs-string">"#modal1"</span>&gt;target <span class="hljs-number">1</span>&lt;/a&gt;<br>    &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"collapse-body"</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"modal1"</span>&gt;<br>        &lt;!<span class="hljs-comment">-- 将url的#modal1 变为 #，使得target失效 —&gt;</span><br>        &lt;a <span class="hljs-built_in">class</span>=<span class="hljs-string">"collapse-close"</span> href=<span class="hljs-string">"#"</span>&gt;target <span class="hljs-number">1</span>&lt;/a&gt;<br>        &lt;p&gt;...&lt;/p&gt;<br>    &lt;/<span class="hljs-keyword">div</span>&gt;<br>&lt;/<span class="hljs-keyword">div</span>&gt;<br></code></pre>
                    <pre class="hljs stylus"><code class=""><span class="hljs-selector-class">.t-collapse</span> {<br>    &gt;<span class="hljs-selector-class">.collapse-body</span> {<br>        <span class="hljs-attribute">display</span>: none;<br>        &amp;:target {<br>            <span class="hljs-attribute">display</span>: block;<br>        }<br>    }<br>}</code></pre>
                </p>

                <h2>:nth-child(n) 与 :nth-of-type(n) 的差异</h2>
                <p>
                    共同点：
                    <ul>
                        <li>它们的n可以是大于零的数字，或者类似2n+1的表达式，再或者是even/odd</li>
                    </ul>
                    区别：
                    <ul>
                        <li>:nth-of-type(n) 除了关注n之外，还需要关注最前面的<code>类型</code>，也就是标签。</li>
                        <li>:nth-child(n) 它关注的是：其父元素下的第n个孩子，与类型无关。</li>
                    </ul>
                    请注意以下这个例子的差异：
                    <pre class="hljs xml"><code class=""></span><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>这是标题<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第一个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第二个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第三个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第四个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第五个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>

                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <img src="~@/assets/blog/bg-20171116-01.png" class="m-l-0 m-t-0">
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <img src="~@/assets/blog/bg-20171116-02.png" class="m-l-0 m-t-0">
                        </div>
                    </div>
                </p>

                <h2>用 ::selection 来美化选中的文本</h2>
                <p>
                    <img src="~@/assets/blog/bg-20171116-03.png" class="m-l-0 m-t-0">
                </p>

                <h2>总结</h2>
                <p>
                    <ul>
                        <li>尊重规范，写伪类的时候用:，而写伪元素的时候用::。</li>
                        <li>把兼容性问题交给postcss等工具去做，就像把前缀的问题，交给autoprefixer去做一样。</li>
                    </ul>
                </p>

                <h2>PS——CSS3新增伪类有哪些？</h2>
                <p>
                    :root 选择文档的根元素，等同于 html 元素<br>
                    :empty 选择没有子元素的元素<br>
                    :target 选取当前活动的目标元素<br>
                    :not(selector) 选择除 selector 元素意外的元素<br>
                    :enabled 选择可用的表单元素<br>
                    :disabled 选择禁用的表单元素<br>
                    :checked 选择被选中的表单元素<br>
                    :nth-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n<br>
                    :nth-last-child(n) 匹配父元素下指定子元素，在所有子元素中排序第n，从后向前数<br>
                    :nth-child(odd) 、 :nth-child(even) 、 :nth-child(3n+1)<br>
                    :first-child 、 :last-child 、 :only-child<br>
                    :nth-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n<br>
                    :nth-last-of-type(n) 匹配父元素下指定子元素，在同类子元素中排序第n，从后向前数<br>
                    :nth-of-type(odd) 、 :nth-of-type(even) 、 :nth-of-type(3n+1)<br>
                    :first-of-type 、 :last-of-type 、 :only-of-type
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
