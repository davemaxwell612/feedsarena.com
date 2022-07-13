<template>
    <div class="Spin"></div>
</template>

<style>
    .Spin{
        display: block;
        margin: 30px auto;
        width: 40px;
        height: 40px;
        border: 3px solid transparent;
        border-radius: 50px;
        border-top-color: rgb(14, 90, 18);
        animation: spin 1s ease infinite;
    }

    @keyframes spin {

            to { transform: rotateZ(360deg) }
    }
</style>