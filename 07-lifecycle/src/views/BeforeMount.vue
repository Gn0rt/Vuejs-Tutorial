<script setup>

import { ref,onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

const time = ref(0);
let intervalId = null;

onBeforeMount(() => {
    console.log("OnbeforeMount");
})

onMounted(()=> {
    console.log("OnMounted");
    intervalId = setInterval(() => {
        time.value++;
    }, 1000);
})

onBeforeUnmount(()=> {
    console.log("OnBeforeUnmount");
    clearInterval(intervalId);
})

onUnmounted(()=> {
    console.log("OnUnmounted");
  
})

</script>

<template>
  <div class="about">
    <h1>Time: {{ time }}</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
