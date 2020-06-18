import React from 'react'
import Select from '../Select/Select'
import {
  genres, gameModes, coopModes,
} from './filterlist'


const Filters = ({
  setFilteredGames, setFilters, games, filters,
}) => {
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

    case 'Split Screen':
      setFilteredGames(games
        .filter((game) => game.multiplayer_modes)
        .filter((game) => game.multiplayer_modes[0].splitscreen === true))
      setFilters(newFilter)
      break

    default:
      setFilteredGames(games)
      setFilters(newFilter)
    }
  }

  return (
    <>
      <Select value={filters.genre} onChange={filterGenre} collection={genres}
        name="All Genres"
      />

      <Select value={filters.coop} onChange={filterCoop} collection={coopModes}
        name="All Coop Modes"
      />

      <Select value={filters.gameMode} onChange={filterGameMode} collection={gameModes}
        name="All Game Modes"
      />

    </>
  )
}

export default Filters
