<template>
  
  <!-- Recent Posts -->
  <RecentPost />
  <!-- Trending Posts -->
  <TrendingPost />
  <!-- Tags -->
  <Tags />
</template>

<script>
  import RecentPost from './RecentPost.vue';
  import TrendingPost from './TrendingPost.vue';
  import Tags from './Tags.vue'
export default {
  components:{RecentPost, TrendingPost, Tags},
  props:['post']
}
</script>

<style>

</style>