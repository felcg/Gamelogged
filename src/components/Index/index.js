/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Container } from 'react-bootstrap'

import Pagination from '../Pagination/Pagination'
import GameCard from '../GameCard/GameCard'
import NavBar from '../NavBar/NavBar'
import './Index.scss'


const Index = (props) => {
  const [pager, setPager] = useState({})
  const [pageOfGames, setPageOfGames] = useState([])
  const baseUrl = 'http://localhost:3001/api/games'


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

  const getAll = async () => {
    const params = new URLSearchParams(props.location.search)
    const page = parseInt(params.get('page'), 10) || 1
    const request = await axios.get(`${baseUrl}?page=${page}`)
    console.log(request.data.pageOfGames)
    setPager(request.data.pager)
    getAllImages(request.data.pageOfGames)
  }

  useEffect(() => {
    getAll()
  }, [props.location])


  return (
    <>
      <NavBar />
      <Container className="contentWrapper">
        {pageOfGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </Container>
      {pager.pages && <Pagination pager={pager} />}
    </>
  )
}

export default Index
