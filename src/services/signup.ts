import axios from 'axios'

const url = 'https://gamelogged.onrender.com/api/users/signup'

export const signup = async (user) => {
  const response = await axios.post(url, user)
  return response.data
}
