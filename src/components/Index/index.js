/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'

import JwPagination from 'jw-react-pagination'
import GameCard from '../GameCard/GameCard'
import NavBar from '../NavBar/NavBar'
import './Index.scss'


const Index = () => {
  const initialFilters = { genre: '', coop: '', gameMode: '' }
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState(games)
  const [pageOfGames, setPageOfGames] = useState([])
  const [platform, setPlatform] = useState('wii')
  const [filters, setFilters] = useState(initialFilters)
  const [sort, setSort] = useState('')

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

  const genres = ['Simulator', 'Tactical', 'Quiz/Trivia', 'Fighting', 'Strategy', 'Adventure', 'Role-playing (RPG)', 'Shooter', 'Music', 'Indie', 'Turn-based strategy (TBS)', 'Pinball', 'Puzzle', 'Real Time Strategy (RTS)', 'Hack and slash/Beat \'em up', 'Visual Novel', 'Platform', 'Racing', 'Sport', 'Arcade', 'Point-and-click', 'Card & Board Game', 'MOBA']

  const gameModes = ['Co-operative', 'Single player', 'Multiplayer', 'Massively Multiplayer Online (MMO)', 'Split screen', 'Battle Royale']

  const coopModes = ['Campaign Coop', 'Offline Coop', 'Online Coop']

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

    const firstSort = newArr.sort((a, b) => (b.first_release_date - a.first_release_date))
    setGames(firstSort)
    setFilteredGames(firstSort)
  }

  const filterGenre = (e) => {
    const newFilter = { genre: e.target.value, coop: '', gameMode: '' }
    if (e.target.value !== '') {
      setFilteredGames(games
        .filter((game) => game.genres
          .some((g) => g.name === e.target.value)))
      setFilters(newFilter)
    } else {
      setFilters(newFilter)
      setFilteredGames(games)
    }
  }

  const filterGameMode = (e) => {
    const newFilter = { gameMode: e.target.value, genre: '', coop: '' }
    if (e.target.value !== '') {
      setFilteredGames(games
        .filter((game) => game.game_modes.some((mode) => mode.name === e.target.value)))

      setFilters(newFilter)
    } else {
      setFilters(newFilter)
      setFilteredGames(games)
    }
  }


  const filterCoop = (e) => {
    const newFilter = { coop: e.target.value, genre: '', gameMode: '' }
    switch (e.target.value) {
    case 'Campaign Coop':
      setFilteredGames(games
        .filter((game) => game.multiplayer_modes)
        .filter((game) => game.multiplayer_modes[0].campaigncoop === true))
      setFilters(newFilter)
      break

    case 'Offline Coop':
      setFilteredGames(games
        .filter((game) => game.multiplayer_modes)
        .filter((game) => game.multiplayer_modes[0].offlinecoop === true))
      setFilters(newFilter)
      break

    case 'Online Coop':
      setFilteredGames(games
        .filter((game) => game.multiplayer_modes)
        .filter((game) => game.multiplayer_modes[0].onlinecoop === true))
      setFilters(newFilter)
      break

    default:
      setFilteredGames(games)
      setFilters(newFilter)
    }
  }

  const sortList = (e) => {
    if (e.target.value !== '') {
      if (e.target.value === 'release') {
        filteredGames.sort((a, b) => (b.first_release_date - a.first_release_date))
        setSort('release')
      }

      if (e.target.value === 'rating') {
        filteredGames.sort((a, b) => (b.total_rating - a.total_rating))
        setSort('rating')
      }

      const sortedArr = [...filteredGames]
      setFilteredGames(sortedArr)
    } else {
      console.log('else')
      setSort('')
    }
  }

  useEffect(() => {
    getAll()
    setSort('')
  }, [platform])

  useEffect(() => {
    setSort('')
  }, [filters])

  return (
    <>
      <NavBar />
      <Container className="contentWrapper">
        <select value={filters.coop} onChange={filterCoop}>
          <option defaultValue value="">Coop Mode</option>
          {coopModes.map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </select>

        <select value={filters.genre} onChange={filterGenre}>
          <option value="">All genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        <select value={filters.gameMode} onChange={filterGameMode}>
          <option value="">All game modes</option>
          {gameModes.map((mode) => (
            <option key={mode} value={mode}>{mode}</option>
          ))}
        </select>

        <select value={sort} onChange={sortList}>
          <option value="">Sort</option>
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
        items={filteredGames}
        onChangePage={onChangePage}
        pageSize={10}
        maxPages={3}
        disableDefaultStyles
      />
    </>
  )
}

export default Index
