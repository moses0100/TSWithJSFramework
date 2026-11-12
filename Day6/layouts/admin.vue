<script setup lang="ts">
    import Header from '@/components/admin/Header.vue'
    import Sidebar from '@/components/admin/Sidebar.vue'
    import Footer from '@/components/admin/Footer.vue'
</script>

<template>
    
    <div class="flex flex-col h-screen bg-gray-100">
        <Header />
        <div class="flex flex-1">
            <Sidebar />
            <main class="flex-1 p-4">
                <slot />
            </main>
        </div>
        <Footer />
    </div>

</template>

<style scoped>

</style>