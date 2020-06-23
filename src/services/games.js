import axios from 'axios'

const baseUrl = 'https://guarded-mesa-01224.herokuapp.com/api/'
// const baseUrl = 'http://localhost:3001/api/'

const getPlatformGames = async (platform, page, sort, genre, gameMode, coopMode) => {
  const response = await axios.get(`${baseUrl}platform/${platform}?page=${page}&sort=${sort}&genre=${genre}&gameMode=${gameMode}&coopMode=${coopMode}`)
  return response.data
}

const getAllGames = async (page, sort, genre, gameMode, coopMode) => {
  const response = await axios.get(`${baseUrl}games?page=${page}&sort=${sort}&genre=${genre}&gameMode=${gameMode}&coopMode=${coopMode}`)
  return response.data
}

export default { getPlatformGames, getAllGames }
