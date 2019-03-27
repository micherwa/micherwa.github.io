<template>
    <div class="about-container">
        <Title name="About Me"></Title>
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
                            Hi，我叫Micherwa(米协瓦)，同事都叫我超哥。常出没于
                            公众号 “超哥前端小栈”、
                            <a
                                :href="item.href" target="_blank"
                                 v-for="(item, $index) in socialList">
                                {{item.name}}
                            </a>
                            等地带。
                        </p>

                        <p>
                            职业是软件工程师。目前在 知名游戏公司 的广告技术中心，担任前端负责人 。曾在游族网络的广告技术部，参与研发广告投放系统、在厚本金融参与研发
                            <a href="https://github.com/hbteam/weex-droplet-ui" target="_blank">水滴UI</a>
                            (一个轻量级的weex UI组件库)、在窝牛装修与篱笆网，从事移动前端开发相关工作 (其中有一年iOS原生开发经验)。
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

                        <p>
                            PS：欢迎关注我的公众号 “超哥前端小栈”，交流更多的想法与技术。
                            <img src="~@/assets/wechat_qrCode.jpg">
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
                    { href: 'https://juejin.im/user/5a5d4522518825732b19d364', name: '掘金、' },
                    { href: 'https://segmentfault.com/u/micherwa', name: 'SegmentFault、' },
                    { href: 'https://www.zhihu.com/people/micherwa', name: '知乎、' },
                    { href: 'https://github.com/micherwa', name: 'Github、' },
                    { href: 'https://weibo.com/jaked', name: '微博' }
                ],
                openSourceList: [
                    {
                        href: 'https://github.com/hbteam/weex-droplet-ui',
                        name: '水滴UI',
                        descript: '一个轻量级的weex UI组件库'
                    },
                    {
                        href: 'https://github.com/micherwa/vue2-mobile-seed',
                        name: 'vue2-mobile-seed',
                        descript: '基于vue2+webpack4的H5移动端种子工程'
                    },
                    {
                        href: 'https://github.com/micherwa/react-redux-admin-antd',
                        name: 'react-redux-admin-antd',
                        descript: '基于 react16 + router4 + react-redux5 + antd3.10 的后台管理种子工程'
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
