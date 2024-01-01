<template>
    <div class="p-8">
        <input 
            type="text" 
            v-model="keyword"
            class="rounded border-2 border-gray-200 w-full" 
            placeholder="Search for Meals"
            @change="searchMeals"
        />
    </div>
    <div>
        <pre>{{ meals }}</pre>
    </div>
</template>

<script setup>
import store from '../store'; 
import { computed,  ref } from 'vue'; 

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);

 function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

</script>