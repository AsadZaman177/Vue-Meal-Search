import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeComponent.vue";
import DefaultLayout from '../components/DefaultLayout.vue';
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import SearchMeal from "../views/SearchMeal.vue";
import MealDetails from "../views/MealDetails.vue";
import MealsIngredients from "../views/MealsIngredients.vue";
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },
            {
                path: 'meals-ingredients',
                name: 'ingredients',
                component: MealsIngredients,
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient,
            },
            {
                path: '/search/:name?',
                name: 'search-meal',
                component: SearchMeal,
            },
            {
                path: '/meal/details/:id?',
                name: 'meal-details',
                component: MealDetails,
            },
        ]
    }   
];

const router = createRouter({ 
    history: createWebHistory(),
    routes,
});


export default router;