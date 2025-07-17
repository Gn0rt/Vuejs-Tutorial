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

  const text = ref("");
  const checked = ref(true);
  console.log("re-render");
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

  <div>
    <p>Text : {{ text }}</p>
    <input type="text" v-model="text" />
  </div>

  <div>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
  </div>
  <p>
    {{ c.title }} by {{ c.author }}
  </p>
</template>

<style scoped>
  h1 {
    color: red;
  }
</style>
