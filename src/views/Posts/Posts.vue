<template>  

<div class="flex-grow pb-3 pl-6"><p class="text-2xl">Technology Feeds</p></div>

    <div class="px-5 pb-8 container">
    <div class="bg-white rounded-lg p-4">
      <div class="flex flex-wrap mb-4">
<!-- =============================================Block Columns for the main posts =============================-->

            <div class="w-full lg:w-3/4 mb-7 p-1">

              <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6" v-for="post in posts" :key="post.id">
               <div class="flex">
                 <div class="shrink-0">
                    <img class="h-28 w-full object-cover md:h-full md:w-28" src="../../assets/img.png" alt="Man looking at item at a store">
                 </div>
                 <div class="pl-4 pt-2">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{{post.cat}}</div>
                    <router-link :to="{name: 'SinglePost', params:{id: post.id}}">
                    <h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline font-bold">{{post.title}}</h1>
                    </router-link>
                    <!-- <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work.</p> -->
                 </div>
               </div>
              </div>

            </div>

      
<!-- =========================================Sid Bar=================================== -->

         <div class="w-full md:w-1/2 lg:w-1/4 p-6">
         <div class="grid grid-rows">
            <div class="trending">
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <!-- <div class="shrink-0">
                <img class="h-12 w-12" src="../assets/img.png" alt="post img">
            </div> -->
            <div>
                <div class="text-xl font-medium text-black">The Latest News...</div>
                <p class="text-slate-500">Read this if you want to!</p>
            </div>
            </div>
        </div>
        
         </div>
    </div>
      
   </div>

   </div>
</div>

</template>

<script>

import getPosts from '../../components/Composibles/getPosts'

export default {
 
 props:['post'],

  setup () {

     const {error, posts, load} = getPosts()

      load()

     return {posts, error}

  }
   
}
</script>

<style>

</style>

/*
https://v1.tailwindcss.com/components/flexbox-grids
https://codepen.io/ScottWhittaker/pen/vrymgg
https://tailwind-elements.com/docs/standard/components/carousel/
/*