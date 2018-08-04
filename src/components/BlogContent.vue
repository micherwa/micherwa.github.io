<template>
    <div class="row">
        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 post-container">
            <slot name="content"></slot>
        </div>

        <div class="col-lg-2 col-lg-offset-0 visible-lg-block sidebar-container catalog-container">
            <div class="side-catalog">
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
</template>

<script type="text/javascript">
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
                parentOffsetTop: 0
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
                const parent = document.querySelector('.post-container');
                // 是否要-60(顶部nav高度)待定
                this.parentOffsetTop = parent.offsetTop;
            },

            initCatalogList () {
                const nodeList = document.querySelector('.post-container').querySelectorAll('h1, h2, h3, h4, h5, h6');

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
                // 平滑滚动，时长500ms，每10ms一跳，共50跳
                let step = offsetTop / 50;
                if (offsetTop > distance) {
                    let newOffsetTop = offsetTop - distance;
                    step = newOffsetTop / 50;
                    this.smoothDown(distance, offsetTop, step);
                } else {
                    let newOffsetTop = distance - offsetTop;
                    step = newOffsetTop / 50;
                    this.smoothUp(distance, offsetTop, step);
                }
            },

            smoothDown (distance, offsetTop, step) {
                if (distance < offsetTop) {
                    distance += step;
                    document.body.scrollTop = distance;
                    document.documentElement.scrollTop = distance;
                    setTimeout(() => {
                        this.smoothDown(distance, offsetTop, step);
                    }, 10);
                } else {
                    document.body.scrollTop = offsetTop;
                    document.documentElement.scrollTop = offsetTop;
                }
            },

            smoothUp (distance, offsetTop, step) {
                if (distance > offsetTop) {
                    distance -= step;
                    document.body.scrollTop = distance;
                    document.documentElement.scrollTop = distance;
                    setTimeout(() => {
                        this.smoothUp(distance, offsetTop, step);
                    }, 10);
                } else {
                    document.body.scrollTop = offsetTop;
                    document.documentElement.scrollTop = offsetTop;
                }
            },

            onScroll () {
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
            }
        }
    };
</script>

<style lang="scss">
    .catalog-container {
        padding: 0px;
    }
</style>
