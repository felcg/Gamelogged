import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.scss'

const Footer = () => (
  <div className="footer py-4">
    <Container>
      <Row className="align-items-center">
        <Col lg={12} className="text-lg-right">
          <a className="mr-3" href="#!">
            About
          </a>
          <a href="#!">Contact</a>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Footer
