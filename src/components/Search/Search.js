import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { searchChange } from '../../reducers/searchReducer'
import './Search.scss'


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(searchChange(searchTerm))
    history.push('/')
  }

  return (
    <div className="search">
      <form className="searchForm" onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" label="search"><FontAwesomeIcon icon={['fas', 'search']} className="NavItem Search" /></button>
      </form>
    </div>
  )
}

export default Search
