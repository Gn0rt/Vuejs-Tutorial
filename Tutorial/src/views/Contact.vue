<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import TheWelcome from '@/components/WelcomeItem.vue';
const router = useRouter();

const count = ref(0);

</script>

<template>
    <h1>Contact Page</h1>
    <button @click="router.push({name: 'us'})">Redirect</button>
    <the-welcome :count="count"></the-welcome>
    <!-- <RouterView /> -->
</template>