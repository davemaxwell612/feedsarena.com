<template>
    <div class="posts">
    <SinglePost :post="posts" />  
    </div>
</template>

<script>

import SinglePost from '../components/SinglePost.vue'

export default {

    props:['posts'],

    components:{
        SinglePost
    }
}
</script>

<style>

</style>