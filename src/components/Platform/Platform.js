/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import Pagination from '../Pagination/Pagination'
import GameCard from '../GameCard/GameCard'
import NavBar from '../NavBar/NavBar'
import '../Index/Index.scss'


const Index = (props) => {
  const [pager, setPager] = useState({})
  const [pageOfGames, setPageOfGames] = useState([])
  const baseUrl = 'http://localhost:3001/api/'
  const params = useParams()

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

  const getFilterPlatform = async () => {
    console.log('props', props)
    console.log(params)
    const { platform } = params
    const search = new URLSearchParams(props.location.search)
    const page = parseInt(search.get('page'), 10) || 1
    const request = await axios.get(`${baseUrl}platform/${platform}?page=${page}`)
    console.log('filter', request)
    setPager(request.data.pager)
    getAllImages(request.data.pageOfGames)
  }

  useEffect(() => {
    getFilterPlatform()
  }, [props.location])


  return (
    <>
      <NavBar />
      <Container className="contentWrapper">
        <Link to={{ pathname: 'wii' }} className="page-link">Wii</Link>
        <Link to={{ pathname: 'nds' }} className="page-link">Nds</Link>
        <Link to={{ pathname: 'n64' }} className="page-link">n64</Link>
        <Link to={{ pathname: 'ps2' }} className="page-link">ps2</Link>
        {pageOfGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </Container>
      {pager.pages && <Pagination pager={pager} />}
    </>
  )
}

export default Index
