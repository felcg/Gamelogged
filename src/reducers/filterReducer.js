const filterReducer = (state = { genre: 'nofilter', gameMode: 'nofilter', coopMode: 'nofilter' }, action) => {
  switch (action.type) {
  case 'SET_GENRE':
    return { ...state, genre: action.genre }
  case 'SET_GAMEMODE':
    return { ...state, gameMode: action.gameMode }
  case 'SET_COOPMODE':
    return { ...state, coopMode: action.coopMode }
  default:
    return state
  }
}

export const genreChange = (genre) => ({
  type: 'SET_GENRE',
  genre,
})

export const gameModeChange = (gameMode) => ({
  type: 'SET_GAMEMODE',
  gameMode,
})

export const coopModeChange = (coopMode) => ({
  type: 'SET_COOPMODE',
  coopMode,
})

export default filterReducer
