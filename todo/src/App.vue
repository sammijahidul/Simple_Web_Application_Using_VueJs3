<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow-md h-12 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
        Home
      </router-link>
      <div class="felx items-center gap-1"> 
        <RouterLink to="/" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Search Meals

        </RouterLink>
        <RouterLink to="/" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Meals by letters
          
        </RouterLink>
        <RouterLink to="/" class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100">
          Meals by Ingreditens
          
        </RouterLink>
      </div>

    </header>
    <main>
      <router-view />

    </main>
  </div>
 

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';


</script>

<style scoped>

</style>



  <!-- <div class="user text-center">
    <div class="info mb-2">
      <div class="name mt-2 p-2 rounded-full">
        <label v-if="users.length > 0">
          Fajr: {{ formatTime(users[0]?.timings?.Fajr) }}<br>
          Sunrise: {{ formatTime(users[0]?.timings?.Sunrise) }}<br>
          Dhuhr: {{ formatTime(users[0]?.timings?.Dhuhr) }}<br>
          Asr: {{ formatTime(users[0]?.timings?.Asr) }}<br>
          Maghrib: {{ formatTime(users[0]?.timings?.Maghrib) }}<br>
          Isha: {{ formatTime(users[0]?.timings?.Isha) }}
        </label>
        <label v-else>Loading...</label>
      </div>
    </div>
  </div> -->
