import React from 'react'
import { useDispatch } from 'react-redux'
import { sortChange } from '../../../../reducers/sortReducer'

export const Sort = ({ sort }: { sort: string }) => {
  const dispatch = useDispatch()
  const changeSort = (e) => {
    dispatch(sortChange(e.target.value))
  }

  return (
    <select value={sort} onChange={(e) => changeSort(e)}>
      <option value="nosort">Sort</option>
      <option value="release">Release date</option>
      <option value="rating">Rating</option>
    </select>
  )
}
