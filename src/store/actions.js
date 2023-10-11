import axiosClient from '../axiosClient';

export function SearchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => { 
        commit('setSearchedMeal', data.meals);
    })
}

export function MealsByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => { 
        commit('setMealsByLetter', data.meals);
    })
}

export function MealsByIngredient({commit}, ingredient){
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => { 
        commit('setMealsByIngredient', data.meals);
    })
}