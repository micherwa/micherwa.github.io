<template>
    <div id="fixedTools" class="hidden-xs hidden-sm">
        <span class="hand f12" v-if="isShow" @click="handleToTop">回顶部</span>
    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: 'BackToTop',

        data () {
            return {
                isShow: false
            };
        },

        mounted () {
            window.addEventListener('scroll', this.handleScroll);
        },

        destoryed () {
            window.removeEventListener('scroll', this.handleScroll);
        },

        methods: {
            handleScroll () {
                let distance = document.documentElement.scrollTop || document.body.scrollTop;

                this.isShow = distance > 200;
            },

            handleToTop () {
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
            }
        }
    };
</script>
