<template>
   <div class="grid lg:grid-cols-4 gap-4 p-4">
        <MealCardComponent :meals="meals"/>
   </div>
   
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import { useRoute } from 'vue-router';
import MealCardComponent from '../components/MealCardComponent.vue';

const route = useRoute();

const meals = ref([]);

onMounted(() => {
   for(let i = 1; i <=12; i++){
      axiosClient.get('random.php')
         .then(({ data }) => {
            meals.value.push(data.meals[0])
         });
   }
   
});




</script>