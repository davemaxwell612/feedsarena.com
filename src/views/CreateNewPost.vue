<template>
  <div class="bg-green-50 py-32 px-10 min-h-screen ">
  
  <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">

    <form @submit.prevent="handleSubmit">

      <div class="flex items-center mb-5">
        <input v-model="tittle" type="text" id="name" name="name" placeholder="ENTER POST TITLE" 
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
            text-gray-600 placeholder-gray-400
            outline-none text-lg" required>
      </div>
  
    <div>
      <textarea v-model="body" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none resize-none" rows="12" placeholder="Your Post Content:" required ></textarea>
    </div>

    <div>
      <textarea v-model="metadata" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none resize-none" rows="3" placeholder="Enter a post description: this should give a brief overview of what your post is about" required></textarea>
    </div>

    <!-- <div class="inline-block relative w-64">
      <select v-model="tags" class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" required>
        <option>Select a Tag</option>
        <option>Education</option>
        <option>Jobs</option>
        <option>Howto</option>
      </select>
      
    </div> -->

    <div class="flex items-center mb-5">
        <input v-model="cover" type="text" id="name" name="name" placeholder="enter post cover" 
            class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
            text-gray-600 placeholder-gray-400
            outline-none text-lg" required>
      </div>

  <div class="flex items-center mb-5">
    <input 
        type="text" 
        placeholder="Press enter to add a tag"
        v-model="tag"
        @keydown.enter.prevent="handleKeydown"
        >
        <div v-for="tag in tags" :key="tag"> #{{ tag }}</div>
  </div>
    
  <div class="mt-8">
     <input type="file" class=" text-gray-700 px-3 py-2 border rounded">
  </div>

    <div class="text-right">
        <button class="py-3 px-8 bg-green-400 text-white font-bold">Publish Post</button> 
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'
import { useRouter } from 'vue-router'
export default {
  setup() {
     const tittle = ref('')
     const body = ref('')
     const cover = ref('')
     const metadata = ref('')
     const tag = ref('')
     const tags = ref([])
     
     const router = useRouter()

     const handleKeydown = () => {
      if(!tags.value.includes(tag.value))  {
          tag.value = tag.value.replace(/\s/, '')
          tags.value.push(tag.value)
      }
      tag.value = ''
     }
    
    const handleSubmit = async () =>{

      const post = {
        title: tittle.value,
        body: body.value,
        cover: cover.value,
        metadata: metadata.value,
        tags: tags.value
      }

      const res = await projectFirestore.collection('posts').add(post)

      router.push({name: 'Home'})

  }

  return { tittle, body, cover, metadata, tags, tag, handleKeydown, handleSubmit}
  }
  
}
</script>

<style>

</style>