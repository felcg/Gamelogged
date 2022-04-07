import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import gameService from '../../services/games'

import Sort from './Sort/Sort'
import Platforms from './Platforms/Platforms'
import PageOfGames from './PageOfGames/PageOfGames'
import Filters from './Filters/Filters'
import Pagination from './Pagination/Pagination'
import Loading from '../Loader/Loading'

import './Frontpage.scss'

const Index = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pager, setPager] = useState([])
  const [pageOfItems, setPageOfItems] = useState([])

  const location = useLocation()
  const sort = useSelector((state) => state.sort)
  const platform = useSelector((state) => state.platform)
  const filters = useSelector((state) => state.filters)
  const search = useSelector((state) => state.search)

  const loadPage = async () => {
    const params = new URLSearchParams(location.search)
    const page = parseInt(params.get('page'), 10) || 1
    const { genre, gameMode, coopMode } = filters
    setIsLoading(true)

    if (search !== null) {
      const response = await gameService.searchGames(search, page)
      setPager(response.pager)
      setPageOfItems(response.pageOfItems)
      setIsLoading(false)
      return null
    }

    if (platform !== 'all') {
      const response = await gameService.getPlatformGames(
        platform,
        page,
        sort,
        genre,
        gameMode,
        coopMode
      )

      setPager(response.pager)
      setPageOfItems(response.pageOfItems)
      setIsLoading(false)
      return null
    }

    const response = await gameService.getAllGames(
      page,
      sort,
      genre,
      gameMode,
      coopMode
    )
    setPager(response.pager)
    setPageOfItems(response.pageOfItems)
    setIsLoading(false)
    return null
  }

  useEffect(() => {
    loadPage()
  }, [sort, platform, filters, search])

  return (
    <>
      <Container className="contentWrapper">
        {search === null ? (
          <Container className="filtersContainer">
            <Container className="filterContainer filterTop">
              <Sort sort={sort} loadPage={loadPage} />
              <Platforms platform={platform} name="All Platforms" />
            </Container>
            <Container className="filterContainer filterBottom">
              <Filters filters={filters} />
            </Container>
          </Container>
        ) : (
          <></>
        )}
        <Loading isLoading={isLoading}>
          <PageOfGames pageOfGames={pageOfItems} platform={platform} />
          <Pagination pager={pager} />
        </Loading>
      </Container>
    </>
  )
}

export default Index
