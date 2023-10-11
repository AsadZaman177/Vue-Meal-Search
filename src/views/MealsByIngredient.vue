<template>
     <div class="grid lg:grid-cols-4 gap-4 p-4">
        <MealCardComponent :meals="meals"/>
    </div>
</template>

<script setup>
    import { onMounted, ref,computed } from 'vue';
    import axiosClient from '../axiosClient';
    import { useRoute } from 'vue-router';
    import store from '../store';
    import MealCardComponent from '../components/MealCardComponent.vue';

    const route = useRoute();
    const ingredient = route.params.ingredient;
    const meals = computed(() => store.state.MealsByIngredient)

    onMounted(() => {
        store.dispatch('MealsByIngredient', ingredient);
    })

</script>