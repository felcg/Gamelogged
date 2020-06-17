import React from 'react'
import GameCard from '../../GameCard/GameCard'

const PageOfGames = ({ pageOfGames }) => (
  <div>
    {console.log(pageOfGames)}
    { pageOfGames
      .map((game, index) => (
        <GameCard key={game.id} game={game} index={index} />
      )) }
  </div>
)

export default PageOfGames
