<script setup lang="ts">
    console.log("Footer 555");
</script>

<template>
    <footer>
        <p>&copy; 2025 My Website</p>
        <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
        </ul>
    </footer>
</template>

<style scoped>

    footer {
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: inline;
        margin-right: 20px;
    }
    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

</style>