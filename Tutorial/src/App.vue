<script setup>
  import { RouterLink, RouterView } from 'vue-router';  
  import WelcomeItem from './components/WelcomeItem.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <!-- <div class="wrapper">
       <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div> -->
  </header>
  <!-- <RouterView /> -->

  <WelcomeItem />




  
</template>

<style scoped>

</style>
