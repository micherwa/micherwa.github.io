<template>
    <div class="blog-container">
        <BlogHeader
            title="前端面试题——Javascript篇" subTitle=""
            date="2018-09-16" :tags="['面试题']">
        </BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>JS的基本数据类型、引用数据类型、内置对象</h2>
                <p>
                    <ul>
                        <li>基本数据类型(存储在栈中)：Undefined、Null、Boolean、Number、String、Symbol(es6引入)</li>
                        <li>引用数据类型(存储在堆中)：Object、Array、Function、Date、RegExp</li>
                        <li>两种类型的区别是：存储位置不同</li>
                        <li>原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；</li>
                        <li>引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体</li>
                        <li>
                            内置对象：
                            <ol>
                                <li>数据封装类：Object、Array、Boolean、Number、String</li>
                                <li>其他：Function、Arguments、Math、Date、RegExp、Error</li>
                                <li>ES6新增：Symbol、Map、Set、Promises、Proxy、Reflect</li>
                            </ol>
                        </li>
                    </ul>
                </p>

                <h2>解释JavaScript中的作用域、作用域链与变量声明提升</h2>
                <p>
                    作用域：
                    <ul>
                        <li>
                            在过去，JavaScript 的作用域为function(){}内的区域，称为函数作用域。
                            es6重新定义了作用域的范围，比如for语句、if语句或{}内的一块区域。
                        </li>
                    </ul>
                    作用域链：
                    <ul>
                        <li>
                            全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节
                        </li>
                        <li>
                            如果当前作用域没有找到属性或方法，会向上层作用域查找，直至全局函数，这种形式就是作用域链
                        </li>
                    </ul>
                    变量声明提升：
                    <ul>
                        <li>
                            函数声明与变量声明经常被JavaScript引擎隐式地提升到当前作用域的顶部
                        </li>
                        <li>
                            声明语句中的赋值部分并不会被提升，只有名称被提升
                        </li>
                        <li>
                            函数声明的优先级高于变量，如果变量名跟函数名相同且未赋值，则函数声明会覆盖变量声明
                        </li>
                        <li>
                            如果函数有多个同名参数，那么最后一个参数（即使没有定义）会覆盖前面的同名参数
                        </li>
                    </ul>
                </p>

                <h2>介绍JavaScript的原型，原型链，以及特点</h2>
                <p>
                    原型：
                    <ul>
                        <li>所有对象中都包含了一个 [proto] 内部属性，这个属性所对应的就是该对象的原型</li>
                        <li>函数对象，除了原型 [proto] 之外，还预置了 prototype 属性</li>
                        <li>当函数对象作为构造函数创建实例时，该 prototype 属性值将被作为实例对象的原型 [proto]</li>
                    </ul>
                    原型链：
                    <ul>
                        <li>
                            当一个对象调用的属性/方法自身不存在时，就会去自己 [proto] 关联的前辈 prototype 对象上去找
                        </li>
                        <li>
                            如果没找到，就会去该 prototype 原型 [proto] 关联的前辈 prototype 去找。依次类推，直到找到属性/方法或 undefined 为止。从而形成了所谓的“原型链”
                        </li>
                    </ul>
                    原型特点：
                    <ul>
                        <li>对象是通过引用来传递的，当修改原型时，与之相关的对象也会继承这一改变</li>
                    </ul>
                </p>

                <h2>跨域的解决方案有哪些？</h2>
                <p>
                    <ul class="p-l-0">
                        CORS、反向代理、JSONP、设置document.domain(只适用于主域相同子域不同)、window.name + iframe、window.postMessage
                    </ul>
                    具体可参考：
                    <router-link :to="{ name: 'cross-domain-in-javascript' }">这篇文章</router-link>
                </p>

                <h2>解释一下JavaScript中的事件循环</h2>
                <p>
                    <ul>
                        <li>Javascript是单线程的，所有同步任务都在主线程上执行，形成一个执行栈。</li>
                        <li>主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。</li>
                        <li>一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。</li>
                        <li>主线程不断重复上面的第三步。</li>
                    </ul>
                    具体可参考：
                    <router-link :to="{ name: 'event-loop-in-javascript' }">这篇文章</router-link>
                </p>

                <h2>Javascript中实现异步编程的方法有哪些？</h2>
                <p>
                    <ul class="pl-l-0">
                        回调函数、事件监听、发布/订阅、Promises对象、Async函数[ES7]
                    </ul>
                    具体可参考：
                    <router-link :to="{ name: 'async-in-javascript' }">这篇文章</router-link>
                </p>

                <h2>什么是闭包（closure），为什么要用它？</h2>
                <p>
                    闭包是指有权访问另一个函数作用域中变量的函数，创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量，利用闭包可以突破作用链域。
                    特点：函数内再嵌套函数，内部函数可以引用外层的参数和变量，参数和变量不会被垃圾回收机制回收。
                    作用：
                    <ul>
                        <li>
                            匿名自执行函数  (function (){ ... })();   创建了一个匿名的函数，并立即执行它，由于外部无法引用它内部的变量，因此在执行完后很快就会被释放，关键是这种机制不会污染全局对象。
                        </li>
                        <li>
                            缓存, 可保留函数内部的值
                        </li>
                        <li>
                            实现封装和模板
                        </li>
                    </ul>
                </p>

                <h2>介绍Javascript的事件机制</h2>
                <p>
                    <ul>
                        <li>
                            三个阶段：捕获、目标、冒泡
                        </li>
                        <li>
                            按照W3C标准的事件：首是进入捕获阶段，直到达到目标元素，再进入冒泡阶段
                        </li>
                        <li>
                            事件委托：是指将事件绑定目标元素的到父元素上，利用冒泡机制触发该事件。优点：可以减少事件注册，节省大量内存占用，将事件应用于动态添加的子元素上。缺点：使用不当会造成事件在不应该触发时触发。<br>
                            <pre class="hljs aspectj"><code class="">ulEl.addEventListener(<span class="hljs-string">'click'</span>, function(e){<br>    var <span class="hljs-keyword">target</span> = event.<span class="hljs-keyword">target</span> || event.srcElement;<br>    <span class="hljs-keyword">if</span>(!!<span class="hljs-keyword">target</span> &amp;&amp; <span class="hljs-keyword">target</span>.nodeName.toUpperCase() === <span class="hljs-string">"LI"</span>){<br>        console.log(<span class="hljs-keyword">target</span>.innerHTML);<br>    }<br>}, <span class="hljs-keyword">false</span>);</code></pre>
                        </li>
                        <li>阻止事件默认行为：<strong>W3C: e.preventDefault()</strong></li>
                        <li>阻止事件冒泡：<strong>W3C: e.stopPropagation()</strong></li>
                    </ul>
                    具体可参考
                    <router-link :to="{ name: 'event-principle-in-javascript'}">
                        这篇文章
                    </router-link>
                </p>

                <h2>谈谈Javascript对象的浅拷贝与深拷贝</h2>
                <p>
                    概念的理解：
                    <ul>
                        <li>深拷贝和浅拷贝只针对像Object, Array这样的引用类型数据</li>
                        <li>浅拷贝是对对象引用地址进行拷贝，拷贝后，改其中一个对象的属性，则另源对象的属性也会改变</li>
                        <li>深拷贝会新开一个引用地址进行拷贝，拷贝后，修改一个对象的属性，不会改变源对象的属性</li>
                    </ul>
                    具体可参考
                    <router-link :to="{ name: 'copy-object-in-javascript'}">
                        这篇文章
                    </router-link>
                </p>

                <h2>写一个通用的事件侦听器函数</h2>
                <p>
                    <pre class="hljs javascript"><code class=""><span class="hljs-comment">// event(事件)工具集，来源：github.com/markyun</span><br>markyun.Event = {<br>    <span class="hljs-comment">// 页面加载完成后</span><br>    readyEvent : <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">fn</span>) </span>{<br>        <span class="hljs-keyword">if</span> (fn == <span class="hljs-literal">null</span>) {<br>            fn = <span class="hljs-built_in">document</span>;<br>        }<br>        <span class="hljs-keyword">var</span> oldonload = <span class="hljs-built_in">window</span>.onload;<br>        <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> <span class="hljs-built_in">window</span>.onload != <span class="hljs-string">'function'</span>) {<br>            <span class="hljs-built_in">window</span>.onload = fn;<br>        } <span class="hljs-keyword">else</span> {<br>            <span class="hljs-built_in">window</span>.onload = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>                oldonload();<br>                fn();<br>            };<br>        }<br>    },<br>    <span class="hljs-comment">// 兼容dom0、dom2、IE方式，来绑定事件</span><br>    <span class="hljs-comment">// 参数：操作的元素，事件名称，事件处理程序</span><br>    addEvent: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">element, type, handler</span>) </span>{<br>        <span class="hljs-keyword">if</span> (element.addEventListener) {<br>            <span class="hljs-comment">// 事件类型、需要执行的函数、是否捕捉</span><br>            element.addEventListener(type, handler, <span class="hljs-literal">false</span>);<br>        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (element.attachEvent) {<br>            element.attachEvent(<span class="hljs-string">'on'</span> + type, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{<br>                handler.call(element);<br>            });<br>        } <span class="hljs-keyword">else</span> {<br>            element[<span class="hljs-string">'on'</span> + type] = handler;<br>        }<br>    },<br>    <span class="hljs-comment">// 移除事件</span><br>    removeEvent: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">element, type, handler</span>) </span>{<br>        <span class="hljs-keyword">if</span> (element.removeEventListener) {<br>            element.removeEventListener(type, handler, <span class="hljs-literal">false</span>);<br>        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (element.datachEvent) {<br>            element.detachEvent(<span class="hljs-string">'on'</span> + type, handler);<br>        } <span class="hljs-keyword">else</span> {<br>            element[<span class="hljs-string">'on'</span> + type] = <span class="hljs-literal">null</span>;<br>        }<br>    },<br>    <span class="hljs-comment">// 阻止事件(主要是事件冒泡，因为IE不支持事件捕获)</span><br>    stopPropagation: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">ev</span>) </span>{<br>        <span class="hljs-keyword">if</span> (ev.stopPropagation) {<br>            ev.stopPropagation();<br>        } <span class="hljs-keyword">else</span> {<br>            ev.cancelBubble = <span class="hljs-literal">true</span>;<br>        }<br>    },<br>    <span class="hljs-comment">// 取消事件的默认行为</span><br>    preventDefault: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>        <span class="hljs-keyword">if</span> (event.preventDefault) {<br>            event.preventDefault();<br>        } <span class="hljs-keyword">else</span> {<br>            event.returnValue = <span class="hljs-literal">false</span>;<br>        }<br>    },<br>    <span class="hljs-comment">// 获取事件目标</span><br>    getTarget: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>        <span class="hljs-keyword">return</span> event.target || event.srcElement;<br>    },<br>    <span class="hljs-comment">// 获取event对象的引用，取到事件的所有信息，确保随时能使用event；</span><br>    getEvent: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>) </span>{<br>        <span class="hljs-keyword">var</span> ev = e || <span class="hljs-built_in">window</span>.event;<br>        <span class="hljs-keyword">if</span> (!ev) {<br>            <span class="hljs-keyword">var</span> c = <span class="hljs-keyword">this</span>.getEvent.caller;<br>            <span class="hljs-keyword">while</span> (c) {<br>                ev = c.arguments[<span class="hljs-number">0</span>];<br>                <span class="hljs-keyword">if</span> (ev &amp;&amp; Event == ev.constructor) {<br>                    <span class="hljs-keyword">break</span>;<br>                }<br>                c = c.caller;<br>            }<br>        }<br>        <span class="hljs-keyword">return</span> ev;<br>    }<br>};</code></pre>
                </p>

                <h2>如何理解this对象</h2>
                <p>
                    <ul>
                        <li>this对象是Javascript的内置对象，它总是指向函数的直接调用者</li>
                        <li>如果有 new 关键字，this 指向 new 出来的实例对象</li>
                        <li>在事件中，this 指向触发这个事件的对象</li>
                    </ul>
                    具体可参考
                    <router-link :to="{ name: 'how-to-use-this-in-javascript'}">
                        这篇文章
                    </router-link>
                </p>

                <h2>null，undefined 的区别</h2>
                <p>
                    <ul>
                        <li>
                            undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined。例如变量被声明了，但没有赋值时，就等于undefined。
                        </li>
                        <li>
                            null : 是一个对象(空对象, 没有任何属性和方法)，表示一个对象被定义了，值为“空值”。例如作为函数的参数，表示该函数的参数不是对象。还有，在验证null时，一定要使用　=== ，因为 == 无法分别 null 和　undefined
                        </li>
                    </ul>
                </p>

                <h2>介绍 DOM 的发展，以及事件处理方式的不同</h2>
                <p>
                    各阶段的发展：
                    <ul>
                        <li>
                            DOM：文档对象模型（Document Object Model），定义了访问HTML和XML文档的标准，与编程语言及平台无关
                        </li>
                        <li>
                            DOM0：提供了查询和操作Web文档的内容API。未形成标准，实现混乱。如：document.forms['login']
                        </li>
                        <li>
                            DOM1：W3C提出标准化的DOM，简化了对文档中任意部分的访问和操作。如：JavaScript中的Document对象
                        </li>
                        <li>
                            DOM2：原来DOM基础上扩充了鼠标事件等细分模块，增加了对CSS的支持。如：getComputedStyle(elem, pseudo)
                        </li>
                        <li>
                            DOM3：增加了XPath模块和加载与保存（Load and Save）模块。如：XPathEvaluator
                        </li>
                    </ul>
                    事件处理方式的区别：
                    <ul>
                        <li>
                            DOM0：
                            <ol>
                                <li>btn.onclick = func;</li>
                                <li>btn.onclick = null;</li>
                            </ol>
                            DOM2：
                            <ol>
                                <li>btn.addEventListener('click', func, false);</li>
                                <li>btn.removeEventListener('click', func, false);</li>
                                <li>btn.attachEvent("onclick", func);</li>
                                <li>btn.detachEvent("onclick", func);</li>
                            </ol>
                            DOM3：
                            <ol>
                                <li>eventUtil.addListener(input, "textInput", func);</li>
                                <li>eventUtil 是自定义对象，textInput 是DOM3级事件</li>
                            </ol>
                        </li>
                    </ul>
                </p>

                <h2>Ajax 是什么? 如何创建一个Ajax？</h2>
                <p>
                    <ul>
                        <li>
                            ajax的全称：Asynchronous Javascript And XML(异步传输+js+xml)。进一步解释：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验
                        </li>
                        <li>
                            创建XMLHttpRequest对象,也就是创建一个异步调用对象
                        </li>
                        <li>
                            建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
                        </li>
                        <li>
                            设置响应HTTP请求状态变化的函数
                        </li>
                        <li>
                            发送HTTP请求
                        </li>
                        <li>
                            获取异步调用返回的数据
                        </li>
                        <li>
                            用JavaScript和DOM实现局部刷新
                        </li>
                    </ul>
                </p>

                <h2>内存泄漏是什么？哪些操作会导致内存泄漏？</h2>
                <p>
                    <ul>
                        <li>
                            内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
                        </li>
                        <li>
                            会引发内存泄漏的操作：
                            <ol>
                                <li>setTimeout 的第一个参数使用字符串而非函数</li>
                                <li>闭包、控制台日志、循环引用(两个对象相互引用)、未使用 var 声明的全局变量、移除存在绑定事件的DOM元素(IE)</li>
                            </ol>
                        </li>
                    </ul>
                </p>

                <h2>介绍call和apply的用法和区别</h2>
                <p>
                    <ul>
                        <li>用法：都能继承另一个对象的方法和属性</li>
                        <li>
                            区别：参数列表不一样
                            <ol>
                                <li>Function.apply(obj, args) args是一个数组,作为参数传给Function</li>
                                <li>Function.call(obj, arg1, arg2,...)  arg*是参数列表</li>
                            </ol>
                        </li>
                        <li>apply的一个妙用：可以将一个数组默认的转化为一个参数列表。例如：有一个数组arr要push进一个新的数组中去, 如果用call的话需要把数组中的元素一个个取出来再push, 而用apply只有Array.prototype.push.apply(this, arr)</li>
                    </ul>
                    具体可参考
                    <router-link :to="{ name: 'call-and-apply-in-javascript'}">
                        这篇文章
                    </router-link>
                </p>

                <h2>Javascript中如何实现继承</h2>
                <p>
                    <ul>
                        <li>
                            构造函数绑定：使用 call 或 apply 方法，将父对象的构造函数绑定在子对象上
                            <pre class="hljs qml"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Cat</span>(<span class="hljs-params">name,color</span>)</span>{<br> 　Animal.apply(<span class="hljs-keyword">this</span>, <span class="hljs-built_in">arguments</span>);<br> 　<span class="hljs-keyword">this</span>.name = name;<br> 　<span class="hljs-keyword">this</span>.color = <span class="hljs-built_in">color</span>;<br>}</code></pre>
                        </li>
                        <li>
                            实例继承：将子对象的 prototype 指向父对象的一个实例
                            <pre class="hljs actionscript"><code class=""><span class="hljs-type">Cat</span>.proto<span class="hljs-keyword">type</span> = new <span class="hljs-type">Animal</span>();<br><span class="hljs-type">Cat</span>.proto<span class="hljs-keyword">type</span>.constructor = <span class="hljs-type">Cat</span>;</code></pre>
                        </li>
                        <li>
                            拷贝继承：如果把父对象的所有属性和方法，拷贝进子对象
                            <pre class="hljs actionscript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">extend</span><span class="hljs-params">(Child, Parent)</span> </span>{<br>  　<span class="hljs-keyword">var</span> p = Parent.prototype;<br>  　<span class="hljs-keyword">var</span> c = Child.prototype;<br>  　<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i <span class="hljs-keyword">in</span> p) {<br>      c[i] = p[i];<br>    }<br>    c.uber = p;<br>}</code></pre>
                        </li>
                        <li>
                            原型继承：将子对象的 prototype 指向父对象的 prototype
                            <pre class="hljs php"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">extend</span><span class="hljs-params">(Child, Parent)</span> </span>{<br>    <span class="hljs-keyword">var</span> F = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span></span>{};<br>  　F.prototype = <span class="hljs-keyword">Parent</span>.prototype;<br>  　Child.prototype = <span class="hljs-keyword">new</span> F();<br>  　Child.prototype.constructor = Child;<br>  　Child.uber = <span class="hljs-keyword">Parent</span>.prototype;<br>}</code></pre>
                        </li>
                        <li>
                            ES6 语法糖 extends：class ColorPoint extends Point {}
                            <pre class="hljs scala"><code class=""><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ColorPoint</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Point</span> </span>{<br>    constructor(x, y, color) {<br>        <span class="hljs-comment">// 调用父类的constructor(x, y)</span><br>        <span class="hljs-keyword">super</span>(x, y);<br>        <span class="hljs-keyword">this</span>.color = color;<br>    }<br>    toString() {<br>        <span class="hljs-comment">// 调用父类的toString()</span><br>        <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.color + ' ' + <span class="hljs-keyword">super</span>.toString();<br>    }<br>}</code></pre>
                        </li>
                    </ul>
                    具体可参考
                    <router-link :to="{ name: 'inherit-in-javascript'}">
                        这篇文章
                    </router-link>
                </p>

                <h2>介绍函数节流的原理和应用场景</h2>
                <p>
                    <ul>
                        <li>
                            函数节流(throttle)是指阻止一个函数在很短时间间隔内连续调用。 只有当上一次函数执行后达到规定的时间间隔，才能进行下一次调用。 但要保证一个累计最小调用间隔（否则拖拽类的节流都将无连续效果）
                        </li>
                        <li>
                            函数节流用于 onresize, onscroll 等短时间内会多次触发的事件
                        </li>
                        <li>
                            原理：使用定时器做时间节流。 当触发一个事件时，先用 setTimout 让这个事件延迟一小段时间再执行。 如果在这个时间间隔内又触发了事件，就 clearTimeout 原来的定时器， 再 setTimeout 一个新的定时器重复以上流程。
                        </li>
                    </ul>
                    简单实现：
                    <pre class="hljs javascript"><code class=""><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">throttle</span>(<span class="hljs-params">method, context</span>) </span>{<br>     clearTimeout(methor.tId);<br>     method.tId = setTimeout(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<br>         method.call(context);<br>     }， <span class="hljs-number">100</span>); <span class="hljs-comment">// 两次调用至少间隔 100ms</span><br>}<br><span class="hljs-comment">// 调用</span><br><span class="hljs-built_in">window</span>.onresize = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<br>    throttle(myFunc, <span class="hljs-built_in">window</span>);<br>}</code></pre>
                </p>

                <h2>use strict; 是什么意思？为何要使用它？它对代码哪些限制？</h2>
                <p>
                    use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
                    对代码的限制：
                    <ul>
                        <li>变量必须声明后再使用</li>
                        <li>禁止this指向全局对象</li>
                        <li>函数的参数不能有同名属性</li>
                        <li>不能使用with语句</li>
                        <li>不能对只读属性赋值</li>
                        <li>不能使用前缀0表示八进制数</li>
                        <li>不能删除不可删除的属性</li>
                        <li>不能删除变量delete prop，只能删除属性delete global[prop]</li>
                        <li>eval不会在它的外层作用域引入变量</li>
                        <li>eval和arguments不能被重新赋值</li>
                        <li>arguments不会自动反映函数参数的变化</li>
                        <li>不能使用arguments.callee和arguments.caller</li>
                        <li>不能使用fn.caller和fn.arguments获取函数调用的堆栈</li>
                        <li>增加了保留字（比如protected、static和interface）</li>
                    </ul>
                </p>

                <h2>new操作符具体干了什么？</h2>
                <p>
                    <ul>
                        <li>创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型</li>
                        <li>属性和方法被加入到 this 引用的对象中</li>
                        <li>新创建的对象由 this 所引用，并且最后隐式的返回 this</li>
                    </ul>
                    一个简单的例子：
                    <pre class="hljs abnf"><code class="">var obj  = {}<span class="hljs-comment">;</span><br></span>obj.__proto__ = Base.prototype<span class="hljs-comment">;</span><br>Base.call(obj)<span class="hljs-comment">;</span></code></pre>
                </p>

                <h2>eval是做什么的？为何要避免使用它？</h2>
                <p>
                    <ul>
                        <li>它的功能是把对应的字符串解析成JS代码并运行</li>
                        <li>应该避免使用它，因为不安全，而且非常耗性能（先解析成js语句，再执行）</li>
                    </ul>
                </p>

                <h2>谈谈JavaScript性能优化</h2>
                <p>
                    <ul>
                        <li>遵循严格模式："use strict";</li>
                        <li>打包压缩，减少请求个数，将js放在页面底部</li>
                        <li>写代码时，使用局部变量来保存全局变量，缓存 DOM 节点的访问，减少使用闭包，使用 window 对象属性方法时省略 window，减少对象成员嵌套，避免使用 eval() 和 Function() 构造器，给 setTimeout() 和 setInterval() 传递函数而不是字符串作为参数，使用直接量创建对象和数组，最小化重绘(repaint)和回流(reflow)</li>
                    </ul>
                </p>

                <h2>iOS safari 如何阻止 回弹效果 ？</h2>
                <p>
                    <pre class="hljs javascript"><code class="">$(<span class="hljs-built_in">document</span>).ready(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>)</span>{<br></span>    <span class="hljs-keyword">var</span> stopScrolling = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">event</span>) </span>{<br>        event.preventDefault();<br>    }<br>    <span class="hljs-built_in">document</span>.addEventListener(<span class="hljs-string">'touchstart'</span>, stopScrolling, <span class="hljs-literal">false</span>);<br>    <span class="hljs-built_in">document</span>.addEventListener(<span class="hljs-string">'touchmove'</span>, stopScrolling, <span class="hljs-literal">false</span>);<br>});</code></pre>
                </p>

                <h2>页面编码和被请求的资源编码如果不一致如何处理？</h2>
                <p>
                    后端响应头设置 charset，或者 前端页面&lt;meta&gt;设置 charset
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
