import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users/signup'

const signup = async (user) => {
  const response = await axios.post(baseUrl, user)
  return response.data
}

export default { signup }
