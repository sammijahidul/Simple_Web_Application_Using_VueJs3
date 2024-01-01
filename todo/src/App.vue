<template>
    <router-view />
</template>

<script setup>
import { RouterView } from 'vue-router';

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
