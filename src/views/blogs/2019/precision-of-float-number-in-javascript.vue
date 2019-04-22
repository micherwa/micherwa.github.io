<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>
                <p>
                    最近，朋友 L 问了我这样一个问题：以下数据的运算结果，为何会这样呈现？
                    <pre class="hljs objectivec"><code class=""><span class="hljs-number">0.55</span> * <span class="hljs-number">100</span> <span class="hljs-comment">// 55.00000000000001</span><br><span class="hljs-number">0.56</span> * <span class="hljs-number">100</span> <span class="hljs-comment">// 56.00000000000001</span><br><span class="hljs-number">0.57</span> * <span class="hljs-number">100</span> <span class="hljs-comment">// 56.99999999999999</span><br><span class="hljs-number">0.58</span> * <span class="hljs-number">100</span> <span class="hljs-comment">// 57.99999999999999</span><br><span class="hljs-number">0.59</span> * <span class="hljs-number">100</span> <span class="hljs-comment">// 59</span><br><span class="hljs-number">0.60</span> * <span class="hljs-number">100</span> <span class="hljs-comment">// 60</span></code></pre>
                    我虽然告诉了他这是由于浮点数精度问题导致的，但他还是不太明白，为何有的结果输出为整数，有的是以 ...001 的小数结尾，有的却是以 ...999 的小数结尾，跟预想中的有差异。
                </p>
                <p>
                    这其实牵涉到了计算机原理的知识，真要解释清楚什么是浮点数，恐怕得分几个章节了，想深入了解的同学，可以前往 <a href="https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html" target="_blank">这篇文章</a> 细读。今天我们仅讨论解释浮点数运算结果的成因，以及如何实现我们期望的结果。
                </p>

                <h2>浮点数与 IEEE 754</h2>
                <p>
                    首先，计算机中的小数并不都叫浮点数。我们在写程序时，用到小数的地方，用 float 类型表示，可以方便快速地对小数进行运算。
                </p>
                <p>
                    小数点在数制中代表一种对齐方式，比如说你要比较 1000 和 200 哪个比较大，该怎么做呢？必须把他们右对齐：
                    <pre class="hljs"><code class="">1000<br> 200</code></pre>
                    发现 1 比 0（前面补零）大，所以 1000 比较大。那么如果要比较 1000 和 200.01 呢？这时候就不是右对齐了，而应该是以小数点对齐：
                    <pre class="hljs"><code class="">1000<br> 200.01</code></pre>
                    小数点的位置，在进制表示中是至关重要的。位置差一位整体就要差进制倍（十进制就是十倍）。在计算机中也是这样，虽然计算机使用二进制，但在处理非整数时，也需要考虑小数点的位置问题。无法对齐小数点，就无法做加减法比较这样的操作。
                </p>

                <p>
                    接下来的一个重要概念：<strong>计算机中小数的表示法，其实有定点和浮点两种。</strong>
                </p>

                <p>
                    定点的意思是，小数点固定在 32 位中的某个位置，前面的是整数，后面的是小数。小数点具体固定在哪里，可以自己在程序中指定。定点数的优点是很简单，大部分运算实现起来和整数一样或者略有变化，但是缺点则是表示范围太小，精度很差，不能充分运用存储单元。
                </p>

                <p>
                    浮点数就是设计来克服这个缺点的，它相当于一个定点数加上一个阶码，阶码表示将这个定点数的小数点移动若干位。由于可以用阶码移动小数点，因此称为浮点数。
                </p>

                <p>
                    浮点数在 Javascript 中的存储，与其他语言如Java和Python不同。所有数字（包括整数和小数）都只有一种类型 — Number。它的实现遵循 IEEE 754 标准，使用64位精度来表示浮点数。它是目前最广泛使用的格式，该格式用 64 位二进制表示像下面这样：
                    <img src="~@/assets/blog/bg-20190509-01.png">
                    在 64 位中，1 位用于标志位，用来表示一个数是正数还是负数。11位用于指数，这允许指数最大到 1024。剩下的 52 位代表的是尾数。
                </p>

                <h2>浮点数该如何处理？</h2>
                <p>
                    问：要把小数装入计算机，总共分几步？
                <p>
                <p>
                    答：3 步。
                    <ul>
                        <li>第一步：转换成二进制</li>
                        <li>第二步：用二进制科学计算法表示</li>
                        <li>第三步：表示成 IEEE 754 形式</li>
                    </ul>
                    但第一步和第三步都有可能 <strong>丢失精度</strong>。
                </p>
                <p>
                    回到本文的一开始，
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
