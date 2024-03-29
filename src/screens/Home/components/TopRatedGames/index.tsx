import React, { useState, useEffect } from 'react'
import { getTopTen } from 'src/services'
import { GameCard } from 'src/components'
import './styles.scss'

export const TopRatedGames = () => {
  const [games, setGames] = useState([])

  const getGames = async () => {
    const response = await getTopTen()
    setGames(response)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className="TopRatedGamesContainer">
      <h1>Top10 Games with a lot of votes</h1>
      <div className="GameCardContainer container">
        {games &&
          games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
      </div>
    </div>
  )
}
