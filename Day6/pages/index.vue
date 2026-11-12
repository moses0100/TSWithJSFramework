<script setup lang="ts">

  useHead({
    title: 'Home - Nuxt Framework',
    meta: [
      {
        name: 'description',
        content: 'Home page of Nuxt 3 application'
      },
      { 
          name: 'keywords', 
          content: 'nuxt, vue, javascript, web development'
      },
    ]
  })

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div class="max-w-2xl w-full px-6 py-6 bg-white shadow-md rounded-lg">
        <h1 class="text-4xl text-green-500 my-2 text-center font-bold underline animate-bounce">Hello Next 3</h1>
        <p class="text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ut deserunt dignissimos inventore, vero saepe recusandae aliquam nihil consectetur, libero numquam obcaecati, mollitia tempore aut quod corrupti rem quaerat sequi?</p>
      </div>
    </div>
</template>