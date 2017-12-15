import { mapGetters } from 'vuex';
import _ from 'lodash';

export default {
    data () {
        return {

        };
    },

    created () {
        this.load();
    },

    computed: {
        ...mapGetters([
            'users'
        ])
    },

    methods: {
        async load () {
            await this.$store.dispatch('getUsers');
            console.log(_.find(this.users, {'id': 1}));
        },

        tap (e) {
            console.log(e.target);
        }
    }
};
