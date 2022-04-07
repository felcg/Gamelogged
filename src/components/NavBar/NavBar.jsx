import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import './NavBar.scss'
import Search from '../Search/Search'

const NavBar = () => {
  const user = useSelector((state) => state.user)

  return (
    <Navbar fixed="top" expand="sm" id="mainNav">
      <Container className="navContainer" id="navContainer">
        <div className="item">
          <Navbar.Brand href="/">gamelogged</Navbar.Brand>
        </div>

        <div id="searchDiv" className="item ml-auto">
          <Search />
        </div>

        {/* <Navbar.Toggle aria-controls="links-navbar" className="NavItem navbar-dark" />
        <Navbar.Collapse className="justify-content-end" id="links-navbar">
          <Nav>
            <Nav.Item>
              {user === null
                ? <Nav.Link href="#/login" className="text-upper nav-item"><Button className="NavItem">LOGIN</Button></Nav.Link>
                : <Nav.Link href="#/login" className="text-upper nav-item"><Button className="NavItem">{user.user.username}</Button></Nav.Link>}
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#/signup" className="text-upper nav-item"><Button className="NavItem">SIGNUP</Button></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default NavBar
