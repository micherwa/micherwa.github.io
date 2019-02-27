<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    上一篇文章
                    <a href="" target="_blank">「前端面试题系列8」数组去重(10 种浓缩版)</a>
                    的最后简单介绍了 lodash 中的数组去重方法 <code>_.uniq</code>，并指向了它源码的实现文件 <code>_.baseUniq</code>。
                </p>

                <p>
                    今天就来详细说说 _.baseUniq 是如何实现数组去重的。
                </p>

                <h2>三个相近的去重 API</h2>
                <p>
                    让我们从三个功能相近的去重 API 讲起，他们分别是：_.uniq、_.uniqBy、_.uniqWith。它们三个背后的实现，都是依托于 .internal 下的 <strong>_.baseUniq</strong> 文件。
                </p>
                <p>
                    区别在于 _.uniq 只需传入一个源数组 array， _.uniqBy 相较于 _.uniq 要多传一个迭代器 iteratee，_.uniqWith 要多传一个比较器 comparator。
                </p>
                <p>
                    以 _.uniqWith 为例，它是这样指向 _.baseUniq 的：
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">uniqWith</span><span class="hljs-params">(array, comparator)</span> </span>{<br>  comparator = <span class="hljs-keyword">typeof</span> comparator == <span class="hljs-string">'function'</span> ? comparator : <span class="hljs-literal">undefined</span><br>  <span class="hljs-keyword">return</span> (array != <span class="hljs-literal">null</span> &amp;&amp; array.length)<br>    ? baseUniq(array, <span class="hljs-literal">undefined</span>, comparator)<br>    : []<br>}</code></pre>
                </p>

                <h2>_.baseUniq 的实现</h2>
                <p>

                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
