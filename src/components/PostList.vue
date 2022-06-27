<template>
    <div class="posts">
    <Posts :post="posts" />  
    </div>
</template>

<script>

import Posts from '../views/Posts/Posts.vue'

export default {

    props:['posts'],

    components:{
        Posts
    }
}
</script>

<style>

</style>