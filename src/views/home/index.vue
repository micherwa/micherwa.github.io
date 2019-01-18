<template>
    <div class="home-container">
        <BackToTop></BackToTop>

        <header class="intro-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 ">
                        <div class="site-heading">
                            <h1>Micherwa Blog</h1>
                            <span class="subheading">除了代码，唯有健身与美食不可辜负</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-1 col-md-8 col-md-offset-1 col-sm-12 col-xs-12 postlist-container m-b-15">
                    <div class="post-preview" v-for="(item, $index) in dataList" :key="$index">
                        <a href="javascript:;" @click.prevent="handleToPost(item)">
                            <h2 class="post-title">{{item.title}}</h2>
                            <h3 class="post-subtitle" v-if="item.subTitle">{{item.subTitle}}</h3>
                            <div class="post-content-preview">{{item.descript}}</div>
                        </a>
                        <p class="post-meta">Posted on {{item.date}}</p>
                    </div>
                </div>

                <SidebarRight></SidebarRight>
            </div>
        </div>

    </div>
</template>

<script>
    import Util from '@/utils';
    import data from '@/data';
    const MAX_DESCRIPT_LENGTH = 100;

    export default {
        data () {
            return {
                dataList: []
            };
        },

        created () {
            this.init();
        },

        methods: {
            init () {
                data.forEach(item => {
                    if (item.descript.length > MAX_DESCRIPT_LENGTH) {
                        item.descript = item.descript.substr(0, MAX_DESCRIPT_LENGTH) + '...';
                    }
                    this.dataList.push(item);
                });
            },

            handleToPost (item) {
                const info = {
                    mainTitle: item.title,
                    subTitle: item.subTitle,
                    date: item.date,
                    tags: item.tags
                };

                this.$router.push({
                    name: item.routeName,
                    query: {
                        info: Util.utf8ToB64(JSON.stringify(info))
                    }
                });
            }
        }
    };
</script>

<style lang="scss">
    .home-container {
        .intro-header {
            background-image: url('~@/assets/header-bg-home.jpg');
        }
    }
</style>
