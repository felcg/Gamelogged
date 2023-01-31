import React, { useState, useEffect } from 'react'
import { getAllGames } from 'src/services'
import { GameCard } from 'src/components'
import './styles.scss'

export const RecentGames = () => {
  const [games, setGames] = useState([])

  const getGames = async () => {
    const response = await getAllGames(
      1,
      'release',
      'nofilter',
      'nofilter',
      'nofilter'
    )
    setGames(response.pageOfItems)
  }

  useEffect(() => {
    getGames()
  }, [])

  return (
    <div className="RecentGamesContainer">
      <h1>Recent Releases</h1>
      <div className="GameCardContainer container">
        {games &&
          games.map((game, index) => <GameCard key={game.id} game={game} />)}
      </div>
    </div>
  )
}
