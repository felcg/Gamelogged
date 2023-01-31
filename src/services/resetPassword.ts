import axios from 'axios'

const url = 'https://gamelogged.onrender.com/api/users/password-reset/'

export const resetPassword = async (
  email: string,
  token: string,
  password: string
) => {
  const response = await axios.post(url, { email, token, password })
  return response.data
}
