import axios from 'axios'

const url = 'https://gamelogged.onrender.com/api/users/login'

export const login = async (user) => {
  const response = await axios.post(url, user)
  return response.data
}
