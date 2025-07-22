<script setup>
import { computed, reactive, ref } from 'vue';
const message = 'Hello, Vue!';
const rawHtml = '<span style="color: red">This should be red.</span>'
const btnId = 'button-id';
const isDisabled = true;
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: {
    color: 'blue',
  }
}
const listString = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
const convert = (value) => {
  return value.split(",").reverse().join("-");
}
const count = ref(0);
const double = computed(() => count.value * 2);
const a = count.value * 3;
console.log("double: ",double.value);
console.log("count: ",count.value);
console.log("a: ", a);
function increment() {
  count.value++;

  console.log("double: ",double.value);
  console.log("count: ",count.value);
  console.log("a: ", a);
}
  if(count.value > 0) {
    console.log("count is positive");
  }
const obj = ref({
  count:2 ,
  user : {
    name: "Trong",
    age: 22
  },
  array: [1, 2, 3, 4, 5]
})
const change = () => {
 obj.value.count++;
 obj.value.user.age++;
}
const obj2 = reactive({
  count:3,
  user : {
    name: "Gnort",
    age: 18
  },
  array: [1, 2, 3, 4, 5]
})
const change2 = () => {
  obj2.count++;
  obj2.user.age++;
}
</script>

<template>
  <h1>Syntax Vue</h1>
  <p>Message: {{ message }}</p>
  <p>Using text interpolation: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  <button :id="btnId" :disabled="isDisabled">{{ isDisabled ? "Disabled" : "Click here" }}</button>
  <div v-bind="objectOfAttrs">
    This div has dynamic attributes.
  </div>
  <p>Old String is: {{ listString }}</p>
  <p>String is: {{ listString.split(",").join("-") }}</p>
  <p>Use function convert: {{ convert(listString) }}</p>

  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button @click="increment">increment</button>
  </div>

  <div>
    <p>Object: {{ obj }}</p>
    <p>Count in object: {{ obj.count }}</p>
    <p>User name: {{ obj.user.name }}</p>
    <p>User age: {{ obj.user.age }}</p>
    <p>Array: {{ obj.array }}</p>
    <button @click="change">Increase</button>
  </div>
  
  <div>
    <p>Object: {{  obj2 }}</p>
    <p>Count in object: {{  obj2.count }}</p>
    <p>User name: {{  obj2.user.name }}</p>
    <p>User age: {{  obj2.user.age }}</p>
    <p>Array: {{  obj2.array }}</p>
    <button @click="change2">Increase</button>
  </div>
</template>

<style scoped>

</style>
