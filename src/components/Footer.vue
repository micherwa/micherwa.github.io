<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <ul class="list-inline text-center">
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

                    <p class="copyright text-muted m-t-30">
                        Copyright &copy; Micherwa Blog 2015-{{year}}.
                        沪ICP备16037543号-1.
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script type="text/javascript">
    import socialData from '@/data/social';

    export default {
        name: 'Footer',

        data () {
            return {
                socialList: socialData,
                year: ''
            };
        },

        mounted () {
            const date = new Date();
            this.year = date.getFullYear();
        },

        methods: {

        }
    };
</script>
