import React from 'react'
import { Container } from 'react-bootstrap'
import { GameCard } from '../../../../components/GameCard'
import './styles.scss'

export const PageOfGames = ({ pageOfGames }) => (
  <Container fluid className="gameListContainer">
    {pageOfGames.length > 0 ? (
      pageOfGames.map((game, index) => (
        <GameCard key={game.id} game={game} index={index} />
      ))
    ) : (
      <div>No games</div>
    )}
  </Container>
)
