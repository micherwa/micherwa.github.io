<template>
    <div class="about-container">
        <header class="intro-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
                        <div class="site-heading">
                            <h1>About Me</h1>
                            <span class="subheading">Code within fit & delicacy</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12 col-xs-12 postlist-container m-b-15">
                    <div class="post-container">
                        <blockquote>
                            <p>除了代码，<br>唯有健身与美食不可辜负</p>
                        </blockquote>

                        <p>
                            Hi，我叫柳超，你也可以叫我 Micherwa(米协瓦)。常出没于
                            <a
                                :href="item.href" target="_blank"
                                 v-for="(item, $index) in socialList">
                                {{item.name}}
                            </a>
                            等地带。
                        </p>

                        <p>
                            职业是软件工程师。目前在
                            <a href="https://www.youzu.com/" target="_blank">游族网络</a> ·
                            市场中心 · 广告技术部 担任资深前端开发工程师。曾在
                            <a href="https://www.houbank.com/home/" target="_blank">厚本金融</a>
                            参与研发
                            <a href="https://github.com/hbteam/weex-droplet-ui" target="_blank">水滴UI</a>
                            (一个轻量级weex UI组件库)、
                            <a href="http://www.lingduohome.com/" target="_blank">窝牛装修</a> 与
                            <a href="https://www.liba.com/" target="_blank">篱笆网</a>
                            从事移动前端开发相关工作 (其中有一年iOS原生开发经验)。
                        </p>

                        <p>健身爱好者，也喜爱美食，闲暇时间乐于阅读和电影。</p>

                        <p>
                            一些开源项目：
                            <ul>
                                <li v-for="(item, $index) in openSourceList" :key="$index">
                                    <a :href="item.href" target="_blank">{{item.name}}</a>
                                    ({{item.descript}})
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

                <SidebarRight></SidebarRight>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                socialList: [
                    { href: 'http://micherwa.cc/blog/#/', name: '博客、' },
                    { href: 'https://segmentfault.com/u/micherwa', name: 'SegmentFault、' },
                    { href: 'https://www.zhihu.com/people/micherwa', name: '知乎、' },
                    { href: 'https://github.com/micherwa', name: 'Github、' },
                    { href: 'https://weibo.com/jaked', name: '微博' }
                ],
                openSourceList: [
                    {
                        href: 'https://github.com/hbteam/weex-droplet-ui',
                        name: '水滴UI',
                        descript: '一个轻量级weex UI组件库'
                    },
                    {
                        href: 'https://github.com/micherwa/vue2-mobile-seed',
                        name: 'vue2-mobile-seed',
                        descript: '基于vue2+webpack4的H5移动端种子工程'
                    },
                    {
                        href: 'https://github.com/micherwa/vue2-typescript-seed',
                        name: 'vue2-typescript-seed',
                        descript: '基于vue2.5+typescript2.6+vuex3的种子工程'
                    }
                ]
            };
        }
    };
</script>

<style lang="scss">
    .about-container {
        .intro-header {
            background-image: url('~@/assets/header-bg-about.jpg');
        }
    }
</style>
