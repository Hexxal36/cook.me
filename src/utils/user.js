import getCookie from './cookie'

const updatePicture = async (user, picture) => {
    await fetch(`http://localhost:9999/api/user/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            picture: picture
        }),
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token': getCookie('x-auth-token')
        }
    })
}

export default {
  updatePicture
}