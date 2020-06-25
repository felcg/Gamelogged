import React from 'react'
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap'
import './NavBar.scss'
import Search from '../Search/Search'

const NavBar = () => (
  <Navbar fixed="top" expand="sm" id="mainNav">
    <Container className="navContainer" id="navContainer">
      <div className="item">
        <Navbar.Brand href="/">gamelogged</Navbar.Brand>
      </div>

      <div className="item ml-auto mr-n3">
        <Search />
      </div>

      <Navbar.Toggle aria-controls="links-navbar" className="NavItem navbar-dark" />
      <Navbar.Collapse className="justify-content-end" id="links-navbar">
        <Nav>
          <Nav.Item>
            <Nav.Link className="text-upper nav-item"><Button className="NavItem">LOGIN</Button></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-upper nav-item"><Button className="NavItem">SIGNUP</Button></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
)

export default NavBar
