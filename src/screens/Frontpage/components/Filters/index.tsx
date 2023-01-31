import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from '../index'
import {
  genreChange,
  gameModeChange,
  coopModeChange,
} from '../../../../reducers/filterReducer'

import { genres, gameModes, coopModes } from './filterlist'

export const Filters = ({ filters }) => {
  const gameMode = useSelector((state) => state.filters.gameMode)

  const dispatch = useDispatch()
  const changeFilter = (e, filter) => {
    switch (filter) {
      case 'genre':
        dispatch(genreChange(e.target.value))
        break
      case 'gameMode':
        dispatch(gameModeChange(e.target.value))
        break
      case 'coopMode':
        dispatch(coopModeChange(e.target.value))
        break
      default:
    }
  }

  return (
    <>
      <Select
        value={filters.genre}
        onChange={(e) => changeFilter(e, 'genre')}
        collection={genres}
        name="All Genres"
      />

      <Select
        value={filters.gameMode}
        onChange={(e) => changeFilter(e, 'gameMode')}
        collection={gameModes}
        name="All Game Modes"
      />

      {gameMode === 'Co-operative' && (
        <Select
          value={filters.coop}
          onChange={(e) => changeFilter(e, 'coopMode')}
          collection={coopModes}
          name="All Coop Modes"
        />
      )}
    </>
  )
}
