<script setup>
import { onMounted, ref } from 'vue';
const inputRef = ref(null);

onMounted(() => {
  inputRef.value.focus();
});
console.log(inputRef);
</script>

<template>
<h1>Template Refs</h1>
<input ref="inputRef" type="text">
</template>
