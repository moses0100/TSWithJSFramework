<script setup lang="ts">
    
</script>

<template>
    <nav class="bg-white shadow-md px-4 py-2">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo on the left -->
            <div class="flex items-center">
                <NuxtLink to="/" class="flex items-center">
                    <img src="/images/mylogo.png" alt="Logo" class="h-8 w-auto mr-2" />
                    <span class="font-bold text-xl text-gray-800">NuxtJS</span>
                </NuxtLink>
            </div>
            
            <!-- Menu items on the right -->
            <ul class="flex space-x-6">
                <li>
                    <NuxtLink 
                        to="/" 
                        class="hover:text-orange-600"
                        exact-active-class="text-orange-600 font-bold">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/about" 
                        class="hover:text-orange-600"
                        exact-active-class="text-orange-600 font-bold">
                        About
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/contact" 
                        class="hover:text-orange-600"
                        exact-active-class="text-orange-600 font-bold">
                        Contact
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/users/john" 
                        class="hover:text-orange-600"
                        exact-active-class="text-orange-600 font-bold">
                        User
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/category" 
                        class="hover:text-orange-600"
                        exact-active-class="text-orange-600 font-bold">
                        Category
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/backend/dashboard/recent/posts/1" 
                        class="hover:text-orange-600"
                        exact-active-class="text-orange-600 font-bold">
                        Backend
                    </NuxtLink>
                </li>
            </ul>

        </div>
    </nav>
</template>

<style scoped>
    /* Any custom styles can go here */
</style>