<template>
        <div class="w-full overflow-hidden rounded-lg shadow-lg p-4 h-full">
            <div class="px-6 py-4">
                <h4 class="mb-3 text-3xl font-semibold tracking-tight text-gray-800">{{ meal.strMeal }}</h4>
                <p class="leading-normal text-gray-700">{{ meal.strCategory }} , {{ meal.strArea }}</p>
            </div>
            <img class="object-cover-fit mx-auto" :src="meal.strMealThumb"/>
            <div class="px-6 py-4">
                <h4 class="font-semibold tracking-tight text-gray-800">Ingridents:</h4>
                <ul>
                    <span v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind + 1}`]">
                           {{ ind + 1 }}.{{ meal[`strIngredient${ind + 1}`] }}
                        </li>
                    </span>
                </ul>
                <p class="leading-normal text-gray-700">{{ meal.strInstructions }}</p>
                <div class="mt-3">
                    <a :href="meal.strYoutube" target="_blank" class="py-2 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Youtube</a>
                </div>
            </div>
        </div>
 </template>
 
 <script setup>
    import { onMounted, ref } from 'vue';
    import axiosClient from '../axiosClient';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = route.params.id;
    const meal = ref([]);
    
    onMounted(() => {
        axiosClient.get(`lookup.php?i=${id}`)
        .then(({ data }) => { 
        meal.value = data.meals[0] || { };
        })
    })
    
 </script>