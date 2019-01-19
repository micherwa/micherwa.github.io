<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>等比缩放的盒子（垂直方向padding）</h2>
                <p>
                    原理：
                    <ul>
                        <li>根据容器的宽度，按照宽高比例自动计算出容器的大小，并且让容器内的如img等子元素自适应宽高</li>
                        <li>图片父容器宽度100%，父容器的高度百分比为：100*3 / 4 = 75%</li>
                        <li>图片absolute并且完全铺满父容器</li>
                    </ul>
                    <pre class="hljs javascript"><code class="">&lt;figure <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"image-aspect-ratio"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"http://via.placeholder.com/640x384"</span>&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">figure</span>&gt;</span></span></code></pre>

                    <pre class="hljs scss"><code class=""><span class="hljs-selector-class">.image-aspect-ratio</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">padding-top</span>: <span class="hljs-number">75%</span>;<br>    &gt; <span class="hljs-selector-tag">img</span> {<br>        <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>        <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>        <span class="hljs-attribute">position</span>: absolute;<br>        <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;<br>        <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;<br>    }<br>}</code></pre>

                    UI只需要做一张4:3的占位图，然后利用图片懒加载技术来在页面滚动过程中加载商品图片，加载过程中页面完全不会抖动，屏幕旋转后，图片高度也随之变化。
                </p>

                <h2>纯css实现鼠标滑过图片的流光效果</h2>
                <p>
                    当你的鼠标滑过图片时，会有一层质感很强的流光从左侧不可见位置滑动到右侧不可见位置的效果。
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"img-light"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">'test.jpg'</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"640"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"384"</span> /&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.img-light</span> {<br>    <span class="hljs-attribute">position</span>:relative;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">640px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">384px</span>;<br>}<br><span class="hljs-selector-class">.img-light</span><span class="hljs-selector-pseudo">:after</span>{<br>    <span class="hljs-attribute">content</span>:<span class="hljs-string">""</span>;<br>    <span class="hljs-attribute">height</span>:<span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">width</span>:<span class="hljs-number">100px</span>;<br>    <span class="hljs-attribute">-webkit-transform</span>:<span class="hljs-built_in">skewX</span>(-25deg) <span class="hljs-built_in">translateZ</span>(0);<br>    <span class="hljs-attribute">transform</span>:<span class="hljs-built_in">skewX</span>(-25deg) <span class="hljs-built_in">translateZ</span>(0);<br>    <span class="hljs-attribute">background-image</span>:<span class="hljs-built_in">linear-gradient</span>(90deg,hsla(0,0%,100%,0),<span class="hljs-built_in">hsla</span>(0,0%,100%,.3) <span class="hljs-number">50%</span>,<span class="hljs-built_in">hsla</span>(0,0%,100%,0));<br>    <span class="hljs-attribute">position</span>:absolute;<br>    <span class="hljs-attribute">left</span>:-<span class="hljs-number">160%</span>;<br>    <span class="hljs-attribute">top</span>:<span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">z-index</span>:<span class="hljs-number">2</span>;<br>}<br><span class="hljs-selector-class">.img-light</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:after</span>{<br>    <span class="hljs-attribute">transition</span>:left <span class="hljs-number">1s</span> ease-in-out;<br>    <span class="hljs-attribute">left</span>:<span class="hljs-number">160%</span>;<br>}</code></pre>
                </p>

                <h2>如何写一个没有横向滚动条的横向列表</h2>
                <p>
                    思路：ul设置white-space:nowrap;，li设置display:inline-block;，最外层的div利用高度差把横向滚动条藏起来。
                </p>
                <p>
                    html结构：
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"wrapper"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span></span><br><span class="xml">        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span><br><span class="xml">        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span><br><span class="xml">        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span><br><span class="xml">        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span><br><span class="xml">        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span><br><span class="xml">        <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>6<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span></span><br><span class="xml">    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>&lt;/div&gt;</code></pre>

                    css结构：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">340px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">overflow</span>: hidden;<br>}<br><span class="hljs-selector-class">.wrapper</span> <span class="hljs-selector-tag">ul</span> {<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">96px</span>;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">white-space</span>: nowrap;<br>    <span class="hljs-attribute">overflow-x</span>: scroll;<br>    <span class="hljs-attribute">padding</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span>;<br>}<br><span class="hljs-selector-class">.wrapper</span> <span class="hljs-selector-tag">li</span> {<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ddd</span>;<br>    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">80px</span>;<br>    <span class="hljs-attribute">text-align</span>: center;<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>;<br>    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">10px</span>;<br>}</code></pre>
                </p>

                <h2>居中浮动元素</h2>
                <p>
                    常用于头部导航条，需要居中展示的情况，可不定宽度。
                    <pre class="hljs scss"><code class=""><span class="hljs-selector-class">.center-float</span> {<br>    <span class="hljs-attribute">float</span>: left;<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;<br>    &gt; <span class="hljs-selector-tag">ul</span> {<br>        <span class="hljs-attribute">position</span>: relative;<br>        <span class="hljs-attribute">left</span>: -<span class="hljs-number">50%</span>;<br>    }<br>}</code></pre>
                </p>

                <h2>用 CSS 的 content 属性 attr 抓取资料</h2>
                <p>
                    在 attr 里面塞入我们在 html 新增的 data-msg 属性，这样伪元素 (:after) 就会得到该值。
                    <pre class="hljs applescript"><code style="word-break: break-word; white-space: initial;" class="">&lt;<span class="hljs-keyword">div</span> data-msg=<span class="hljs-string">"Open this file in Github Desktop"</span>&gt;hover&lt;/<span class="hljs-keyword">div</span>&gt;</code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-tag">div</span> {<br>    <span class="hljs-attribute">width</span>:<span class="hljs-number">100px</span>;<br>    <span class="hljs-attribute">border</span>:<span class="hljs-number">1px</span> solid red;  <br>    <span class="hljs-attribute">position</span>:relative;<br>}<br><span class="hljs-selector-tag">div</span><span class="hljs-selector-pseudo">:hover</span><span class="hljs-selector-pseudo">:after</span> {<br>    <span class="hljs-attribute">content</span>:<span class="hljs-built_in">attr</span>(data-msg);<br>    <span class="hljs-attribute">position</span>:absolute;<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;<br>    <span class="hljs-attribute">width</span>:<span class="hljs-number">200%</span>;<br>    <span class="hljs-attribute">line-height</span>:<span class="hljs-number">30px</span>;<br>    <span class="hljs-attribute">text-align</span>:center;<br>    <span class="hljs-attribute">left</span>:<span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">top</span>:<span class="hljs-number">25px</span>;<br>    <span class="hljs-attribute">border</span>:<span class="hljs-number">1px</span> solid green;<br>}</code></pre>
                    效果：
                    <img class="m-l-0" src="~@/assets/blog/bg-20171214-01.png">
                </p>

                <h2>让文字像古诗一样竖着呈现(writing-mode)</h2>
                <p>
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"verticle-mode"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>咏柳<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span><br>        碧玉妆成一树高，<br>        万条垂下绿丝绦。<br>        不知细叶谁裁出，<br>        二月春风似剪刀。<br>    <span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs mercury"><code class="">.verticle-<span class="hljs-keyword">mode</span> {<br>    writing-<span class="hljs-keyword">mode</span>: tb-rl;<br>    -webkit-writing-<span class="hljs-keyword">mode</span>: vertical-rl;      <br>    writing-<span class="hljs-keyword">mode</span>: vertical-rl;<br>}<br><span class="hljs-comment">/* 兼容IE7 */</span><br>.verticle-<span class="hljs-keyword">mode</span> {<br>    *width: <span class="hljs-number">120</span>px;<br>}<br>.verticle-<span class="hljs-keyword">mode</span> h4,<br>.verticle-<span class="hljs-keyword">mode</span> p {<br>    *display: <span class="hljs-meta">inline</span>;<br>    *writing-<span class="hljs-keyword">mode</span>: tb-rl;<br>}<br>.verticle-<span class="hljs-keyword">mode</span> h4 {<br>    *float:right;<br>}</code></pre>
                    效果：
                    <img class="m-l-0" src="~@/assets/blog/bg-20171214-02.png">
                </p>

                <h2>鼠标悬浮内容自动撑开的过渡动画(max-height)</h2>
                <p>
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">ul</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"hd"</span>&gt;</span><br>            列表1 <br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>    <br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bd"</span>&gt;</span><br>            列表内容<br>            内容列表内容<br>            内容列表内容<br>            内容<br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br>  <br>    <span class="hljs-tag">&lt;<span class="hljs-name">li</span>&gt;</span>    <br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"hd"</span>&gt;</span><br>            列表1 <br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>  <br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"bd"</span>&gt;</span><br>            列表内容<br>            内容列表内容<br>            内容列表内容<br>            内容<br>        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.bd</span> {<br>  <span class="hljs-attribute">max-height</span>:<span class="hljs-number">0</span>;<br>  <span class="hljs-attribute">overflow</span>:hidden;<br>  <span class="hljs-attribute">transition</span>: all <span class="hljs-number">1s</span> ease-out;<br>}<br><span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:hover</span> <span class="hljs-selector-class">.bd</span> {<br>  <span class="hljs-attribute">max-height</span>: <span class="hljs-number">600px</span>;<br>  <span class="hljs-attribute">transition-timing-function</span>: ease-in;<br>}</code></pre>
                    效果：
                    <img class="m-l-0" src="~@/assets/blog/bg-20171214-03.png">
                </p>

                <h2>利用 pointer-events 禁用 a 标签事件效果</h2>
                <p>
                    <ul>
                        <li>它是一个用于 HTML 指针事件的属性</li>
                        <li>可以禁用 HTML 元素的 hover/focus/active 等动态效果</li>
                        <li>
                            默认值为 auto。语法： pointer-events:auto|none|visiblepainted|visiblefill|visiblestroke|visible|painted|fill|stroke|all;
                        </li>
                    </ul>
                </p>

                <h2>实现文字两端对齐(text-align-last)</h2>
                <p>
                    <pre class="hljs dts"><code class=""><span class="hljs-comment">// html</span><br><span class="hljs-params">&lt;div&gt;</span>姓名<span class="hljs-params">&lt;/div&gt;</span><br><span class="hljs-params">&lt;div&gt;</span>手机号码<span class="hljs-params">&lt;/div&gt;</span><br><span class="hljs-params">&lt;div&gt;</span>验证码<span class="hljs-params">&lt;/div&gt;</span><br><br><span class="hljs-comment">// css</span><br><span class="hljs-class">div </span>{<br><span class="hljs-symbol">    margin:</span> <span class="hljs-number">10</span>px <span class="hljs-number">0</span>; <br><span class="hljs-symbol">    width:</span> <span class="hljs-number">100</span>px;<br><span class="hljs-symbol">    border:</span> <span class="hljs-number">1</span>px solid red;<br>    text-align-last: justify;<br>}</code></pre>
                </p>

                <h2>美化浏览器自带的 radio ， checkbox 属性</h2>
                <p>
                    原理：
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
                    <pre class="hljs scss"><code class=""><span class="hljs-selector-class">.radio-beauty-container</span> {<br>    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-variable">$bgc</span>: green;<br><br>    %common {<br>        <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span>;<br>        <span class="hljs-attribute">background-color</span>: <span class="hljs-variable">$bgc</span>;<br>        <span class="hljs-attribute">background-clip</span>: content-box;<br>    }<br>    <span class="hljs-selector-class">.radio-name</span> {<br>        <span class="hljs-attribute">vertical-align</span>: middle;<br>        <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;<br>    }<br>    <span class="hljs-selector-class">.radio-beauty</span> {<br>        <span class="hljs-attribute">width</span>: <span class="hljs-number">18px</span>;<br>        <span class="hljs-attribute">height</span>: <span class="hljs-number">18px</span>;<br>        <span class="hljs-attribute">box-sizing</span>: border-box;<br>        <span class="hljs-attribute">display</span>: inline-block;<br>        <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-variable">$bgc</span>;<br>        <span class="hljs-attribute">vertical-align</span>: middle;<br>        <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> <span class="hljs-number">15px</span> <span class="hljs-number">0</span> <span class="hljs-number">3px</span>;<br>        <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">50%</span>;<br><br>        &amp;:hover {<br>            <span class="hljs-attribute">box-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">7px</span> <span class="hljs-variable">$bgc</span>;<br>            @<span class="hljs-keyword">extend</span> %common;<br>        }<br>    }<br>    <span class="hljs-selector-tag">input</span><span class="hljs-selector-attr">[type="radio"]</span>:checked+<span class="hljs-selector-class">.radio-beauty</span> {<br>        @<span class="hljs-keyword">extend</span> %common;<br>    }<br>}</code></pre>
                </p>

                <h2>让网站所有图片变成黑白色彩的(grayscale)</h2>
                <p>
                    <pre class="hljs cs"><code style="word-break: break-word; white-space: initial;" class="">&lt;img src=<span class="hljs-string">"https://user-gold-cdn.xitu.io/2017/9/25/0844cf44a8d8c4ed026d6c488a6e9b80?imageView2/1/w/500/h/200/q/85/interlace/1"</span> alt=<span class="hljs-string">""</span> <span class="hljs-keyword">class</span>=<span class="hljs-string">"desaturate"</span>&gt;</code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-tag">img</span><span class="hljs-selector-class">.desaturate</span> {<br>    <span class="hljs-attribute">filter</span>: <span class="hljs-built_in">grayscale</span>(100%);<br>    <span class="hljs-attribute">-webkit-filter</span>: <span class="hljs-built_in">grayscale</span>(100%);<br>    <span class="hljs-attribute">-moz-filter</span>: <span class="hljs-built_in">grayscale</span>(100%);<br>    <span class="hljs-attribute">-ms-filter</span>: <span class="hljs-built_in">grayscale</span>(100%);<br>    <span class="hljs-attribute">-o-filter</span>: <span class="hljs-built_in">grayscale</span>(100%);<br>}</code></pre>
                    效果：
                    <img class="m-l-0" src="~@/assets/blog/bg-20171214-04.png">
                </p>

                <h2>在文本框中自定义光标的样式(caret-color)</h2>
                <p>
                    在文本框中input/textarea中如果要改变光标的颜色，可以通过设置文本的颜色color:#f00来搞定。但是假如我们只想改变光标的颜色，而不想改变文本的颜色的话，caret-color属性是一个实现方案。
                    <pre class="hljs stylus"><code class=""><span class="hljs-selector-tag">input</span>, <span class="hljs-selector-tag">textarea</span> {<br>    caret-<span class="hljs-attribute">color</span>: red;<br>}</code></pre>
                </p>

                <h2>用 table-layout 来控制表格单元格宽度</h2>
                <p>
                    <ul>
                        <li>
                            你也许遇到过给表格设置了宽度，但是不起作用的问题。
                        </li>
                        <li>
                            这是因为单元格的宽度是根据其内容进行调整的。刨根揭底，是因为表格有个叫做table-layout的属性，其浏览器默认值是auto在作怪。
                        </li>
                        <li>
                            当我们把这个值设置为fixed的时候，我们给th/td标签设置的宽度就起作用了。用法很简单：
                        </li>
                    </ul>
                    <pre class="hljs css"><code class=""><span class="hljs-selector-tag">table</span> {<br>    <span class="hljs-attribute">table-layout</span>: fixed;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>}</code></pre>
                </p>

                <h2>用 user-select 来禁用文本选中</h2>
                <p>
                    <ul>
                        <li>
                            在很久以前，如果不想让别人选中你页面的内容，可以用js来做。
                        </li>
                        <li>
                            而现在，只需要一句 user-select:none; 的CSS样式就可以解决。
                        </li>
                        <li>
                            当然IE6-9不支持该属性，但可以通过给body添加 onselectstart="return false;" 的内联JavaScript语句来解决。
                        </li>
                    </ul>
                    <pre class="hljs stylus"><code class=""><span class="hljs-selector-tag">body</span> {<br>    user-select: <span class="hljs-attribute">none</span>; <span class="hljs-comment">// 页面中的文本不能被选中</span><br>}</code></pre>
                </p>

                <h2>Sticky footer</h2>
                <p>
                    使得当页面内容高度不够时，footer 依然显示到最下面。
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"content"</span>&gt;</span>....<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"footer"</span>&gt;</span>....<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span></code></pre>
                </p>

                <h4>1.-margin & padding</h4>
                <p>
                    <pre class="hljs stylus"><code class=""><span class="hljs-selector-tag">html</span>, <span class="hljs-selector-tag">body</span> {<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>}<br><span class="hljs-variable">$footer</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;<br><br><span class="hljs-selector-id">#content</span> {<br>    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">margin-bottom</span>: -<span class="hljs-variable">$footer</span>-height;<br>    <span class="hljs-attribute">padding-bottom</span>: <span class="hljs-variable">$footer</span>-height;<br>}<br><br><span class="hljs-selector-id">#footer</span> {<br>    <span class="hljs-attribute">line-height</span>: <span class="hljs-variable">$footer</span>-height;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}</code></pre>
                </p>

                <h4>2.flex 布局</h4>
                <p>
                    <pre class="hljs stylus"><code class=""><span class="hljs-variable">$footer</span>-<span class="hljs-attribute">height</span>: <span class="hljs-number">30px</span>;<br><br><span class="hljs-selector-tag">html</span> {<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">100%</span>;<br>}<br><br><span class="hljs-selector-tag">body</span> {<br>    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">display</span>: flex;<br>    <span class="hljs-attribute">flex-direction</span>: column;<br>}<br><br><span class="hljs-selector-id">#content</span> {<br>    <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>;<br>}<br><br><span class="hljs-selector-id">#footer</span> {<br>    <span class="hljs-attribute">line-height</span>: <span class="hljs-variable">$footer</span>-height;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}</code></pre>
                </p>

                <h2>超宽的背景图片居中</h2>
                <p>
                    一般网站的主内容区，大致为980px或1000px，有时候会把较宽的图片作为整体背景图，居中放置，并且不要横向滚动轴，可以这么做：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.wrapper</span>{<br>    <span class="hljs-attribute">min-width</span>: <span class="hljs-number">1000px</span>;<br>    <span class="hljs-attribute">height</span>: <span class="hljs-number">800px</span>;<br>    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">url</span>(111.jpg) no-repeat center top;<br>}<br><br><span class="hljs-selector-class">.mainContent</span>{<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">1000px</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;<br>}</code></pre>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
