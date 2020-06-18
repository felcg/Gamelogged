import React from 'react'
import JwPagination from 'jw-react-pagination'
import './Pagination.scss'

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
    <JwPagination items={filteredGames} onChangePage={onChangePage} pageSize={12}
      maxPages={5} disableDefaultStyles labels={customLabels}
    />
  )
}

export default Pagination
