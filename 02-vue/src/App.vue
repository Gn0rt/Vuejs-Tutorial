<script setup>
import { ref, reactive } from 'vue';
const isLoggedIn = ref(false);
const log = () => {
  isLoggedIn.value = !isLoggedIn.value;
};

const userStatus = ref('online');
const changeStatus = () => {
  if(userStatus.value === 'online') {
    userStatus.value = 'away';
  }else if (userStatus.value === 'away') {
    userStatus.value = 'busy';
  } else if (userStatus.value === 'busy') {
    userStatus.value = 'online';
  }
}

const isVisible = ref(true);
const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
}

const shoppingItems = ref([
  {name: 'Apple', price: 7},
  {name: 'Banana', price: 5},
  {name: 'Orange', price: 12},
])
const user = ref({
  firstName: 'Trong',
  lastName: 'Bui'
});
const users = ref([
{
  firstName: 'Trong',
  lastName: 'Bui',
  age: 22,
  isActive: true
},
{
  firstName: 'Nam',
  lastName: 'Bui',
  age: 30,
  isActive: true
},
{
  firstName: 'Khuong',
  lastName: 'Bui',
  age: 55,
  isActive: false
}
]);
</script>

<template>
  <h1>02 - vue</h1>

  <h3 v-if="isLoggedIn">Chào mừng người dùng đã đăng nhập!</h3>
  <h3 v-else>Chào mừng khách!</h3>
  <button @click="log">{{ isLoggedIn ? "Đăng xuất" : "Đăng nhập" }}</button>
  <div :style="{marginTop: '20px'}">
    <h2>V-if - Thay đổi hẳn phần tử trong DOM</h2>
    <p v-if="userStatus === 'online'">Người dùng đang online</p>
    <p v-else-if="userStatus === 'away'">Người dùng đang vắng mặt</p>
    <p v-else-if="userStatus === 'busy'">Người dùng đang bận</p>
    <p v-else>Không rõ trạng thái</p>
    <button @click="changeStatus">Thay đổi trạng thái</button>
  </div>

  <div :style="{marginTop: '20px'}">
    <h2>V-show - Chỉ ẩn hiện các phần tử như "display:none"</h2>
    <p v-show="isVisible">Nội dung này ẩn hoặc hiển thị</p>
    <button @click="toggleVisibility">{{ isVisible ? "Ẩn" : "Hiện" }}</button>
  </div>


  <div :style="{marginTop: '20px'}">
    <h2>V-for</h2>
    <ul>
      <li v-for="item in shoppingItems" :key="item.name">
        {{ item.name }} - {{ item.price }}$
      </li>
    </ul>

    <span v-for="n in 10" :key="n">{{ n }}</span>

    <ul>
      <li v-for="(value, key, index) in user" :key="key">
        {{ key }} : {{ value }} (Index: {{ index }})
      </li>
    </ul>

    <ul>
      <template v-for="(user, index) in users">
        <li v-if="user.isActive" :key="user.firstName">
          {{ user.firstName + " " + user.lastName }} - {{ user.isActive ? "Active" : "Inactive" }}
        </li>
      </template>
      
    </ul>
  </div>

</template>


