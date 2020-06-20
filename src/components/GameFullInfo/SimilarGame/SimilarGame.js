import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const SimilarGame = ({ games }) => {
  const [gameList, setGameList] = useState([])

  const updateImage = (game) => {
    if (game.cover) {
      game.cover.url = game.cover.url.split('/')
      game.cover.url[6] = 't_cover_big'
      game.cover.url = game.cover.url.join('/')
      return game
    }
    return null
  }

  const getGame = async () => {
    const baseUrl = 'http://localhost:3001/api/'
    const request = await axios.get(`${baseUrl}games`)
    const returnedGames = games.map((game) => request.data.find((g) => g.id === game))
    const bigImageGames = returnedGames.filter((g) => g !== undefined)
    updateImage(bigImageGames)
    setGameList(bigImageGames)
  }

  useEffect(() => {
    getGame()
  }, [])

  return (
    <>
      {gameList.map((game) => (
        <Link to={`/games/${game.id}`} key={game.id} className="SimilarGame">
          {game.cover
            ? <img src={game.cover.url} alt={`cover of the game ${game.name}`} />
            : <div>No Image Yet</div>}
          <p>{game.name}</p>
        </Link>

      ))}
    </>
  )
}

export default SimilarGame
