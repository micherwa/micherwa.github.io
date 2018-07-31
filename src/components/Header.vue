<template>
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/"></a>
                <router-link class="navbar-brand" :to="{path: '/'}">Micherwa Blog</router-link>
            </div>

            <div id="huxblog_navbar">
                <div class="navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <li v-for="(item, $index) in naviList" :key="$index">
                            <router-link :to="{name: item.routeName}">{{item.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script type="text/javascript">
    import $ from 'jquery';

    export default {
        name: 'Header',

        data () {
            return {
                naviList: [
                    {
                        title: 'HOME',
                        routeName: 'home'
                    },
                    {
                        title: 'ABOUT',
                        routeName: 'about'
                    },
                    {
                        title: 'TAGS',
                        routeName: 'tags'
                    }
                ]
            };
        },

        mounted () {
            this.animateHeader();
        },

        methods: {
            animateHeader () {
                const MQL = 1170;
                // primary navigation slide-in effect
                if ($(window).width() > MQL) {
                    const headerHeight = $('.navbar-custom').height();
                    const bannerHeight = $('.intro-header .container').height();

                    $(window).on('scroll', { previousTop: 0 }, function () {
                        let currentTop = $(window).scrollTop(),
                            $catalog = $('.side-catalog');

                        // check if user is scrolling up by mouse or keyborad
                        if (currentTop < this.previousTop) {
                            // if scrolling up...
                            if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                                $('.navbar-custom').addClass('is-visible');
                            } else {
                                $('.navbar-custom').removeClass('is-visible is-fixed');
                            }
                        } else {
                            // if scrolling down...
                            $('.navbar-custom').removeClass('is-visible');
                            if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                        }
                        this.previousTop = currentTop;

                        // adjust the appearance of side-catalog
                        $catalog.show();
                        if (currentTop > (bannerHeight + 41)) {
                            $catalog.addClass('fixed');
                        } else {
                            $catalog.removeClass('fixed');
                        }
                    });
                }
            }
        }
    };
</script>

<style lang="scss">
    .navbar-custom {
        background: none;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 3;

        .navbar-brand {
            font-weight: 800;
            color: white;
            height: 56px;
            line-height: 25px;

            &:hover {
                color: rgba(255, 255, 255, 0.8);
            }
        }

        .nav {
            li {
                a {
                    text-transform: uppercase;
                    font-size: 12px;
                    line-height: 20px;
                    font-weight: 800;
                    letter-spacing: 1px;

                    &:active {
                        background: rgba(0, 0, 0, 0.12);
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
        .navbar-custom {
            background: transparent;
            border-bottom: 1px solid transparent;
            body {
                font-size: 20px;
            }

            .navbar-brand {
                color: #fff;
                padding: 20px;
                line-height: 20px;

                &:hover, &:focus {
                    color: rgba(255, 255, 255, 0.8);
                }
            }

            .nav {
                li {
                    a {
                        color: #fff;
                        padding: 20px;

                        &:hover, &:focus {
                            color: rgba(255, 255, 255, 0.8);
                        }

                        &:active {
                            background: none;
                        }
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1170px) {
        .navbar-custom {
            transition: background-color 0.3s;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
        }
        .navbar-custom.is-fixed {
            /* when the user scrolls down, we hide the header right above the viewport */
            position: fixed;
            top: -61px;
            background-color: rgba(255, 255, 255, 0.9);
            border-bottom: 1px solid #f2f2f2;
            transition: transform 0.3s;
        }
        .navbar-custom.is-fixed .navbar-brand {
            color: #404040;
        }
        .navbar-custom.is-fixed .navbar-brand:hover,
        .navbar-custom.is-fixed .navbar-brand:focus {
            color: #0085a1;
        }
        .navbar-custom.is-fixed .nav li a {
            color: #404040;
        }
        .navbar-custom.is-fixed .nav li a:hover,
        .navbar-custom.is-fixed .nav li a:focus {
            color: #0085a1;
        }
        .navbar-custom.is-visible {
            /* if the user changes the scrolling direction, we show the header */
            transform: translate3d(0, 100%, 0);
        }
    }
</style>