<template>  

<!-- <div class="flex-grow pb-3 pl-8"><p class="text-2xl">Technology Feeds</p></div> -->

    <div class="container pb-5 pt-5 mx-auto px-4">
    <div class="bg-white rounded-lg p-4">
      <div class="flex flex-wrap gap-x-10 mb-4">
<!-- =============================================Block Columns for the main posts =============================-->

            <div class="w-full lg:w-7/12 mb-2 p-1">

              <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6" v-for="post in post" :key="post.id">
               <div class="flex">
                 <div class="shrink-0">
                    <img class="h-28 w-full object-cover md:h-full md:w-28" src="../assets/img.png" alt="Man looking at item at a store">
                 </div>
                 <div class="pl-4 pt-2">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">By Admin</div>
                    <router-link :to="{name: 'PostDetails', params:{id: post.id}}">
                    <h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline font-bold">{{post.title}}</h1>
                    </router-link>
                    <!-- <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work.</p> -->
                 </div>
               </div>
              </div>

            </div>

      
<!-- =========================================Sid Bar=================================== -->

         <div class="w-full md:w-1/2 lg:w-4/12 p-1">
         <div class="grid grid-rows">
            
            <FrontSideBar />
            
         </div>
    </div>
      
   </div>

   </div>
</div>


</template>

<script>

import FrontSideBar from '../components/FrontSideBar.vue'
import { computed } from '@vue/reactivity'

export default {
 components:{FrontSideBar},
 props:['post'],

  setup (props) {

     const snippet = computed (() => {
        return props.post.title.sbstring(0,100) + '...'
     })
     return{snippet}
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