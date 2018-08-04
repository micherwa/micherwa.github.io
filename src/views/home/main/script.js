import data from '@/data';
import socialData from '@/data/social';

const MAX_DESCRIPT_LENGTH = 100;

export default {
    data () {
        return {
            dataList: [],
            socialList: socialData
        };
    },

    created () {
        this.init();
    },

    methods: {
        init () {
            data.forEach(item => {
                console.log(item.descript.length);
                if (item.descript.length > MAX_DESCRIPT_LENGTH) {
                    item.descript = item.descript.substr(0, MAX_DESCRIPT_LENGTH) + '...';
                }
                this.dataList.push(item);
            });
        }
    }
};
