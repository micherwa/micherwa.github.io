import CenterOfHorizontalAndVertical from '@/views/blogs/2017/center-of-horizontal-and-vertical.vue';
import PseudoClassAndElement from '@/views/blogs/2017/pseudo-class-and-element.vue';
import BoxSizingInBoxModal from '@/views/blogs/2017/box-sizing-in-box-modal.vue';
import EventPrincipleInJavascript from '@/views/blogs/2017/event-principle-in-javascript.vue';
import CrossDomainInJavascript from '@/views/blogs/2017/cross-domain-in-javascript.vue';
import AsyncInJavascript from '@/views/blogs/2017/async-in-javascript.vue';
import CallAndApplyInJavascript from '@/views/blogs/2017/call-and-apply-in-javascript.vue';
import InheritInJavascript from '@/views/blogs/2017/inherit-in-javascript.vue';
import CopyObjectInJavascript from '@/views/blogs/2017/copy-object-in-javascript.vue';
import ArrayDeDuplicateInJavascript from '@/views/blogs/2017/array-de-duplicate-in-javascript.vue';
import ExportAndExportDefaultInES6 from '@/views/blogs/2017/export-and-export-default-in-es6.vue';
import WhenCanNotUseArrowFunction from '@/views/blogs/2017/when-can-not-use-arrow-function.vue';
import PublishSubscribePattern from '@/views/blogs/2017/publish-subscribe-pattern.vue';
import asyncAwait from '@/views/blogs/2017/async-await.vue';

export default [
    {
        path: '/2017/async-await',
        name: 'async-await',
        component: asyncAwait
    },
    {
        path: '/2017/publish-subscribe-pattern',
        name: 'publish-subscribe-pattern',
        component: PublishSubscribePattern
    },
    {
        path: '/2017/when-can-not-use-arrow-function',
        name: 'when-can-not-use-arrow-function',
        component: WhenCanNotUseArrowFunction
    },
    {
        path: '/2017/export-and-export-default-in-es6',
        name: 'export-and-export-default-in-es6',
        component: ExportAndExportDefaultInES6
    },
    {
        path: '/2017/array-de-duplicate-in-javascript',
        name: 'array-de-duplicate-in-javascript',
        component: ArrayDeDuplicateInJavascript
    },
    {
        path: '/2017/copy-object-in-javascript',
        name: 'copy-object-in-javascript',
        component: CopyObjectInJavascript
    },
    {
        path: '/2017/inherit-in-javascript',
        name: 'inherit-in-javascript',
        component: InheritInJavascript
    },
    {
        path: '/2017/call-and-apply-in-javascript',
        name: 'call-and-apply-in-javascript',
        component: CallAndApplyInJavascript
    },
    {
        path: '/2017/async-in-javascript',
        name: 'async-in-javascript',
        component: AsyncInJavascript
    },
    {
        path: '/2017/cross-domain-in-javascript',
        name: 'cross-domain-in-javascript',
        component: CrossDomainInJavascript
    },
    {
        path: '/2017/event-principle-in-javascript',
        name: 'event-principle-in-javascript',
        component: EventPrincipleInJavascript
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
