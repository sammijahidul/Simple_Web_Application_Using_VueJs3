<template>
    <div class="flex flex-col p-8 ">
        <div>
            <input type="text" class="rounded border-2 border-gray-200 w-full" 
            placeholder="search for meals"/>

        </div>

        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
                {{ letter }}
            </router-link>
        </div>
        <div>
            <pre>{{ ingridients }}</pre>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import store from '../store';
import axiosClient from '../axiosClient.js'

const letters = 'ABCDEFGHIZKLMNOPQRSTUVWXYZ'.split('');
const ingridients = ref ([]);

onMounted( async () => {
    const res = await axiosClient.get('list.php?i=list')
    ingridients.value = res.data;
})

</script>