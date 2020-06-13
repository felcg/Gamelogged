/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Pagination from '../Pagination/Pagination'
import GameCard from '../GameCard/GameCard'
import NavBar from '../NavBar/NavBar'
import '../Index/Index.scss'


const Index = (props) => {
  const [pager, setPager] = useState({})
  const [pageOfGames, setPageOfGames] = useState([])

  const baseUrl = 'http://localhost:3001/api/'
  const params = useParams()

  const platforms = [{ slug: 'win', name: 'PC' }, { slug: 'linux', name: 'Linux' }, { slug: 'ps', name: 'Playstation' },
    { slug: 'ps2', name: 'Playstation 2' }, { slug: 'ps3', name: 'Playstation 3' }, { slug: 'ps4--1', name: 'Playstation 4' },
    { slug: 'playstation-5', name: 'Playstation 5' }, { slug: 'psp', name: 'PSP' }, { slug: 'psvita', name: 'PS Vita' },
    { slug: 'xbox', name: 'Xbox' }, { slug: 'xbox360', name: 'Xbox 360' }, { slug: 'xboxone', name: 'Xbox One' }, { slug: 'xbox-series-x', name: 'Xbox Series X' },
    { slug: 'nes', name: 'NES' }, { slug: 'snes--1', name: 'SNES' }, { slug: 'n64', name: 'Nintendo 64' }, { slug: 'ngc', name: 'GameCube' },
    { slug: 'wii', name: 'Wii' }, { slug: 'wiiu', name: 'Wii U' }, { slug: 'switch', name: 'Switch' }, { slug: 'gb', name: 'Game Boy' },
    { slug: 'gbc', name: 'Game Boy Color' }, { slug: 'gba', name: 'Game Boy Advance' }, { slug: 'nds', name: 'Nintendo DS' },
    { slug: '3ds', name: 'Nintendo 3DS' }, { slug: 'smd', name: 'Mega Drive / Genesis' }, { slug: 'saturn', name: 'Sega Saturn' }, { slug: 'dc', name: 'Dreamcast' },
    { slug: 'neo-geo-pocket', name: 'Neo Geo Pocket' }, { slug: 'neo-geo-pocket-color', name: 'Neo Geo Pocket Color' },
    { slug: 'arcade', name: 'Arcade' }, { slug: 'ios', name: 'iOs' }, { slug: 'android', name: 'Android' }]

  const getAllImages = (arr) => {
    const newArr = [...arr]
    newArr.map((game) => {
      if (game.cover) {
        game.cover.url = game.cover.url.split('/')
        game.cover.url[6] = 't_cover_big'
        game.cover.url = game.cover.url.join('/')
      }
      return null
    })
    setPageOfGames(newArr)
  }


  const getFilterPlatform = async () => {
    console.log('props', props)
    console.log(params)
    const { platform } = params
    const search = new URLSearchParams(props.location.search)
    const page = parseInt(search.get('page'), 10) || 1
    const request = await axios.get(`${baseUrl}platform/${platform}?page=${page}`)
    console.log('filter', request)
    setPager(request.data.pager)
    getAllImages(request.data.pageOfGames)
  }

  useEffect(() => {
    getFilterPlatform()
  }, [props.location])


  return (
    <>
      <NavBar />
      <Container className="contentWrapper">
        {platforms.map((platform) => (
          <Link key={platform.slug} to={{ pathname: `${platform.slug}` }} className="page-link">{platform.name}</Link>
        ))}
        {pageOfGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </Container>
      {pager.pages && <Pagination pager={pager} />}
    </>
  )
}

export default Index
