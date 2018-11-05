import ParamsOfHeaderInHtml from '@/views/blogs/2016/params-of-header-in-html.vue';
import SkillOfProgrammerInterview from '@/views/blogs/2016/skill-of-programmer-interview.vue';
import ResearchOfWechatSubscription from '@/views/blogs/2016/research-of-wechat-subscription.vue';
import HowToUseSSHKey from '@/views/blogs/2016/how-to-use-ssh-key.vue';

export default [
    {
        path: '/2016/research-of-wechat-subscription',
        name: 'research-of-wechat-subscription',
        component: ResearchOfWechatSubscription
    },
    {
        path: '/2016/skill-of-programmer-interview',
        name: 'skill-of-programmer-interview',
        component: SkillOfProgrammerInterview
    },
    {
        path: '/2016/params-of-header-in-html',
        name: 'params-of-header-in-html',
        component: ParamsOfHeaderInHtml
    },
    {
        path: '/2016/how-to-use-ssh-key',
        name: 'how-to-use-ssh-key',
        component: HowToUseSSHKey
    }
];
