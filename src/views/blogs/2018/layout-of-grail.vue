<template>
    <div class="blog-container">
        <BlogHeader
            title="圣杯布局的原理以及实现" subTitle=""
            date="2018-08-23" :tags="['CSS']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <blockquote>
                    <p>
                        本文将介绍CSS中的经典布局——圣杯布局的原理以及两种实现方法：浮动和flex。
                    </p>
                </blockquote>

                <h2>圣杯布局的要求和效果</h2>
                <p>
                    <ul>
                        <li>上部(header)和下部(footer)各自占领屏幕所有宽度。</li>
                        <li>上下部之间的部分(container)是一个三栏布局。</li>
                        <li>三栏布局两侧宽度不变，中间部分自动填充整个区域。</li>
                        <li>中间部分的高度是三栏中最高的区域的高度。</li>
                    </ul>
                    接下来，会介绍两种实现的方法。效果如下图：
                    <img src="~@/assets/blog/bg-20180823-01.png">
                </p>

                <h2>实现方法1：浮动</h2>
                <p>
                    先上代码：
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"header"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>header<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br></span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"middle"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>middle<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>middle-content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"left"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>left-content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"right"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>right<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>right-content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>footer<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.header</span>, <span class="hljs-selector-class">.footer</span> {<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#333</span>;<br>    <span class="hljs-attribute">background</span>: <span class="hljs-number">#ccc</span>;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}<br><span class="hljs-selector-class">.footer</span> {<br>    <span class="hljs-attribute">clear</span>: both;<br>}<br><br><span class="hljs-selector-class">.container</span> {<br>    <span class="hljs-attribute">padding</span>:<span class="hljs-number">0</span> <span class="hljs-number">220px</span> <span class="hljs-number">0</span> <span class="hljs-number">200px</span>;<br>    <span class="hljs-attribute">overflow</span>: hidden;<br>}<br><span class="hljs-selector-class">.left</span>, <span class="hljs-selector-class">.middle</span>, <span class="hljs-selector-class">.right</span> {<br>    <span class="hljs-attribute">position</span>: relative;<br>    <span class="hljs-attribute">float</span>: left;<br>    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">130px</span>;<br>}<br><span class="hljs-selector-class">.middle</span> {<br>   <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">background</span>: blue;<br>}<br><span class="hljs-selector-class">.left</span> {<br>    <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">left</span>: -<span class="hljs-number">200px</span>;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;<br>    <span class="hljs-attribute">background</span>: red;<br>}<br><span class="hljs-selector-class">.right</span> {<br>    <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">220px</span>;<br>    <span class="hljs-attribute">right</span>: -<span class="hljs-number">220px</span>;<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">220px</span>;<br>    <span class="hljs-attribute">background</span>: green;<br>}</code></pre>
                </p>

                <p>
                    解析一下思路：
                    <ul>
                        <li>在html中，先定义好header和footer的样式，使之横向撑满。</li>
                        <li>在container中的三列设为浮动和相对定位(后面会用到)，middle要放在最前面，footer清除浮动。</li>
                        <li>三列的左右两列分别定宽200px和220px，中间部分middle设置100%撑满</li>
                        <li>这样因为浮动的关系，middle会占据整个container，左右两块区域被挤下去了</li>
                        <li>接下来设置left的<code>margin-left:-100%</code>，让left回到上一行最左侧</li>
                        <li>但这会把middle给遮住了，所以这时给外层的container设置<code>padding:0 220px 0 200px;</code>，给left空出位置</li>
                        <li>这时left并没有在最左侧，因为之前已经设置过相对定位，所以通过<code>left:-200px;</code>把left拉回最左侧</li>
                        <li>同样的，对于right区域，设置<code>margin-right:-220px;</code>把right拉回第一行</li>
                        <li>这时右侧空出了220px的空间，所以最后设置<code>right:-220px;</code>把right区域拉到最右侧就行了。</li>
                    </ul>
                </p>

                <h2>实现方法2：flex弹性盒子</h2>
                <p>
                    用弹性盒子来实现圣杯布局特别简单，只需要把中间的部分用flex布局即可。
                    <pre class="hljs xml"><code class=""><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"header"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>header<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"container"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"left"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>left-content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"middle"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>middle<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>middle-content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"right"</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>right<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br>        <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>right-content<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span><br>    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><br><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"footer"</span>&gt;</span><br>    <span class="hljs-tag">&lt;<span class="hljs-name">h4</span>&gt;</span>footer<span class="hljs-tag">&lt;/<span class="hljs-name">h4</span>&gt;</span><br><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.header</span>, <span class="hljs-selector-class">.footer</span> {<br>    <span class="hljs-attribute">border</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#333</span>;<br>    <span class="hljs-attribute">background</span>: <span class="hljs-number">#ccc</span>;<br>    <span class="hljs-attribute">text-align</span>: center;<br>}<br><br><span class="hljs-selector-class">.container</span> {<br>    <span class="hljs-attribute">display</span>: flex;<br>}<br><span class="hljs-selector-class">.left</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;<br>    <span class="hljs-attribute">background</span>: red;<br>}<br><span class="hljs-selector-class">.middle</span> {<br>    <span class="hljs-attribute">flex</span>: <span class="hljs-number">1</span>;<br>    <span class="hljs-attribute">background</span>: blue;<br>}<br><span class="hljs-selector-class">.right</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">220px</span>;<br>    <span class="hljs-attribute">background</span>: green;<br>}</code></pre>

                    解析一下思路：
                    <ul>
                        <li>header和footer同上面一样，横向撑满。footer不用再清浮动了</li>
                        <li>container中的left、middle、right依次排布即可，不用特意将middle放置到最前面</li>
                        <li>给container设置弹性布局<code>display:flex;</code></li>
                        <li>left和right区域定宽，middle设置<code>flex:1;</code>即可</li>
                    </ul>
                </p>

                <h2>总结</h2>
                <p>总的来说，弹性布局是最适合实现圣杯布局的方法了，相较浮动，弹性布局的结构更清楚，更好理解，也不用担心移动端的适配问题。而浮动的方法，在面试中可能会遇到，主要考察对布局的理解能力。</p>
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
