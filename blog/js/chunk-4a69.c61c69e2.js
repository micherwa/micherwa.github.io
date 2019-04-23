(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4a69"],{"0CJ8":function(s,a,_){"use strict";_.r(a);var t={},v=_("psIG"),n=Object(v.a)(t,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"blog-container"},[t("BlogHeader"),s._v(" "),t("BlogContent",[t("div",{attrs:{slot:"content"},slot:"content"},[t("h2",[s._v("前言")]),s._v(" "),t("p",[s._v("\n                最近，朋友 L 问了我这样一个问题：以下数据的运算结果，在 chrome 中为什么是这样的？\n                "),t("pre",{staticClass:"hljs objectivec"},[t("code",{},[t("span",{staticClass:"hljs-number"},[s._v("0.55")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 55.00000000000001")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("0.56")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 56.00000000000001")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("0.57")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 56.99999999999999")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("0.58")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 57.99999999999999")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("0.59")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 59")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("0.60")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v(" "),t("span",{staticClass:"hljs-comment"},[s._v("// 60")])])]),s._v("\n                我虽然告诉了他这是由于浮点数精度问题导致的，但他还是不太明白，为何有的结果输出为整数，有的是以 ...001 的小数结尾，有的却是以 ...999 的小数结尾，跟预想中的有差异。\n            ")]),s._v(" "),t("p",[s._v("\n                这其实牵涉到了计算机原理的知识，真要解释清楚什么是浮点数，恐怕得分几个章节了，想深入了解的同学，可以前往 "),t("a",{attrs:{href:"https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html",target:"_blank"}},[s._v("这篇文章")]),s._v(" 细读。今天我们仅讨论解释浮点数运算结果的成因，以及如何实现我们期望的结果。\n            ")]),s._v(" "),t("h2",[s._v("浮点数与 IEEE 754")]),s._v(" "),t("p",[s._v("\n                首先，计算机中的小数并不都叫浮点数。我们在写程序时，用到小数的地方，用 float 类型表示，可以方便快速地对小数进行运算。\n            ")]),s._v(" "),t("p",[s._v("\n                小数点在数制中代表一种对齐方式，比如说你要比较 1000 和 200 哪个比较大，该怎么做呢？必须把他们右对齐：\n                "),t("pre",{staticClass:"hljs"},[t("code",{},[s._v("1000"),t("br"),s._v(" 200")])]),s._v("\n                发现 1 比 0（前面补零）大，所以 1000 比较大。那么如果要比较 1000 和 200.01 呢？这时候就不是右对齐了，而应该是以小数点对齐：\n                "),t("pre",{staticClass:"hljs"},[t("code",{},[s._v("1000"),t("br"),s._v(" 200.01")])]),s._v("\n                小数点的位置，在进制表示中是至关重要的。位置差一位整体就要差进制倍（十进制就是十倍）。在计算机中也是这样，虽然计算机使用二进制，但在处理非整数时，也需要考虑小数点的位置问题。无法对齐小数点，就无法做加减法比较这样的操作。\n            ")]),s._v(" "),t("p",[s._v("\n                接下来的一个重要概念："),t("strong",[s._v("计算机中小数的表示法，其实有定点和浮点两种。")])]),s._v(" "),t("p",[s._v("\n                定点的意思是，小数点固定在 32 位中的某个位置，前面的是整数，后面的是小数。小数点具体固定在哪里，可以自己在程序中指定。定点数的优点是很简单，大部分运算实现起来和整数一样或者略有变化，但是缺点则是表示范围太小，精度很差，不能充分运用存储单元。\n            ")]),s._v(" "),t("p",[s._v("\n                浮点数就是设计来克服这个缺点的，它相当于一个定点数加上一个阶码，阶码表示将这个定点数的小数点移动若干位。由于可以用阶码移动小数点，因此称为浮点数。\n            ")]),s._v(" "),t("p",[s._v("\n                浮点数在 Javascript 中的存储，与其他语言如 Java 和 Python 不同。所有数字（包括整数和小数）都只有一种类型 — Number。它的实现遵循 "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Double-precision_floating-point_format",target:"_blank"}},[s._v("IEEE 754 标准")]),s._v("，使用64位精度来表示浮点数。它是目前最广泛使用的格式，该格式用 64 位二进制表示像下面这样：\n                "),t("img",{attrs:{src:_("u9/X")}}),s._v("\n                从上图中可以看出，它分为三个部分：\n                "),t("ul",[t("li",[s._v("符号位：1 位用于标志位。用来表示一个数是正数还是负数")]),s._v(" "),t("li",[s._v("指数位：11位用于指数。这允许指数最大到 1024")]),s._v(" "),t("li",[s._v("尾数位：剩下的 52 位代表的是尾数，超出的部分自动进一舍零")])])]),s._v(" "),t("h2",[s._v("浮点数是如何计算出来的？")]),s._v(" "),t("p",[s._v("\n                问：要把小数装入计算机，总共分几步？\n            ")]),t("p"),t("p",[s._v("\n                答：3 步。\n                "),t("ul",[t("li",[s._v("第一步：转换成二进制")]),s._v(" "),t("li",[s._v("第二步：用二进制科学计算法表示")]),s._v(" "),t("li",[s._v("第三步：表示成 IEEE 754 形式")])]),s._v("\n                但第一步和第三步都有可能 "),t("strong",[s._v("丢失精度")]),s._v("。\n            ")]),s._v(" "),t("p",[s._v("\n                十进制是给人看的，而需要计算机进行运算时，必须要转换为它认识的二进制才行。最后，当运算完毕后，再将结果转换回十进制，继续给人看。精度就丢失于这两次转换的过程中。\n            ")]),s._v(" "),t("h4",[s._v("十进制转二进制")]),s._v(" "),t("p",[s._v("\n                来看一个简单的例子\n                "),t("pre",{staticClass:"hljs css"},[t("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[s._v("如何将十进制的 "),t("span",{staticClass:"hljs-selector-class"},[s._v("168.45")]),s._v(" 转换为二进制？")])]),s._v("\n                让我们拆为两个部分来解析：\n            ")]),s._v(" "),t("p",[s._v("\n                1、"),t("strong",[s._v("整数部分")]),s._v("。它的转换方法是，除 2 取余法。即每次将整数部分除以 2，余数为该位权上的数，而商继续除以 2，余数又为上一个位权上的数，这个步骤一直持续下去，直到商为 0 为止，最后读数时候，从最后一个余数读起，一直到最前面的一个余数。\n            ")]),s._v(" "),t("p",[s._v("\n                所以整数部分 168 的转换过程如下：\n                "),t("ul",[t("li",[s._v("第一步，将 168 除以 2，商 84，余数为 0。")]),s._v(" "),t("li",[s._v("第二步，将商 84 除以 2，商 42 余数为 0。")]),s._v(" "),t("li",[s._v("第三步，将商 42 除以 2，商 21 余数为 0。")]),s._v(" "),t("li",[s._v("第四步，将商 21 除以 2，商 10 余数为 1。")]),s._v(" "),t("li",[s._v("第五步，将商 10 除以 2，商 5 余数为 0。")]),s._v(" "),t("li",[s._v("第六步，将商 5 除以 2，商 2 余数为 1。")]),s._v(" "),t("li",[s._v("第七步，将商 2 除以 2，商 1 余数为 0。")]),s._v(" "),t("li",[s._v("第八步，将商 1 除以 2，商 0 余数为 1。")]),s._v(" "),t("li",[s._v("第九步，读数。因为最后一位是经过多次除以 2 才得到的，因此它是最高位。读数的时候，从最后的余数向前读，即 10101000。")])])]),s._v(" "),t("p",[s._v("\n                2、"),t("strong",[s._v("小数部分")]),s._v("。它的转换方法是，乘 2 取整法。即将小数部分乘以 2，然后取整数部分，剩下的小数部分继续乘以 2，然后再取整数部分，剩下的小数部分又乘以 2，一直取到小数部分为 0 为止。如果永远不能为零，就同十进制数的四舍五入一样，按照要求保留多少位小数时，就根据后面一位是 0 还是 1 进行取舍。如果是 0 就舍掉，如果是 1 则入一位，换句话说就是，0 舍 1 入。读数的时候，要从前面的整数开始，读到后面的整数。\n            ")]),s._v(" "),t("p",[s._v("\n                所以小数部分 0.45 （保留到小数点第四位）的转换过程如下：\n                "),t("ul",[t("li",[s._v("第一步，将 0.45 乘以 2，得 0.9，则整数部分为 0，小数部分为 0.9。")]),s._v(" "),t("li",[s._v("第二步, 将小数部分 0.9 乘以 2，得 1.8，则整数部分为 1，小数部分为 0.8。")]),s._v(" "),t("li",[s._v("第三步, 将小数部分 0.8 乘以 2，得 1.6，则整数部分为 1，小数部分为 0.6。")]),s._v(" "),t("li",[s._v("第四步，将小数部分 0.6 乘以 2，得 1.2，则整数部分为 1，小数部分为 0.2。")]),s._v(" "),t("li",[s._v("第五步，将小数部分 0.2 乘以 2，得 0.4，则整数部分为 0，小数部分为 0.4。")]),s._v(" "),t("li",[s._v("第六步，将小数部分 0.4 乘以 2，得 0.8，则整数部分为 0，小数部分为 0.8。")]),s._v(" "),t("li",[s._v("...")])]),s._v("\n                可以看到，从第六步开始，将无限循环第三、四、五步，一直乘下去，最后不可能得到小数部分为 0。因此，这个时候只好学习十进制的方法进行四舍五入了。但是二进制只有 0 和 1 两个，于是就出现 0 舍 1 入的 “口诀” 了，这也是计算机在转换中会产生误差的根本原因。但是由于保留位数很多，精度很高，所以可以忽略不计。\n            ")]),s._v(" "),t("p",[s._v("\n                这样，我们就可以得出十进制数 168.45 转换为二进制的结果，约等于 10101000.0111。\n            ")]),s._v(" "),t("h4",[s._v("二进制转十进制")]),s._v(" "),t("p",[s._v("\n                它的转换方法相对简单些，按权相加法。就是将二进制每位上的数乘以权，然后相加之和即是十进制数。其中的注意点有 2 个：要知道二进制每位的权值，要能求出每位的值。\n            ")]),s._v(" "),t("p",[s._v("\n                所以，将刚才的二进制 10101000.0111 转换为十进制，得到的结果就是 168.4375，再四舍五入一下，即 168.45。\n            ")]),s._v(" "),t("h2",[s._v("解决方案")]),s._v(" "),t("p",[s._v("\n                正如本文开头所提到的，在 JavaScript 中的浮点数运算，会有不少奇葩的问题。在明白了产生问题的根本原因之后，当然是想办法解决啦~\n            ")]),s._v(" "),t("p",[s._v("\n                一个简单粗暴的建议是，使用像 "),t("a",{attrs:{href:"https://github.com/josdejong/mathjs/",target:"_blank"}},[s._v("mathjs")]),s._v("  这样的库。它的 API 也挺简单的：\n                "),t("pre",{staticClass:"hljs lua"},[t("code",{},[s._v("// "),t("span",{staticClass:"hljs-built_in"},[s._v("load")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(".js"),t("br"),s._v("const "),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(" = "),t("span",{staticClass:"hljs-built_in"},[s._v("require")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'mathjs'")]),s._v(")"),t("br"),t("br"),s._v("// functions "),t("span",{staticClass:"hljs-keyword"},[s._v("and")]),s._v(" constants"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(".round("),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(".e, "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(")             // "),t("span",{staticClass:"hljs-number"},[s._v("2.718")]),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v("."),t("span",{staticClass:"hljs-built_in"},[s._v("atan2")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("-3")]),s._v(") / "),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v("."),t("span",{staticClass:"hljs-built_in"},[s._v("pi")]),s._v("       // "),t("span",{staticClass:"hljs-number"},[s._v("0.75")]),t("br"),t("br"),s._v("// expressions"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(".eval("),t("span",{staticClass:"hljs-string"},[s._v("'12 / (2.3 + 0.7)'")]),s._v(")     // "),t("span",{staticClass:"hljs-number"},[s._v("4")]),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(".eval("),t("span",{staticClass:"hljs-string"},[s._v("'12.7 cm to inch'")]),s._v(")      // "),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(" inch"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(".eval("),t("span",{staticClass:"hljs-string"},[s._v("'sin(45 deg) ^ 2'")]),s._v(")      // "),t("span",{staticClass:"hljs-number"},[s._v("0.5")]),t("br"),t("br"),s._v("// chaining"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("math")]),s._v(".chain("),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(")"),t("br"),s._v("    .add("),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(")"),t("br"),s._v("    .multiply("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")"),t("br"),s._v("    .done()  // "),t("span",{staticClass:"hljs-number"},[s._v("14")])])]),s._v("\n                但如果在工程中，没有太多需要运算的情况的话，就不建议这么做了，毕竟引入三方库也是有成本的，无论是学习 API，还是引入库之后，带来打包后的文件体积增积。那么，不引入库该怎么处理浮点数呢？\n            ")]),s._v(" "),t("p",[s._v("\n                还是要从需求出发。例如，本文开头的例子。可以猜想到，需求可能是要把小数转为百分比，通常会保留两位小数。而在一些对数字较为敏感的业务场景中，可能并不希望对数字进行四舍五入，所以 toFixed() 方法就没法用了。\n            ")]),s._v(" "),t("p",[s._v("\n                一种思路是，将小数点像右多移动 n 位，取整后再除以 (10 * n)。比如这样：\n                "),t("pre",{staticClass:"hljs objectivec"},[t("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[t("span",{staticClass:"hljs-number"},[s._v("0.58")]),s._v(" * "),t("span",{staticClass:"hljs-number"},[s._v("10000")]),s._v(" / "),t("span",{staticClass:"hljs-number"},[s._v("100")]),s._v("  "),t("span",{staticClass:"hljs-comment"},[s._v("// => 58")])])]),s._v("\n                ok，搞定~\n            ")]),s._v(" "),t("p",[s._v("\n                特别需要注意的是，在需要四舍五入的场景下，我们会习惯用到内置方法 "),t("code",[s._v("toFixed()")]),s._v("，但它存在一些问题：\n                "),t("pre",{staticClass:"hljs objectivec"},[t("code",{},[t("span",{staticClass:"hljs-number"},[s._v("1.35")]),s._v(".toFixed("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.4 正确")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("1.335")]),s._v(".toFixed("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.33  错误")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("1.3335")]),s._v(".toFixed("),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.333 错误")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("1.33335")]),s._v(".toFixed("),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.3334 正确")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("1.333335")]),s._v(".toFixed("),t("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(")  "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.33333 错误")]),t("br"),t("span",{staticClass:"hljs-number"},[s._v("1.3333335")]),s._v(".toFixed("),t("span",{staticClass:"hljs-number"},[s._v("6")]),s._v(") "),t("span",{staticClass:"hljs-comment"},[s._v("// 1.333333 错误")])])]),s._v("\n                另外，它的返回结果类型是，"),t("code",[s._v("String")]),s._v("。不能直接拿来做运算，因为计算机会认为是 "),t("code",[s._v("字符串拼接")]),s._v("。\n            ")]),s._v(" "),t("h2",[s._v("总结")]),s._v(" "),t("p",[s._v("\n                计算机在做运算的时候，会分三个步骤。其中，将十进制转为二进制，再将二进制转为十进制的时候，都会产生精度丢失。\n            ")]),s._v(" "),t("p",[s._v("\n                使用库，是最简单粗暴的解决方案。但如果使用不频繁，还是要根据需求，手动解决。在使用内置方法 toFixed() 的时候，要特别注意它的返回类型，不要直接拿来做运算。\n            ")])])])],1)},[],!1,null,null,null);n.options.__file="precision-of-float-number-in-javascript.vue";a.default=n.exports},"u9/X":function(s,a,_){s.exports=_.p+"assets/bg-20190509-01.5cfaba8.png"}}]);