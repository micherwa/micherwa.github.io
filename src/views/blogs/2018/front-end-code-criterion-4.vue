<template>
    <div class="blog-container">
        <BlogHeader
            title="前端工程代码规范（四）" subTitle="JS"
            date="2018-05-26" :tags="['前端代码规范']">
        </BlogHeader>

        <BlogContent>
            <div slot="content">
                <blockquote>
                    <p>
                        这篇文章转自我在segmentfault上发表的
                        <a href="https://segmentfault.com/a/1190000015040631" target="_blank">
                            前端工程代码规范系列文章之四
                        </a>
                        ，共4篇。
                    </p>
                </blockquote>

<h2>
    缩进与分号
</h2>
<ul>
    <li>
        使用soft tab（4个空格）。
    </li>
    <li>
        每条语句结尾都需要有分号。
    </li>
</ul>
<pre class="hljs mipsasm"><code><span class="hljs-comment">/* 变量申明 */</span>
var x = <span class="hljs-number">1</span><span class="hljs-comment">;</span>

<span class="hljs-comment">/* 表达式 */</span>
x++<span class="hljs-comment">;</span>

<span class="hljs-comment">/* do-while */</span>
do {
    x++<span class="hljs-comment">;</span>
} while (x < <span class="hljs-number">10</span>)<span class="hljs-comment">;</span></code></pre>
<h2>
    空格
</h2>
<p>
    不需要空格的情况：
</p>
<ul>
    <li>
        对象的属性名后
    </li>
    <li>
        前缀一元运算符后，后缀一元运算符前
    </li>
    <li>
        函数调用括号前
    </li>
    <li>
        无论是函数声明还是函数表达式，'('前不要空格
    </li>
    <li>
        数组的'['后和']'前，对象的'{'后和'}'前，运算符'('后和')'前
    </li>
</ul>
<pre class="hljs actionscript"><code><span class="hljs-comment">// 一元运算符 和 三元运算符</span>
++x;
y++;
z = x ? <span class="hljs-number">1</span> : <span class="hljs-number">2</span>;

<span class="hljs-comment">// 对象的属性</span>
<span class="hljs-keyword">var</span> a = {
    b: <span class="hljs-number">1</span>
};

<span class="hljs-comment">// 数组</span>
<span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>];

<span class="hljs-comment">// 运算符</span>
<span class="hljs-keyword">var</span> a = (<span class="hljs-number">1</span> + <span class="hljs-number">2</span>) * <span class="hljs-number">3</span>;</code></pre>
<p>
    需要空格的情况：
</p>
<ul>
    <li>
        二元运算符前后（加减乘除等）
    </li>
    <li>
        三元运算符'?:'前后
    </li>
    <li>
        代码块'{'前
    </li>
    <li>
        下列关键字前：else, while, catch, finally
    </li>
    <li>
        下列关键字后：if, else, for, while, do, switch, case, try,catch, finally, with, return, typeof
    </li>
    <li>
        单行注释'//'后（若单行注释和代码同行，则'//'前也需要）多行注释'*'后对象的属性值前
    </li>
    <li>
        for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
    </li>
    <li>
        无论是函数声明还是函数表达式，'{'前一定要有空格
    </li>
    <li>
        函数的参数之间
    </li>
</ul>
<pre class="hljs actionscript"><code><span class="hljs-keyword">var</span> doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(a, b, c)</span> </span>{
    <span class="hljs-comment">// do something</span>
};

<span class="hljs-comment">//  '('前无空格</span>
doSomething(item);

<span class="hljs-comment">// 循环</span>
<span class="hljs-keyword">for</span> (i = <span class="hljs-number">0</span>; i < <span class="hljs-number">6</span>; i++) {
    x++;
}</code></pre>
<h2>
    空行
</h2>
<ul>
    <li>
        变量声明后（当变量声明在代码块的最后一行时，则无需空行）
    </li>
    <li>
        注释前（当注释在代码块的第一行时，则无需空行）
    </li>
    <li>
        代码块后（在函数调用、数组、对象中则无需空行）
    </li>
    <li>
        文件最后保留一个空行
    </li>
</ul>
<pre class="hljs actionscript"><code><span class="hljs-comment">// 变量申明后，需要空行</span>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;

<span class="hljs-comment">// 当变量申明位于最后一行时，无需空行</span>
<span class="hljs-keyword">if</span> (x >= <span class="hljs-number">1</span>) {
    <span class="hljs-keyword">var</span> y = x + <span class="hljs-number">1</span>;
}

<span class="hljs-keyword">var</span> a = <span class="hljs-number">2</span>;

<span class="hljs-comment">// 需要在此注释之前空行</span>
a++;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">b</span><span class="hljs-params">()</span> </span>{
    <span class="hljs-comment">// 当注释位于代码块首行时，无需空行</span>
    <span class="hljs-keyword">return</span> a;
}

<span class="hljs-comment">// 代码块之后需要空行</span>
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i < <span class="hljs-number">2</span>; i++) {
    <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }

    <span class="hljs-keyword">continue</span>;
}

<span class="hljs-keyword">var</span> obj = {
    foo: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
    },

    bar: <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-number">2</span>;
    }
};
</code></pre>
<h2>
    换行
</h2>
<p>
    换行的地方，行末必须有','或者运算符。
</p>
<p>
    需要换行的情况：
</p>
<ul>
    <li>
        代码块'{'后和'}'前
    </li>
    <li>
        变量赋值后
    </li>
    <li>
        判断语句中的条件过多过长
    </li>
</ul>
<p>
    不需要换行的情况：
</p>
<ul>
    <li>
        下列关键字后：else, catch, finally
    </li>
    <li>
        代码块'{'前
    </li>
</ul>
<pre class="hljs xquery"><code>var a = {
    b: <span class="hljs-number">1</span>,
    c: <span class="hljs-number">2</span>
};

<span class="hljs-keyword">if</span> (condition) {
    ...
} <span class="hljs-keyword">else</span> {
    ...
}

<span class="hljs-keyword">try</span> {
    ...
} <span class="hljs-keyword">catch</span> (e) {
    ...
} finally {
    ...
}

<span class="hljs-keyword">function</span> test() {
    ...
}

var a,
    foo = <span class="hljs-number">7</span>,
    b, c, bar = <span class="hljs-number">8</span>;

// 判断语句中的条件过多过长
<span class="hljs-keyword">if</span> (boolean1 &&
    boolean2 &&
    boolean3) {
    // do someting
}
</code></pre>
<h2>
    注释
</h2>
<p>
    单行注释
</p>
<ul>
    <li>
        双斜线后，必须跟一个空格；
    </li>
    <li>
        缩进与下一行代码保持一致；
    </li>
    <li>
        不要写在代码行之后。
    </li>
</ul>
<pre class="hljs gcode"><code><span class="hljs-keyword">if</span> <span class="hljs-comment">(condition)</span> {
    <span class="hljs-comment">// 缩进与下一行代码保持一致</span>
    allowed<span class="hljs-comment">()</span>;
}</code></pre>
<p>
    多行注释
</p>
<ul>
    <li>
        最少三行, '*'后跟一个空格，具体参照右边的写法；
    </li>
    <li>
        适合的场景：难于理解的代码段、可能存在错误的代码段、浏览器特殊的HACK代码、业务逻辑强相关的代码
    </li>
</ul>
<pre class="hljs actionscript"><code><span class="hljs-comment">/*
 * one space after '*'
 */</span>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;</code></pre>
<p>
    文档注释
    <br>
        参考jsdoc，多用于注释函数与类。
    </br>
</p>
<pre class="hljs puppet"><code>/**
 * @func
 * @desc 一个带参数的函数
 * @<span class="hljs-keyword">param</span> {string} <span class="hljs-keyword">a</span> - 参数a
 * @<span class="hljs-keyword">param</span> {number} <span class="hljs-keyword">b</span>=1 - 参数b默认值为1
 * @<span class="hljs-keyword">param</span> {string} <span class="hljs-keyword">c</span>=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
 * @<span class="hljs-keyword">param</span> {object} <span class="hljs-keyword">d</span> - 参数d为一个对象
 * @<span class="hljs-keyword">param</span> {string} <span class="hljs-keyword">d</span>.e - 参数d的e属性
 * @<span class="hljs-keyword">param</span> {string} <span class="hljs-keyword">d</span>.f - 参数d的f属性
 * @<span class="hljs-keyword">param</span> {object[]} <span class="hljs-keyword">g</span> - 参数g为一个对象数组
 * @<span class="hljs-keyword">param</span> {string} <span class="hljs-keyword">g</span>.h - 参数g数组中一项的h属性
 * @<span class="hljs-keyword">param</span> {string} <span class="hljs-keyword">g</span>.i - 参数g数组中一项的i属性
 * @<span class="hljs-keyword">param</span> {string} [j] - 参数j是一个可选参数
 */
function foo(a, b, c, d, g, j) {
    ...
}</code></pre>
<h2>
    引号
</h2>
<p>
    最外层统一使用单引号。
</p>
<pre class="hljs ebnf"><code><span class="hljs-attribute">let y</span> = <span class="hljs-string">'foo'</span>;
<span class="hljs-attribute">let z</span> = <span class="hljs-string">'&lt;div id="test"&gt;&lt;/div&gt;'</span>;</code></pre>
<h2>
    变量命名
</h2>
<ul>
    <li>
        标准变量采用驼峰式命名（除了对象的属性外）
    </li>
    <li>
        'ID'在变量名中全大写
    </li>
    <li>
        'Android'在变量名中大写第一个字母
    </li>
    <li>
        'iOS'在变量名中小写第一个，大写后两个字母
    </li>
    <li>
        常量全大写，用下划线连接
    </li>
    <li>
        构造函数，大写第一个字母
    </li>
</ul>
<pre class="hljs actionscript"><code><span class="hljs-keyword">var</span> thisIsMyName;

<span class="hljs-keyword">var</span> goodID;

<span class="hljs-keyword">var</span> AndroidVersion;

<span class="hljs-keyword">var</span> iOSVersion;

<span class="hljs-keyword">var</span> MAX_COUNT = <span class="hljs-number">10</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span><span class="hljs-params">(name)</span> </span>{
    <span class="hljs-keyword">this</span>.name = name;
}</code></pre>
<h2>
    函数
</h2>
<ul>
    <li>
        无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；
    </li>
    <li>
        函数调用括号前不需要空格；
    </li>
    <li>
        立即执行函数外必须包一层括号；
    </li>
    <li>
        不要给inline function命名；
    </li>
    <li>
        参数之间用', '分隔，注意逗号后有一个空格；
    </li>
    <li>
        一个函数内，最多3层缩进，专注于实现一件事。
    </li>
</ul>
<pre class="hljs actionscript"><code><span class="hljs-keyword">var</span> doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(item)</span> </span>{
    <span class="hljs-comment">// do something</span>
};

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">doSomething</span><span class="hljs-params">(item)</span> </span>{
    <span class="hljs-comment">// do something</span>
}

doSomething(item);

<span class="hljs-comment">// 立即执行函数</span>
(<span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
})();

<span class="hljs-comment">// inline function</span>
<span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">()</span> </span>{
    ...
}];

<span class="hljs-comment">// 参数间以', '分割</span>
<span class="hljs-keyword">var</span> doSomething = <span class="hljs-function"><span class="hljs-keyword">function</span><span class="hljs-params">(a, b, c)</span> </span>{
    <span class="hljs-comment">// do something</span>
};</code></pre>
<h2>
    括号
</h2>
<p>
    下列关键字后必须有大括号（即使代码块的内容只有一行）：if, else,for, while, do, switch, try, catch, finally, with。
</p>
<pre class="hljs less"><code><span class="hljs-comment">// not good</span>
<span class="hljs-selector-tag">if</span> (condition)
    <span class="hljs-selector-tag">doSomething</span>();

<span class="hljs-comment">// good</span>
<span class="hljs-selector-tag">if</span> (condition) {
    <span class="hljs-selector-tag">doSomething</span>();
}</code></pre>
<h2>
    null
</h2>
<p>
    适用场景：
</p>
<ul>
    <li>
        初始化一个将来可能被赋值为对象的变量
    </li>
    <li>
        与已经初始化的变量做比较
    </li>
    <li>
        作为一个参数为对象的函数的调用传参
    </li>
    <li>
        作为一个返回对象的函数的返回值
    </li>
</ul>
<p>
    不适用场景：
</p>
<ul>
    <li>
        不要用null来判断函数调用时有无传参
    </li>
    <li>
        不要与未初始化的变量做比较
    </li>
</ul>
<pre class="hljs actionscript"><code><span class="hljs-comment">// not good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span><span class="hljs-params">(a, b)</span> </span>{
    <span class="hljs-keyword">if</span> (b === <span class="hljs-literal">null</span>) {
        <span class="hljs-comment">// not mean b is not supply</span>
        ...
    }
}

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">var</span> a = <span class="hljs-literal">null</span>;

<span class="hljs-keyword">if</span> (a === <span class="hljs-literal">null</span>) {
    ...
}</code></pre>
<h2>
    undefined
</h2>
<p>
    永远不要直接使用undefined进行变量判断；
</p>
<p>
    使用typeof和字符串'undefined'对变量进行判断。
</p>
<pre class="hljs actionscript"><code><span class="hljs-comment">// not good</span>
<span class="hljs-keyword">if</span> (person === <span class="hljs-literal">undefined</span>) {
    ...
}

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> person === <span class="hljs-string">'undefined'</span>) {
    ...
}</code></pre>
<h2>
    jshint
</h2>
<ul>
    <li>
        用'===', '!=='代替'==', '!='；
    </li>
    <li>
        for-in里一定要有hasOwnProperty的判断；
    </li>
    <li>
        不要在内置对象的原型上添加方法，如Array, Date；
    </li>
    <li>
        不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；
    </li>
    <li>
        变量不要先使用后声明；
    </li>
    <li>
        不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；
    </li>
    <li>
        不要在同个作用域下声明同名变量；
    </li>
    <li>
        不要在一些不需要的地方加括号，例：delete(a.b)；
    </li>
    <li>
        不要使用未声明的变量（全局变量需要加到.jshintrc文件的globals属性里面）；
    </li>
    <li>
        不要声明了变量却不使用；
    </li>
    <li>
        debugger不要出现在提交的代码里；
    </li>
    <li>
        数组中不要存在空元素；
    </li>
    <li>
        不要在循环内部声明函数；
    </li>
    <li>
        不要像这样使用构造函数，例：new function () { ... }, new Object
    </li>
</ul>
<pre class="hljs javascript"><code><span class="hljs-comment">// not good</span>
<span class="hljs-keyword">if</span> (a == <span class="hljs-number">1</span>) {
    a++;
}

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">if</span> (a === <span class="hljs-number">1</span>) {
    a++;
}

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">for</span> (key <span class="hljs-keyword">in</span> obj) {
    <span class="hljs-keyword">if</span> (obj.hasOwnProperty(key)) {
        <span class="hljs-comment">// be sure that obj[key] belongs to the object and was not inherited</span>
        <span class="hljs-built_in">console</span>.log(obj[key]);
    }
}

<span class="hljs-comment">// not good</span>
<span class="hljs-built_in">Array</span>.prototype.count = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">value</span>) </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-number">4</span>;
};

<span class="hljs-comment">// not good</span>
<span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-literal">true</span>) {
        <span class="hljs-keyword">var</span> x = <span class="hljs-number">0</span>;
    }

    x += <span class="hljs-number">1</span>;
}

<span class="hljs-comment">// not good</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(x);

    <span class="hljs-keyword">var</span> x = <span class="hljs-number">1</span>;
}

<span class="hljs-comment">// not good</span>
<span class="hljs-keyword">new</span> Person();

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">var</span> person = <span class="hljs-keyword">new</span> Person();

<span class="hljs-comment">// not good</span>
<span class="hljs-keyword">delete</span>(obj.attr);

<span class="hljs-comment">// good</span>
<span class="hljs-keyword">delete</span> obj.attr;

<span class="hljs-comment">// not good</span>
<span class="hljs-keyword">if</span> (a = <span class="hljs-number">10</span>) {
    a++;
}

<span class="hljs-comment">// not good</span>
<span class="hljs-keyword">var</span> a = [<span class="hljs-number">1</span>, , , <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];

<span class="hljs-comment">// not good</span>
<span class="hljs-keyword">var</span> nums = [];

<span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i < <span class="hljs-number">10</span>; i++) {
    (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">i</span>) </span>{
        nums[i] = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">j</span>) </span>{
            <span class="hljs-keyword">return</span> i + j;
        };
    }(i));
}

<span class="hljs-comment">// not good</span>
<span class="hljs-keyword">var</span> singleton = <span class="hljs-keyword">new</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> privateVar;

    <span class="hljs-keyword">this</span>.publicMethod = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        privateVar = <span class="hljs-number">1</span>;
    };

    <span class="hljs-keyword">this</span>.publicMethod2 = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        privateVar = <span class="hljs-number">2</span>;
    };
};</code></pre>
<h2>
    杂项
</h2>
<ul>
    <li>
        不要混用tab和space，或在一处使用多个tab或space；
    </li>
    <li>
        对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名；
    </li>
    <li>
        行尾不要有空白字符；
    </li>
    <li>
        switch的falling through和no default的情况一定要有注释特别说明；
    </li>
    <li>
        不允许有空的代码块。
    </li>
</ul>
<pre class="hljs kotlin"><code>function Person() {
    <span class="hljs-comment">// not good</span>
    <span class="hljs-keyword">var</span> me = <span class="hljs-keyword">this</span>;

    <span class="hljs-comment">// good</span>
    <span class="hljs-keyword">var</span> _this = <span class="hljs-keyword">this</span>;

    <span class="hljs-comment">// good</span>
    <span class="hljs-keyword">var</span> that = <span class="hljs-keyword">this</span>;

    <span class="hljs-comment">// good</span>
    <span class="hljs-keyword">var</span> self = <span class="hljs-keyword">this</span>;
}</code></pre>
<h2>
    目录索引
</h2>
<p>
    <router-link :to="{ name: 'front-end-code-criterion-1' }">
        前端工程代码规范（一）——命名规则与工程约定
    </router-link>
    <br>
    <router-link :to="{ name: 'front-end-code-criterion-2' }">
        前端工程代码规范（二）——HTML
    </router-link>
    <br>
    <router-link :to="{ name: 'front-end-code-criterion-3' }">
        前端工程代码规范（三）——CSS, SCSS
    </router-link>
    <br>
</p>
<p>
    <br/>
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
