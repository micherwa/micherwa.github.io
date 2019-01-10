<template>
    <div class="blog-container">
        <BlogHeader
            title=" 「读懂源码系列1」还在恐惧读源码？看完这篇就不怕了" subTitle=""
            date="2019-01-09" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>一个小需求</h2>
                <p>
                    事情的起因，是昨天有一个新的需求被提出。
                </p>
                <p>
                    需求是要实现，让我们自己定制的弹出层，具备按下 ESC 也能退出的功能。我把任务交给了同组的小伙伴S去实现。（这个项目用到了vue技术栈，以及饿了么的UI框架。）
                </p>
                <p>
                    我开完会回来，发现他还在处理那个功能，但好像遇到了什么瓶颈。于是，我就问了他卡在了什么地方。
                </p>
                <p>
                    小伙伴S说，他百度了不少资料，还查了官方文档，并且尝试其中的办法，但就是无法触发按下esc的回调方法，很是郁闷。我看了他的代码，他的写法是这样的：
                    <pre class="hljs scala"><code>&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"custom-modal"</span> <span class="hljs-meta">@keydown</span><span class="hljs-number">.27</span>=<span class="hljs-string">"handlePressEscape"</span>&gt;<br>    ...<br>&lt;/div&gt;</code></pre>

                    <pre class="hljs r"><code class=""><span class="hljs-keyword">...</span><br>handlePressEscape () {<br>    console.log(<span class="hljs-string">'press escape!'</span>);<br>},<br><span class="hljs-keyword">...</span></code></pre>

                    他的想法不错，因为是自定义的弹出层，所以就想着把 keydown 事件，绑定在最外层的 div 上，让整个弹出层都能监听到。
                </p>
                <p>
                    他给我看了他查的资料，几乎都是 input 上绑定 keydown 事件的例子，而vue的官方文档里也是类似的例子，实践后却陷入了瓶颈。但是他忽略了一个问题，<strong>keydown 事件，并非绑在任意一个标签上都会起作用</strong>。
                </p>

                <h2>一种思路</h2>
                <p>
                    我没有直接把答案告诉他，而是给他提供了一个思路：在我们常用的 element-ui 的 el-dialog组件里，有个属性叫做 <code>close-on-press-escape</code>，它的解释如下图：
                    <img src="~@/assets/blog/bg-20190109-01.png">
                </p>
                <p>
                    从文档的解释，可以看出 el-dialog 在默认情况下，已经实现了我们需要解决的需求。所以，我让他看看 el-dialog 的源码，是如何实现的。
                </p>
                <p>
                    他一听要看源码，就露出了恐惧之情。
                    <img src="~@/assets/blog/bg-20190109-03.jpg">
                </p>
                <p>
                    源码是所有框架和API的根基，因为比较复杂深邃，所以让人很抗拒。我自己也经历过这个阶段，所以非常理解他的心情，鼓励他一起做一次尝试。
                </p>

                <h2>查找源码</h2>
                <p>
                    首先，我们在 node_modules 里，找到了 element-ui 的文件夹，它大致长这个样子：
                    <img src="~@/assets/blog/bg-20190109-02.png">

                    接着，我们找到了 packages 里的 dialog 文件夹，再从 index 入口，找到了组件 component.vue。点进去找了半天，也只找到个 <strong>closeOnPressEscape</strong> 属性的定义，却没有实现的方法。

                    <pre class="hljs scala"><code class="">...<br>closeOnPressEscape: {<br>    <span class="hljs-class"><span class="hljs-keyword">type</span></span>: <span class="hljs-type">Boolean</span>,<br>    <span class="hljs-keyword">default</span>: <span class="hljs-literal">true</span><br>},<br>...</code></pre>

                    这么神奇么？只定义一个属性，就能实现一个事件的交互了？
                </p>

                <p>
                    感觉不太可能，为了揭开迷雾，继续找。。。
                </p>

                <p>
                    仔细浏览了 component.vue 文件，发现在 script 里，引入下面 3 个文件：
                    <pre class="hljs typescript"><code class=""><span class="hljs-keyword">import</span> Popup <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui/src/utils/popup'</span>;<br><span class="hljs-keyword">import</span> Migrating <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui/src/mixins/migrating'</span>;<br><span class="hljs-keyword">import</span> emitter <span class="hljs-keyword">from</span> <span class="hljs-string">'element-ui/src/mixins/emitter'</span>;<br>...</code></pre>
                    在第一个引入的 Popup 中，竟然也发现了 <strong>closeOnPressEscape</strong>，感觉似乎找对方向了。
                </p>

                <p>
                    令人沮丧的是，Popup 中同样只有 <strong>closeOnPressEscape</strong> 的属性定义，却没有实现。但是它却引入了另一个辅助文件 <strong>PopupManager</strong>。
                </p>

                <p>
                    哇！终于找到了！它的实现，是这样的：
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">// handle `esc` key when the popup is shown</span><br><span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">'keydown'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>    <span class="hljs-keyword">if</span> (event.keyCode === <span class="hljs-number">27</span>) {<br>        <span class="hljs-keyword">const</span> topPopup = getTopPopup();<br><br>        <span class="hljs-keyword">if</span> (topPopup &amp;&amp; topPopup.closeOnPressEscape) {<br>            topPopup.handleClose<br>                ? topPopup.handleClose()<br>                : (topPopup.handleAction<br>                    ? topPopup.handleAction(<span class="hljs-string">'cancel'</span>)<br>                    : topPopup.close());<br>        }<br>    }<br>});</code></pre>
                    原来，是在 window 上添加了事件监听 keydown，当监测到是 ESC 的 keyCode 时，则执行相关操作。
                </p>

                <h2>模仿源码</h2>
                <p>
                    ok，现在已经知晓了原理，那就按照我们的实际需求，模仿改造一下：
                    <pre class="hljs kotlin"><code class="">...<br>props: {<br>    ...<br>    closeOnPressEscape: {<br>        type: <span class="hljs-built_in">Boolean</span>,<br>        <span class="hljs-keyword">default</span>: <span class="hljs-literal">true</span><br>    }<br>},<br>...<br>mounted () {<br>    window.addEventListener(<span class="hljs-string">'keydown'</span>, <span class="hljs-keyword">this</span>.handlePressEscape);<br>},<br><br>destroyed () {<br>    window.removeEventListener(<span class="hljs-string">'keydown'</span>, <span class="hljs-keyword">this</span>.handlePressEscape);<br>},<br><br>methods: {<br>    ...<br>    handlePressEscape (event) {<br>        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.closeOnPressEscape &amp;&amp; event.keyCode === <span class="hljs-number">27</span>) {<br>            <span class="hljs-keyword">this</span>.handleClose();<br>        }<br>    }<br>}</code></pre>
                    在上述实现中，有2个需要注意的点：
                    <ul>
                        <li>代码方面，在 mounted 中，给 window 添加事件监听之后，要记得在 destroyed 时，去除监听。</li>
                        <li>业务方面，这是一个我们定制的通用的弹出层组件，所以在 props 中定义了一个 closeOnPressEscape 属性，以方便在某些业务场景下，不需要按 ESC 就退出这个功能的时候，直接设置它为 false 即可。</li>
                    </ul>
                    到此为止，整个事件画上了圆满的句号。
                </p>

                <h2>源码真有那么可怕吗？</h2>
                <p>
                    <strong>源码</strong>一词，乍一听就是神秘、高大上、吊炸天的代名词，让很多的前端同学闻风丧胆。回想当初，我也曾一度对它有一股深深的恐惧。
                </p>
                <p>
                    源码真的这么可怕吗？
                </p>
                <p>
                    从以上的事例中可以看出，其实并没有。例子中的element-ui源码并不复杂，我和小伙伴S一起看源码时，他也大概都能看得明白。最后因为弄懂了背后的原理，进行简单应用，比较轻松就解决了问题。
                </p>
                <p>
                    <strong>对于源码的恐惧，让我们渐渐思维固化，自己告诉自己不要去碰源码，时间长了就遗忘了还有这样一条路可走。</strong>
                </p>

                <h2>面试中的应用</h2>
                <p>
                    关于对源代码的考察，我也会经常应用在面试中。在面试中，如果候选人给我的感觉不错，我的惯用伎俩是问下面这个问题：
                    <blockquote>
                        <p>
                            刚才你说到，用过一段时间 xxx 框架，xx API属性也用过，也很清楚它达到的效果。
                        </p>
                        <br>
                        <p>
                            那么现在，如果需要你实现一个类似的效果，抛开 xxx 框架以及 xx API属性，
                        </p>
                        <br>
                        <p>
                            你会如何去实现，有没有其他思路？
                        </p>
                    </blockquote>
                </p>

                <p>
                    这个问题，意在考量候选人的思维方式和解决问题的能力，以及把他思考的过程阐述清楚的表达能力。这三种能力，往往比使用过某些框架的经验，更让我看中。
                </p>

                <p>
                    这道题的回答思路，其实就是可以通过挖掘源码，去实现功能。另外也可以用原生的js实现，但这条路没有直接挖掘源码来得快。 在遇到实际的业务问题的时候，参考源码的原理和写法，往往能更快地解决问题。
                </p>

                <p>
                    这是我自己对这道题目的给出的答案。
                </p>

                <h2>一点点思考</h2>
                <p>
                    昨天的案例，引发了我的一连串思考：
                </p>
                <p>
                    现代框架的确降低了前端入门的门槛，提高了开发效率。
                </p>
                <p>
                    但是，<strong>在使用这些框架的过程中，我们到底学到了什么？</strong>
                </p>
                <p>
                    <strong>脱离了框架和它的API，我们脑海中还剩下些什么？</strong>
                </p>
                <p>
                    <strong>以至于，当下一个更新更棒的框架出现的时候，我们是否能够用已经学到的知识，帮助自己更迅速地上手？</strong>
                </p>
                <p>
                    <strong>知其然，并知其所以然</strong>，学习所有的知识都应当有这种探索精神。我们不仅仅是代码的搬运工。领悟这些深层次的原理，比起仅仅熟练地掌握一门框架，要实用得多。
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
