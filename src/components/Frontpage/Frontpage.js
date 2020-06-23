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
import NiceButton from '../Test/NiceButton'

import './Frontpage.scss'


const Index = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pager, setPager] = useState([])
  const [pageOfItems, setPageOfItems] = useState([])


  const location = useLocation()
  const sort = useSelector((state) => state.sort)
  const platform = useSelector((state) => state.platform)
  const filters = useSelector((state) => state.filters)


  const loadPage = async () => {
    const params = new URLSearchParams(location.search)
    const page = parseInt(params.get('page'), 10) || 1
    const { genre, gameMode, coopMode } = filters

    if (platform !== 'all') {
      const response = await gameService
        .getPlatformGames(platform, page, sort, genre, gameMode, coopMode)

      setPager(response.pager)
      setPageOfItems(response.pageOfItems)
      setIsLoading(false)
      return null
    }

    const response = await gameService.getAllGames(page, sort, genre, gameMode, coopMode)
    setPager(response.pager)
    setPageOfItems(response.pageOfItems)
    return null
  }

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 100)
    }
  }, [isLoading])

  useEffect(() => {
    loadPage()
  }, [sort, platform, filters])

  return (
    <>
      (
      <NiceButton isLoading={isLoading} onClick={() => setIsLoading(true)}>
        <>
          <Container className="contentWrapper">
            <Container className="filtersContainer">
              <Container className="filterContainer filterTop">
                <Sort sort={sort} loadPage={loadPage} />
                <Platforms platform={platform} name="All Platforms" />
              </Container>
              <Container className="filterContainer filterBottom">
                <Filters filters={filters} />
              </Container>
            </Container>
            <PageOfGames pageOfGames={pageOfItems} platform={platform} />
          </Container>
          <Pagination pager={pager} />
        </>
      </NiceButton>
      )
    </>
  )
}

export default Index
