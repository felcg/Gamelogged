import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { searchChange } from '../../reducers/searchReducer'


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
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Search
