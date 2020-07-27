import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Hero = () => (
  <div id="hero">
    <Container fluid className="mx-auto text-secondary" id="header_container">
      <Row>
        <Col md={6}>
          <h1 className="display-6">Find games</h1>
          <p>Search for games using many filters</p>
          <Link to="/platforms">
            <Button>DISCOVER</Button>
          </Link>
        </Col>
        {/* <Col md={6}>
          <h1 className="display-6">Keep the memories</h1>
          <p>Build your log, write reviews, rate games, make wishlists and more</p>
          <div>
            <Link to="/signup"><Button>SIGNUP</Button> </Link>
            <Link to="/login"><Button>LOGIN</Button></Link>
          </div>
        </Col> */}
      </Row>
    </Container>
  </div>
)

export default Hero
