import React from 'react'
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap'
import './NavBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavBar = () => (
  <Navbar fixed="top" expand="sm" id="mainNav">
    <Container className="navContainer">
      <Navbar.Brand href="#home">gamelogged</Navbar.Brand>
      <FontAwesomeIcon icon={['fas', 'search']} className="NavItem Search" />
      <Button className="NavItem">LOGIN</Button>
      <Button className="NavItem">SIGNUP</Button>
      <Navbar.Toggle aria-controls="links-navbar" className="NavItem navbar-dark" />
      <Navbar.Collapse className="justify-content-end" id="links-navbar">
        <Nav>
          <Nav.Item>
            <Nav.Link className="text-upper nav-item" href="#services"><Button className="NavItem">PROFILE</Button></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>
)

export default NavBar
