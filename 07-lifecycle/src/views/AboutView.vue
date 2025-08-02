<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const time = ref(0);
let intervalId = null;

const startInterval = () => {
intervalId = setInterval(()=>{
    time.value++
    if(time.value === 10) {
      console.log('đạt 15s, dừng interval');
      clearInterval(intervalId);
    }
  },1000);
} 
//khi chuyển qua tab about, onmounted hoạt động
onMounted(()=>{
  console.log('on mounted');
  startInterval();
});

//khi thoát khỏi tab about, un monted xoá sự kiện,...
onUnmounted(()=> {
  console.log('on unmounted')
  clearInterval(intervalId);
})

const resetTime = () => {
  if(intervalId) {
    clearInterval(intervalId);
  }
  //đặt lại thời gian
  time.value = 0;

  //bắt đầu chạy lại
  startInterval();

}


</script>

<template>
  <div class="about">
    <h1>Timer: {{ time }}</h1>
    <button @click="resetTime">Reset Time</button>
  </div>
</template>


