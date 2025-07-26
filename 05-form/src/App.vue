<script setup>
import { ref, reactive } from 'vue';

const text = ref('none');
const handleInput = (e) => {
  console.log(e)
  text.value = e.target.value;
};

const multiline = ref('');

const checked = ref([]);
const picked = ref('None');
const selected = ref('None');
const pickedOptions = reactive([
  { id: 'one', value: 'One' },
  { id: 'two', value: 'Two' },
  { id: 'three', value: 'Three' }
]);

const selectedOptions = reactive([
  { id: 'A', value: 'A' },
  { id: 'B', value: 'B' },
  { id: 'C', value: 'C' }
]);

const multipleCheck = ref('')

</script>

<template>
  <h1>05 - Form Input Bindings</h1>
  <p>Text: {{ text }}</p>
  <input type="text" :value="text" @input="handleInput">
  <!-- use v-model  -->
  <input type="text" v-model="text">

  <p>MultiLine Text: {{ multiline }}</p>
  <textarea v-model="multiline" placeholder="Your message here"></textarea>

  <div>
    <h1>Checkbox, radio, select</h1>
    <div>
      <p>Checkbox : {{ checked }}</p>
      <input type="checkbox" id="jack" value="Jack97" v-model="checked">
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checked">
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checked">
      <label for="mike">Mike</label>
    </div>

    <div>
      <p>Picked (radio) : {{ picked }}</p>
      <input type="radio" id="one" :value="'first'" v-model="picked">
      <label for="one">MTP</label>

      <input type="radio" id="two" :value="'second'" v-model="picked">
      <label for="two">Jack</label>

      <!-- use for -->
       <h4 :style="{margin: '10px 0'}">Use v-for</h4>
       <div v-for="option in pickedOptions" :key="option.id">
        <input type="radio" :id="option.id" :value="option.value" v-model="picked">
        <label :for="option.id">{{ option.value }}</label>
       </div>
    </div>

    <div>
      <p>Select: {{ selected }}</p>
      <select v-model="selected">
        <option disabled :value="{selected}">Please select one</option>
        <option v-for="op in selectedOptions" :key="op.id">
          {{ op.value }}
        </option>
      </select>
    </div>

  </div>

  <div>
    <h1>Multiple</h1>
    <div>
      <p>Checkbox: {{ multipleCheck }}</p>
      <input 
        type="checkbox"   
        v-model="multipleCheck"
        true-value="Yes"
        false-value="No"
      >
        
    </div>
    <div>
      <div>Selected: {{ selected }}</div>
        <select v-model="selected">
          <option :value="{'name': 'A'}">A</option>
          <option :value="{'name': 'B'}">B</option>
          <option :value="{'name': 'C'}">C</option>
        </select>
    </div>
  </div>

  <div>
    <h1>Modifiers v-model</h1>
    <p>Text: {{ text }}</p>
    <p>Type of text: {{ typeof text }}</p>
    <input type="text" v-model.lazy="text">

    <!-- tự động chuyển sang dạng number -->
    <input type="text" v-model.number="text">



  </div>
</template>

<style scoped>

</style>
