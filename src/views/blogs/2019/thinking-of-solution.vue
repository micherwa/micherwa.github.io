<template>
    <div class="blog-container">
        <BlogHeader
            title="关于一个需求的解决思路" subTitle=""
            date="2019-01-09" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>

                <p>
                    在面试的最后阶段，如果候选人给我的感觉不错的话，我经常会问这样一个问题：
                    <blockquote>
                        <p>
                            刚才你说到，用过一段时间 xxx 框架，xx API属性也用过，也很清楚它达到的效果。
                        </p>
                        <br>
                        <p>
                            那么现在，如果需要你实现一个类似的效果，抛开 xxx 框架以及 xx API属性，<br>你会如何去实现，有没有思路？
                        </p>
                    </blockquote>
                </p>

                <p>
                    <strong>这是一道开放题，没有标准答案</strong>。这个问题，在于考量候选人的思维方式和解决问题的能力，以及把他思考的过程，阐述清楚的表达能力。这 3 种能力，往往比使用过某些框架的经验，更让我看中。
                </p>

                <h2>一个小需求</h2>
                <p>
                    昨天，老板给我提了个小需求，需要实现让我们自己定制的弹出层，具备按下 ESC 也能退出的功能。我想了下，觉得并不复杂，就交给了同组的小伙伴去实现。我们的某个项目用到了vue技术栈，以及饿了么的UI框架。
                </p>
                <p>
                    我开完会回来，发现他还在处理那个功能，但好像遇到了什么瓶颈。于是，我就问了他卡在了什么地方。
                </p>
                <p>
                    小伙伴说，他百度了不少资料，还查了官方文档，并且尝试其中的办法，但就是无法触发按下esc的回调方法，很是郁闷。我看了他的代码，他的写法是这样的：
                    <pre class="hljs scala"><code>&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"custom-modal"</span> <span class="hljs-meta">@keydown</span><span class="hljs-number">.27</span>=<span class="hljs-string">"handlePressEscape"</span>&gt;<br>    ...<br>&lt;/div&gt;</code></pre>

                    <pre class="hljs r"><code class=""><span class="hljs-keyword">...</span><br>handlePressEscape () {<br>    console.log(<span class="hljs-string">'press escape!'</span>);<br>},<br><span class="hljs-keyword">...</span></code></pre>

                    他的想法不错，因为是自定义的弹出层，所以就想着把 keydown 事件，绑定在最外层的 div 上，让整个弹出层都能监听到。
                </p>
                <p>
                    他给我看了他查的资料，几乎都是 input 上绑定 keydown 事件的例子，而vue的官方文档里也是类似的例子，所以陷入了瓶颈。但是他忽略了一个问题，<strong>keydown 事件，并非绑在任意一个标签上都会起作用</strong>。
                </p>

                <h2>一个思路</h2>
                <p>
                    我没有直接把答案告诉他，而是给他提供了一个思路：在我们常用的 element-ui 的 el-dialog组里，有个属性叫做 <code>close-on-press-escape</code>，它的解释如下图：
                    <img src="~@/assets/blog/bg-20190109-01.png">
                </p>
                <p>
                    从文档的解释，可以看出 el-dialog 在默认情况下，已经实现了我们需要解决的需求。所以，我让他看看 el-dialog 的源码，是如何实现的。
                </p>
                <p>
                    他一听要看源码，就懵了。源码一词，乍一听就是神秘、高大上、吊炸天的代名词。回想当初，我也曾对它有一股莫名的恐慌情绪，所以我有点理解小伙伴现在的心情。于是，我对他说，不要慌，我们只要找到解决问题的关键部分就行了，源码没有那么不可怕，我们一起来找找看。
                </p>

                <h2>查找源码</h2>
                <p>
                    首先，我们在 node_modules 里，找到了 element-ui的文件夹，它大致长这个样子：
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
                    哇！终于找到了！原来它的实现，是这样的：
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
                </p>

                <h2>总结</h2>
                <p>
                    虽然这是个不复杂的小需求，但在解决问题的过程中，百度和文档无法给予帮助的情况下，我们开拓了新的思路，转向研究“源码”，尽管也曾因两次都没找到实现方法而感到沮丧，但最终我们还是找到解决方案，并且学到了其背后的原理。
                </p>
                <p>
                    另外，一个值得我们每个开发者思考的问题是：现代框架的确降低入门的门槛，提高的开发效率，但<strong>有一天，如果脱离了框架和它的API，我们学到了什么，掌握了什么？以至于，当下一个更新更棒的框架出现的时候，能够用这些学到的掌握的能力，迅速地上手</strong>。我觉得，那比仅仅可以熟练地使用一门框架，要实用的多了。
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
