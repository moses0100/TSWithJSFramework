<script setup lang="ts">
    const route = useRoute()
    const slug = route.params.slug as string[]
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div class="max-w-2xl w-full px-6 py-6 bg-white shadow-md rounded-lg">
        <h1 class="text-4xl text-green-500 my-2 text-center font-bold">Backend Page</h1>
        <p class="text-2xl">Backend: {{  $route.params.slug }}</p>
        <ul>
            <li v-for="(item, index) in slug" :key="index" class="text-xl text-gray-700 my-2">Item {{ index + 1 }}: {{ item }}</li>
        </ul>
      </div>
    </div>
</template>

<style scoped>

</style>