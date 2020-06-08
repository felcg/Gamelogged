import React, { useState, useEffect } from 'react'
import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/coop'

const Component = () => {
  const [gameList, setGameList] = useState([])

  const getAllImages = (arr) => {
    console.log(arr)
    arr.map((game) => {
      if (game.cover) {
        console.log('before', game.cover.url)
        game.cover.url = game.cover.url.split('/')
        game.cover.url[6] = 't_cover_big'
        game.cover.url = game.cover.url.join('/')
        console.log('after', game.cover.url)
      } else {
        console.log('no cover')
      }
    })
  }


  const getAll = async () => {
    const request = await axios.get(baseUrl)
    console.log('request', request.data)
    getAllImages(request.data)
    setGameList(request.data)
  }


  useEffect(() => {
    console.log('effect')
    getAll()
  }, [])

  return (
    <>
      <h1>hello</h1>
      {gameList.map((game) => (
        <div key={game.id}>
          <div>{game.name}</div>
          {game.cover
            ? <img src={game.cover.url} />
            : <div>No Image Yet</div>}
          {/* {console.log(game.cover)}
          <div>{game.cover}</div> */}
        </div>
      ))}
    </>
  )
}

export default Component
