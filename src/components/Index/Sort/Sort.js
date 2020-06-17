import React from 'react'


const Sort = ({
  sort, filteredGames, setSort, setFilteredGames,
}) => {
  const sortList = (e) => {
    if (e.target.value !== '') {
      if (e.target.value === 'release') {
        filteredGames.sort((a, b) => (b.first_release_date - a.first_release_date))
        setSort('release')
      }

      if (e.target.value === 'rating') {
        filteredGames.sort((a, b) => (b.total_rating - a.total_rating))
        setSort('rating')
      }

      const sortedArr = [...filteredGames]
      setFilteredGames(sortedArr)
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
