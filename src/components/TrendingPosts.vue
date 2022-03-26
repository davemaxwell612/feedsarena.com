<template>
    <header class="flex items-center justify-between flex-wrap w-full p-5">
        <label role="button" for="sidebar-toggle" class="mt-2 mr-4 cursor-pointer hidden md:inline-block">
            <span class="inline-block w-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            </span>
        </label>
        <div class="flex-grow"><p class="text-2xl">Top Trends on Feedspot Today</p></div>
    </header>
    
    <div class="px-5 pb-2 container">
    <div class="bg-white rounded-lg p-4 auto-cols-max justify-center">
        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">

        <div class="trending">
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src="../assets/img.png" alt="post img">
            </div>
            <div>
                <div class="text-xl font-medium text-black">The Latest News...</div>
                <p class="text-slate-500">Read this if you want to!</p>
            </div>
            </div>
        </div>

        <div class="trending">
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src="../assets/img.png" alt="post img">
            </div>
            <div>
                <div class="text-xl font-medium text-black">The Latest News...</div>
                <p class="text-slate-500">Read this if you want to!</p>
            </div>
            </div>
        </div>

        <div class="trending">
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src="../assets/img.png" alt="post img">
            </div>
            <div>
                <div class="text-xl font-medium text-black">The Latest News...</div>
                <p class="text-slate-500">Read this if you want to!</p>
            </div>
            </div>
        </div>

        <div class="trending">
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src="../assets/img.png" alt="post img">
            </div>
            <div>
                <div class="text-xl font-medium text-black">The Latest News...</div>
                <p class="text-slate-500">Read this if you want to!</p>
            </div>
            </div>
        </div>
        
        <div class="trending">
            <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src="../assets/img.png" alt="post img">
            </div>
            <div>
                <div class="text-xl font-medium text-black">The Latest News...</div>
                <p class="text-slate-500">Read this if you want to!</p>
            </div>
            </div>
        </div>
                    
        </div>
     </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>