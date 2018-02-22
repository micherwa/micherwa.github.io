<template>
    <el-header class="header clearfix">
        <a class="logo pull-left" href="javascript:;">logo</a>

        <ul class="nav pull-right clearfix hidden-xs-only">
            <li v-for="(nav, index) in naviList" @click="handleClickNavItem(nav, index)"
             class="pull-left nav-item" :class="[nav.active ? 'active': '']" :key="index">
                <a class="c-5a" href="javascript:;">{{nav.title}}</a>
            </li>
        </ul>
        <div class="hidden-sm-and-up pull-right nav-toggle flex-center m-t-17"
         @click="showNaviList">
            <span class="toggle-icon"></span>
            <ul class="nav nav-collapse" id="navCollapse">
                <li v-for="(nav, index) in naviList"
                 @click.stop="handleClickNavItem(nav, index)"
                 class="pull-left nav-item"
                 :class="[nav.active ? 'active': '']"
                 :key="index">
                    <a class="c-5a" href="javascript:;">{{nav.title}}</a>
                </li>
            </ul>
        </div>

    </el-header>
</template>
<style lang="scss" scoped>
    .header {
        width: 100%;
        background-color: #fff;
        position: fixed;
        z-index: 1000;
        box-shadow: inset 0 -1px 1px -1px #d8d8d8;

        .logo {
            width: 100px;
            height: 50px;
            margin-top: 5px;
            background-color: #f9f9f9;
        }

        .nav {
            .nav-item {
                height: 100%;
                position: relative;
                a {
                    display: block;
                    padding: 20px;
                }
                &::after {
                    position: absolute;
                    top: 28px;
                    left: 4px;
                    width: 9px;
                    height: 2px;
                    background-color: #17bed2;
                    opacity: 0;
                    content: " ";
                }
                &:hover {
                    &::after {
                        opacity: 1;
                        transition-duration: 400ms;
                        transition-property: all;
                        transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
                    }
                }
            }
            .nav-item.active {
                &::after {
                    opacity: 1;
                    transition-duration: 400ms;
                    transition-property: all;
                    transition-timing-function: cubic-bezier(0.7, 1, 0.7, 1);
                }
            }
        }

        .nav-toggle {
            width: 25px;
            height: 25px;
            position: relative;
            .toggle-icon {
                position: absolute;
                top: 3px;
                left: 0;
                width: 100%;
                height: 2px;
                border-radius: 2px;
                background-color: #515151;
            }
            &::before {
                position: absolute;
                top: 11px;
                left: 0;
                content: '';
                background-color: #515151;
                width: 100%;
                height: 2px;
                border-radius: 2px;
            }
            &::after {
                position: absolute;
                bottom: 3px;
                left: 0;
                content: '';
                background-color: #515151;
                width: 100%;
                height: 2px;
                border-radius: 2px;
            }

            .nav-collapse {
                display: none;
                height: 0;
                position: fixed;
                top: 60px;
                left: 0;
                width: 100%;
                overflow: hidden;
                .nav-item {
                    height: 40px;
                    line-height: 30px;
                    width: 100%;
                    background-color: #fff;
                    a { padding: 5px 20px; }
                    &::after {
                        top: 20px;
                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
    import $ from 'jquery';

    export default {
        name: 'Header',
        props: {
            naviList: {
                type: Array,
                default: []
            }
        },

        data () {
            return {

            };
        },

        created () {

        },

        methods: {
            handleClickNavItem (nav, index) {
                this.$emit('navActived', index);

                const distanceFromTop = $(nav.achor).offset().top - 80;
                $('body').animate({
                    'scrollTop': distanceFromTop
                }, 700);

                if ($('#navCollapse').height() === 0) {
                    return;
                }
                this.hideNaviList();
            },

            showNaviList () {
                const itemHeight = $('#navCollapse').find('li').height();
                const itemCount = $('#navCollapse').find('li').length;
                $('#navCollapse').show().stop(true).animate({
                    'height': itemCount * itemHeight
                }, 500);
            },

            hideNaviList () {
                $('#navCollapse').stop(true).animate({
                    'height': 0
                }, 500, () => {
                    $('#navCollapse').hide();
                });
            }
        }
    };
</script>
