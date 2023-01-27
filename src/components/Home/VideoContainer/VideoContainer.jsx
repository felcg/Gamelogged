/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import redditService from '../../../services/reddit'
import './VideoCotainer.scss'

const VideoContainer = () => {
  const [posts, setPosts] = useState([])
  const [showVideosModal, setShowVideosModal] = useState(false)
  const [videoObject, setVideoObject] = useState({})

  const handleVideo = (video) => {
    setVideoObject(video)
    setShowVideosModal(!showVideosModal)
  }

  const decodeEntities = (html) => {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  const videoPosts = (arr) => {
    const newArr = []

    arr.map((post) => {
      const string = decodeEntities(post.data.secure_media_embed.content)
      const getId = string.substring(68, 79)
      return newArr.push({
        id: getId,
        title: post.data.secure_media.oembed.title,
      })
    })

    return newArr
  }

  const getPosts = async () => {
    const response = await redditService.getTopPosts()
    const onlyVideos = videoPosts(response)
    setPosts(onlyVideos)
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <>
      <div id="VideoContainer">
        <h1>Videos About Games</h1>
        <div className="RedditVideoListContainer container">
          {posts &&
            posts.map((post) => (
              <div key={post.id} className="RedditVideoContainer">
                <h5>{post.title}</h5>
                <img
                  src={`https://img.youtube.com/vi/${post.id}/0.jpg`}
                  alt="thumbnail of video"
                  onClick={() => handleVideo(post)}
                  className="VideoThumb"
                />
              </div>
            ))}
        </div>
      </div>

      <Modal
        show={showVideosModal}
        onHide={() => setShowVideosModal(false)}
        centered
        className="ModalContainer ModalVideos"
      >
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="Video"
            key={videoObject.id}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="1"
            frameBorder="0"
            title={videoObject.title}
            src={`https://www.youtube.com/embed/${videoObject.id}`}
            poster={`https://img.youtube.com/vi/${videoObject.id}/0.jpg`}
          />
        </div>
      </Modal>
    </>
  )
}

export default VideoContainer
