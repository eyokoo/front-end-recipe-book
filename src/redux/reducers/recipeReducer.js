import * as ActionTypes from "../actions/actionTypes.js";

//reducer modifies the states in state.js
export default function recipeReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_RECIPES_SUCCESS:
      return action.recipes;
    case ActionTypes.POST_RECIPES:
      return [...state, action.recipes];
    case ActionTypes.DELETE_RECIPE_SUCCESS:
      return state.filter((r) => r.id !== action.recipeId); //the filter will not modify the existing array but it will return the new array. fitlering the array and retunring everything that doesn't match with recipeId
    default:
      return state;
  }
}