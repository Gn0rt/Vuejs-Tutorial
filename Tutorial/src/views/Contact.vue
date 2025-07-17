<script setup>
import { useRouter } from 'vue-router';


    const router = useRouter();

</script>

<template>
    <h1>Contact Page</h1>
    <button @click="router.push({name: 'us'})">Redirect</button>

    <!-- <RouterView /> -->
</template>