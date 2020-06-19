import React, { useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const baseUrl = 'http://localhost:3001/api/search'

  const getAllImages = (arr) => {
    const newArr = [...arr]
    newArr.map((game) => {
      if (game.cover) {
        game.cover.url = game.cover.url.split('/')
        game.cover.url[6] = 't_cover_big'
        game.cover.url = game.cover.url.join('/')
      }
      return null
    })
    setSearchResults(newArr)
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const res = await axios.get(`${baseUrl}/${searchTerm}`)
    getAllImages(res.data)
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
      <Container>
        {searchResults.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </Container>
    </div>
  )
}

export default Search
