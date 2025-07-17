<script setup>
import { reactive, ref } from 'vue';
// ref sử dụng một đối tượng và một thuộc tính
  const count = ref(0);
  
  //reactive sử dụng một object và nhiều thuộc tính

  const c = reactive({
    title: "VueJS 3",
    author: "Gnort"
  });
  function increment() {
    count.value += 1;
  }

  const a = reactive([
    { id: 1, name: "Nguyen Van A" },
    { id: 2, name: "Nguyen Van B" },
    { id: 3, name: "Nguyen Van C" }
  ]);

  console.log(a[0].name);
  console.log(a[1].name);
  console.log(a[2].name);

  console.log(a);
</script>

<template>
  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div> -->
  <h1>This count is {{ count }}</h1>
  <button @click="increment">
    Increment
  </button>
  <p>
    {{ c.title }} by {{ c.author }}
  </p>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>
