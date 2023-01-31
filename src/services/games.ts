import axios from 'axios'

const baseUrl = 'https://gamelogged.onrender.com/api/'
// const baseUrl = 'http://localhost:3001/api/'

export const getPlatformGames = async (
  platform: string,
  page: number,
  sort: string,
  genre: string,
  gameMode: string,
  coopMode: string
) => {
  const response = await axios.get(`${baseUrl}platform/${platform}`, {
    params: { page, sort, genre, gameMode, coopMode },
  })
  return response.data
}

export const getAllGames = async (
  page: number,
  sort: string,
  genre: string,
  gameMode: string,
  coopMode: string
) => {
  const response = await axios.get(`${baseUrl}games`, {
    params: { page, sort, genre, gameMode, coopMode },
  })
  return response.data
}

export const getInitialGames = async () => {
  const response = await axios.get(`${baseUrl}games?`)
  return response.data
}

export const searchGames = async (query: string, page: number) => {
  const response = await axios.get(`${baseUrl}search/${query}`, {
    params: { page },
  })
  return response.data
}

export const getGame = async (id: number | string) => {
  const response = await axios.get(`${baseUrl}game/${id}`)
  return response.data
}

export const getCompany = async (id: number | string) => {
  const response = await axios.get(`${baseUrl}companies/${id}`)
  return response.data
}

export const getRecent = async () => {
  const response = await axios.get(`${baseUrl}initialGames`)
  return response.data
}

export const getTopTen = async () => {
  const response = await axios.get(`${baseUrl}TopRatedGames`)
  return response.data
}
