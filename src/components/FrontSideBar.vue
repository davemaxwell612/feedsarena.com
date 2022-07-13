<template>
  <div class=" w-full w-3/4 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
    
    <div class="bg-gray-200 text-gray-700 text-lg px-2 py-4">Tags</div>
           
    <div class="flex justify-between items-center px-2 py-2">
      <div class="bg-orange-600 text-xs uppercase  text-gray-400 font-bold">#tag</div>
      <div class="px-2 py-1 rounded-full border border-gray-200 text-sm">1988</div>
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