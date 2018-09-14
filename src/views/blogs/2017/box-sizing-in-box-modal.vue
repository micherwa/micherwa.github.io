<template>
    <div class="blog-container">
        <BlogHeader
            title="盒子模型中的box-sizing" subTitle=""
            date="2017-07-15" :tags="['CSS']">
        </BlogHeader>

        <BlogContent :useCatalog="false">
            <div slot="content">
                <blockquote>
                    <p>
                        本文将介绍现在浏览器中box-sizing的用法，它已被广泛应用于移动端布局。
                    </p>
                </blockquote>

                <p>
                    在写一个块级元素的时候，经常会碰到一个问题：盒子模型。
                </p>

                <p>
                    当你设置了元素的宽度，实际展现的元素却超出你的设置：这是因为元素的边框和内边距会撑开元素。
                </p>

                <p>
                    例如：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.simple</span>{<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto;<br>}<br><span class="hljs-selector-class">.fancy</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto;<br>    <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;<br>    <span class="hljs-attribute">border-width</span>: <span class="hljs-number">10px</span>;<br>}</code></pre>
                    结果如下：
                    <img src="~@/assets/blog/bg-20170715-01.png">
                </p>

                <p>
                    如果想让这两个div看上去一样宽，按传统的办法，需要减去内边距和边框，重新定义width。值得庆幸的是，现在不需要再这样做了...
                </p>

                <p>
                    传统的盒子模型并不直观，所以css3后来新增了<code>box-sizing</code>属性。
                </p>

                <p>
                    当你设置一个元素为 <code>box-sizing: border-box;</code> 时，此元素的内边距和边框不再会增加它的宽度。这里有一个与前一页相同的例子，唯一的区别是两个元素都设置了 <code>box-sizing: border-box;</code>
                </p>

                <p>
                    改一下上面的代码：
                    <pre class="hljs css"><code class=""><span class="hljs-selector-class">.simple</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto;<br>    <span class="hljs-attribute">box-sizing</span>: border-box;<br>}<br><br><span class="hljs-selector-class">.fancy</span> {<br>    <span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;<br>    <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto;<br>    <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;<br>    <span class="hljs-attribute">border-width</span>: <span class="hljs-number">10px</span>;<br>    <span class="hljs-attribute">box-sizing</span>: border-box;<br>}</code></pre>
                    效果如下：
                    <img src="~@/assets/blog/bg-20170715-02.png">
                </p>

                <p>
                    如果想让页面上所有的元素都按这种更直观的方式进行排版，可以这样：
                    <pre class="hljs css"><code class="">* {<br>    <span class="hljs-attribute">box-sizing</span>: border-box;<br>}</code></pre>
                    兼容性上，box-sizing支持ie8+，最好再加上-webkit-和-moz-的前缀。
                </p>

                <p>
                    下面这张图更形象地对box-sizing的<code>content-box</code>和我们喜爱的<code>border-box</code>，做了对比的效果：
                    <img src="~@/assets/blog/bg-20170715-03.png">
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
