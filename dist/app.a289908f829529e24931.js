webpackJsonp([0],{146:function(A,t,n){"use strict";function e(A){return function(){var t=A.apply(this,arguments);return new Promise(function(A,n){function e(r,i){try{var a=t[r](i),o=a.value}catch(A){return void n(A)}if(!a.done)return Promise.resolve(o).then(function(A){e("next",A)},function(A){e("throw",A)});A(o)}return e("next")})}}function r(A){n(352)}function i(A){return function(){var t=A.apply(this,arguments);return new Promise(function(A,n){function e(r,i){try{var a=t[r](i),o=a.value}catch(A){return void n(A)}if(!a.done)return Promise.resolve(o).then(function(A){e("next",A)},function(A){e("throw",A)});A(o)}return e("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var a={};n.d(a,"users",function(){return D});var o={};n.d(o,"getUsers",function(){return h});var s=(n(147),n(129)),c={created:function(){}},u=function(){var A=this,t=A.$createElement,n=A._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},g=[],f={render:u,staticRenderFns:g},l=f,Q=n(131),p=Q(c,l,!1,null,null,null),E=p.exports,R=n(351),C=(n(353),n(140)),m=Object.assign||function(A){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(A[e]=n[e])}return A},S={data:function(){return{}},created:function(){this.load()},computed:m({},Object(C.b)(["users"])),methods:{load:function(){var A=this;return e(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.$store.dispatch("getUsers");case 2:case 3:case"end":return t.stop()}},t,A)}))()},tap:function(A){}}},d=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{staticClass:"home"},[e("img",{attrs:{src:n(392)}}),A._v(" "),e("h1",[A._v("hello")]),A._v(" "),e("div",{staticClass:"flex-wrapper"},[e("div",{staticClass:"flex-item",on:{click:A.tap}},[A._v("\n            flex-item1\n            "),e("img",{attrs:{src:n(393)}})]),A._v(" "),e("div",{staticClass:"flex-item",on:{click:A.tap}},[A._v("\n            flex-item2\n            "),e("img",{attrs:{src:n(394)}})]),A._v(" "),e("div",{staticClass:"flex-item",on:{click:A.tap}},[A._v("\n            flex-item3\n            "),e("img",{attrs:{src:n(395)}})])]),A._v(" "),e("img",{staticClass:"img-responsive",attrs:{src:n(396)}})])},v=[],w={render:d,staticRenderFns:v},x=w,B=n(131),y=r,I=B(S,x,!1,y,null,null),M=I.exports,U=[{path:"/home/myHome",component:M,alias:"/"}],b=[].concat(function(A){if(Array.isArray(A)){for(var t=0,n=Array(A.length);t<A.length;t++)n[t]=A[t];return n}return Array.from(A)}(U)),k=b,D=function(A){return A.users},J=n(397),V=n.n(J),H={userList:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return V.a.get("/mock/userList",{params:A})}},h=function(){var A=i(regeneratorRuntime.mark(function A(t,n){var e,r,i=t.commit;return regeneratorRuntime.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,H.userList(n);case 2:return e=A.sent,r=e.data||{},i("GET_USERS",r),A.abrupt("return",r);case 6:case"end":return A.stop()}},A,this)}));return function(t,n){return A.apply(this,arguments)}}(),F={users:[]},W=function(A,t,n){return t in A?Object.defineProperty(A,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[t]=n,A}({},"GET_USERS",function(A,t){A.users=t.result?t.result:[]}),j={state:F,mutations:W,actions:o,getters:a};n(416);s.a.use(C.a);var O=new C.a.Store({modules:{home:j},strict:!1,plugins:[]});s.a.use(R.a);var Y=new R.a({routes:k,mode:"history"});new s.a({router:Y,store:O,render:function(A){return A(E)}}).$mount("#app")},352:function(A,t){},392:function(A,t,n){A.exports=n.p+"assets/logo.png?82b9c7a"},393:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAYAAACYq/ofAAAAAXNSR0IArs4c6QAAAqVJREFUaAXtlj1oU1EUx/seMSloltAhLqEiFMQiHaSDHQQRnByr2OASEpMUFAeLg4qTQ0GXDuZLJIXaYnBwlSp+gQ5aBKmriKPWGIqDkuTF3yk+CfiS3PdanM6Fw7n3vHP+557/ufcmQ0M6lAFlQBlQBpQBZUAZUAaUAWVAGVAGtsWAZRpdq9X21Ov166FQaDGdTq+bxgXxKxQKp2zbjmez2QXTeNvUsdFoTHU6nUvNZnOVRKOmcX79isXiSWJWyHWzVCrtMo03LiSTyawC+giJW5b1qlKpHDJNYupHEafxfYDIvq7RkaZprHEhbN4Jh8PTAD+Grb2tVutluVw+bppokB9FnAd3GQmTaz6Xy80Piun+bnxH3CBpt+M4VdYzJOyg70Sj0cvJZPK76+NH09l9kFIg5oTgIXN04pYfDPH1XYgEwZpFQVfQV1lGECnibiQSuZ1KpT4yHzjo5gSEXMDxDDjD6G/IbD6frw0M9nAIVIiLw2YOsplnbGREbMIo4wP6Ba/OGt++Yt7AZmMbQcdZTzI/yny/G4P+gm2STnwWW5ARChLkxrCZHCJFfGIjT9FyWcexjbfbbddtS2P7u5Y5/nUMVeQY6wn0DeQsEmgE7oi89WS8j/zit2WKV21N7g+bOvyH8TG+SRfkOZWNP2S+gV6nW8/xf8/c4Y4coOg3fNuNnaZky+LvdwQqhCM1xrF5S/IoyWdJLpfVc1DwVis4+z1zQcAMePco7CekHOEH950nWB+j8fPbjUHSqhRB4pV+RXTH9JuDsQxWEcxhXrClfr69vgUqBLAfJH4di8XO9QL2a08kEhfBfEIxm0jP7vnF3TF/OVru8doxUA+gbb1aHnj/mGBZ/troUAaUAWVAGVAGlAFlQBlQBpQBZUAZUAb+EwO/AVKoC02XQRiQAAAAAElFTkSuQmCCiVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAYAAACYq/ofAAAAAXNSR0IArs4c6QAAAqVJREFUaAXtlj1oU1EUx/seMSloltAhLqEiFMQiHaSDHQQRnByr2OASEpMUFAeLg4qTQ0GXDuZLJIXaYnBwlSp+gQ5aBKmriKPWGIqDkuTF3yk+CfiS3PdanM6Fw7n3vHP+557/ufcmQ0M6lAFlQBlQBpQBZUAZUAaUAWVAGVAGtsWAZRpdq9X21Ov166FQaDGdTq+bxgXxKxQKp2zbjmez2QXTeNvUsdFoTHU6nUvNZnOVRKOmcX79isXiSWJWyHWzVCrtMo03LiSTyawC+giJW5b1qlKpHDJNYupHEafxfYDIvq7RkaZprHEhbN4Jh8PTAD+Grb2tVutluVw+bppokB9FnAd3GQmTaz6Xy80Piun+bnxH3CBpt+M4VdYzJOyg70Sj0cvJZPK76+NH09l9kFIg5oTgIXN04pYfDPH1XYgEwZpFQVfQV1lGECnibiQSuZ1KpT4yHzjo5gSEXMDxDDjD6G/IbD6frw0M9nAIVIiLw2YOsplnbGREbMIo4wP6Ba/OGt++Yt7AZmMbQcdZTzI/yny/G4P+gm2STnwWW5ARChLkxrCZHCJFfGIjT9FyWcexjbfbbddtS2P7u5Y5/nUMVeQY6wn0DeQsEmgE7oi89WS8j/zit2WKV21N7g+bOvyH8TG+SRfkOZWNP2S+gV6nW8/xf8/c4Y4coOg3fNuNnaZky+LvdwQqhCM1xrF5S/IoyWdJLpfVc1DwVis4+z1zQcAMePco7CekHOEH950nWB+j8fPbjUHSqhRB4pV+RXTH9JuDsQxWEcxhXrClfr69vgUqBLAfJH4di8XO9QL2a08kEhfBfEIxm0jP7vnF3TF/OVru8doxUA+gbb1aHnj/mGBZ/troUAaUAWVAGVAGlAFlQBlQBpQBZUAZUAb+EwO/AVKoC02XQRiQAAAAAElFTkSuQmCC"},394:function(A,t){A.exports="data:image/png;base64,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"},395:function(A,t){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAxCAYAAACYq/ofAAAAAXNSR0IArs4c6QAAAkRJREFUaAXtmc8rrUEYx59zL1fXDRf5cRc6c1CXOCysrlK2ysZGUlJSSkpZWCs7e/kDlKLspGSHJEkXiYXYyULYUH4+vm+OZuZMFvSe14zm1HTmzDtnnu/n+8yZHx0i//IOeAe8A94B74B3IDMOMHEsMyNHOCpTfIJJzDA1ZUcYNtxQABgFCL8UsQiY3HAjvD3at7cffeQJV8hvcRvR+TJTslC2OVRDVsZkVoLsiF2m2j8OIUipTIkhwDwpQMdM1VWyh0M1QHQjG3cSRpwBsNEhBCkVEG0o1wrMFWBaZA+HakxVzcjMpYSJ3zBVtjuEIKVCeBIgpwrMPTLTI3s4VGP6mwDIkQKDxUAMO4QgpUJ4Ocp/BSbYPMdlD4dqmGYFEL+qw4gpprGQN+cITGH69xMgC2kws0x1PyIIH24IptYsgEynwSwxNfwKN1IEowXHfaxek2kwGzgF5Lw3/CfPy3q4z0lddGw+Rke3epvFn7Ac5yETa3o24iMWSzalYerkYxle1yEc21Nell+B38HrBSx4TwyZuBa3IAu/UTYViOCoP2ixZFNacFOE6C0dQgyYPS1uwUZXhExs6xCJfoslm9KYaooBoZ6vHgHUZ/a0uAWrUwkgdpRMAEL0WizZlIYLVSkA9nQIx+4gWE7LALCvQDyg3m3iWtyCqRPcOQ50CNFlsWRTWgriUIEIrrSdZs/wW0I+NOZcQ+JFSuYD0feuGJ3MhS87ghFT56gVZKUjgnCZDfEl/lbIrEV+dO+Ad8A74B2wzIFnH84zeKGYlLwAAAAASUVORK5CYIKJUE5HDQoaCgAAAA1JSERSAAAAMgAAADEIBgAAAJir+h8AAAABc1JHQgCuzhzpAAACRElEQVRoBe2ZzyutQRjHn3MvV9cNF/lxFzpzUJc4LKyuUrbKxkZSUlJKSllYKzt7+QOUouykZIckSReJhdjJQthQfj6+b45m5kwW9J7XjObUdObMO2ee7+f7zJkfHSL/8g54B7wD3gHvgHcgMw4wcSwzI0c4KlN8gknMMDVlRxg23FAAGAUIvxSxCJjccCO8Pdq3tx995AlXyG9xG9H5MlOyULY5VENWxmRWguyIXabaPw4hSKlMiSHAPClAx0zVVbKHQzVAdCMbdxJGnAGw0SEEKRUQbSjXCswVYFpkD4dqTFXNyMylhInfMFW2O4QgpUJ4EiCnCsw9MtMjezhUY/qbAMiRAoPFQAw7hCClQng5yn8FJtg8x2UPh2qYZgUQv6rDiCmmsZA35whMYfr3EyALaTCzTHU/Iggfbgim1iyATKfBLDE1/Ao3UgSjBcd9rF6TaTAbOAXkvDf8J8/LerjPSV10bD5GR7d6m8WfsBznIRNrejbiIxZLNqVh6uRjGV7XIRzbU16WX4HfwesFLHhPDJm4FrcgC79RNhWI4Kg/aLFkU1pwU4ToLR1CDJg9LW7BRleETGzrEIl+iyWb0phqigGhnq8eAdRn9rS4BatTCSB2lEwAQvRaLNmUhgtVKQD2dAjH7iBYTssAsK9APKDebeJa3IKpE9w5DnQI0WWxZFNaCuJQgQiutJ1mz/BbQj405lxD4kVK5gPR964YncyFLzuCEVPnqBVkpSOCcJkN8SX+VsisRX5074B3wDvgHbDMgWcfzjN4oZiUvAAAAABJRU5ErkJggg=="},396:function(A,t,n){A.exports=n.p+"assets/test2.png?3d74ba9"}},[146]);
//# sourceMappingURL=app.a289908f829529e24931.js.map