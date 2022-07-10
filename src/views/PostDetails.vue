<template>
    <!-- <h1>Current Post You Are reading</h1> -->
    
    
    <div class="container pb-5 pt-5 mx-auto px-4">
    <div class="bg-white rounded-lg p-4">
      <div class="flex flex-wrap gap-x-10 mb-4">
<!-- =============================================Block Columns for the main posts =============================-->

            <div class="w-full lg:w-7/12 mb-2 p-1">

                <div v-if="post">
                    <h1 class="text-4xl font-medium leading-tight">{{post.title}}</h1>

                    <p class="leading-9 subpixel-antialiased">{{post.body}}</p>
                </div>

                <div v-else>
                <!-- <p class="title-5 red-500" color="red">{{error}}</p> -->
                    <Loader color="green" scale="0.6" />
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
import Loader from '../components/Loader.vue'

export default {

components:{FrontSideBar, Loader},

    props:['id'],

    setup(props){

        const {post, error, load} = getPost(props.id)

        load()

        return {post, error}
    }
}
</script>