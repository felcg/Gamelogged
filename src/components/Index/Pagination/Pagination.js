import React from 'react'
import JwPagination from 'jw-react-pagination'

const Pagination = ({ filteredGames, setPageOfGames }) => {
  function onChangePage(pageOfGames) {
    setPageOfGames(pageOfGames)
  }

  const customLabels = {
    first: 'First',
    last: 'Last',
    previous: '<',
    next: '>',
  }

  return (
    <JwPagination items={filteredGames} onChangePage={onChangePage} pageSize={10}
      maxPages={3} disableDefaultStyles labels={customLabels}
    />
  )
}

export default Pagination
