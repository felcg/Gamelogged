import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import './styles.scss'

export const Profile = () => {
  const [user, setUser] = useState(null)
  const userFromStore = useSelector((state) => state.user)
  const loggedUserJSON = window.sessionStorage.getItem('loggedUser')

  useEffect(() => {
    setUser(userFromStore)
  }, [userFromStore])

  if (!loggedUserJSON) {
    return <Redirect to="/login" />
  }

  return (
    <>
      {user && (
        <Container className="contentWrapper">
          <div className="profileContainer">{user.name}</div>
        </Container>
      )}
    </>
  )
}
