<template>
    <div></div>
</template>

<script>
    export default {
        name: 'Title',

        props: {
            name: {
                type: String,
                default: ''
            }
        },

        mounted () {
            document.title = `${this.name} | 超哥的博客` || '超哥的博客 | Micherwa Blog';
        }
    };
</script>
