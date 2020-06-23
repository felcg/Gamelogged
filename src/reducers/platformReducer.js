const platformReducer = (state = 'all', action) => {
  switch (action.type) {
  case 'SET_PLATFORM':
    return action.platform
  default:
    return state
  }
}

export const platformChange = (platform) => ({
  type: 'SET_PLATFORM',
  platform,
})

export default platformReducer
