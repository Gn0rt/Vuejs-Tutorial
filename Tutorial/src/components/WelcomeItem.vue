<script setup>
import { onMounted, ref } from 'vue';
const count = ref(0);
function increment() {
  count.value++;
}

onMounted(()=> {
  console.log("So lần nhấp ban đầu là ", count.value);
})
</script>
<template>
  <h1>Welcome Item</h1>
  <button @click="increment">Số lần nhấp {{ count }}</button>
</template>

<style scoped>

</style>
