<template>
  <div class="bg-gray-200 p-8">
    <input class="p-2 rounded" type="text" placeholder="Search" v-model="search">
  </div>
    
    <p>{{search}}</p>
  <p class="pl-6" v-for="name in matchingNames" :key="name">{{name}}</p>
</template>

<script>
  import {computed, ref} from 'vue'
export default {

  setup(){
    const search = ref('')
    const names = ref(['David', 'Damian', 'Demon', 'James', 'Jacobs', 'John', 'Samuel', 'Mary'])

    const matchingNames = computed(()=>{
      return names.value.filter((name)=> name.includes(search.value))
    })

    return {names, search, matchingNames}
  }
}
</script>

<style>

</style>