const appId = process.env.REACT_APP_EDAMAN_API_ID
const appKey = process.env.REACT_APP_EDAMAN_API_KEY

const apiCalls = {
  searchRecipes(ingredient: string[]) {
    let ingredientsToSearch;
    if (ingredient.length > 1) {
      ingredientsToSearch = ingredient.join('%20');
    } else {
      ingredientsToSearch = ingredient[0];
    }
    
    return fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredientsToSearch}&app_id=${appId}&app_key=${appKey}`)
      .then(response => response.json())
  },
  fetchSingleRecipe(id: string) {
    return fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${appId}&app_key=${appKey}`)
      .then(response => response.json())
  }
}

export default apiCalls;