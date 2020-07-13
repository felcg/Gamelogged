const sortReducer = (state = 'nosort', action) => {
  switch (action.type) {
    case 'SET_SORT':
      return action.sort
    default:
      return state
  }
}

export const sortChange = (sort) => ({
  type: 'SET_SORT',
  sort,
})

export default sortReducer
