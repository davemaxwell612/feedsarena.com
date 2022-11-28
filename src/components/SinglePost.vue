<template>  



<!-- <div class="flex-grow pb-3 pl-8"><p class="text-2xl">Technology Feeds</p></div> -->

    <div class="container pb-5 pt-5 mx-auto px-4">
    <div class="bg-white rounded-lg p-4">
      <div class="flex flex-wrap gap-x-24 mb-4">
<!-- =============================================Block Columns for the main posts =============================-->

            <div class="w-full lg:w-7/12 mb-2 p-1 md:pl-8">

              <div class="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6" v-for="post in post" :key="post.id">
               <div class="flex">
                 <div class="shrink-0">
                    <!-- <img class="scale-75 h-28 w-full object-cover md:h-full md:w-28" :src="post.cover" alt="Man looking at item at a store"> -->
                 </div>
                 <div class="pl-4 pt-2 mb-4">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">By Admin</div>
                    <router-link :to="{name: 'PostDetails', params:{id: post.id}}">
                    <h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline font-bold">{{post.title}}</h1>
                    </router-link>
                    <!-- <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work.</p>
                        <span class="text-sm text-slate-500">134,768 Views. posted Jun 19, 2022</span> -->
                 </div>
               </div>
              </div>
               <!-- <div class="max-w-md mx-auto bg-white hover:bg-gray-200 py-3  border-b border-gray-200 overflow-hidden md:max-w-2xl grid grid-cols-3 gap-4" v-for="post in post" :key="post.id">

                  <img class="h-28 w-full col-span-1 object-cover md:h-full md:w-48" :src="post.cover" alt="Man looking at item at a store">

                  <div class="col-span-2">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-light">Course</div>
                        <router-link :to="{name: 'PostDetails', params:{id: post.id}}">
                           <h1 class="block mt-1 text-lg leading-tight font-medium text-black hover:underline font-bold">{{post.title}}</h1>
                        </router-link>
                        <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work.</p>
                        <span class="text-sm text-slate-500">134,768 Views. posted Jun 19, 2022</span>
                  </div>

               </div> -->

            </div>

      
<!-- =========================================Sid Bar=================================== -->

         <div class="w-full md:w-1/2 lg:w-4/12 p-1 md:pr-8">
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