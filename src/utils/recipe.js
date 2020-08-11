import getCookie from './cookie'

const getRecipes = async (username) => {
  let url = 'http://localhost:9999/api/recipe'
  if (username) url += `?username=${username}`

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

const editRecipe = async (recipe) => {
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

export default {
  getRecipes,
  getRecipe,
  createRecipe,
  editRecipe,
  deleteRecipe,
  formatTime
}