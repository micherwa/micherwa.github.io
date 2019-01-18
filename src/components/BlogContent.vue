<template>
    <div class="container">
        <BackToTop></BackToTop>

        <div class="row">
            <div id="postContainer" class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 post-container">
                <slot name="content"></slot>
            </div>

            <div
                class="col-lg-2 col-lg-offset-0 visible-lg-block sidebar-container catalog-container"
                id="catalogContainer" v-if="useCatalog">
                <div class="side-catalog" :class="[isFixed ? 'fixed' : '']">
                    <hr class="hidden-sm hidden-xs">
                    <h5>CATALOG</h5>
                    <ul class="catalog-body">
                        <li
                            :class="[item.className, item.active ? 'active': '']"
                            v-for="(item, $index) in catalogList" :key="$index">
                            <a href="javascript:;" @click="handleJump(item.idx)">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script type="text/javascript">
    import WindowScroll from '@/utils/window-scroll';

    export default {
        name: 'BlogContent',

        props: {
            useCatalog: {
                type: Boolean,
                default: true
            }
        },

        data () {
            return {
                catalogList: [],
                parentOffsetTop: 0,
                catalogOffsetTop: 0,
                isFixed: false
            };
        },

        mounted () {
            if (this.useCatalog) {
                setTimeout(() => {
                    this.initCatalogList();
                    this.initParentOffsetTop();
                }, 200);

                this.$nextTick(function () {
                    window.addEventListener('scroll', this.onScroll);
                });
            }
        },

        methods: {
            initParentOffsetTop () {
                const parent = document.querySelector('#postContainer');
                // 是否要减60(顶部nav高度)？待定
                this.parentOffsetTop = parent.offsetTop - 20;
            },

            initCatalogList () {
                const catalogEl = document.querySelector('#catalogContainer');
                this.catalogOffsetTop = catalogEl.offsetTop;

                const nodeList = document.querySelector('#postContainer').querySelectorAll('h1, h2, h3, h4, h5, h6');

                Array.prototype.forEach.call(nodeList, (el, idx) => {
                    el.setAttribute('class', 'b-jump');

                    const tagName = el.tagName.toLowerCase();
                    const catalog = {
                        className: `${tagName}_nav`,
                        idx: idx,
                        title: el.innerText.trim(),
                        active: false
                    };
                    this.catalogList.push(catalog);
                });
            },

            handleJump (idx) {
                const jumpEl = document.querySelectorAll('.b-jump');
                // 获取需要滚动的距离
                let offsetTop = jumpEl[idx].offsetTop + this.parentOffsetTop;
                let distance = document.documentElement.scrollTop || document.body.scrollTop;

                WindowScroll.smoothScroll(offsetTop, distance);
            },

            onScroll () {
                this.setCatalogFixed();

                if (WindowScroll.isReachBottom()) {
                    this.setCatalogActive(this.catalogList.length - 1);
                    return;
                }

                const nodeList = document.querySelectorAll('.b-jump');
                const distance = document.documentElement.scrollTop || document.body.scrollTop;

                Array.prototype.forEach.call(nodeList, (el, index) => {
                    if (distance >= (el.offsetTop + this.parentOffsetTop)) {
                        this.setCatalogActive(index);
                    }
                });
            },

            setCatalogActive (index) {
                this.catalogList.forEach((item, idx) => {
                    item.active = index === idx;
                    this.catalogList.splice(idx, 1, item);
                });
            },

            setCatalogFixed () {
                this.isFixed = document.documentElement.scrollTop - this.catalogOffsetTop > 0;
            }
        }
    };
</script>

<style lang="scss">
    .catalog-container {
        padding: 0px;
    }
</style>
