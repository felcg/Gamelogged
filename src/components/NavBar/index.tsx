import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { login } from '../../reducers/userReducer'
import { Search } from '../index'
import './styles.scss'

export const NavBar = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const handleLogout = () => {
    window.sessionStorage.removeItem('loggedUser')
    window.location.href = '/'
  }

  useEffect(() => {
    const loggedUserJSON = window.sessionStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = loggedUserJSON
      dispatch(login(user))
    }
  }, [])

  return (
    <Navbar fixed="top" expand="sm" id="mainNav">
      <Container className="navContainer" id="navContainer">
        <div className="item">
          <Navbar.Brand href="/">gamelogged</Navbar.Brand>
        </div>

        <div id="searchDiv" className="item ml-auto">
          <Search />
        </div>

        <Navbar.Toggle
          aria-controls="links-navbar"
          className="NavItem navbar-dark"
        />
        <Navbar.Collapse className="justify-content-end" id="links-navbar">
          <Nav>
            <Nav.Item>
              {user === null ? (
                <Nav.Link href="#/login" className="text-upper nav-item">
                  <Button className="NavItem">LOGIN</Button>
                </Nav.Link>
              ) : (
                <Nav.Link
                  href={`#/profile/${user.id}`}
                  className="text-upper nav-item"
                >
                  <Button className="NavItem">My Account</Button>
                </Nav.Link>
              )}
            </Nav.Item>
            <Nav.Item>
              {user === null ? (
                <Nav.Link href="#/signup" className="text-upper nav-item">
                  <Button className="NavItem">SIGNUP</Button>
                </Nav.Link>
              ) : (
                <Nav.Link className="text-upper nav-item">
                  <Button className="NavItem" onClick={handleLogout}>
                    Logout
                  </Button>
                </Nav.Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
