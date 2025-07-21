<script setup>

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
</template>

<style scoped>

</style>
