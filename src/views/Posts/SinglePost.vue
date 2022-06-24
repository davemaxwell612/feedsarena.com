<template>
    <h1>Current Post You Are reading</h1>
    <div v-if="error">
        <p class="title-5 red-500" color="red">{{error}}</p>
    </div>
    <div v-if="post">
        <p>The Post Id is {{id}}</p>
        <h1>{{post.titled}}</h1>
    </div>
</template>
<script>

import getPost from '../../components/Composibles/getPost'

export default {

    props:['id'],

    setup(props){

        const {post, error, load} = getPost(props.id)

        load()

        return {post, error}
    }
}
</script>