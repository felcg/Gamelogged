import React, { useState, useEffect } from 'react'
import gameService from '../../../services/games'
import GameCard from '../../GameCard/GameCard'
import './RecentGames.scss'

const RecentGames = () => {
  const [games, setGames] = useState([])

  const getGames = async () => {
    const response = await gameService.getAllGames(
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
          games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
      </div>
    </div>
  )
}

export default RecentGames
