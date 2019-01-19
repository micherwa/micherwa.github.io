<template>
    <div class="blog-header">
        <Title :name="info.mainTitle"></Title>

        <header class="intro-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div class="post-heading">
                            <div class="tags">
                                <router-link
                                    class="tag"
                                    v-for="(tagName, $index) in info.tags" :key="$index"
                                    :to="{ name: 'tags', params: { name: tagName } }" :title="tagName">
                                    {{tagName}}
                                </router-link>
                            </div>
                            <h1>{{info.mainTitle}}</h1>
                            <h2 class="subheading">{{info.subTitle}}</h2>
                            <span class="meta">Posted on {{info.date}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script type="text/javascript">
    import Util from '@/utils';

    export default {
        name: 'BlogHeader',

        data () {
            return {
                info: {
                    mainTitle: '',
                    subTitle: '',
                    date: '',
                    tags: []
                }
            };
        },

        created () {
            if (this.$route.query.info) {
                this.info = Object.assign(this.info, JSON.parse(Util.b64ToUtf8(this.$route.query.info)));
            }
        }
    };
</script>

<style lang="scss">
    .blog-header {
        .intro-header {
            position: relative;
            background-image: url('~@/assets/header-bg-blog.jpg');
        }
    }
</style>
