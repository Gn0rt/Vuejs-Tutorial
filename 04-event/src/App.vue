<script setup>

import { ref, reactive } from 'vue';
const count = ref(0);


const greet = (e) => {
  console.log(e.target);
  alert('Hello World');
}

const sayHi = (name) => {
  alert(`Hi ${name}`);
}
const sayHi2 = (name) => {
  alert(`Hi ${name}`);
}

const submit = () => {
  alert('Submitted');
}
</script>

<template>
  <h1>Xử lý sự kiện - event handling</h1>
  <p>Count: {{ count }}</p>
  <!-- <button v-on:click="count++">Tăng</button> -->
  <button @click="greet">Chào</button>
  <button @click="sayHi('Trong')">Say hi</button>

  <div>
    <h2>Event có đối số</h2>
    <button @click="sayHi('B')">
      <button @click.stop="sayHi2('C')">Click 2</button>
      Click 1
    </button>

    <form @submit.prevent="submit" action="">
      <button type="submit">Submit</button>
    </form>

    <div :style="{marginTop: '10px'}">
      <button @click.self="sayHi('B')">
        <button @click.self="sayHi2('C')">Click 2</button>
        Click 1
      </button>
    </div>
  </div>


</template>

<style scoped>

</style>
