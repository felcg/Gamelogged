/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Modal, Carousel } from 'react-bootstrap'
import Company from './Company/Company'
import SimilarGame from './SimilarGame/SimilarGame'


import './GameFullInfo.scss'

const GameInfo = () => {
  const { gameId } = useParams()
  const [game, setGame] = useState([])
  const [show, setShow] = useState(false)
  const [carouselIndex, setCarouselIndex] = useState(0)

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

  const updateImage = (game) => {
    if (game.cover) {
      game.cover.url = game.cover.url.split('/')
      game.cover.url[6] = 't_cover_big'
      game.cover.url = game.cover.url.join('/')
      return game
    }
    return null
  }

  const updateScreenshots = (game) => {
    if (game.screenshots) {
      game.screenshots.map((screenshot) => {
        screenshot.url = screenshot.url.split('/')
        screenshot.url[6] = 't_screenshot_huge'
        screenshot.url = screenshot.url.join('/')
        return game
      })
    }
    return null
  }

  const getGame = async () => {
    const baseUrl = 'http://localhost:3001/api/'
    const request = await axios.get(`${baseUrl}games`)
    const returnedGame = request.data.find((g) => g.id === Number(gameId))
    const bigImageGame = returnedGame
    updateImage(bigImageGame)
    updateScreenshots(bigImageGame)
    setGame(bigImageGame)
  }

  const unixToDate = (unix) => {
    const milliseconds = unix * 1000
    const dateObject = new Date(milliseconds)
    return dateObject.toLocaleDateString()
  }

  const secondsToHours = (seconds) => {
    const hours = Math.floor(seconds / 60 / 60)
    const minutes = Math.floor(seconds / 60) - (hours * 60)

    return `${hours}h${minutes}m`
  }

  const handleModal = (index) => {
    setCarouselIndex(index)
    setShow(!show)
  }

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex)
  }

  useEffect(() => {
    getGame()
  }, [])

  return (
    <>
      <Container className="GameFullInfoContainer">

        <div className="FirstBlock">
          <div>
            <h1>{game.name}</h1>
            {game.first_release_date && <div className="ReleaseDate">{unixToDate(game.first_release_date)}</div>}
          </div>
          <div className="GameRating">
            {game.total_rating != null ? <span style={{ color: `${color}` }}>{game.total_rating.toFixed()}</span> : <span>NA</span>}
          </div>
        </div>

        <div className="MainInfoContainer">

          <div className="ImageDiv">
            {game.cover
              ? <img src={game.cover.url} alt={`cover of the game ${game.name}`} />
              : <div>No Image Yet</div>}
          </div>

          <div className="Summary">
            <p>{game.summary}</p>
          </div>

          <div className="InfoContainer">
            <h5>Game Modes:</h5>
            <ul className="GameModeList">
              {game.game_modes && game.game_modes
                .map((mode) => <li key={mode.id}>{mode.name}</li>)}
            </ul>
          </div>

          <div className="InfoContainer">
            <h5>Genres:</h5>
            <ul className="GenreList">
              {game.genres && game.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
            </ul>
          </div>

          <div className="InfoContainer">
            <h5>Platforms:</h5>
            <div className="PlatformList">
              {game.platforms && game.platforms.map((platform) => <p className="Platform" key={platform.id}>{platform.name}</p>)}
            </div>
          </div>

          {game.time_to_beat && (
            <div className="TimeToBeat">
              <h5>Average time to beat:</h5>
              {game.time_to_beat.completely !== 0
                ? <p>Completely: {secondsToHours(game.time_to_beat.completely)} </p>
                : <p />}
              {game.time_to_beat.normally !== 0
                ? <p>Normally: {secondsToHours(game.time_to_beat.normally)}</p>
                : <p />}
              {game.time_to_beat.hastly !== 0
                ? <p>Hastly: {secondsToHours(game.time_to_beat.hastly)}</p>
                : <p />}
            </div>
          )}

          {game.involved_companies && (
            <div className="InfoContainer">
              <h5>Involved Companies:</h5>
              <div className="CompanyList">
                {game.involved_companies.map((company) => <Company className="Company" id={company.company} key={company.id} />)}
              </div>
            </div>
          ) }
        </div>

        {game.screenshots
        && (
          <div className="InfoContainer">
            <h5>Screenshots</h5>
            <div className="ScreenshotList">
              {game.screenshots.map((screenshot, index) => (
                <img key={screenshot.id} className="Screenshot" src={screenshot.url}
                  alt={`screenshot of the game ${game.name}`}
                  onClick={() => handleModal(index)}
                />
              ))}
            </div>
          </div>
        )}

        {game.videos && (
          <div className="InfoContainer">
            <h5>Videos</h5>
            <div className="VideoList">
              {game.videos.map((video) => (
                <iframe className="Video" key={video.id}
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.video_id}`}
                  poster={`https://img.youtube.com/vi/${video.video_id}/0.jpg`}
                />
              ))}
            </div>
          </div>
        )}

        {game.similar_games
        && (
          <div className="InfoContainer">
            <h5>Similar Games</h5>
            <div className="SimilarGamesList">
              <SimilarGame key={game} games={game.similar_games} />
            </div>
          </div>
        )}

      </Container>

      <Modal show={show} onHide={() => setShow(false)} centered
        className="ModalContainer"
      >
        <Carousel activeIndex={carouselIndex} onSelect={handleSelect}>
          {game.screenshots && game.screenshots.map((screenshot) => (
            <Carousel.Item key={screenshot.id}>
              <img src={screenshot.url} alt="screenshot of game" className="ModalImage" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal>
    </>
  )
}

export default GameInfo
