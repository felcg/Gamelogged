import axios from 'axios'

const url = `${process.env.REACT_APP_BASE_URL}api/users/ask-password-reset/`

const resetPassword = async (email) => {
  const response = await axios.post(url, { email })
  return response.data
}

export default { resetPassword }
