<script setup>
import { ref } from 'vue';
const todos = ref([
  { id: 1, text: 'Learn Vue.js', completed: false },
  { id: 2, text: 'Build a Todo App', completed: false },
  { id: 3, text: 'Deploy the App', completed: false }
]);
const newTodo = ref('');
const error = ref(false);
const handleCreateNewTodo = () => {
  if (newTodo.value.trim() === '') {
    error.value = true;
    return;
  } else {
    error.value = false;
  }
  todos.value.push({ id: todos.value.length + 1, text: newTodo.value, completed: false });
  newTodo.value = '';
}
const handleSuccess = (todo) => {
  todo.completed = true;
};

const handleDelete = (todo) => {
  todos.value = todos.value.filter(t => t.id !== todo.id);
}
console.log(newTodo.value);
</script>

<template>
  <h1>Todo</h1>
  <div>
    <div>
      <p class="error" v-if="error">Không được để trống</p>
      <input 
        type="text" 
        v-model="newTodo" 
        :class="{'error-input' : error}" 
        @input="error = false" 
        placeholder="Add a new todo" 
        @keyup.enter="handleCreateNewTodo"
        autofocus
      />
      <button class="btn" @click="handleCreateNewTodo">Add Todo</button>
    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <span v-if="todo.completed">- Completed</span>
        <button class="btn" :class="{'btn-del': todo.completed} " @click="todo.completed ? handleDelete(todo) :handleSuccess(todo)">{{ todo.completed ? "Xoá" : "Hoàn Thành" }}</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .btn {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px 4px 10px;
    cursor: pointer;
    &:hover {
      background-color: #45a049; /* Darker green */
    }
  }
   .btn-del {
      background-color: #f44336; /* Red */
      &:hover {
        background-color: #d32f2f; /* Darker red */
      }
    }
    .error {
      color: red;
      font-weight: bold;
      margin: 0;
      font-size: 12px;
      
    }
    .error-input {
      border: 2px solid red;
      outline: none;
      box-shadow: 0 0 5px rgba(255, 0, 0, 0.3);
    }
</style>
