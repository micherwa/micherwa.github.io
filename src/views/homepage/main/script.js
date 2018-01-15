import _ from 'lodash';

export default {
    data () {
        return {

        };
    },

    created () {

    },

    computed: {

    },

    methods: {
        tap (e) {
            console.log(e.target);
        }
    },

    mounted () {
        console.log($('.homepage').html());
    }
};
