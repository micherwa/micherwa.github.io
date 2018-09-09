import FrontEndCodeCriterion1 from '@/views/blogs/2018/front-end-code-criterion-1.vue';
import FrontEndCodeCriterion2 from '@/views/blogs/2018/front-end-code-criterion-2.vue';
import FrontEndCodeCriterion3 from '@/views/blogs/2018/front-end-code-criterion-3.vue';
import FrontEndCodeCriterion4 from '@/views/blogs/2018/front-end-code-criterion-4.vue';
import BelowOfApi from '@/views/blogs/2018/below-of-api.vue';
import FeInterviewHTML from '@/views/blogs/2018/fe-interview-html.vue';
import FeInterviewCSS from '@/views/blogs/2018/fe-interview-css.vue';

export default [
    {
        path: '/2018/fe-interview-css',
        name: 'fe-interview-css',
        component: FeInterviewCSS
    },
    {
        path: '/2018/fe-interview-html',
        name: 'fe-interview-html',
        component: FeInterviewHTML
    },
    {
        path: '/2018/below-of-api',
        name: 'below-of-api',
        component: BelowOfApi
    },
    {
        path: '/2018/front-end-code-criterion-1',
        name: 'front-end-code-criterion-1',
        component: FrontEndCodeCriterion1
    },
    {
        path: '/2018/front-end-code-criterion-2',
        name: 'front-end-code-criterion-2',
        component: FrontEndCodeCriterion2
    },
    {
        path: '/2018/front-end-code-criterion-3',
        name: 'front-end-code-criterion-3',
        component: FrontEndCodeCriterion3
    },
    {
        path: '/2018/front-end-code-criterion-4',
        name: 'front-end-code-criterion-4',
        component: FrontEndCodeCriterion4
    }
];
