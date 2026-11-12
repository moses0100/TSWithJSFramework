<script setup lang="ts">

  // ใช้ UseFetch เพื่อดึงข้อมูลจาก API (ขยันครบๆ)
  // const { data: users, status, error, refresh, clear } = await useFetch<User[]>('https://jsonplaceholder.typicode.com/users', {
  //   onRequest({ request, options }) {
  //     console.log('Data:', users)
  //     console.log('Status:', status.value)
  //   },
  //   onRequestError({ request, options, error }) {
  //     console.log('Request Error:', error)
  //   },
  //   onResponse({ request, response, options }) {
  //     console.log('Response:', response)
  //   },
  //   onResponseError({ request, response, options }) {
  //     console.log('Response Error:', response)
  //   }
  // })

  // console.log('users', users.value)

  // แบบง่ายๆ ขี้เกียจๆ
  const { data: users, status, error } = await useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  )

  // console.log('users', users.value)

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <div class="max-w-4xl w-full px-6 py-6 bg-white shadow-md rounded-lg">
        <h1 class="text-4xl text-green-500 my-2 text-center font-bold">User Page</h1>
        <p class="text-2xl">Hello: {{ $route.params.id }}</p>
        <h1 class="text-2xl text-center my-6">รายชื่อผู้ใช้งาน</h1>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap">{{ user.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<style scoped>

</style>