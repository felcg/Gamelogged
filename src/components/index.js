/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import GameCard from './GameCard/GameCard'

const baseUrl = 'http://localhost:3001/api/coop'

const Component = (props) => {
  const [pager, setPager] = useState({})
  const [pageOfGames, setPageOfGames] = useState([])

  const getAllImages = (arr) => {
    arr.map((game) => {
      if (game.cover) {
        game.cover.url = game.cover.url.split('/')
        game.cover.url[6] = 't_cover_big'
        game.cover.url = game.cover.url.join('/')
      }
    })
  }

  const getAll = async () => {
    const params = new URLSearchParams(props.location.search)
    const page = parseInt(params.get('page'), 10) || 1
    const request = await axios.get(`${baseUrl}?page=${page}`)
    setPager(request.data.pager)
    setPageOfGames(request.data.pageOfGames)
    getAllImages(request.data.pageOfGames)
  }

  useEffect(() => {
    getAll()
  }, [props.location])

  return (
    <>
      <div className="card-footer pb-0 pt-3">
        {pager.pages && pager.pages.length && (
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
        )}
      </div>

      <Container>
        {console.log(pager)}
        {pageOfGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </Container>

    </>
  )
}

export default Component
