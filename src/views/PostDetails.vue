<template>
    <!-- <h1>Current Post You Are reading</h1> -->
    
    
    <div class="container pb-5 pt-5 mx-auto px-4">
    <div class="bg-white rounded-lg p-4">
      <div class="flex flex-wrap gap-x-10 mb-4">
<!-- =============================================Block Columns for the main posts =============================-->

            <div class="w-full lg:w-7/12 mb-2 p-1">
                <div v-if="error">{{error}}</div>
                <div v-if="post">
                    <h1 class="text-4xl font-medium leading-tight">{{post.title}}</h1>
                    <img class="object-contain md:object-scale-down" :src="post.cover" alt="Man looking at item at a store">
                    <p class="leading-9 subpixel-antialiased">{{post.body}}</p>
                </div>

               <div v-else>
                   <Spinner />
               </div>     
                
            <div class="grid grid-flow-col auto-cols-max gap-4 mt-5">
                <div class="bg-gray-200 text-gray-700 px-2 py-2" v-for="tag in post.tags" :key="tag">
                    <span class="font-semibold"> #{{tag}}</span>
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

import getPost from '../Composibles/getPost'
import FrontSideBar from '../components/FrontSideBar.vue'
import Spinner from '../components/Spinner'
import { useRoute } from 'vue-router'

export default {

components:{FrontSideBar, Spinner},

    props:['id'],

    setup(props){
        const route = useRoute()
        const {post, error, load} = getPost(route.params.id)

        load()

        return {post, error}
    }
}
</script>