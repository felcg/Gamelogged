const searchReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      if (action.search === '') {
        return null
      }
      return action.search
    default:
      return state
  }
}

export const searchChange = (search) => ({
  type: 'SET_SEARCH',
  search,
})

export default searchReducer
