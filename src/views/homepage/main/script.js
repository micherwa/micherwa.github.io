import _ from 'lodash';
// import $ from 'jquery';

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
