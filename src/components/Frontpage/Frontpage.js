import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'

import Sort from './Sort/Sort'
import Platforms from './Platforms/Platforms'
import PageOfGames from './PageOfGames/PageOfGames'
import Filters from './Filters/Filters'
import Pagination from './Pagination/Pagination'

import './Frontpage.scss'


const Index = () => {
  const initialFilters = { genre: '', coop: '', gameMode: '' }
  const [games, setGames] = useState([])
  const [filteredGames, setFilteredGames] = useState(games)
  const [pageOfGames, setPageOfGames] = useState([])
  const [platform, setPlatform] = useState('')
  const [filters, setFilters] = useState(initialFilters)
  const [sort, setSort] = useState('')
  const baseUrl = 'http://localhost:3001/api/'


  const getAll = async () => {
    const today = Date.now() / 1000
    let request = ''

    if (platform !== '') {
      request = await axios.get(`${baseUrl}platform/${platform}`)
    } else {
      request = await axios.get(`${baseUrl}games`)
    }

    const newArr = [...request.data]

    newArr.map((game) => {
      if (game.cover) {
        game.cover.url = game.cover.url.split('/')
        game.cover.url[6] = 't_cover_big'
        game.cover.url = game.cover.url.join('/')
      }
      return null
    })

    const finalArr = [...newArr]

    finalArr.map((game) => {
      if (game.total_rating === undefined) {
        game.total_rating = null
      }
      return null
    })

    const removeUpcoming = finalArr
      .filter((g) => g.first_release_date < today)
      .sort((a, b) => (b.first_release_date - a.first_release_date))

    setGames(removeUpcoming)
    setFilteredGames(removeUpcoming)
  }

  useEffect(() => {
    getAll()
    setSort('')
    setFilters(initialFilters)
  }, [platform])

  useEffect(() => {
    setSort('')
  }, [filters])

  return (
    <>
      <Container className="contentWrapper">
        <Container className="filtersContainer">
          <Container className="filterContainer filterTop">
            <Sort sort={sort} filteredGames={filteredGames}
              setSort={setSort} setFilteredGames={setFilteredGames}
            />
            <Platforms platform={platform} setPlatform={setPlatform} name="All Platforms" />

          </Container>
          <Container className="filterContainer filterBottom">
            <Filters setFilteredGames={setFilteredGames} setFilters={setFilters} games={games}
              filters={filters}
            />
          </Container>
        </Container>
        <PageOfGames pageOfGames={pageOfGames} platform={platform} />
      </Container>
      <Pagination filteredGames={filteredGames} setPageOfGames={setPageOfGames} />
    </>
  )
}

export default Index
