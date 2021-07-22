import * as ActionTypes from "./actionTypes";
import * as recipeApi from "../../api/recipeApi";

export const loadRecipes = () => {
  return function (dispatch) {
    return recipeApi
      .getRecipes()
      .then((recipesFromApi) => dispatch(loadRecipesSuccess(recipesFromApi)))
      .catch((error) => console.log(error));
  };
}

export const loadRecipesSuccess = (recipes) => {
  return {
    type: ActionTypes.LOAD_RECIPES_SUCCESS,
    recipes,
  };
}

export const addRecipe = (recipe) => {
  return function (dispatch) {
    return recipeApi
      .postRecipe(recipe)
      .then((newRecipe) => dispatch(postRecipeSuccess(newRecipe)))
      .catch((error) => console.log(error));
  };
}

export const postRecipeSuccess = (recipe) => {
  return {
    type: ActionTypes.POST_RECIPES,
    recipe,
  };
}

export const deleteRecipe = (recipeId) => {
  return function (dispatch) {
    //connect to the outside - API
    //start of the API call
    return recipeApi
    .deleteRecipe(recipeId) 
    //end of the API call
    .then(() => dispatch(deleteRecipeSuccess(recipeId))) //dispatch an action which is the deleteRecipeSuccess function
    .catch((error) => console.log(error));//when the API cal was not successful
  }
}

//is in charge of telling the store that the previous event was successful
export const deleteRecipeSuccess = (recipeId) => {
  return {
    type: ActionTypes.DELETE_RECIPE_SUCCESS,
    recipeId,
  }
}