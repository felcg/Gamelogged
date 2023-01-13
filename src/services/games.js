import axios from 'axios'

const baseUrl = 'https://gamelogged.onrender.com/api/'
// const baseUrl = 'http://localhost:3001/api/'

const getPlatformGames = async (
  platform,
  page,
  sort,
  genre,
  gameMode,
  coopMode
) => {
  const response = await axios.get(`${baseUrl}platform/${platform}`, {
    params: { page, sort, genre, gameMode, coopMode },
  })
  return response.data
}

const getAllGames = async (page, sort, genre, gameMode, coopMode) => {
  const response = await axios.get(`${baseUrl}games`, {
    params: { page, sort, genre, gameMode, coopMode },
  })
  return response.data
}

const getInitialGames = async () => {
  const response = await axios.get(`${baseUrl}games?`)
  return response.data
}

const searchGames = async (query, page) => {
  const response = await axios.get(`${baseUrl}search/${query}`, {
    params: { page },
  })
  return response.data
}

const getGame = async (id) => {
  const response = await axios.get(`${baseUrl}game/${id}`)
  return response.data
}

const getCompany = async (id) => {
  const response = await axios.get(`${baseUrl}companies/${id}`)
  return response.data
}

const getRecent = async () => {
  const response = await axios.get(`${baseUrl}initialGames`)
  return response.data
}

const getTopTen = async () => {
  const response = await axios.get(`${baseUrl}TopRatedGames`)
  return response.data
}

export default {
  getPlatformGames,
  getAllGames,
  getGame,
  searchGames,
  getCompany,
  getRecent,
  getTopTen,
  getInitialGames,
}
