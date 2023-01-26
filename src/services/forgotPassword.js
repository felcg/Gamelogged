import axios from 'axios'

const url = 'https://gamelogged.onrender.com/api/users/ask-password-reset/'

const forgotPassword = async (email) => {
  const response = await axios.post(url, { email })
  return response.data
}

export default { forgotPassword }
