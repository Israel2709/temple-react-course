const BASE_URL =
  'https://temple-react-course-default-rtdb.firebaseio.com/users/'

export default {
  saveUser: async userData => {
    console.log('userData', userData)
    let result = await fetch(`${BASE_URL}.json`, {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    result = await result.json()
    return result
  },
  deleteUser: async userKey => {
    let result = await fetch(`${BASE_URL}${userKey}/.json`, {
      method: 'DELETE'
    })
    result = await result.json()
    return result
  },
  updateUser: async (userKey, newData) => {
    let result = await fetch(`${BASE_URL}${userKey}/.json`, {
      method: 'PATCH',
      body: JSON.stringify(newData)
    })
    result = await result.json()
    return result
  },
  getUsers: async () => {
    let result = await fetch(`${BASE_URL}.json`, {
      method: 'GET'
    })
    result = await result.json()
    return result
  },
  getUserById: async userId => {
    let result = await fetch(`${BASE_URL}${userId}.json`, {
      method: 'GET'
    })
    result = await result.json()
    return result
  }
}
