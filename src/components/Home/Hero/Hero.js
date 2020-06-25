import React from 'react'
import {
  Container, Row, Col, Button,
} from 'react-bootstrap'


const Hero = () => (
  <div id="hero">
    <Container fluid className="text-center text-white mx-auto" id="header_container">
      <Row>
        <Col md={6}>
          <Col xl={12} className="col-auto text-xl-left text-md-left text-center">
            <h1 className="display-6">Gamelogged</h1>
            <h4>Keep track of your games and discover your next!</h4>
          </Col>
        </Col>
        <Col md={6}>
          <Button>Discover</Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Hero
