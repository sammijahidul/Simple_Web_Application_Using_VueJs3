import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import SearchByLetter from '../views/SearchByLetter.vue';
import SearchByName from '../views/SearchByName.vue';
import SearchByIngredients from '../views/SearchByIngredients.vue';
import GuestLayout from '../components/GuestLayout.vue';

const routes = [
    {
        path: '/', 
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: SearchByLetter
            },
            {
                path: '/by-Name/:name?',
                name: 'byName',
                component: SearchByName
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: SearchByIngredients
            }
        ]
    },
    // by this way we can set different layout for different pages
    {
        path: '/guest',
        component: GuestLayout,
        children: [

        ]
    }
    
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;