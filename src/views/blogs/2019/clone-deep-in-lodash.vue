<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    上一篇文章 <a href="" target="_blank">「前端面试题系列9」浅拷贝与深拷贝的含义、区别及实现</a> 中提到了深拷贝的实现方法，从递归调用，到 JSON，再到终极方案 cloneForce。
                </p>
                <p>
                    不经让我想到，lodash 中的 <code>_.cloneDeep</code> 方法，它是如何实现深拷贝的呢？今天，就让我们深入源码，来看一下 cloneDeep 是如何实现深拷贝的。
                </p>

                <h2>_.cloneDeep 的源码实现</h2>
                <p>
                    它的源码内容很少，因为主要还是靠 baseClone 去实现。
                    <pre class="hljs objectivec"><code class=""><span class="hljs-comment">/** Used to compose bitmasks for cloning. */</span><br><span class="hljs-keyword">const</span> <span class="hljs-built_in">CLONE_DEEP_FLAG</span> = <span class="hljs-number">1</span><br><span class="hljs-keyword">const</span> <span class="hljs-built_in">CLONE_SYMBOLS_FLAG</span> = <span class="hljs-number">4</span><br><br>function cloneDeep(value) {<br>  <span class="hljs-keyword">return</span> baseClone(value, <span class="hljs-built_in">CLONE_DEEP_FLAG</span> | <span class="hljs-built_in">CLONE_SYMBOLS_FLAG</span>)<br>}</code></pre>
                    刚看到前两行的常量就懵了，它们的用意是什么？然后，传入 baseClone 的第二个参数，似乎还将那两个常量做了运算，其结果是什么？这么做的目的是什么？
                </p>
                <p>
                    一番查找之后，终于明白这里其实涉及到了 <code>位掩码</code> 与 <code>位运算</code> 的概念。下面就来详细讲解一下。
                </p>

                <h4>位掩码技术</h4>
                <p>
                    回到第一行注释：<code>Used to compose bitmasks for cloning</code>。意思是，用于构成克隆方法的位掩码。
                </p>
                <p>
                    从注释看，这里的 <code>CLONE_DEEP_FLAG</code> 和 <code>CLONE_SYMBOLS_FLAG</code> 就是位掩码了，而 <code>CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG</code> 其实是 <strong>位运算</strong> 中的 <code>按位或</code> 方法。
                </p>
                <p>
                    这里有个不常见的概念：<code>位运算</code>。MDN 上对位运算的解释是：它经常被用来创建、处理以及读取标志位序列——一种类似二进制的变量。虽然可以使用变量代替标志位序列，但是这样可以节省内存（1/32）。
                </p>
                <p>
                    不过实际开发中，位运算用得很少，主要是因为位运算操作的是二进制位，对开发者来说不太好理解。用得少，就容易生疏。但实际上，位运算是一种很棒的思想，它计算得更快，代码量还更少。位运算，常用于处理同时存在多个布尔选项的情形。掩码中的每个选项的值都是 2 的幂，位运算是 32 位的。
                </p>
                <p>
                    在计算机程序的世界里，所有的数据都是以二进制的形式储存的。位运算，说白了就是直接对某个数据在内存中的二进制位，进行运算操作。比如 <code>&</code>、<code>|</code>、<code>~</code>、<code><<</code>、<code>>></code>，这些都是 按位运算符，它们有一些神奇的用法。以系统权限为例：
                    <pre class="hljs objectivec"><code class=""><span class="hljs-keyword">const</span> PERMISSION_A = <span class="hljs-number">1</span>; <span class="hljs-comment">// 0001</span><br><span class="hljs-keyword">const</span> PERMISSION_B = <span class="hljs-number">2</span>; <span class="hljs-comment">// 0010</span><br><span class="hljs-keyword">const</span> PERMISSION_C = <span class="hljs-number">4</span>; <span class="hljs-comment">// 0100</span><br><span class="hljs-keyword">const</span> PERMISSION_D = <span class="hljs-number">8</span>; <span class="hljs-comment">// 1000</span><br><br><span class="hljs-comment">// 当一个用户同时拥有 权限A 和 权限C 时，就产生了一个新的权限</span><br><span class="hljs-keyword">const</span> mask = PERMISSION_A | PERMISSION_C; <span class="hljs-comment">// 0101，十进制为 5</span><br><br><span class="hljs-comment">// 判断该用户是否有 权限C，可以取出 权限C 的位掩码</span><br><span class="hljs-keyword">if</span> (mask &amp; PERMISSION_C) {<br>    ...<br>}<br><br><span class="hljs-comment">// 该用户没有 权限A，也没有 权限C</span><br><span class="hljs-keyword">const</span> mask2 = ~(PERMISSION_A | PERMISSION_C); <span class="hljs-comment">// ~0101 =&gt; 1010</span><br><br><span class="hljs-comment">// 取出 与权限A 不同的部分</span><br><span class="hljs-keyword">const</span> mask3 = mask ^ PERMISSION_A; <span class="hljs-comment">// 0101 ^ 0001 =&gt; 0100</span></code></pre>
                </p>
                <p>
                    回到源码的 <code>CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG</code> 就得到一个新的结果传入 baseClone 中，十进制为 5，至于它是用来干什么的，就需要继续深入到 baseClone 的源码中去看了。
                </p>

                <h2>baseClone 的源码实现</h2>
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
