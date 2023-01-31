/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import { Container } from 'react-bootstrap'
import { Hero, VideoContainer, TopRatedGames } from './components'
import './styles.scss'

export const Home = () => (
  <>
    <Hero />
    <Container className="contentWrapper">
      <TopRatedGames />
      <VideoContainer />
    </Container>
  </>
)
