<template>
    <div class="col-lg-3 col-lg-offset-0 col-md-3 col-md-offset-0 col-sm-12 col-xs-12 sidebar-container">
        <section>
            <hr class="hidden-sm hidden-xs">
            <h5>
                <router-link :to="{name: 'tags'}">TAGS</router-link>
            </h5>
            <div class="tags">
                <router-link
                    class="tag"
                    v-for="(tag, $index) in tags" :key="$index"
                    :to="{ name: 'tags', params: { name: tag.name } }" :title="tag.name">
                    {{tag.name}}
                </router-link>
            </div>
        </section>

        <section class="visible-md visible-lg">
            <hr class="hidden-sm hidden-xs">
            <h5>
                <router-link :to="{name: 'about'}">ABOUT</router-link>
            </h5>
            <div class="short-about">
                <img src="~@/assets/avatar-me.jpg">
                <p>Code within fit & delicacy<br>除了代码,唯有健身与美食不可辜负</p>
                <ul class="list-inline">
                    <li v-for="(item, $index) in socialList" :key="$index">
                        <a :href="item.url" target="_blank">
                            <span class="fa-stack fa-lg">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-stack-1x fa-inverse"
                                 :class="item.icon ? item.icon : ''">{{item.title}}</i>
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script type="text/javascript">
    import socialData from '@/data/social';
    import tagsData from '@/data/tags';

    export default {
        name: 'SidebarRight',

        data () {
            return {
                socialList: socialData,
                tags: tagsData
            };
        }
    };
</script>
