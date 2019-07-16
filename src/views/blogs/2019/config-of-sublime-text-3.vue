<template>
    <div class="blog-container">
        <BlogHeader></BlogHeader>

        <BlogContent :useCatalog="true">
            <div slot="content">
                <h2>前言</h2>
            </div>
        </BlogContent>
    </div>
</template>

<script>
    export default {

    };
</script>
