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
                <router-link class="navbar-brand" :to="{path: '/'}">Micherwa Blog</router-link>
            </div>

            <div id="mobileNavbar">
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
            this.animateToggle();
        },

        methods: {
            animateHeader () {
                const MQL = 1170;
                // primary navigation slide-in effect
                if ($(window).width() > MQL) {
                    const headerHeight = $('.navbar-custom').height();

                    $(window).on('scroll', { previousTop: 0 }, function () {
                        let currentTop = $(window).scrollTop();

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
                            if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')){
                                $('.navbar-custom').addClass('is-fixed');
                            }
                        }
                        this.previousTop = currentTop;
                    });
                }
            },

            animateToggle () {
                const $toggle = document.querySelector('.navbar-toggle');
                const $navbar = document.querySelector('#mobileNavbar');
                const $collapse = document.querySelector('.navbar-collapse');

                const mobileToggle = {
                    close: function () {
                        $navbar.className = ' ';
                        // wait until animation end.
                        setTimeout(() => {
                            // prevent frequently toggle
                            if ($navbar.className.indexOf('in') < 0) {
                                $collapse.style.height = '0px';
                            }
                        }, 400);
                    },
                    open: function () {
                        $collapse.style.height = 'auto';
                        $navbar.className += ' in';
                    }
                };

                // Bind Event
                $toggle.addEventListener('click', (e) => {
                    if ($navbar.className.indexOf('in') > 0) {
                        mobileToggle.close();
                    } else {
                        mobileToggle.open();
                    }
                });

                document.addEventListener('click', (e) => {
                    if (e.target === $toggle || e.target.className === 'icon-bar') {
                        return;
                    }

                    mobileToggle.close();
                });
            }
        }
    };
</script>
