import data from '@/data';

const MAX_DESCRIPT_LENGTH = 100;

export default {
    data () {
        return {
            dataList: [],
        };
    },

    created () {
        this.init();
    },

    methods: {
        init () {
            data.forEach(item => {
                if (item.descript.length > MAX_DESCRIPT_LENGTH) {
                    item.descript = item.descript.substr(0, MAX_DESCRIPT_LENGTH) + '...';
                }
                this.dataList.push(item);
            });
        }
    }
};
