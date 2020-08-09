import getCookie from './cookie'

const getComments = async (id) => {
    const promise = await fetch(`http://localhost:9999/api/comment?recipe=${id}`)
    const comments = await promise.json()
    return comments
  }

const createComment = async (recipeId, body) => {
  const promise = await fetch('http://localhost:9999/api/comment', {
      method: 'POST',
      body: JSON.stringify({
        recipe: recipeId,
        body: body
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': getCookie('x-auth-token')
      }
  })

  const comment = await promise.json()
  return comment
}

export default {
  getComments,
  createComment
}