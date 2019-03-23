(window.webpackJsonp=window.webpackJsonp||[]).push([["28LV"],{"28LV":function(s,a,t){"use strict";t.r(a);var _={},v=t("psIG"),l=Object(v.a)(_,function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"blog-container"},[t("BlogHeader"),s._v(" "),t("BlogContent",[t("div",{attrs:{slot:"content"},slot:"content"},[t("h2",[s._v("前言")]),s._v(" "),t("p",[s._v("这是前端面试题系列的第 9 篇，你可能错过了前面的篇章，可以在这里找到：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c7b8b4af265da2dcb679d99",target:"_blank"}},[s._v("数组去重(10 种浓缩版)")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c727abde51d457fc564cd77",target:"_blank"}},[s._v("浏览器中的事件机制（涉及主流框架）")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c677041f265da2de25b7707",target:"_blank"}},[s._v("理解函数的柯里化")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c612a60f265da2da15d9986",target:"_blank"}},[s._v("ES6 中箭头函数的用法")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c428ce0f265da612b13dca7",target:"_blank"}},[s._v("this 的原理以及用法")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c36fd0f6fb9a049cd5465cd",target:"_blank"}},[s._v("伪类与伪元素的区别及实战")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c394fece51d45524c7cc712",target:"_blank"}},[s._v("如何实现一个圣杯布局？")])]),s._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c394da4518825253661bd4d",target:"_blank"}},[s._v("今日头条 面试题和思路解析")])])]),s._v(" "),t("p",[s._v("\n                面试的时候，我经常会问候选人深拷贝与浅拷贝的问题。因为它可以考察一个人的很多方面，比如基本功，逻辑能力，编码能力等等。\n            ")]),s._v(" "),t("p",[s._v("\n                另外在实际工作中，也常会遇到它。比如页面展示的数据状态，与需要传给后端的数据包中，有几个字段的值需要按照后端给的接口文档来写。为了不影响展示效果，往往就需要深拷贝一下，再改那几个值，否则界面上就会因为某些值的变化，出现奇怪的现象。至于为什么会这样，下文会讲到。\n            ")]),s._v(" "),t("p",[s._v("\n                马上开始今天的主题，先从赋值开始说起。\n            ")]),s._v(" "),t("h2",[s._v("赋值")]),s._v(" "),t("p",[s._v("\n                Javascript 的原始数据类型有这几种："),t("code",[s._v("Boolean、Null、Undefined、Number、String、Symbol(ES6)")]),s._v("。它们的赋值很简单，且赋值后两个变量互不影响。\n                "),t("pre",{staticClass:"hljs typescript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" test1 = "),t("span",{staticClass:"hljs-string"},[s._v("'chao'")]),s._v(";"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" test2 = test1;"),t("br"),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// test2: chao")]),t("br"),t("br"),s._v("test1 = "),t("span",{staticClass:"hljs-string"},[s._v("'chao_change'")]),s._v(";"),t("br"),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// test2: chao")]),t("br"),t("span",{staticClass:"hljs-comment"},[s._v("// test1: chao_change")])])]),s._v("\n                另外的引用数据类型有："),t("code",[s._v("Object 和 Array")]),s._v("。深拷贝与浅拷贝的出现，就与这两个数据类型有关。\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" obj = {a:"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", b:"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("};"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" obj2 = obj;"),t("br"),s._v("obj2.a = "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(";"),t("br"),s._v("console."),t("span",{staticClass:"hljs-built_in"},[s._v("log")]),s._v("(obj.a); "),t("span",{staticClass:"hljs-comment"},[s._v("// 3")])])]),s._v("\n                依照赋值的思路，对 Object 引用类型进行拷贝，就会出问题。很多情况下，这不是我们想要的。这需要用到浅拷贝了。\n            ")]),s._v(" "),t("h2",[s._v("浅拷贝")]),s._v(" "),t("p",[s._v("\n                什么是浅拷贝？可以这么理解："),t("strong",[s._v("创建一个新的对象，把原有的对象属性值，完整地拷贝过来。其中包括了原始类型的值，还有引用类型的内存地址")]),s._v("。\n            ")]),s._v(" "),t("p",[s._v("\n                让我们用 "),t("code",[s._v("Object.assign")]),s._v(" 来改写一下上面的例子：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" obj = "),t("span",{staticClass:"hljs-comment"},[s._v("{a:1, b:2}")]),s._v(";"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" obj2 = "),t("span",{staticClass:"hljs-keyword"},[s._v("Object")]),s._v(".assign("),t("span",{staticClass:"hljs-comment"},[s._v("{}")]),s._v(", obj);"),t("br"),s._v("obj2.a = "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(";"),t("br"),s._v("console.log(obj.a); "),t("span",{staticClass:"hljs-comment"},[s._v("// 1")]),t("br")])]),s._v("Ok，改变了 obj2 的 a 属性，但 obj 的 a 并没有发生变化，这是我们想要的。\n            ")]),s._v(" "),t("p",[s._v("\n                可是，这样的拷贝还有瑕疵，再改一下例子：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[s._v("const arr = [{a:"),t("span",{staticClass:"hljs-type"},[s._v("1")]),s._v(",b:"),t("span",{staticClass:"hljs-type"},[s._v("2")]),s._v("}, {a:"),t("span",{staticClass:"hljs-type"},[s._v("3")]),s._v(",b:"),t("span",{staticClass:"hljs-type"},[s._v("4")]),s._v("}];"),t("br"),s._v("const "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v(" = [].concat(arr);"),t("br"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v(".length = "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("; "),t("span",{staticClass:"hljs-comment"},[s._v("// 为了方便区分，只保留新数组的第一个元素")]),t("br"),s._v("console.log("),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// [{a:1,b:2}]")]),t("br"),s._v("console.log(arr); "),t("span",{staticClass:"hljs-comment"},[s._v("// [{a:1,b:2},{a:3,b:4}]")]),t("br"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("].a = "),t("span",{staticClass:"hljs-number"},[s._v("123")]),s._v("; "),t("span",{staticClass:"hljs-comment"},[s._v("// 修改 newArr 中第一个元素的a")]),t("br"),s._v("console.log(arr["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]); "),t("span",{staticClass:"hljs-comment"},[s._v("// {a: 123, b: 2}，竟然把 arr 的第一个元素的 a 也改了")])])]),s._v("\n                这不是我想要的...\n            ")]),s._v(" "),t("p",[s._v("\n                其实，对象的 "),t("code",[s._v("Object.assign()")]),s._v("，数组的 "),t("code",[s._v("Array.prototype.slice()")]),s._v(" 和 "),t("code",[s._v("Array.prototype.concat()")]),s._v("，还有 ES6 的 "),t("code",[s._v("扩展运算符")]),s._v("，都属于 "),t("strong",[s._v("浅拷贝")]),s._v("。在实际工作中，处理数据的组装时，要格外注意。\n            ")]),s._v(" "),t("p",[s._v("\n                所以，我将浅拷贝这样定义："),t("code",[s._v("只拷贝第一层的原始类型值，和第一层的引用类型地址")]),s._v("。\n            ")]),s._v(" "),t("h2",[s._v("深拷贝")]),s._v(" "),t("p",[s._v("\n                我们当然希望多层级的对象拷贝，也能实现互不影响的效果。所以，深拷贝的概念也就油然而生了。我将深拷贝定义为："),t("code",[s._v("拷贝所有的属性值，以及属性地址指向的值的内存空间")]),s._v("。\n            ")]),s._v(" "),t("p",[s._v("\n                也就是说，"),t("strong",[s._v("当遇到对象时，就再新开一个对象，然后将第二层源对象的属性值完整拷贝到新开的这个对象中")]),s._v("。\n            ")]),s._v(" "),t("p",[s._v("\n                按照浅拷贝的思路，很容易就想到了递归调用。所以，就自己封装了个深拷贝的方法：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("deepClone")])]),s._v("(obj){"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(!obj && typeof obj !== "),t("span",{staticClass:"hljs-string"},[s._v("'object'")]),s._v("){"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(";"),t("br"),s._v("    }"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Obj")]),s._v("= toString.call(obj) === "),t("span",{staticClass:"hljs-string"},[s._v("'[object Array]'")]),s._v(" ? [] : "),t("span",{staticClass:"hljs-type"}),s._v("{};"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" key "),t("span",{staticClass:"hljs-keyword"},[s._v("in")]),s._v(" obj) {"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (obj[key] && typeof obj[key] === "),t("span",{staticClass:"hljs-string"},[s._v("'object'")]),s._v(") {"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Obj")]),s._v("[key] = deepClone(obj[key]);"),t("br"),s._v("        } "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Obj")]),s._v("[key] = obj[key];"),t("br"),s._v("        }"),t("br"),s._v("    }"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Obj")]),s._v(";"),t("br"),s._v("}")])])]),s._v(" "),t("p",[s._v("\n                再试试看：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[s._v("let arr = [{a:"),t("span",{staticClass:"hljs-type"},[s._v("1")]),s._v(",b:"),t("span",{staticClass:"hljs-type"},[s._v("2")]),s._v("}, {a:"),t("span",{staticClass:"hljs-type"},[s._v("3")]),s._v(",b:"),t("span",{staticClass:"hljs-type"},[s._v("4")]),s._v("}];"),t("br"),s._v("let "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v(" = deepClone(arr);"),t("br"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v(".length = "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("; "),t("span",{staticClass:"hljs-comment"},[s._v("// 为了方便区分，只保留新数组的第一个元素")]),t("br"),s._v("console.log("),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v("// [{a:1, b:2}]")]),t("br"),s._v("console.log(arr); "),t("span",{staticClass:"hljs-comment"},[s._v("// [{a:1, b:2}, {a:3, b:4}]")]),t("br"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),t("span",{staticClass:"hljs-type"},[s._v("Arr")]),s._v("["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("].a = "),t("span",{staticClass:"hljs-number"},[s._v("123")]),s._v("; "),t("span",{staticClass:"hljs-comment"},[s._v("// 修改 newArr 中第一个元素的 a")]),t("br"),s._v("console.log(arr["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]); "),t("span",{staticClass:"hljs-comment"},[s._v("// {a:1, b:2}")])])]),s._v("\n                ok，这下搞定了。\n            ")]),s._v(" "),t("p",[s._v("\n                不过，似乎会有引用丢失的的问题。比如这样：\n                "),t("pre",{staticClass:"hljs swift"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" b = {};"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" a = {a1: b, a2: b};"),t("br"),t("br"),s._v("a.a1 === a.a2 "),t("span",{staticClass:"hljs-comment"},[s._v("// true")]),t("br"),t("br"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("c")]),s._v(" = clone(a);"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("c")]),s._v(".a1 === "),t("span",{staticClass:"hljs-built_in"},[s._v("c")]),s._v(".a2 "),t("span",{staticClass:"hljs-comment"},[s._v("// false")])])])]),s._v(" "),t("h2",[s._v("一行代码的深拷贝")]),s._v(" "),t("p",[s._v("\n                当然，还有最简单粗暴的深拷贝方法，就是利用 "),t("code",[s._v("JSON")]),s._v(" 了。像这样：\n                "),t("pre",{staticClass:"hljs javascript"},[t("code",{},[t("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" newArr2 = "),t("span",{staticClass:"hljs-built_in"},[s._v("JSON")]),s._v(".parse("),t("span",{staticClass:"hljs-built_in"},[s._v("JSON")]),s._v(".stringify(arr));"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(arr["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]); "),t("span",{staticClass:"hljs-comment"},[s._v("// {a:1, b:2}")]),t("br"),s._v("newArr2["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("].a = "),t("span",{staticClass:"hljs-number"},[s._v("123")]),s._v(";"),t("br"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(arr["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]); "),t("span",{staticClass:"hljs-comment"},[s._v("// {a:1, b:2}")])])]),s._v("\n                但是，JSON 内部也是使用了递归的方式，所以会有递归爆栈的风险。\n                "),t("pre",{staticClass:"hljs sql"},[t("code",{staticStyle:{"word-break":"break-word","white-space":"initial"}},[t("span",{staticClass:"hljs-comment"},[s._v("// Maximum call stack size exceeded")])])])]),s._v(" "),t("h2",[s._v("深拷贝的终极方案")]),s._v(" "),t("p",[s._v("\n                有位大佬给出了深拷贝的终极方案，由于篇幅问题，就只贴一下方法，不再展开了。有兴趣的同学，可以前往 "),t("a",{attrs:{href:"https://juejin.im/post/5bc1ae9be51d450e8b140b0c",target:"_blank"}},[s._v("这里")]),s._v("。\n                "),t("pre",{staticClass:"hljs kotlin"},[t("code",{},[s._v("function cloneForce(x) {"),t("br"),s._v("    "),t("span",{staticClass:"hljs-comment"},[s._v("// 用来去重")]),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" uniqueList = [];"),t("br"),t("br"),s._v("    let root = {};"),t("br"),t("br"),s._v("    "),t("span",{staticClass:"hljs-comment"},[s._v("// 循环数组")]),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" loopList = ["),t("br"),s._v("        {"),t("br"),s._v("            parent: root,"),t("br"),s._v("            key: undefined,"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(": x,"),t("br"),s._v("        }"),t("br"),s._v("    ];"),t("br"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("while")]),s._v("(loopList.length) {"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 深度优先")]),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" node = loopList.pop();"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" parent = node.parent;"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" key = node.key;"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(" = node."),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(";"),t("br"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素")]),t("br"),s._v("        let res = parent;"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (typeof key !== "),t("span",{staticClass:"hljs-string"},[s._v("'undefined'")]),s._v(") {"),t("br"),s._v("            res = parent[key] = {};"),t("br"),s._v("        }"),t("br"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 数据已经存在")]),t("br"),s._v("        let uniqueData = uniqueList.find((item) => item.source === "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(" );"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (uniqueData) {"),t("br"),s._v("            parent[key] = uniqueData.target;"),t("br"),s._v("            "),t("span",{staticClass:"hljs-comment"},[s._v("// 中断本次循环")]),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("continue")]),s._v(";"),t("br"),s._v("        }"),t("br"),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 数据不存在")]),t("br"),s._v("        "),t("span",{staticClass:"hljs-comment"},[s._v("// 保存源数据，在拷贝数据中对应的引用")]),t("br"),s._v("        uniqueList.push({"),t("br"),s._v("            source: "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(","),t("br"),s._v("            target: res,"),t("br"),s._v("        });"),t("br"),t("br"),s._v("        "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("(let k "),t("span",{staticClass:"hljs-keyword"},[s._v("in")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(") {"),t("br"),s._v("            "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(".hasOwnProperty(k)) {"),t("br"),s._v("                "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (typeof "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v("[k] === "),t("span",{staticClass:"hljs-string"},[s._v("'object'")]),s._v(") {"),t("br"),s._v("                    "),t("span",{staticClass:"hljs-comment"},[s._v("// 下一次循环")]),t("br"),s._v("                    loopList.push({"),t("br"),s._v("                        parent: res,"),t("br"),s._v("                        key: k,"),t("br"),s._v("                        "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v(": "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v("[k],"),t("br"),s._v("                    });"),t("br"),s._v("                } "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {"),t("br"),s._v("                    res[k] = "),t("span",{staticClass:"hljs-keyword"},[s._v("data")]),s._v("[k];"),t("br"),s._v("                }"),t("br"),s._v("            }"),t("br"),s._v("        }"),t("br"),s._v("    }"),t("br"),t("br"),s._v("    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" root;"),t("br"),s._v("}")])])]),s._v(" "),t("h2",[s._v("总结")]),s._v(" "),t("p",[s._v("\n                所谓深拷贝与浅拷贝，指的是 "),t("code",[s._v("Object")]),s._v(" 和 "),t("code",[s._v("Array")]),s._v(" 这样的引用数据类型。\n            ")]),s._v(" "),t("p",[t("code",[s._v("浅拷贝")]),s._v("，只拷贝第一层的原始类型值，和第一层的引用类型地址。\n            ")]),s._v(" "),t("p",[t("code",[s._v("深拷贝")]),s._v("，拷贝所有的属性值，以及属性地址指向的值的内存空间。通过递归调用，或者 JSON 来做深拷贝，都会有一些问题。而 cloneForce 方法倒是目前看来最完美的解决方案了。\n            ")]),s._v(" "),t("p",[s._v("\n                在日常的工作中，我们要特别注意，对象的 "),t("code",[s._v("Object.assign()")]),s._v("，数组的 "),t("code",[s._v("Array.prototype.slice()")]),s._v(" 和 "),t("code",[s._v("Array.prototype.concat()")]),s._v("，还有 ES6 的 "),t("code",[s._v("扩展运算符")]),s._v("，都属于浅拷贝。当需要做数据组装时，一定要用深拷贝，以免影响界面展示效果。\n            ")])])])],1)},[],!1,null,null,null);l.options.__file="copy-of-shallow-and-deep.vue";a.default=l.exports}}]);