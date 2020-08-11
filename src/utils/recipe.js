import getCookie from './cookie'

const getRecipes = async () => {
  const promise = await fetch('http://localhost:9999/api/recipe')
  const recipes = await promise.json()
  return recipes
}

const getRecipesByQuery = async (query) => {
  let url = `http://localhost:9999/api/recipe?q=${query}`
  
  const promise = await fetch(url)
  const recipes = await promise.json()
  return recipes
}

const getRecipesByUser = async (username) => {
  let url = `http://localhost:9999/api/recipe?username=${username}`
  
  const promise = await fetch(url)
  const recipes = await promise.json()
  return recipes
}

const getRecipe = async (id) => {
  const promise = await fetch(`http://localhost:9999/api/recipe?id=${id}`)
  const recipe = await promise.json()

  return recipe
}

const createRecipe = async (recipe) => {
  const validationResult = validateRecipe(recipe)
  if(validationResult === 'All good'){
    await fetch('http://localhost:9999/api/recipe', {
        method: 'POST',
        body: JSON.stringify({
          title: recipe.title,
          description: recipe.description,
          time: recipe.time,
          imageLink: recipe.imageLink,
          ingredients: recipe.ingredients
        }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': getCookie('x-auth-token')
        }
    })
    return
  }

  return validationResult
}

const editRecipe = async (recipe) => {
  const validationResult = validateRecipe(recipe)
  if(validationResult === 'All good'){
    await fetch(`http://localhost:9999/api/recipe/${recipe.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title: recipe.title,
          description: recipe.description,
          time: recipe.time,
          imageLink: recipe.imageLink,
          ingredients: recipe.ingredients
        }),
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': getCookie('x-auth-token')
        }
    })
    return
  }

  return validationResult
}

const deleteRecipe = async (id) => {
  await fetch(`http://localhost:9999/api/recipe/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': getCookie('x-auth-token')
    }
})
return
}

const formatTime = (minutes) => {
  if(minutes < 60) return `${minutes} min`
  if(minutes%60 === 0) return `${minutes/60} h`
  return `${Math.floor(minutes/60)} h ${minutes%60} min`
}

const validateRecipe = (recipe) => {
  if (recipe.title) {
    if(recipe.title.length > 200 || recipe.title.length <= 0) return 'Title length is out of bounds [0, 200]'
  }
  else {
    return 'The recipe must have a title'
  }

  if (recipe.description) {
    if(recipe.description.length > 2000 || recipe.description.length <= 0) return 'Description length is out of bounds [0, 2000]'
  }
  else {
    return 'The recipe must have a description'
  }

  if (recipe.time) {
    if(recipe.time > 2000 || recipe.time <= 0) return 'Time is out of bounds [0, 2000]'
  }
  else {
    return 'The recipe must have a time set'
  }
  
  if (recipe.ingredients) {
    if(recipe.ingredients.length > 1000 || recipe.ingredients.length <= 0) return 'Number of ingredients is out of bounds [0, 1000]'
  }
  else {
    return 'Recipe must have ingredients'
  }

  return 'All good'
}

export default {
  getRecipes,
  getRecipesByUser,
  getRecipesByQuery,
  getRecipe,
  createRecipe,
  editRecipe,
  deleteRecipe,
  formatTime
}