<script setup>
  import { watch, ref, reactive } from 'vue';

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

  const x = ref(0);
  const y = ref(0);
  watch(() => x.value + y.value, async(sum) => {
    // console.log(`Sum: ${sum}`);
  })
  const incrementXY = () => {
    x.value++;
    y.value++;
  }

  watch([x, () => y.value + 1], async([newX, newY]) => {
    console.log(`x: ${newX}, y: ${newY}`);
  })
  const user = reactive({
    class: {
      students: 0,
      name: 'Nguyen Van A',
      age: 18
    }
  })

  watch(user, (user) => {
    console.log(`User changed: ${JSON.stringify(user)}`);
  }, {deep: true, immediate: true});

  const changeUser = () => {
    user.class.students++;
  }
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

    <div>
      <h1>Các loại source của watch</h1>
      <p>Getter function, mảng</p>
      <p>Sum of x: {{ x }} and y: {{ y }} = {{ x + y }}</p>
      <button @click="incrementXY">Increment</button>


      <p>Deep: theo dõi sâu (arr, object lồng nhau)</p>
      <div>
        <p>Class: {{ user.class.name }}</p>
        <p>Students: {{ user.class.students }}</p>
        <p>Age: {{ user.class.age }}</p>
        <p>JSON: {{ JSON.stringify(user) }}</p>
      </div>
      <button @click="changeUser">Change user</button>
      
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
