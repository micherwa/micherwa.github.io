## blog-tech

> `vue2 webpack4`


## 运行环境

> `nodejs v8.9.0` `npm 5.5.1`


## 技术栈

> `vue2` `vue-router` `sass` `webpack4` `es6` `lodash`


## 构建命令

```
# install packages
npm install

# serve with hot reload at 0.0.0.0:8090
npm run dev

# build for production with minification
npm run build

# check and fix code rules
npm run eslint
```

## 命名规则

```
1. 文件夹命名：a-b；
2. 文件命名（js、css、vue、html）：a-b.*；
3. 样式class命名：a-b；
4. image命名：a-b；
5. js变量命名：aB；
6. js常量命名：A_B；
7. js私有变量或方法：_aB；
8. js方法的返回值如果是布尔值，方法名则以is、can、has、should等为前缀；
9. service命名：Ab;
10. component命名：Ab;
```


## 备注

```
1. 在页面中添加img的时候，请尽量使用css background-image，避免webpack无法暂时对html img src支持不友好问题.
2. 项目中使用EditorConfig来定义代码风格,需要安装相关编辑器的插件[查看对应编辑器插件](https://github.com/sindresorhus/editorconfig-sublime#readme)
3.npm run eslint 会自动修复部分`js`文件错误，`vue`文件的js部分错误，`scss`文件错误无法修复
```


## 添加vue devtool

```
安装chrome扩展程序重新启动即可，详见：https://github.com/vuejs/vue-devtools
```
