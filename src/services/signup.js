import axios from 'axios'

const url = 'https://gamelogged.onrender.com/api/users/signup'

const signup = async (user) => {
  const response = await axios.post(url, user)
  return response.data
}

export default { signup }
