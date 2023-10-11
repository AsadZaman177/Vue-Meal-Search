<template>
    <div class="flex justify-center m-8">
            <input type="text" class="form-input w-full border-2 border-gray-200 rounded-md" 
            v-model="keyword"
            placeholder="Search Meal"
            @change="SearchMeals">
    </div>
    
    <div class="grid lg:grid-cols-4 gap-4 p-4">
        <MealCardComponent :meals="meals"/>
    </div>
 </template>
 
 <script setup>
    import { ref , computed, onMounted} from 'vue';
    import { useRoute } from 'vue-router';

    import store from '../store';
    import MealCardComponent from '../components/MealCardComponent.vue';

    const route = useRoute();
    const keyword = ref([]); 
    const meals = computed(() => store.state.SearchedMeals)

    function SearchMeals(){
        store.dispatch('SearchMeals', keyword.value);
    }
    
    onMounted(() => {
        keyword.value = route.params.name;
        if(keyword.value){
            SearchMeals();
        }
    })
 </script>