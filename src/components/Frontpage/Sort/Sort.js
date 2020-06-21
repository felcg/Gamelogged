import React from 'react'


const Sort = ({
  sort, setSort,
}) => {
  const sortList = (e) => {
    if (e.target.value !== '') {
      if (e.target.value === 'release') {
        setSort('release')
      }

      if (e.target.value === 'rating') {
        setSort('rating')
      }
    } else {
      setSort('')
    }
  }

  return (
    <select value={sort} onChange={sortList}>
      <option value="">Sort</option>
      <option value="release">Release date</option>
      <option value="rating">Rating</option>
    </select>
  )
}

export default Sort
