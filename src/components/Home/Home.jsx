/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import './Home.scss'
import Hero from './Hero/Hero'
import VideoContainer from './VideoContainer/VideoContainer'
import RecentGames from './RecentGames/RecentGames'
import TopRatedGames from './TopRatedGames/TopRatedGames'
import { login } from '../../reducers/userReducer'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(login(user))
    }
  }, [])

  return (
    <>
      <Hero />
      <Container className="contentWrapper">
        <RecentGames />
        <TopRatedGames />
        <VideoContainer />
      </Container>
    </>
  )
}

export default Home
