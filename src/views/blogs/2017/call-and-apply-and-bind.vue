<template>
    <div class="blog-container">
        <BlogHeader
            title="call和apply以及bind的用法和区别" subTitle=""
            date="2017-11-10" :tags="['Javascript']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <blockquote>
                    <p>
                        call 和 apply 在平时的工作中并不常用，突然遇到的时候，又要回顾一下才能转过弯来。所以这回，就好好地探究一下这两个方法的区别，以及一些妙用。另外，还会介绍与之类似的bind。
                    </p>
                </blockquote>

                <h2>基本作用</h2>
                <p>
                    call 和 apply 这两个方法的基本作用，就是为了<strong>改变对象的执行上下文</strong>。
                </p>

                <h4>什么是执行上下文？</h4>
                <p>
                    我们在写一个方法的时候，经常会用到this这个关键字，它表示的就是这个方法的执行上下文，也叫执行环境。关于this的具体理解，可参考 <router-link :to="{ name: 'how-to-use-this-in-javascript' }">这篇文章</router-link>。它的总原则是，<strong>this永远指向它的调用者</strong>。
                </p>

                <h4>为何要改变执行上下文？</h4>
                <p>
                    举一个生活中的小例子：平时懒得下厨房的我，今天突然想自己煲汤喝，但是没有适合的锅，而我又不想出去买。所以就问邻居借了一个锅来煲汤，这样既达到了目的，又节省了开支，一举两得。
                </p>

                <p>
                    改变执行上下文也是一样的，A对象有一个方法，而B对象因为某种原因，也需要用到同一样的方法，那么这时候我们是单独为B扩展个方法呢，还是借用一下A的方法呢？当然是借用A的啦，既完成了需求，又减少了内存的占用。
                </p>

                <h2>call 和 apply 的异同</h2>
                <p>
                    了解异同点之前，先看这两个方法是如何使用的
                </p>

                <h4>基本使用</h4>
                <p>
                    <code>Function.call(obj,[param1[,param2[,…[,paramN]]]])</code>
                    <ul>
                        <li>
                            调用call的对象必须是个函数Function
                        </li>
                        <li>
                            call的第一个参数将会是function改变上下文后指向的对象，如果不传，将会默认是全局对象window
                        </li>
                        <li>
                            第二个参数开始可以接收任意个参数，这些参数将会作为function的参数传入Function
                        </li>
                    </ul>
                </p>

                <p>
                    <code>Function.apply(obj[,argArray])</code><br>
                    与call方法的使用基本一致，但是只接收两个参数，其中第二个参数必须是一个数组或者类数组，这也是这两个方法很重要的一个区别
                </p>

                <h5>数组与类数组的关系</h5>

                <p>
                    数组我们都熟悉，它的特征有：可以通过角标调用，如 array[0]；具有长度属性length；可以通过 for 循环和forEach方法进行遍历。
                </p>

                <p>
                    类数组顾名思义，具备的特征应该与数组基本相同，那么可以知道，一个形如下面这个对象的对象就是一个类数组。
                    <pre class="hljs javascript"><code class=""><span class="hljs-attribute">let arrayLike</span> = {<br>    0: 1,<br>    1: 2,<br>    2: 3,<br>    length: 3<br>};</code></pre>
                </p>

                <p>
                    类数组arrayLike可以通过角标进行调用，具有length属性，同时也可以通过 for 循环进行遍历。我们经常使用的获取dom节点的方法返回的就是一个类数组，在一个方法中使用 arguments 关键字获取到的该方法的所有参数也是一个类数组。
                </p>

                <p>
                    但是类数组却不能通过forEach进行遍历，因为forEach是数组原型链上的方法，类数组毕竟不是数组，所以无法使用。但我们可以这么做：
                    <pre class="hljs javascript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">let</span> domNodes = <span class="hljs-built_in">Array</span>.prototype.slice.call(<span class="hljs-built_in">document</span>.getElementsByTagName(<span class="hljs-string">"*"</span>));</code></pre>
                    这样domNodes就可以应用Array下的所有方法了。
                </p>

                <h4>异同</h4>
                <p>
                    相同点：<br>
                    都能够改变方法的执行上下文（执行环境），将一个对象的方法交给另一个对象来执行，并且是立即执行。
                </p>

                <p>
                    不同点：<br>
                    call方法从第二个参数开始可以接收任意个参数，每个参数会映射到相应位置的func的参数上，可以通过参数名调用，但是如果将所有的参数作为数组传入，它们会作为一个整体映射到func对应的第一个参数上，之后参数都为空。
                    <pre class="hljs javascript"><code class="">function <span class="hljs-function"><span class="hljs-keyword">func</span> <span class="hljs-params">(a,b,<span class="hljs-built_in">c</span>)</span></span> {}<br><br><span class="hljs-function"><span class="hljs-keyword">func</span>.<span class="hljs-title">call</span><span class="hljs-params">(obj, <span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>)</span></span><br><span class="hljs-comment">// function接收到的参数实际上是 1,2,3</span><br><br><span class="hljs-function"><span class="hljs-keyword">func</span>.<span class="hljs-title">call</span><span class="hljs-params">(obj, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>])</span></span><br><span class="hljs-comment">// function接收到的参数实际上是 [1,2,3],undefined,undefined</span></code></pre>
                </p>

                <p>
                    apply方法最多只有两个参数，第二个参数接收数组或者类数组，但是都会被转换成类数组传入func中，并且会被映射到func对应的参数上。
                    <pre class="hljs swift"><code class=""><span class="hljs-function"><span class="hljs-keyword">func</span>.<span class="hljs-title">apply</span><span class="hljs-params">(obj, [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>])</span></span><br><span class="hljs-comment">// function接收到的参数实际上是 1,2,3</span><br><br><span class="hljs-function"><span class="hljs-keyword">func</span>.<span class="hljs-title">apply</span><span class="hljs-params">(obj, {</span></span><br><span class="hljs-function"><span class="hljs-params">    <span class="hljs-number">0</span>: <span class="hljs-number">1</span>,</span></span><br><span class="hljs-function"><span class="hljs-params">    <span class="hljs-number">1</span>: <span class="hljs-number">2</span>,</span></span><br><span class="hljs-function"><span class="hljs-params">    <span class="hljs-number">2</span>: <span class="hljs-number">3</span>,</span></span><br><span class="hljs-function"><span class="hljs-params">    length: <span class="hljs-number">3</span></span></span><br><span class="hljs-function"><span class="hljs-params">})</span></span><br><span class="hljs-comment">// function接收到的参数实际上是 1,2,3</span></code></pre>
                </p>

                <h2>用途</h2>

                <h4>对象继承</h4>
                <p>
                    call 和 apply 经常用于对象的继承。如下面这个例子：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">superClass</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">this</span>.a = <span class="hljs-number">1</span>;<br>    <span class="hljs-keyword">this</span>.print = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{<br>        <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.a);<br>   }<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">subClass</span> (<span class="hljs-params"></span>) </span>{<br>    superClass.call(<span class="hljs-keyword">this</span>);<br>    <span class="hljs-keyword">this</span>.print();<br>}<br><br>subClass();<br><span class="hljs-comment">// 1</span></code></pre>
                    subClass通过call方法，继承了superClass的print方法和a变量，同时subClass还可以扩展自己的其他方法。
                </p>

                <h4>apply的一些妙用</h4>
                <p>
                    <strong>Math.max</strong>，可以实现得到数组中最大的一项。
                    <pre class="hljs javascript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">let</span> <span class="hljs-keyword">max</span> = Math.<span class="hljs-keyword">max</span>.apply(<span class="hljs-built_in">null</span>, <span class="hljs-built_in">array</span>);</code></pre>
                </p>

                <p>
                    同理，<strong>Math.min</strong>的写法：<br>
                    <pre class="hljs javascript"><code style="word-break: break-word; white-space: initial;" class=""><span class="hljs-keyword">let</span> <span class="hljs-keyword">min</span> = Math.<span class="hljs-keyword">min</span>.apply(<span class="hljs-built_in">null</span>, <span class="hljs-built_in">array</span>);</code></pre>
                </p>

                <p>
                    Array.prototype.push 可以实现两个数组合并。
                    <pre class="hljs javascript"><code class="">let arr1 = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];<br>let arr2 = [<span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>];<br><br>Array.prototype.push.apply(arr1, arr2);<br>console.log(arr1); <span class="hljs-comment">// [1, 2, 3, 4, 5, 6]</span></code></pre>
                </p>

                <h4>call的重要用法</h4>
                <p>
                    可以用来代替另一个对象调用一个方法。
                    <pre class="hljs perl"><code class="">function add (a, b) {<br>    console.log(a + b);<br>}<br><br>function <span class="hljs-function"><span class="hljs-keyword">sub</span> (<span class="hljs-title">a</span>, <span class="hljs-title">b</span>) </span>{<br>    console.log(a - b);<br>}<br><br>add.call(<span class="hljs-function"><span class="hljs-keyword">sub</span>, 3, 1)</span>;</code></pre>
                    这个例子中的意思就是用 add 来替换 sub，add.call(sub,3,1) == add(3,1) ，所以运行结果为：4<br>
                    注意：js 中的函数其实是对象，函数名是对 Function 对象的引用。
                </p>

                <p>
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Class1</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">this</span>.name = <span class="hljs-string">'class1'</span>;<br>    <span class="hljs-keyword">this</span>.showName = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>        alert(<span class="hljs-keyword">this</span>.name);<br>    }<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Class2</span> (<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">this</span>.name = <span class="hljs-string">'class2'</span>;<br>}<br><br><span class="hljs-keyword">let</span> c1 = <span class="hljs-keyword">new</span> Class1();<br><span class="hljs-keyword">let</span> c2 = <span class="hljs-keyword">new</span> Class2();<br><br>c1.showNam.call(c2);</code></pre>
                    这里的意思是把 c1 的方法放到c2上执行，原来c2是没有showNam() 方法，现在是把c1 的showNam()方法放到 c2 上来执行，所以this.name 应该是 class2，执行的结果就是 ：alert（"class2"）; 可以让a对象来执行b对象的方法。
                </p>

                <h2>便捷记忆法</h2>
                <p>
                    知乎上看到的小例子，很好记：
                </p>
                <p>
                    猫吃鱼，狗吃肉，奥特曼打小怪兽。<br>
                    有天狗想吃鱼了<br>
                    猫.吃鱼.call(狗，鱼)<br>
                    狗就吃到鱼了<br>
                    猫成精了，想打怪兽<br>
                    奥特曼.打小怪兽.call(猫，小怪兽)<br>
                    猫也可以打小怪兽了
                </p>

                <h2>bind的使用</h2>
                <p>
                    <ul>
                        <li>
                            基本用法：<code>obj.bind(thisObj, arg1, arg2, …);</code>
                        </li>
                        <li>
                            把 obj 绑定到 thisObj，这时候 thisObj 具备了 obj 的属性和方法。
                        </li>
                        <li>
                            与 call 和 apply 不同的是，<strong>bind 绑定后不会立即执行</strong>。
                        </li>
                    </ul>
                    <pre class="hljs perl"><code class="">function add(j, k) {<br>    <span class="hljs-keyword">return</span> j+k;<br>}<br><br>function <span class="hljs-function"><span class="hljs-keyword">sub</span>(<span class="hljs-title">j</span>, <span class="hljs-title">k</span>) </span>{<br>    <span class="hljs-keyword">return</span> j-k;<br>}<br><br>add.bind(<span class="hljs-function"><span class="hljs-keyword">sub</span>, 5, 3)</span>; // 不再返回<span class="hljs-number">8</span><br>add.bind(<span class="hljs-function"><span class="hljs-keyword">sub</span>, 5, 3)</span>(); // <span class="hljs-number">8</span></code></pre>
                    如果 bind 的第一个参数是 null 或者 undefined，this 就指向全局对象。
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
