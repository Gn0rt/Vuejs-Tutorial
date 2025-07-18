<script setup>
const props = defineProps(['count']);
</script>

<template>
  <h1>The Welcome</h1>
  <p>This count is: {{ props.count }}</p>
</template>
