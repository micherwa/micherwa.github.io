<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="false">
            <div slot="content">
                <p>
                    <strong>共同点</strong>：
                    <ul>
                        <li>export与export default均可用于导出常量、函数、文件、模块等。</li>
                    </ul>
                    <strong>区别</strong>：
                    <ul>
                        <li>在一个文件或模块中，export、import可以有多个，export default仅有一个</li>
                        <li>通过export方式导出，在导入时要加{}，export default则不能加</li>
                    </ul>
                </p>

                <p>直接看下面的例子：</p>

                <p>
                    <code>export</code>
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">//demo1.js </span><br><span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> str = <span class="hljs-number">'he</span>llo world’;<br><span class="hljs-keyword">export</span> <span class="hljs-keyword">function</span> f(a){ <span class="hljs-keyword">return</span> a+<span class="hljs-number">1</span>};</code></pre>
                    对应的导入方式：
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">//demo2.js </span><br><span class="hljs-keyword">import</span> { str, f } <span class="hljs-keyword">from</span> <span class="hljs-string">'demo1'</span>; <span class="hljs-comment">//也可以分开写两次，导入的时候带花括号</span></code></pre>
                </p>

                <p>
                    <code>export default</code>
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">//demo1.js</span><br>export <span class="hljs-keyword">default</span> <span class="hljs-keyword">const</span> <span class="hljs-built_in">str</span> = <span class="hljs-symbol">'hello</span> world’;</code></pre>
                    对应的导入方式：
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">//demo2.js</span><br><span class="hljs-keyword">import</span> str <span class="hljs-keyword">from</span> <span class="hljs-string">'demo1'</span> <span class="hljs-comment">//导入的时候没有花括号</span></code></pre>
                </p>

                <p>
                    <strong>使用export default命令，为模块指定默认输出，这样在import的时候，可以自定义该模块的名字，不需要知道模块本身的变量名。</strong>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
