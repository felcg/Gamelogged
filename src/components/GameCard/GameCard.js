import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './GameCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const secondsToHours = (seconds) => {
//   const hours = Math.floor(seconds / 60 / 60)
//   const minutes = Math.floor(seconds / 60) - (hours * 60)

//   return `${hours}h${minutes}m`
// }

const unixToDate = (unix) => {
  const milliseconds = unix * 1000

  const dateObject = new Date(milliseconds)

  return dateObject.toLocaleDateString()
}

const GameCard = ({ game }) => {
  let color = ''
  switch (true) {
  case (game.total_rating > 70):
    color = '#1fbb87'
    break
  case (game.total_rating >= 40):
    color = '#fab822'
    break
  case (game.total_rating < 39):
    color = '#fb397a'
    break
  default:
    break
  }
  return (
    <Card className="GameCard" key={game.id}>
      <div className="GameNameContainer">
        <h5 className="GameName">{game.name} </h5>
        <div className="GameRating">
          {game.total_rating != null ? <span style={{ color: `${color}` }}>{game.total_rating.toFixed()}</span> : <span>NA</span>}
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
        {game.first_release_date && <div className="ReleaseDate">{unixToDate(game.first_release_date)}</div>}

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
}

export default GameCard
