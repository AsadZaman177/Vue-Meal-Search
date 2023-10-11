<template>
    <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{ name:'byLetter', params:{letter} }" v-for="letter of letters" :key="letter">
            {{ letter }}
        </router-link>
    </div>
    <div class="grid lg:grid-cols-4 gap-4 p-4">
        <MealCardComponent :meals="meals"/>
    </div>
 </template>
 
 <script setup>
    import { useRoute } from 'vue-router';
    import store from '../store';
    import { computed, onMounted, watch } from 'vue';
    import MealCardComponent from '../components/MealCardComponent.vue';


    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const route = useRoute();

    const meals = computed(() => store.state.MealsByLetter)
    
    watch(route, ()=>{
        store.dispatch('MealsByLetter', route.params.letter);
    });

    onMounted(() => {
        store.dispatch('MealsByLetter', route.params.letter);
    })
 
 </script>