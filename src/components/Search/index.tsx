import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { searchChange } from '../../reducers/searchReducer'
import './styles.scss'

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(searchChange(searchTerm))
    history.push('/games')
  }

  return (
    <div className="search">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <FontAwesomeIcon
            icon={['fas', 'search']}
            className="NavItem Search"
          />
        </button>
      </form>
    </div>
  )
}
