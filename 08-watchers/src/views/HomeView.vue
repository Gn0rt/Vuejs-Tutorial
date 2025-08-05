<script setup>
  import { watch, ref } from 'vue';

  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  //watch(source, callback)
  //theo dõi: tính phản ứng, reactivity, có sự tahy đổi
  watch(count, (newValue, oldValue) => {
    console.log(`Count changed from ${oldValue} to ${newValue}`);
  })

  const question = ref('');
  const isLoading = ref(false);
  const answer = ref('');
  const img  = ref('');
  watch(question, async (newQuestion, oldQuestion) => {
    console.log(`Question changed from "${oldQuestion}" to "${newQuestion}"`);
    if(newQuestion.includes('?')) {
      isLoading.value = true;
      answer.value = 'Đang suy nghĩ...';
      try{
        const response = await fetch('https://yesno.wtf/api');
        console.log(response);
        const data = await response.json();
        console.log(data);
        answer.value = data.answer;
        img.value = data.image;
      }catch(error) {
        answer.value = 'Error! Không thể call API';
        console.log("Error: ",error);
      }finally {
        isLoading.value = false;
      }
    }
  })

</script>

<template>
  <div class="about">
    <h1>Watchers</h1>
    <button @click="increment">Click!</button>
    

    <div>
      <p>Hỏi một câuu hỏi có thể trả lời Yes/No</p>
      <input v-model="question" type="text" :disabled="isLoading">
      <p>Answer: {{ answer }}</p>
      <img :src="img" alt="">
    </div>
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
