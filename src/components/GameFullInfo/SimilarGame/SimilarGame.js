import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gameService from '../../../services/games'

const SimilarGame = ({ similarGames }) => {
  const [gameList, setGameList] = useState([])
  const getGame = async () => {
    Promise.all(similarGames.map((similarGame) => gameService.getGame(similarGame)))
      .then((value) => {
        setGameList(value)
      })
  }

  useEffect(() => {
    getGame()
  }, [])

  return (
    <>
      {gameList.map((game) => (
        <Link to={`/games/${game[0].id}`} key={game[0].id} className="SimilarGame text-decoration-none">
          {game[0].cover
            ? <img src={game[0].cover.url} alt={`cover of the game ${game[0].name}`} />
            : <div>No Image Yet</div>}
          <p>{game[0].name}</p>
        </Link>

      ))}
    </>
  )
}

export default SimilarGame
