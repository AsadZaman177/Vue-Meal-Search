<template>
    <div>
        <h1 class="px-4 text-3xl tex-bold text-blue-500 text-bold mb-4">Ingredients</h1>

        <div class="grid lg:grid-cols-4 gap-4 p-4">
            <div class="max-w-xs overflow-hidden rounded-lg shadow-lg" v-for="ingredient in paginatedIngredients" :key="ingredient.idIngredient">
                <div class="px-6 py-4">
                    <h4 class="mb-3 text-xl font-semibold tracking-tight text-gray-800">{{ ingredient.strIngredient }}</h4>
                    <div class="mt-3">
                        <router-link :to="{ name:'byIngredient',  params: {ingredient:ingredient.strIngredient} }" class="py-2 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">View</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-3">
                <div class="inline-flex rounded-md shadow-sm">
                    <button @click="previousPage" :disabled="currentPage === 0" class="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Previous
                    </button>
                    <button @click="nextPage" :disabled="currentPage === pageCount - 1" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        Next
                    </button>
                </div>
        </div>
    </div>
</template>
  
<script setup>
    import { ref, onMounted, watch, computed } from 'vue';
    import axiosClient from '../axiosClient';

    const ingredients = ref([]);
    const itemsPerPage = 10;
    const currentPage = ref(0);

    // Fetch initial data inside the onMounted hook
    onMounted(() => {
        axiosClient.get('list.php?i=')
            .then(({ data }) => {
                ingredients.value = data.meals || [];

                // After fetching data, immediately compute the paginatedIngredients
                computePaginatedIngredients();
            });
    });

    // Watch currentPage for changes and update paginatedIngredients
    watch(currentPage, computePaginatedIngredients);

    const paginatedIngredients = ref([]);

    const pageCount = computed(() => Math.ceil(ingredients.value.length / itemsPerPage));

    function computePaginatedIngredients() {
        const startIndex = currentPage.value * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        paginatedIngredients.value = ingredients.value.slice(startIndex, endIndex);
    }

    function previousPage() {
        if (currentPage.value > 0) {
            currentPage.value--;
        }
    }

    function nextPage() {
        if (currentPage.value < pageCount.value - 1) {
            currentPage.value++;
        }
    }
</script>
  