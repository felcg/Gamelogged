import React from 'react'
import { Container } from 'react-bootstrap'
import GameCard from '../../GameCard/GameCard'
import './PageOfGames.scss'

const PageOfGames = ({ pageOfGames }) => (
  <Container fluid className="gameListContainer">
    { pageOfGames
      .map((game, index) => (
        <GameCard key={game.id} game={game} index={index} />
      )) }
  </Container>
)

export default PageOfGames
