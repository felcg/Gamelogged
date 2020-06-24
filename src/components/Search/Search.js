import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchChange } from '../../reducers/searchReducer'


const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(searchChange(searchTerm))
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
