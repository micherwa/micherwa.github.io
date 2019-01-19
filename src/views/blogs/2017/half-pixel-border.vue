<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <p>
                    在移动端中，对于dpr为2的设备设置border的宽度为1px时，看上去会变粗，但其实它并没有变粗。设计师口中说的1px是针对设备物理像素的，换算成css像素就是0.5px。
                </p>
                <p>
                    比如 border: 1px solid black; 在任何屏幕上都是一样粗的，但是retina屏可以显示比这更细的边框，然后设计师就不乐意了，觉得你没写对。那么怎么解决这个问题？也就是，让1px在所有设备看上去都是一样粗细的呢？
                </p>
                <p>这正是本文需要解决的问题，下面介绍四种思路的写法。</p>

                <h2>四种半像素边框的写法</h2>

                <h4>1.:after + scale(0.5)</h4>
                <p>
                    <pre class="hljs html"><code class="">&lt;<span class="hljs-built_in">li</span> class=<span class="hljs-string">"half-pixel-after"</span>&gt;<br>    Generate <span class="hljs-built_in">content</span> &amp; <span class="hljs-built_in">transform</span>: <span class="hljs-built_in">scale</span>(.<span class="hljs-number">5</span>)<br>&lt;/<span class="hljs-built_in">li</span>&gt;</code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.half-pixel-after</span> {<br>    <span class="hljs-attribute">position</span>: relative;<br>}<br><span class="hljs-selector-class">.half-pixel-after</span><span class="hljs-selector-pseudo">::after</span> {<br>    <span class="hljs-attribute">content</span>: <span class="hljs-string">''</span>;<br>    <span class="hljs-attribute">position</span>: absolute;<br>    <span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;<br>    <span class="hljs-attribute">border-bottom</span>: solid <span class="hljs-number">1px</span> <span class="hljs-number">#aaa</span>;<br>    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scaleY</span>(0.5);<br>    <span class="hljs-attribute">-webkit-transform</span>: <span class="hljs-built_in">scaleY</span>(0.5);<br>    <span class="hljs-attribute">transform-origin</span>: <span class="hljs-number">0</span> <span class="hljs-number">100%</span>;<br>    <span class="hljs-attribute">-webkit-transform-origin</span>: <span class="hljs-number">0</span> <span class="hljs-number">100%</span>;<br>}</code></pre>
                </p>

                <h4>2.background + svg</h4>
                <p>
                    <pre class="hljs maxima"><code class="">&lt;<span class="hljs-built_in">li</span> class=<span class="hljs-string">"half-pixel-background-svg"</span>&gt;<br>    <span class="hljs-built_in">background</span>: url(svg)<br>&lt;/<span class="hljs-built_in">li</span>&gt;</code></pre>

                    <pre class="hljs maxima"><code class="">.half-pixel-<span class="hljs-built_in">background</span>-svg {<br>    <span class="hljs-built_in">background</span>: url('data:<span class="hljs-built_in">image</span>/svg+xml, &lt;svg xmlns=<span class="hljs-string">"http://www.w3.org/2000/svg"</span> <span class="hljs-built_in">width</span>=<span class="hljs-string">"1"</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">"1"</span>&gt;&lt;rect <span class="hljs-built_in">width</span>=<span class="hljs-string">"1"</span> <span class="hljs-built_in">height</span>=<span class="hljs-string">"0.5"</span> fill=<span class="hljs-string">"#aaa"</span>/&gt;&lt;/svg&gt;') repeat-x bottom;<br>}</code></pre>
                </p>

                <h4>3. background + linear-gradient</h4>
                <p>
                    <pre class="hljs maxima"><code class="">&lt;<span class="hljs-built_in">li</span> class=<span class="hljs-string">"half-pixel-background"</span>&gt;<br>    <span class="hljs-built_in">background</span>: <span class="hljs-built_in">linear</span>-gradient (visible when dpr gte <span class="hljs-number">2</span>)<br>&lt;/<span class="hljs-built_in">li</span>&gt;</code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.half-pixel-background</span> {<br>    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">-webkit-linear-gradient</span>(transparent 50%, #aaa 50%) no-repeat left bottom;<br>    <span class="hljs-attribute">background</span>: <span class="hljs-built_in">linear-gradient</span>(transparent 50%, #aaa 50%) no-repeat left bottom;<br>    <span class="hljs-attribute">background-size</span>: <span class="hljs-number">100%</span> <span class="hljs-number">1px</span>;<br>}</code></pre>
                </p>

                <h4>4.四边半像素边框</h4>
                <p>
                    <pre class="hljs javascript"><code class="">&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"avatar-box"</span>&gt;<br>    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://ww3.sinaimg.cn/large/6eba2496gw1f3vtj57hjij20pq0pqwf3.jpg"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"60"</span>&gt;</span></span><br><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span></code></pre>

                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.avatar-box</span> {<br>    <span class="hljs-attribute">padding</span>: <span class="hljs-number">2px</span>;<br>    <span class="hljs-attribute">display</span>: inline-block;<br>    <span class="hljs-attribute">position</span>: relative;<br>}<br><span class="hljs-selector-class">.avatar-box</span><span class="hljs-selector-pseudo">::after</span> {<br>    <span class="hljs-attribute">content</span>: <span class="hljs-string">''</span>;<br>    <span class="hljs-attribute">position</span>: absolute;<br>    <span class="hljs-attribute">top</span>: -<span class="hljs-number">50%</span>;<br>    <span class="hljs-attribute">right</span>: -<span class="hljs-number">50%</span>;<br>    <span class="hljs-attribute">bottom</span>: -<span class="hljs-number">50%</span>;<br>    <span class="hljs-attribute">left</span>: -<span class="hljs-number">50%</span>;<br>    <span class="hljs-attribute">border</span>: solid <span class="hljs-number">1px</span> <span class="hljs-number">#b2b2b2</span>;<br>    <span class="hljs-attribute">transform</span>: <span class="hljs-built_in">scale</span>(0.5);<br>    <span class="hljs-attribute">-webkit-transform</span>: <span class="hljs-built_in">scale</span>(0.5);<br>    <span class="hljs-attribute">transform-origin</span>: center center;<br>    <span class="hljs-attribute">-webkit-transform-origin</span>: center center;<br>    <span class="hljs-attribute">pointer-events</span>: none;<br>    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">10px</span>;<br>}</code></pre>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
