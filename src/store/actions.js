import axiosClient from '../axiosClient';

export function SearchMeals({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => { 
        commit('setSearchedMeal', data);
    })
}

export function MealsByLetter({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => { 
        commit('setMealsByLetter', data);
    })
}

export function MealsByIngredient({commit}, ingredient){
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => { 
        commit('setMealsByIngredient', data);
    })
}