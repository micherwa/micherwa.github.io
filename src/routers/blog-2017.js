import CenterOfHorizontalAndVertical from '@/views/blogs/2017/center-of-horizontal-and-vertical.vue';
import PseudoClassAndElement from '@/views/blogs/2017/pseudo-class-and-element.vue';
import BoxSizingInBoxModal from '@/views/blogs/2017/box-sizing-in-box-modal.vue';
import HowToUseThisInJavascript from '@/views/blogs/2017/how-to-use-this-in-javascript.vue';
import EventPrincipleInJavascript from '@/views/blogs/2017/event-principle-in-javascript.vue';

export default [
    {
        path: '/2017/event-principle-in-javascript',
        name: 'event-principle-in-javascript',
        component: EventPrincipleInJavascript
    },
    {
        path: '/2017/how-to-use-this-in-javascript',
        name: 'how-to-use-this-in-javascript',
        component: HowToUseThisInJavascript
    },
    {
        path: '/2017/center-of-horizontal-and-vertical',
        name: 'center-of-horizontal-and-vertical',
        component: CenterOfHorizontalAndVertical
    },
    {
        path: '/2017/pseudo-class-and-element',
        name: 'pseudo-class-and-element',
        component: PseudoClassAndElement
    },
    {
        path: '/2017/box-sizing-in-box-modal',
        name: 'box-sizing-in-box-modal',
        component: BoxSizingInBoxModal
    }
];
