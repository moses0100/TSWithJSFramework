<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div class="max-w-2xl w-full px-6 py-6 bg-white shadow-md rounded-lg">
        <h1 class="text-4xl text-green-500 my-2 text-center font-bold">Category Page</h1>
        <p class="text-2xl" v-if="$route.params.slug">Category: {{ $route.params.slug }}</p>
        <p v-else>No Category</p>
      </div>
    </div>
</template>

<style scoped>

</style>