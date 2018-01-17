<template>
    <el-header class="header clearfix">
        <a class="logo pull-left" href="javascript:;">logo</a>

        <ul class="nav nav-full pull-right clearfix">
            <li v-for="(nav, index) in naviList"
             class="pull-left nav-item" :class="[nav.active ? 'active': '']">
                <a class="c-5a" href="#" @click="handleClickNavItem(index)">{{nav.title}}</a>
            </li>
        </ul>
    </el-header>
</template>
<style lang="scss">
    .header {
        width: 100%;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.8);
        position: fixed;
        z-index: 9000;
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
    }
</style>
<script type="text/javascript">
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
            handleClickNavItem (index) {
                this.$emit('navActived', index);
            }
        }
    };
</script>
