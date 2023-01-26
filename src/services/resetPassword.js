import axios from 'axios'

const url = 'https://gamelogged.onrender.com/api/users/password-reset/'

const resetPassword = async (email, token, password) => {
  const response = await axios.post(url, { email, token, password })
  return response.data
}

export default { resetPassword }
