/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


import { Container } from 'react-bootstrap'

import Sort from './Sort/Sort'
import Platforms from './Platforms/Platforms'
import PageOfGames from './PageOfGames/PageOfGames'
import Filters from './Filters/Filters'
import Pagination from './Pagination/Pagination'
import NiceButton from '../Test/NiceButton'

import './Frontpage.scss'


const Index = () => {
  const initialFilters = { genre: '', coop: '', gameMode: '' }
  const [platform, setPlatform] = useState('')
  const [filters, setFilters] = useState(initialFilters)
  const [sort, setSort] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [pager, setPager] = useState([])
  const [pageOfItems, setPageOfItems] = useState([])
  const baseUrl = 'https://guarded-mesa-01224.herokuapp.com/api/'
  // const baseUrl = 'http://localhost:3001/api/'

  const loadPage = async () => {
    const params = new URLSearchParams(location.search)
    const page = parseInt(params.get('page'), 10) || 1

    if (platform !== '') {
      const request = await axios.get(`${baseUrl}platform/${platform}?page=${page}&sort=${sort}`)
      setPager(request.data.pager)
      setPageOfItems(request.data.pageOfItems)
      setIsLoading(false)
    }

    if (page !== pager.currentPage || sort !== '') {
      const request = await axios.get(`${baseUrl}games?page=${page}&sort=${sort}`)
      setPager(request.data.pager)
      setPageOfItems(request.data.pageOfItems)
      setIsLoading(false)
    }
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
    console.log(sort)
  }, [sort, platform])


  return (
    <>
      (
      <NiceButton isLoading={isLoading} onClick={() => setIsLoading(true)}>
        <>
          <Container className="contentWrapper">
            <Container className="filtersContainer">
              <Container className="filterContainer filterTop">
                <Sort sort={sort}
                  setSort={setSort}
                  loadPage={loadPage}
                />
                <Platforms platform={platform} setPlatform={setPlatform} name="All Platforms" />

              </Container>
              <Container className="filterContainer filterBottom">
                <Filters setFilters={setFilters}
                  filters={filters}
                />
              </Container>
            </Container>
            <PageOfGames pageOfGames={pageOfItems} platform={platform} />
          </Container>


          {pager.pages && pager.pages.length
          && (
            <ul className="pagination">
              <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                <Link to={{ search: '?page=1' }} className="page-link">First</Link>
              </li>
              <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                <Link to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link">Previous</Link>
              </li>
              {pager.pages.map((page) => (
                <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                  <Link to={{ search: `?page=${page}` }} className="page-link">{page}</Link>
                </li>
              ))}
              <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                <Link to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link">Next</Link>
              </li>
              <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                <Link to={{ search: `?page=${pager.totalPages}` }} className="page-link">Last</Link>
              </li>
            </ul>
          ) }
        </>
      </NiceButton>
      )
    </>
  )
}

export default Index
