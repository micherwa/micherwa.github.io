(window.webpackJsonp=window.webpackJsonp||[]).push([["y3ix"],{y3ix:function(s,t,a){"use strict";a.r(t);var n={created:function(){}},l=a("psIG"),e=Object(l.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"blog-container"},[a("BlogHeader",{attrs:{title:"POST提交数据的4种常见方式",subTitle:"",date:"2017-03-18",tags:["Http"]}}),s._v(" "),a("BlogContent",{attrs:{useCatalog:!0}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("blockquote",[a("p",[a("a",{attrs:{href:"http://www.ietf.org/rfc/rfc2616.txt",target:"_blank"}},[s._v("HTTP/1.1")]),s._v("\n                    协议规定的 HTTP 请求方法有 OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT 这几种。其中 POST 一般用来向服务端提交数据，本文主要讨论 POST 提交数据的几种方式。\n                ")])]),s._v(" "),a("h2",[s._v("POST在HTTP中扮演的角色")]),s._v(" "),a("p",[s._v("\n                先来看HTTP请求的定义。\n            ")]),s._v(" "),a("p",[s._v("\n                HTTP 协议是以 ASCII 码传输，建立在 TCP/IP 协议之上的应用层规范。规范把 HTTP 请求分为三个部分：状态行、请求头、消息主体。类似于下面这样：\n                "),a("pre",{staticClass:"hljs oxygene"},[a("code",{},[s._v("<"),a("span",{staticClass:"hljs-function"},[s._v("method> <request-URL> <version>"),a("span",{staticClass:"line",attrs:{"data-start":"2","data-end":"2","data-id":"8255556"}}),a("br"),a("span",{staticClass:"hljs-function"},[s._v("<headers")]),s._v(">")]),a("br"),a("br"),a("span",{staticClass:"hljs-function"}),a("br"),a("span",{staticClass:"hljs-function"},[s._v("<entity-body>")])])]),s._v("\n                协议规定 POST 提交的数据必须放在消息主体（entity-body）中，但协议并没有规定数据必须使用什么编码方式。实际上，开发者完全可以自己决定消息主体的格式，只要最后发送的 HTTP 请求满足上面的格式就可以。\n            ")]),s._v(" "),a("p",[s._v("\n                但是，数据发送出去，还要服务端解析成功才有意义。一般服务端语言如 php、python 等，以及它们的 framework，都内置了自动解析常见数据格式的功能。服务端通常是根据请求头（headers）中的 Content-Type 字段来获知请求中的消息主体是用何种方式编码，再对主体进行解析。所以说到 POST 提交数据方案，包含了 Content-Type 和消息主体编码方式两部分。下面就正式开始介绍它们。\n            ")]),s._v(" "),a("h2",[s._v("application/x-www-form-urlencoded")]),s._v(" "),a("p",[s._v("\n                最常见的 POST 提交数据的方式。浏览器的原生 <form> 表单，如果不设置 "),a("code",[s._v("enctype")]),s._v(" 属性，那么最终就会以 application/x-www-form-urlencoded 方式提交数据。大概像下面这样：\n                "),a("pre",{staticClass:"hljs http"},[a("code",{},[a("span",{staticClass:"hljs-keyword"},[s._v("POST")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("http://www.example.com")]),s._v(" HTTP/1.1"),a("br"),a("span",{staticClass:"hljs-attribute"},[s._v("Content-Type")]),s._v(": application/x-www-form-urlencoded;charset=utf-8"),a("br"),a("br"),a("span",{staticClass:"maxima"},[a("span",{staticClass:"hljs-built_in"},[s._v("title")]),s._v("=test&"),a("span",{staticClass:"hljs-built_in"},[s._v("content")]),s._v("=content1&"),a("span",{staticClass:"hljs-built_in"},[s._v("context")]),s._v("=content2")])])]),s._v("\n                首先，Content-Type 被指定为 application/x-www-form-urlencoded；其次，提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。例如 PHP 中，$_POST['title'] 可以获取到 title 的值，$_POST['sub'] 可以得到 sub 数组。\n            ")]),s._v(" "),a("h2",[s._v("multipart/form-data")]),s._v(" "),a("p",[s._v("\n                常用于表单中的上传文件。这时，必须让 <form> 表单的 "),a("code",[s._v("enctype")]),s._v(" 等于 multipart/form-data。直接来看一个请求示例：\n                "),a("pre",{staticClass:"hljs stata"},[a("code",{},[a("span",{staticClass:"hljs-keyword"},[s._v("POST")]),s._v(" http:"),a("span",{staticClass:"hljs-comment"},[s._v("//www.example.com HTTP/1.1")]),a("br"),s._v("Content-"),a("span",{staticClass:"hljs-keyword"},[s._v("Type")]),s._v(":multipart/"),a("span",{staticClass:"hljs-keyword"},[s._v("form")]),s._v("-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA"),a("br"),a("br"),s._v("------WebKitFormBoundaryrGKCBY7qhFd3TrwA"),a("br"),s._v("Content-Disposition: "),a("span",{staticClass:"hljs-keyword"},[s._v("form")]),s._v("-data; name="),a("span",{staticClass:"hljs-string"},[s._v('"file"')]),s._v("; filename="),a("span",{staticClass:"hljs-string"},[s._v('"chrome.png"')]),a("br"),s._v("Content-"),a("span",{staticClass:"hljs-keyword"},[s._v("Type")]),s._v(": image/png"),a("br"),a("br"),a("br"),s._v("------WebKitFormBoundaryrGKCBY7qhFd3TrwA--")])]),s._v("\n                首先，生成了一个 boundary 用于分割不同的字段，为了避免与正文内容重复，boundary 很长很复杂。\n            ")]),s._v(" "),a("p",[s._v("\n                然后 Content-Type 里指明了数据是以 multipart/form-data 来编码，本次请求的 boundary 是什么内容。\n            ")]),s._v(" "),a("p",[s._v("\n                消息主体里按照字段个数又分为多个结构类似的部分，每部分都是以 --boundary 开始，紧接着是内容描述信息，然后是回车，最后是字段具体内容（文本或二进制）。如果传输的是文件，还要包含文件名和文件类型信息。消息主体最后以 --boundary-- 标示结束。\n            ")]),s._v(" "),a("h2",[s._v("application/json")]),s._v(" "),a("p",[s._v("\n                现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 JSON.stringify，服务端语言也都有处理 JSON 的函数，使用 JSON 不会遇上什么麻烦。JSON 格式还能支持比键值对复杂得多的结构化数据。\n            ")]),s._v(" "),a("p",[s._v("\n                在AngularJS中封装的Ajax请求，默认就是提交 JSON 字符串。发送的请求，比如像下面这样：\n                "),a("pre",{staticClass:"hljs groovy"},[a("code",{},[s._v("POST "),a("span",{staticClass:"hljs-string"},[s._v("http:")]),a("span",{staticClass:"hljs-comment"},[s._v("//www.example.com HTTP/1.1 ")]),a("br"),s._v("Content-"),a("span",{staticClass:"hljs-string"},[s._v("Type:")]),s._v(" application/json;charset=utf"),a("span",{staticClass:"hljs-number"},[s._v("-8")]),a("br"),a("br"),s._v("{"),a("span",{staticClass:"hljs-string"},[s._v('"title"')]),s._v(":"),a("span",{staticClass:"hljs-string"},[s._v('"test"')]),s._v(","),a("span",{staticClass:"hljs-string"},[s._v('"sub"')]),s._v(":["),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(","),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(","),a("span",{staticClass:"hljs-number"},[s._v("3")]),s._v("]}")])]),s._v("\n                这种方案，可以方便的提交复杂的结构化数据。各大抓包工具如 Chrome 自带的开发者工具、Firebug、Fiddler，都会以树形结构展示 JSON 数据，非常友好。\n            ")]),s._v(" "),a("p",[s._v("\n                但也有些服务端语言还没有支持这种方式，例如 php 就无法通过 $_POST 对象从上面的请求中获得内容。这时候，需要自己动手处理下：在请求头中 Content-Type 为 application/json 时，从 php://input 里获得原始输入流，再 json_decode 成对象。\n            ")]),s._v(" "),a("p",[s._v("\n                当然 AngularJS 也可以配置为使用 x-www-form-urlencoded 方式提交数据。\n            ")]),s._v(" "),a("h2",[s._v("text/xml")]),s._v(" "),a("p",[s._v("\n                它是一种使用 HTTP 作为传输协议，XML 作为编码方式的远程调用规范。典型的 XML-RPC 请求是这样的：\n                "),a("pre",{staticClass:"hljs xml"},[a("code",{},[s._v("POST http://www.example.com HTTP/1.1"),a("br"),s._v("Content-Type: text/xml"),a("br"),a("br"),a("span",{staticClass:"php"},[a("span",{staticClass:"hljs-meta"},[s._v("<?")]),s._v("xml version="),a("span",{staticClass:"hljs-string"},[s._v('"1.0"')]),a("span",{staticClass:"hljs-meta"},[s._v("?>")])]),a("br"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("methodCall")]),s._v(">")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("methodName")]),s._v(">")]),s._v("examples.getStateName"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("methodName")]),s._v(">")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("params")]),s._v(">")]),a("br"),s._v("        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("param")]),s._v(">")]),a("br"),s._v("            "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("value")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("i4")]),s._v(">")]),s._v("41"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("i4")]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("value")]),s._v(">")]),a("br"),s._v("        "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("param")]),s._v(">")]),a("br"),s._v("    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("params")]),s._v(">")]),a("br"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("methodCall")]),s._v(">")])])]),s._v("\n                XML-RPC 协议简单、功能够用，各种语言的实现都有。它的使用也很广泛，如 WordPress 的 XML-RPC Api，搜索引擎的 ping 服务等等。JavaScript 中，也有现成的库支持以这种方式进行数据交互，能很好的支持已有的 XML-RPC 服务。不过，我个人觉得 XML 结构还是过于臃肿，一般场景用 JSON 会更灵活方便。\n            ")]),s._v(" "),a("h2",[s._v("参考文献")]),s._v(" "),a("p",[a("ul",[a("li",[a("a",{attrs:{href:"https://imququ.com/post/four-ways-to-post-data-in-http.html",target:"_blank"}},[s._v("四种常见的 POST 提交数据方式")])])])])])])],1)},[],!1,null,null,null);e.options.__file="four-methods-in-post.vue";t.default=e.exports}}]);