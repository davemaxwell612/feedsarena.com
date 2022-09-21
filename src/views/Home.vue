<template>
  <div class="home">
    <div class="flex justify-end h-full">
        <input class="hidden" aria-hidden="true" checked="checked" type="checkbox" name="" id="sidebar-toggle">
        
        <!-- <Thesidebar /> -->
        <main class="content">
          <div class="bg-gray-200 main_section">
          <!-- <input type="text" placeholder="search" v-model="search"> -->
           <!-- <TrendingPosts /> -->
           <div v-if="error">{{error}}</div>

            <div v-if="posts.length">
              <PostList :posts="posts" />
           </div>

          <div v-else>
            <Spinner />
          </div>

        </div>
      </main>

    </div>
    <!-- Footer -->
    <Footer />
    
  </div>

  
</template>

<script>
  import {computed, ref} from 'vue'
// @ is an alias to /src
import PostList from '../components/PostList.vue'
import getPosts from '../Composibles/getPosts'
import TrendingPosts from '../components/TrendingPosts.vue'
import Thesidebar from '../components/Thesidebar.vue'
import Spinner from '../components/Spinner.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    PostList,
    TrendingPosts,
    Thesidebar,
    Spinner,
    Footer
},
  setup(){
    // const search = ref('')
    // const matchinPosts = computed (() =>{
    //   return posts.value.filter((posts) => posts.includes(search.value))
    // })
    const {posts, error, load} = getPosts()
    load();
    return{posts,error}
  }
}
</script>

<style>
    
.content{ width:100%}

@media (min-width: 768px) {

        #sidebar-toggle:checked + .sidebar {
        display: block;
        }

        #sidebar-toggle:checked ~ .content {
        flex-basis: 0;
        transition: flex-basis 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
        /* transition: flex-basis 0.2s ease-in-out; */
        }

        .brand {
        display: flex;
        align-items: center;
        color: #2d3748;
        font-weight: 600;
        padding: 1.25rem;
        justify-content: flex-end;
        }

        #sidebar-toggle:checked + .sidebar .brand {
        justify-content: flex-start;
        }

        .brand-icon {
        display: inline-block;
        width: 1.25rem;
        }

        #sidebar-toggle:checked + .sidebar .brand-icon {
        margin-right: 0.5rem;
        }

        .brand-name {
        display: none;
        }

        #sidebar-toggle:checked + .sidebar .brand-name {
        display: inline-block;
        }

        .nav-item {
        display: block;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-size: 0.875rem;
        color: #2d3748;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        position: relative;
        }

        .nav-item:hover,
        .nav-item-active {
        color: #ebf4ff;
        background-color: #667eea;
        }

        #sidebar-toggle:checked + .sidebar .nav-item {
        justify-content: flex-start;
        }

        .nav-item-name {
        display: none;
        }

        #sidebar-toggle:checked + .sidebar .nav-item-name {
        display: block;
        }

        .nav-item-icon {
        display: inline-block;
        width: 1rem;
        }

        #sidebar-toggle:checked + .sidebar .nav-item-icon {
        margin-right: 0.5rem;
        }

        .nav-sub-item {
        display: block;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        padding-left: 4rem;
        padding-right: 1.25rem;
        font-size: 0.875rem;
        color: #4a5568;
        }

        #sidebar-toggle:not(:checked) + .sidebar .nav-sub-item {
        padding-left: 1.25rem;
        }

        .nav-sub-item:hover {
        color: #ebf4ff;
        background-color: #667eea;
        }

        .nav-sub-item-active {
        font-weight: 600;
        color: #667eea;
        }

        .nav-sub-item-active:hover {
        color: #ebf4ff;
        }

        .sidebar {
        height: 100%;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 55px; 
        }

        .sidebar > div {
        height: 100%;
        overflow-y: inherit;
        width: 256px;
        height: 100vh;
        }

        .content {
        height: 100%;
        display: flex;
        min-height: 0;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        background-color: #f7fafc;
        overflow-y: inherit;
        flex-basis: calc(100% - 55px);
        transition: flex-basis 0.1s cubic-bezier(0.465, 0.183, 0.153, 0.946);
        /* transition: flex-basis 0.2s ease-in-out; */
        will-change: flex-basis;
        }

        .content > div {
        /* height: 100vh; */
        overflow-y: inherit;
        }

        .subnav-toggle {
        display: none;
        }

        .subnav-toggle:checked + span {
        display: block;
        }

        #sidebar-toggle + .sidebar .subnav-toggle:checked + span {
        display: none;
        }

        #sidebar-toggle:checked + .sidebar .subnav-toggle:checked + span {
        display: block;
        }

        .sidebar li > span {
        transition: visibility 200ms ease-out 0s, opacity 200ms ease-out 0s, transform 200ms ease-out 0s;
        }

        #sidebar-toggle:not(:checked) + .sidebar li > span {
        position: absolute;
        border-radius: 0.25rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        visibility: hidden;
        opacity: 0;
        overflow: hidden;
        left: 0;
        z-index: 9999;
        right: 0;
        width: 200px;
        }

        #sidebar-toggle:not(:checked) + .sidebar li:hover > span {
        display: block;
        visibility: visible;
        opacity: 1;
        transform: translateX(20px);
        }
    }
</style>