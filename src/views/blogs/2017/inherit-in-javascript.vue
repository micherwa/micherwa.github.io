<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
                <p>
                    这里说的继承，是Javascript面向对象编程(OOP)中的重要概念。
                </p>
                <p>
                    但由于Javascript不是一种真正的面向对象编程语言，所以继承并非像 Java 中一个 extends 关键字，就能搞定继承的关系。
                </p>
                <p>
                    所以，本文列举的几种继承的方法，会进行逐步地组合封装，最后会介绍es6中class的继承方法。
                </p>
                <p>
                    假设，现在有一个“动物”的构造函数。
                    <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal</span><span class="hljs-params">()</span> </span>{<br>    <span class="hljs-keyword">this</span>.species = <span class="hljs-string">"动物"</span>;<br>}</code></pre>
                    还有一个“猫”对象的构造函数。
                    <pre class="hljs qml"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span> (<span class="hljs-params">name, color</span>) </span>{<br>    <span class="hljs-keyword">this</span>.name = name;<br>    <span class="hljs-keyword">this</span>.color = <span class="hljs-built_in">color</span>;<br>}</code></pre>
                    如何使"猫"继承"动物"呢？
                </p>

                <h2>1.构造函数绑定(使用call或apply方法)</h2>
                <p>
                    就是将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行：
                    <pre class="hljs qml"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span>(<span class="hljs-params">name, color</span>) </span>{<br>    <span class="hljs-comment">// 将所有在 Animal 中与 this 绑定的变量都切换到了 Cat 上</span><br>    Animal.apply(<span class="hljs-keyword">this</span>, <span class="hljs-built_in">arguments</span>);<br>    <span class="hljs-keyword">this</span>.name = name;<br>    <span class="hljs-keyword">this</span>.color = <span class="hljs-built_in">color</span>;<br>}<br><br><span class="hljs-built_in">var</span> cat1 = <span class="hljs-keyword">new</span> Cat(<span class="hljs-string">"大毛"</span>, <span class="hljs-string">"黄色"</span>);<br><br><span class="hljs-built_in">console</span>.log(cat1.species); <span class="hljs-comment">// 动物</span></code></pre>
                    但有个问题，无法继承一些原型链上公用的方法或属性。再改写一下：
                    <pre class="hljs javascript"><code class="">Animal.prototype.doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Animal do something'</span>);<br> }<br> <br> <span class="hljs-built_in">console</span>.log(cat1.doSomething());<br> <span class="hljs-comment">// Uncaught TypeError: cat1.doSomething is not a function</span></code></pre>
                    Animal 有一个公用方法写在 prototype 上，Cat 调用该方法时会发生报错。
                </p>

                <h2>2.原型链模式(prototype)</h2>
                <p>
                    如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。
                    <pre class="hljs qml"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">this</span>.species = <span class="hljs-string">"动物"</span>;<br>}<br><br>Animal.prototype.doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Animal do something'</span>);<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span>(<span class="hljs-params">name, color</span>) </span>{<br>    <span class="hljs-keyword">this</span>.name = name;<br>    <span class="hljs-keyword">this</span>.color = <span class="hljs-built_in">color</span>;<br>}<br><br>Cat.prototype = <span class="hljs-keyword">new</span> Animal();<br>Cat.prototype.constructor = Cat;<br><br><span class="hljs-comment">// 必须写在 Cat.prototype = new Animal(); 之后</span><br>Cat.prototype.doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Cat catches mouse'</span>);<br>}<br><br><span class="hljs-built_in">var</span> cat1 = <span class="hljs-keyword">new</span> Cat(<span class="hljs-string">"大毛"</span>, <span class="hljs-string">"黄色"</span>);<br><br><span class="hljs-built_in">console</span>.log(cat1.species); <span class="hljs-comment">// 动物</span><br><span class="hljs-built_in">console</span>.log(cat1.doSomething()); <span class="hljs-comment">// Cat catches mouse</span></code></pre>
                    先将Cat的prototype对象指向一个Animal的实例：<code>Cat.prototype = new Animal();</code>。它相当于完全删除了prototype 对象原先的值，然后赋予一个新值。
                </p>
                <p>
                    <code>Cat.prototype.constructor = Cat;</code> 写这句的目的是为了修复上一行的副作用： Cat.prototype.constructor 会指向 Animal。
                </p>
                <p>
                    更重要的是，每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。也就是，也会指向Animal。
                </p>
                <p>
                    所以，需要将Cat.prototype对象的constructor值改为Cat。这就是第二行的意思。
                </p>
                <p>
                    这是很重要的一点，务必要遵守。也就是，如果替换了prototype对象，<code>o.prototype = {};</code>
                </p>
                <p>
                    那么，下一步必然是为新的prototype对象加上constructor属性，并将这个属性指回原来的构造函数。<code>o.prototype.constructor = o;</code>
                </p>
                <p>
                    另外，这种方法有一个缺点：<code>Cat.prototype.doSomething</code> 必须写在 <code>Cat.prototype = new Animal();</code>之后，不然会被覆盖。
                </p>

                <h2>3.组合式继承(前两种方式的结合)</h2>
                <p>
                    其背后的思路是：<strong>使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承</strong>。
                    <pre class="hljs qml"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-keyword">this</span>.species = <span class="hljs-string">"动物"</span>;<br>}<br><br>Animal.prototype.doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Animal do something'</span>);<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span>(<span class="hljs-params">name, color</span>) </span>{<br>    Animal.apply(<span class="hljs-keyword">this</span>, <span class="hljs-built_in">arguments</span>);<br>    <span class="hljs-keyword">this</span>.name = name;<br>    <span class="hljs-keyword">this</span>.color = <span class="hljs-built_in">color</span>;<br>}<br><br>Cat.prototype = <span class="hljs-keyword">new</span> Animal();<br>Cat.prototype.constructor = Cat;<br><br><span class="hljs-built_in">var</span> cat1 = <span class="hljs-keyword">new</span> Cat(<span class="hljs-string">"大毛"</span>, <span class="hljs-string">"黄色"</span>);<br><br><span class="hljs-built_in">console</span>.log(cat1.species); <span class="hljs-comment">// 动物</span><br><span class="hljs-built_in">console</span>.log(cat1.doSomething()); <span class="hljs-comment">// Animal do something</span></code></pre>
                    但组合继承在使用过程中有个问题：<strong>父类会被调用两次</strong>。一次是创建子类型的时候，另一次是在子类型构造函数的内部。
                </p>
                <p>
                    第一次将“猫”的prototype对象，指向一个Animal的实例。这一步的调用，其实只是为了获取父类原型上的方法罢了，并不需要函数内部的那些实例属性。
                </p>
                <p>
                    所以，可能想到了要这么写：<code>Cat.prototype = Animal.prototype;</code>。但，这是不对的。
                    <ul>
                        <li>
                            首先，这样写相当于是子类和父类都指向同一个对象，这时候如果你添加了新的方法给 Cat，但实际上 Animal 并不需要，相当于强行给 Animal 添加了一个未知的方法。
                        </li>
                        <li>
                            其次，这样写无法体现出继承的多态性。比如，Cat 要重写 Animal 的doSomething方法，那么 Animal 中的这个方法就会随之改变，显然违背了OOP多态的特性。
                        </li>
                    </ul>
                </p>

                <h2>4.寄生组合式继承(利用空对象作为中介)</h2>
                <p>
                    因为第三种方式说，我们第一次调用构造函数时，其实不用管构造函数里面的内容，所以我们何不 new 一个空函数，将其 prototype 指向 Animal.prototype。
                    <pre class="hljs elm"><code class=""><span class="hljs-title">var</span> <span class="hljs-type">F</span> = function(){};<br><span class="hljs-type">F</span>.proto<span class="hljs-keyword">type</span> = <span class="hljs-type">Animal</span>.prototype;<br><br><span class="hljs-type">Cat</span>.proto<span class="hljs-keyword">type</span> = new <span class="hljs-type">F</span>();<br><span class="hljs-type">Cat</span>.proto<span class="hljs-keyword">type</span>.constructor = <span class="hljs-type">Cat</span>;</code></pre>
                    F是空对象，所以几乎不占内存。这时，修改Cat的prototype对象，就不会影响到Animal的prototype对象。
                </p>
                <p>
                    将上面的方法封装一个，以便调用。
                    <pre class="hljs php"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">extend</span><span class="hljs-params">(Child, Parent)</span> </span>{<br>    <span class="hljs-keyword">var</span> F = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span>{};<br>    F.prototype = <span class="hljs-keyword">Parent</span>.prototype;<br><br>    Child.prototype = <span class="hljs-keyword">new</span> F();<br>    Child.prototype.constructor = Child;<br><br>    Child.uber = <span class="hljs-keyword">Parent</span>.prototype;<br>}</code></pre>
                    使用的时候，像下面这样：
                    <pre class="hljs stata"><code class="">extend(<span class="hljs-keyword">Cat</span>, Animal);<br><span class="hljs-keyword">var</span> cat1 = new <span class="hljs-keyword">Cat</span>(<span class="hljs-string">"大毛"</span>, <span class="hljs-string">"黄色"</span>);<br><br>console.<span class="hljs-built_in">log</span>(cat1.species); <span class="hljs-comment">// 动物</span><br>console.<span class="hljs-built_in">log</span>(cat1.doSomething()); <span class="hljs-comment">// Animal do something</span></code></pre>
                    这个extend函数，就是YUI库如何实现继承的方法。
                </p>
                <p>
                    另外，说明一点，函数体最后一行<code>Child.uber = Parent.prototype;</code>。意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。（uber是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
                </p>

                <h2>5.拷贝继承</h2>
                <p>
                    换一种思路，纯粹采用"拷贝"方法实现继承。简单说，如果把父对象的所有属性和方法，拷贝进子对象。
                    <pre class="hljs qml"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Animal</span>(<span class="hljs-params"></span>)</span>{}<br>Animal.prototype.species = <span class="hljs-string">"动物"</span>;<br>Animal.prototype.doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Animal do something'</span>);<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span>(<span class="hljs-params">name, color</span>) </span>{<br>    Animal.apply(<span class="hljs-keyword">this</span>, <span class="hljs-built_in">arguments</span>);<br>    <span class="hljs-keyword">this</span>.name = name;<br>    <span class="hljs-keyword">this</span>.color = <span class="hljs-built_in">color</span>;<br>}<br><br><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">extend2</span>(<span class="hljs-params">Child, Parent</span>) </span>{<br>    <span class="hljs-built_in">var</span> p = Parent.prototype;<br>    <span class="hljs-built_in">var</span> c = Child.prototype;<br><br>    <span class="hljs-keyword">for</span> (<span class="hljs-built_in">var</span> i <span class="hljs-keyword">in</span> p) {<br>        c[i] = p[i];<br>    }<br>    c.uber = p;<br>}<br><br>extend2(Cat, Animal);<br><span class="hljs-built_in">var</span> cat1 = <span class="hljs-keyword">new</span> Cat(<span class="hljs-string">"大毛"</span>, <span class="hljs-string">"黄色"</span>);<br><br><span class="hljs-built_in">console</span>.log(cat1.species); <span class="hljs-comment">// 动物</span><br><span class="hljs-built_in">console</span>.log(cat1.doSomething()); <span class="hljs-comment">// Animal do something</span></code></pre>
                </p>

                <h2>6.ES6中的class方法</h2>
                <p>
                    ES6中写继承关系更为简单，用到了 extends 关键字。
                    <pre class="hljs javascript"><code class=""><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Animal</span> </span>{<br>    <span class="hljs-keyword">constructor</span>() {<br>        <span class="hljs-keyword">this</span>.species = <span class="hljs-string">"动物"</span>;<br>    }<br>    doSomething() {<br>        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Animal do something'</span>);<br>    }<br>}<br><br><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Cat</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Animal</span> </span>{<br>    <span class="hljs-keyword">constructor</span>(name, color) {<br>        <span class="hljs-keyword">super</span>();<br>        <span class="hljs-keyword">this</span>.name = name;<br>        <span class="hljs-keyword">this</span>.color = color;<br>    }<br>    doSomething() {<br>        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'cat catches mouse'</span>);<br>    }<br>}<br><br><span class="hljs-keyword">const</span> cat1 = <span class="hljs-keyword">new</span> Cat(<span class="hljs-string">"大毛"</span>, <span class="hljs-string">"黄色"</span>);<br><span class="hljs-built_in">console</span>.log(cat1.species); <span class="hljs-comment">// 动物</span><br><span class="hljs-built_in">console</span>.log(cat1.doSomething()); <span class="hljs-comment">// cat catches mouse</span><br><br><span class="hljs-keyword">const</span> animal = <span class="hljs-keyword">new</span> Animal();<br><span class="hljs-built_in">console</span>.log(animal.species); <span class="hljs-comment">// 动物</span><br><span class="hljs-built_in">console</span>.log(animal.doSomething()); <span class="hljs-comment">// Animal do something</span></code></pre>
                </p>

                <h2>参考文献</h2>
                <p>
                    <ul>
                        <li>
                            <a href="http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html" target="_blank">
                                Javascript面向对象编程（二）：构造函数的继承
                            </a>
                        </li>
                    </ul>
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
