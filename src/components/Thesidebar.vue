<template>
  <aside class="sidebar hidden md:block">
            <div class="bg-white">
            <h1 class="brand">
                <span class="brand-icon">😊</span>
                <span class="brand-name">Some Text Here!</span>
            </h1>
            <nav>
                <ul class="select-none">
                    <li>
                        <a href="" class="nav-item nav-item-active">
                            <span class="nav-item-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            </span>
                            <span class="nav-item-name">Home</span>
                        </a>
                    </li>
                    <li>
                        <label for="nav-toggle-sleep" class="nav-item cursor-pointer">
                            <span class="nav-item-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </span>
                            <span class="nav-item-name"> Some More Text</span>
                        </label>
                        <input type="checkbox" name="" class="subnav-toggle" id="nav-toggle-sleep">
                        <span class="hidden bg-gray-100">
                            <a href="" class="nav-sub-item">Get Ready</a>
                            <a href="" class="nav-sub-item">After sleep</a>
                        </span>
                    </li>
                </ul>
            </nav>
            </div>
        </aside>
</template>

<script>
export default {

}
</script>

<style>

</style>