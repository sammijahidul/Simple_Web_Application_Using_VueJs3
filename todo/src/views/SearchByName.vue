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
    <!--Crated a meal-item template-->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
            <div class="p-3 ">
                <h3 class="font-bold">{{ meal.strMeal }}</h3>
                <p class="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nobis animi officia doloribus.
                </p>
                <div>
                    <a :href="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-600 hover:text-white transition-colors">YouTube</a>
                    <router-link to="/">
                        View
                    </router-link>
                </div>
            </div>

        </div>
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