import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './GameCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const secondsToHours = (seconds) => {
//   const hours = Math.floor(seconds / 60 / 60)
//   const minutes = Math.floor(seconds / 60) - (hours * 60)

//   return `${hours}h${minutes}m`
// }

const GameCard = ({ game }) => (
  <Card className="GameCard" key={game.id}>
    <div className="GameNameContainer">
      <h5 className="GameName">{game.name} </h5>
      <div className="GameRating">
        {game.total_rating && <span>{game.total_rating.toFixed()}</span>}
      </div>
    </div>
    <div className="CoverAndInfo">
      {game.cover
        ? <img src={game.cover.url} alt={`cover of the game ${game.name}`} />
        : <div>No Image Yet</div>}
      <div className="GameInfo">
        <div className="GameSummary">{game.summary}</div>
      </div>

    </div>
    <div className="ReleaseDateAndButton">
      {game.release_dates && <div className="ReleaseDate">{game.release_dates[0].human}</div>}

      {/* {game.time_to_beat && (
        <div className="TimeToBeat">
          Time to beat:
          {game.time_to_beat.completely !== 0
            ? <div>Completely: {secondsToHours(game.time_to_beat.completely)} </div>
            : <div />}

          {game.time_to_beat.normally !== 0
            ? <div>Normally: {secondsToHours(game.time_to_beat.normally)}</div>
            : <div />}

          {game.time_to_beat.hastly !== 0
            ? <div>Hastly: {secondsToHours(game.time_to_beat.hastly)}</div>
            : <div />}
        </div>
      )} */}


      <Button>
        <span>Info <FontAwesomeIcon className="LinkIcon" icon={['fas', 'external-link-alt']} /></span>
      </Button>

    </div>

  </Card>
)

export default GameCard
