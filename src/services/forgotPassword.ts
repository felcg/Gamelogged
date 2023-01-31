import axios from 'axios'

const url = 'https://gamelogged.onrender.com/api/users/ask-password-reset/'

export const forgotPassword = async (email: string) => {
  const response = await axios.post(url, { email })
  return response.data
}
