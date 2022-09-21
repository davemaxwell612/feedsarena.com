<template>
  <div class=" w-full w-3/4 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
    
<div class="flex justify-between bg-gray-200 text-gray-700 text-lg px-2 py-4">
  <div >Tags</div>
  <div class="mr-2">Posts</div>
</div>           
    <div class="flex justify-between items-center px-2 py-2">
      <div class="tagtitle">
        <div class="bg-orange-600 text-xs uppercase mb-4 text-gray-400 font-bold">#Education</div>
        <div class="bg-orange-600 text-xs uppercase mb-4 text-gray-400 font-bold">#Jobs</div>
        <div class="bg-orange-600 text-xs uppercase mb-4 text-gray-400 font-bold">#HowTo</div>
      </div>
      <div class="postcount">
        <div class="px-2 py-1 rounded-full mb-2 border border-gray-200 text-sm">19886</div>
        <div class="px-2 py-1 rounded-full mb-2 border border-gray-200 text-sm">19687</div>
        <div class="px-2 py-1 rounded-full mb-2 border border-gray-200 text-sm">678</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['post']
}
</script>

<style>

</style>