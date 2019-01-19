<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    面试前端候选人的时候，我经常会问这样一个有关CSS的问题：
                </p>
                <blockquote>
                    <p>
                        你知道伪类与伪元素么，它们的分别是什么？
                    </p>
                    <p>
                        这时，能回答上来的很少。
                    </p>
                    <br/>
                    <p>
                        换一种问法，你知道 :hover, :active, :focus, :visited么？
                    </p>
                    <p>
                        这时，基本都能回答上来，这不就是a标签的四种状态么。
                    </p>
                    <br/>
                    <p>
                        嗯，ok。然后继续问，那么 ::before 和 ::after，听说过么？
                    </p>
                    <p>
                        这时，能听到的回答是，嗯，我看到过，偶尔会用。
                    </p>
                    <br/>
                    <p>
                        伪类与伪元素，都有一个“伪”字，那它们有什么区别么？
                    </p>
                    <p>
                        这时，回应我的，是一片沉默。。。
                    </p>
                </blockquote>

                <p>
                    从回答上来分析，虽然伪类和伪元素平时都有接触，但在概念上，都比较模糊。今天，我们就来说说伪类与伪元素的区别，以及使用场景。伪类，不是只有a标签的四种状态。伪元素，也不是只有 ::before 与 ::after。更多的伪类与伪元素，详见文末附录。
                </p>


                <h2>概念上的区别</h2>
                <p>
                    从概念上来区分，大致有以下几点：
                </p>
                <p>
                    <strong>伪类，更多的定义的是状态</strong>。常见的伪类有 :hover，:active，:focus，:visited，:link，:not，:first-child，:last-child等等。
                </p>
                <p>
                    <strong>伪元素，不存在于DOM树中的虚拟元素，它们可以像正常的html元素一样定义css，但无法使用JavaScript获取</strong>。常见伪元素有 ::before，::after，::first-letter，::first-line等等。
                </p>
                <p>
                    <strong>CSS3明确规定了，伪类用一个冒号(:)来表示，而伪元素则用两个冒号(::)来表示</strong>。但目前因为兼容性的问题，它们的写法可以是一致的，都用一个冒号(:)就可以了，所以非常容易混淆。
                </p>

                <h2>实战场景——伪类</h2>

                <h4>表单校验</h4>

                <p>表单的校验中，常会用到 <code>:required</code>、<code>:valid</code> 和 <code>:invalid</code> 这三个伪类。先来看看它们所代表的含义。</p>
                <ul>
                    <li>:required，指定具有 required属性 的表单元素</li>
                    <li>:valid，指定一个 匹配指定要求 的表单元素</li>
                    <li>:invalid，指定一个 不匹配指定要求 的表单元素</li>
                </ul>
                <p>
                    看下面这个例子：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>input中类型为email的校验<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>符合email校验规则<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">required</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"24238477@qq.com"</span> /&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>不符合email校验规则<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">required</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"lalala"</span> /&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span>&gt;</span><br><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>有required标识，但未填写<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"email"</span> <span class="hljs-attr">required</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请输入"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">""</span> /&gt;</span></code></pre>

                    <pre class="hljs groovy"><code class="">input {<br>    &amp;:valid {<br>        border-<span class="hljs-string">color:</span> green;<br>        box-<span class="hljs-string">shadow:</span> inset <span class="hljs-number">5</span>px <span class="hljs-number">0</span> <span class="hljs-number">0</span> green;<br>    }<br>    &amp;:invalid {<br>        border-<span class="hljs-string">color:</span> red;<br>        box-<span class="hljs-string">shadow:</span> inset <span class="hljs-number">5</span>px <span class="hljs-number">0</span> <span class="hljs-number">0</span> red;<br>    }<br>    &amp;:required {<br>        border-<span class="hljs-string">color:</span> red;<br>        box-<span class="hljs-string">shadow:</span> inset <span class="hljs-number">5</span>px <span class="hljs-number">0</span> <span class="hljs-number">0</span> red;<br>    }<br>}</code></pre>

                    效果如下：
                    <img src="~@/assets/blog/bg-20190104-01.png">
                </p>

                <h4>折叠面板</h4>
                <p>
                    过去，要实现折叠面板的显示或隐藏，只能用JavaScript来搞定。但是现在，可以用伪类 <code>:target</code> 来实现。 :target 是文档的内部链接，即 URL 后面跟有锚名称 #，指向文档内某个具体的元素。
                </p>
                <p>
                    看下面这个例子：
                    <pre class="hljs applescript"><code class="">&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"t-collapse"</span>&gt;<br>    &lt;!<span class="hljs-comment">-- 在url最后添加 #modal1，使得target生效 —&gt;</span><br>    &lt;a <span class="hljs-built_in">class</span>=<span class="hljs-string">"collapse-target"</span> href=<span class="hljs-string">"#modal1"</span>&gt;target <span class="hljs-number">1</span>&lt;/a&gt;<br>    &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"collapse-body"</span> <span class="hljs-built_in">id</span>=<span class="hljs-string">"modal1"</span>&gt;<br>        &lt;!<span class="hljs-comment">-- 将url的#modal1 变为 #，使得target失效 —&gt;</span><br>        &lt;a <span class="hljs-built_in">class</span>=<span class="hljs-string">"collapse-close"</span> href=<span class="hljs-string">"#"</span>&gt;target <span class="hljs-number">1</span>&lt;/a&gt;<br>        &lt;p&gt;...&lt;/p&gt;<br>    &lt;/<span class="hljs-keyword">div</span>&gt;<br>&lt;/<span class="hljs-keyword">div</span>&gt;<br></code></pre>
                    <pre class="hljs stylus"><code class=""><span class="hljs-selector-class">.t-collapse</span> {<br>    &gt;<span class="hljs-selector-class">.collapse-body</span> {<br>        <span class="hljs-attribute">display</span>: none;<br>        &amp;:target {<br>            <span class="hljs-attribute">display</span>: block;<br>        }<br>    }<br>}</code></pre>
                </p>

                <h4>元素的index</h4>
                <p>
                    当我们要指定一系列标签中的某个元素时，并不需要用JavaScript获取。可以用 <code>:nth-child(n)</code> 与 <code>:nth-of-type(n)</code> 来找到，并指定样式。但它们有一些小区别，需要注意。
                </p>
                <p>
                    首先，它们的n可以是大于零的数字，或者类似2n+1的表达式，再或者是even/odd。
                </p>
                <p>
                    另外，还有2个区别：
                    <ul>
                        <li>:nth-of-type(n) 除了关注n之外，还需要关注最前面的<code>类型</code>，也就是标签。</li>
                        <li>:nth-child(n) 它关注的是：其父元素下的第n个孩子，与类型无关。</li>
                    </ul>
                    看下面这个例子，注意两者的差异：
                    <pre class="hljs xml"><code class=""></span><span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>这是标题<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第一个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第二个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第三个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第四个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>第五个段落。<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>

                    <img src="~@/assets/blog/bg-20190104-02.png">
                </p>

                <h2>实战场景——伪元素</h2>

                <h4>antd的彩蛋事件</h4>
                <p>
                    还记得2018年圣诞节的“彩蛋事件”，在整个前端圈，轰动一时。因为按钮上的一朵云，导致不少前端er提前回家过年了。当时，彩蛋事件出现的第一时间，就吓得我赶快打开工程看了一眼，果然也中招了。为了保住饭碗，得赶紧把云朵去掉。
                </p>
                <p>
                    查看了生成的html，发现原来是 button 下藏了一个 <code>::before</code>。所以，赶紧把样式覆盖掉，兼容代码如下：
                    <pre class="hljs fortran"><code class="">.ant-btn {<br>    &amp;::before {<br>        display: <span class="hljs-keyword">none</span> <span class="hljs-comment">!important;</span><br>    }<br>}</code></pre>
                </p>

                <h4>美化选中的文本</h4>
                <p>
                    在网页中，默认的划词效果是，原字色保持不变，划过时的背景变为蓝底色。其实，这是可以用 <code>::selection</code> 来进行美化的。看下面这个例子：
                    <pre class="hljs xml"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Custom text selection color<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></code></pre>
                    <pre class="hljs css"><code class=""><span class="hljs-selector-pseudo">::selection</span> {<br>    <span class="hljs-attribute">color</span>: red;<br>    <span class="hljs-attribute">background-color</span>: yellow;<br>}</code></pre>
                    效果如下：
                    <img src="~@/assets/blog/bg-20190104-03.png">
                    划过的部分美化为：红色的字体，并且底色变为了黄色。
                </p>

                <h2>总结</h2>
                <p>
                    <strong>CSS也可以实现动态的交互</strong>，并非只有JavaScript才能实现。
                </p>
                <p>
                    <strong>书写的时候，要尊重规范</strong>。写伪类的时候用 <code>:</code>，而写伪元素的时候用 <code>::</code>。
                </p>
                <p>
                    <strong>兼容性的问题，交给postcss去做。</strong>本文并未涉及兼容性的写法，包括前缀问题，可以交给autoprefixer去做。
                </p>

                <h2>附录</h2>
                <h4>CSS3中的伪类</h4>
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

                <h4>CSS3中的伪元素</h4>
                <p>
                    ::after 已选中元素的最后一个子元素<br>
                    ::before 已选中元素的第一个子元素<br>
                    ::first-letter 选中某个款级元素的第一行的第一个字母<br>
                    ::first-line 匹配某个块级元素的第一行<br>
                    ::selection 匹配用户划词时的高亮部分
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
