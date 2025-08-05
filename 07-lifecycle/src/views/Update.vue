<script setup>

import { ref, onUpdated, onBeforeUpdate } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

onBeforeUpdate(() => {
    console.log('On Before Update, Count = ', document.getElementById('count').textContent);
})

onUpdated(() => {
    console.log('On Updated, Count = ', document.getElementById('count').textContent);
});


</script>

<template>
  <div class="about">
    <h1 id="count">Count: {{ count }}</h1>
    <button @click="increment">
        Click
    </button>
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
