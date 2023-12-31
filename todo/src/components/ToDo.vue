<script setup>
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn Vue' },
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    
    <div>
      <form @submit.prevent="addTodo" class="flex items-center space-x-2">
        <input class="grid border p-2" type="text" v-model="newTodo" placeholder="type here to add">
        <button class="px-4 py-2 bg-blue-500 text-white">Add Todo</button>
      </form>
      <ul class="mt-4">
        <li v-for="todo in todos" :key="todo.id" class="flex items-center space-x-2 mb-2">
          <input type="checkbox" value="key" class="border">
          <span>{{ todo.text }}</span>
          <button @click="editTodo(todo)" class="bg-yellow-500 text-white px-2 py-1">Edit</button>
          <button @click="removeTodo(todo)" class="bg-red-500 text-white px-2 py-1">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>


<!-- <div class="user text-center" >
  <div class="info mb-2">
    <div class="name mt-2 p-2 rounded-full">
      <label v-if="users.length > 0">
        Fajr: {{ users[0]?.timings?.Fajr }}<br>
        Sunrise: {{ users[0]?.timings?.Sunrise }}<br>
        Dhuhr: {{ users[0]?.timings?.Dhuhr }}<br>
        Asr: {{ users[0]?.timings?.Asr }}<br>
        Maghrib: {{ users[0]?.timings?.Maghrib }}<br>
        Isha: {{ users[0]?.timings?.Isha }}
      </label>
      <label v-else>Loading...</label>
    </div>
    <div class="email ">
      <label>Email: {{ user.email }}</label>
    </div> -->
    
  <!-- </div>
</div>  -->

<!-- import { onMounted, ref } from 'vue';
import axios from 'axios';

const users = ref([]);

// get posts
const getPosts = async () => {
  try {
    const response = await axios.get("https://api.aladhan.com/v1/calendarByCity/2017/4?city=London&country=United%20Kingdom&method=2");
    users.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  const bstTime = new Date(2023, 0, 1, parseInt(hours), parseInt(minutes), 0);
  const formattedTime = bstTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  return formattedTime;
};

onMounted(() => {
  getPosts();
}); -->