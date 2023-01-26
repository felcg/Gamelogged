import axios from 'axios'

const url = `${process.env.REACT_APP_BASE_URL}api/users/ask-password-reset/`

const forgotPassword = async (email) => {
  console.log('hey', email)
  const response = await axios.post(url, { email })
  console.log('response', response)
  return response.data
}

export default { forgotPassword }
