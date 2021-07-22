import { handleResponse, handleError } from "./apiUtils";

const url = "https://gmarecipebook.herokuapp.com/recipes";

export function getRecipes() {
  return fetch(url).then(handleResponse).catch(handleError);
}

export function postRecipe(recipe) { //fetching url and making a POST command  
  return fetch(url, {
    method: "POST", // POST for create
    headers: { "content-type": "application/json" },
    body: JSON.stringify(recipe),
  })
    .then(handleResponse)
    .catch(handleError);
}



export function deleteRecipe(recipeId) {
  return fetch(url + recipeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}