/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Container } from 'react-bootstrap'
import './Home.scss'
import Hero from './Hero/Hero'
import VideoContainer from './VideoContainer/VideoContainer'
import RecentGames from './RecentGames/RecentGames'
import TopRatedGames from './TopRatedGames/TopRatedGames'

const Home = () => (
  <>
    <Hero />
    <Container className="contentWrapper">
      <RecentGames />
      <TopRatedGames />
      <VideoContainer />
    </Container>
  </>
)

export default Home
