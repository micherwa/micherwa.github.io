// import _ from 'lodash';

export default {
    data () {
        return {
            naviList: [
                {
                    title: 'item1',
                    achor: '#item1',
                    active: true
                },
                {
                    title: 'item2',
                    achor: '#item2',
                    active: false
                },
                {
                    title: 'item3',
                    achor: '#item3',
                    active: false
                },
                {
                    title: 'item4',
                    achor: '#item4',
                    active: false
                },
                {
                    title: 'item5',
                    achor: '#item5',
                    active: false
                }
            ]
        };
    },

    created () {

    },

    methods: {
        handleNavActived (index) {
            this.naviList.forEach((nav, idx) => {
                nav.active = false;
                if (idx === index) {
                    nav.active = true;
                }
                this.naviList.splice(idx, 1, nav);
            });
        }
    },

    mounted () {

    }
};
