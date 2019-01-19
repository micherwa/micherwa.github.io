<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent>
            <div slot="content">
                <h2>前言</h2>

                <p>随着前端团队人员的逐步扩大，需要有一份规范来约束代码的书写。</p>

                <p>无论人数多少，代码都应该同出一门。</p>

                <p>
                    主要参考了
                    <a href="http://alloyteam.github.io/CodeGuide/" target="_blank">腾讯alloyteam团队</a>
                    ，里面有许多认同点。在此基础上做了些许改进，为了更适合自己团队，那些已经达成共识的代码习惯。仅供参考。
                </p>

                <h2>命名规则</h2>
                <p>总原则：全部采用小写方式， 以中划线分隔。</p>

                <p>
                    <strong>项目名</strong><br>
                    例：my-project-name
                </p>

                <p>
                    <strong>目录名</strong><br>
                    有复数结构时，要采用复数命名法。<br>
                    例：scripts，styles，images
                </p>

                <p>
                    <strong>JS、CSS/SCSS/LESS、HTML文件名</strong><br>
                    例：ad-group.js，ad-group.scss，ad-group.html
                </p>

                <h2>工程约定</h2>
                <p>
                    <strong>一个工程内只有一个UI控件</strong><br>
                    以vue为例，确定使用element-ui之后，不可再引入其他ui控件。
                </p>
                <p>
                    <strong>工程中，src的目录结构</strong><br>
                    assets、components、pages/views、store、service、utils、styles、libs、static
                </p>
                <p>
                    <strong>代码的行数与列数限制</strong><br>
                    为了提升阅读体验，一个文件的行数不超过300，一行代码的列数不超过120<br>
                    建议开启编辑器的自动换行功能
                </p>
                <p>
                    <strong>router的定义，要对应pages中的目录结构</strong><br>
                    例：如router为/advertise/group/list，则pages中的目录应为advertise->group->list
                </p>
                <p>
                    <strong>组件的传值</strong><br>
                    保持单一数据流，公用组件需有一个index文件进行统一注册
                </p>
                <p>
                    <strong>css的预编译器</strong><br>
                    采用less或者sass，非两者混用
                </p>
                <p>
                    <strong>变量申明</strong><br>
                    尽可能少用var，习惯使用let和const
                </p>
                <p>
                    <strong>不要使用eval</strong><br>
                    出于安全性考虑
                </p>
                <p>
                    <strong>一个工程内，所有文件名小写，以‘-’的形式联结</strong><br>
                    例：components/ad-group.vue、services/create-ad-service.js
                </p>
                <p>
                    <strong>import的变量名，首字母大写，并采用驼峰形式</strong><br>
                    例：<br>
                    import AdGroup from @/components/ad-group.vue;<br>
                    import CreateAdService from @/services/create-ad-service;
                </p>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
