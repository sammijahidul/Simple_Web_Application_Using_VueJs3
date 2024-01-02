<template>
    <div class="p-8 pb-0">
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
                <div class="flex items-center justify-between">
                    <YouTubeButton :href="meal.strYoutube"/>
                    <router-link :to="{name: 'mealDetails',  params: {id: meal.idMeal} }" class="px-3 py-2 rounded border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                        View
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import store from '../store'; 
import { computed,  onMounted,  ref } from 'vue'; 
import YouTubeButton from '@/components/YouTubeButton.vue';

const keyword = ref('');
const meals = computed(() => store.state.searchedMeals);
const route = useRoute();

 function searchMeals() {
    store.dispatch('searchMeals', keyword.value)
}

onMounted(() => {
    keyword.value = route.params.name;
    if (keyword.value) {
        searchMeals();
    }
})

</script>