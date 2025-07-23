<script setup>
const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Deploy the App', completed: false }
]);
</script>

<template>
  <h1>Todo</h1>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }} -
        <span v-if="todo.completed">Completed</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
