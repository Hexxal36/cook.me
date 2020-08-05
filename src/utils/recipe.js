const getRecipes = async (length) => {
  const promise = await fetch(`http://localhost:9999/api/recipe?length=${length}`)
  const recipe = await promise.json()
  return recipe
}

const getRecipe = async (id) => {
  const promise = await fetch(`http://localhost:9999/api/recipe?id=${id}`)
  const recipe = await promise.json()
  return recipe
}
  
const formatTime = (minutes) => {
  if(minutes < 60) return `${minutes} min`
  if(minutes%60 == 0) return `${minutes/60} h`
  return `${Math.floor(minutes/60)} h ${minutes%60} min`
}

export default {
  getRecipes,
  getRecipe,
  formatTime
}