<template>
    <div class="max-w-xs overflow-hidden rounded-lg shadow-lg" v-for="meal of meals.meals" :key="meal.idMeal">
        <img class="object-cover w-full h-48" :src="meal.strMealThumb"/>
        <div class="px-6 py-4">
            <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{{ meal.strMeal }}</h4>
            <p class="leading-normal text-gray-700">{{ meal.strCategory }} , {{ meal.strArea }}</p>
            <p class="leading-normal text-gray-700"></p>
            <div class="mt-3">
                <a :href="meal.strYoutube" target="_blank" class="py-2 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Youtube</a>
                <router-link :to="{ name:'meal-details',  params: {id:meal.idMeal} }" class="py-2 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">View</router-link>
            </div>
        </div>
    </div>
    
</template>

<script setup>
        const { meal } = defineProps({
            meals: {
                required: true,
                type: Object
            }
        })
</script>