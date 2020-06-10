import React from 'react'
import { Card } from 'react-bootstrap'
import './GameCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GameCard = ({ game }) => (
  <Card className="GameCard" key={game.id}>
    <div className="GameNameContainer">
      <h5 className="GameName">{game.name} </h5>
      <FontAwesomeIcon className="LinkIcon" icon={['fas', 'external-link-alt']} />
    </div>
    <div className="CoverAndInfo">
      {game.cover
        ? <img src={game.cover.url} alt={`cover of the game ${game.name}`} />
        : <div>No Image Yet</div>}
      <div className="GameInfo">
        <div className="GameSummary">{game.summary}</div>
      </div>

    </div>
    <div className="ReleaseDateAndRating">
      {game.release_dates && <div className="ReleaseDate">{game.release_dates[0].human}</div>}

      <div className="GameRating">
        {game.total_rating && <span>{game.total_rating.toFixed()}</span>}
      </div>
    </div>

  </Card>
)

export default GameCard
