/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'

import JwPagination from 'jw-react-pagination'
import GameCard from '../GameCard/GameCard'
import NavBar from '../NavBar/NavBar'
import './Index.scss'


const Index = () => {
  const [games, setGames] = useState([])
  const [pageOfGames, setPageOfGames] = useState([])
  const [platform, setPlatform] = useState('wii')
  const [sort, setSort] = useState('release')

  const platforms = [
    { slug: 'win', name: 'PC' },
    { slug: 'ps', name: 'Playstaion' },
    { slug: 'ps2', name: 'Playstation 2' },
    { slug: 'ps3', name: 'Playstation 3' },
    { slug: 'ps4--1', name: 'Playstation 4' },
    { slug: 'playstation-5', name: 'Playstation 5' },
    { slug: 'psp', name: 'PSP' },
    { slug: 'psvita', name: 'PS Vita' },
    { slug: 'xbox', name: 'Xbox' },
    { slug: 'xbox360', name: 'Xbox 360' },
    { slug: 'xboxone', name: 'Xbox One' },
    { slug: 'xbox-series-x', name: 'Xbox Series X' },
    { slug: 'nes', name: 'NES' },
    { slug: 'snes--1', name: 'SNES' },
    { slug: 'n64', name: 'Nintendo 64' },
    { slug: 'ngc', name: 'Nintendo GameCube' },
    { slug: 'wii', name: 'Wii' },
    { slug: 'wiiu', name: 'Wii U' },
    { slug: 'switch', name: 'Switch' },
    { slug: 'gb', name: 'Game Boy' },
    { slug: 'gbc', name: 'Game Boy Color' },
    { slug: 'gba', name: 'Game Boy Advance' },
    { slug: 'nds', name: 'Nintendo DS' },
    { slug: '3ds', name: 'Nintendo 3DS' },
    { slug: 'smd', name: 'MegaDrive/ Sega Genesis' },
    { slug: 'saturn', name: 'Sega Saturn' },
    { slug: 'dc', name: 'Dreamcast' },
    { slug: 'neo-geo-pocket', name: 'NeoGeo Pocket' },
    { slug: 'neo-geo-pocket-color', name: 'NeoGeo Pocket Color' },
    { slug: 'ios', name: 'iOs' },
    { slug: 'arcade', name: 'Arcade' },
    { slug: 'android', name: 'Android' },
    { slug: 'linux', name: 'Linux' }]

  const baseUrl = 'http://localhost:3001/api/'

  function onChangePage(pageOfGames) {
    setPageOfGames(pageOfGames)
  }

  const getAll = async () => {
    const request = await axios.get(`${baseUrl}platform/${platform}`)
    const newArr = [...request.data]

    newArr.map((game) => {
      if (game.cover) {
        game.cover.url = game.cover.url.split('/')
        game.cover.url[6] = 't_cover_big'
        game.cover.url = game.cover.url.join('/')
      }
      return null
    })

    if (sort === 'release') {
      newArr.sort((a, b) => (b.first_release_date - a.first_release_date))
    }

    if (sort === 'rating') {
      newArr.sort((a, b) => (b.total_rating - a.total_rating))
    }

    setGames(newArr)
  }

  useEffect(() => {
    getAll()
  }, [sort, platform])


  return (
    <>
      <NavBar />
      <Container className="contentWrapper">

        <select value={sort} onChange={(e) => setSort(e.currentTarget.value)}>
          <option value="release">Release date</option>
          <option value="rating">Rating</option>
        </select>

        <select value={platform} onChange={(e) => setPlatform(e.currentTarget.value)}>
          {platforms.map((p) => (
            <option key={p.slug} value={p.slug}>{p.name}</option>
          ))}
        </select>
        {console.log(pageOfGames)}
        {pageOfGames
          .filter((game) => game.platforms.some((p) => p.slug === `${platform}`))
          .map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
      </Container>
      <JwPagination
        items={games}
        onChangePage={onChangePage}
        pageSize={10}
        maxPages={3}
        disableDefaultStyles
      />
    </>
  )
}

export default Index
