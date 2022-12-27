import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logoImg from "../../Assets/img/Group1.png"
import Group2 from "../../Assets/img/Group2.png"


import "./Navbar.css"
function Navbar() {
  return (
    <section className='navbar_container px-5 '>
      <Container fluid>
        <Row>
          <Col md={4}>            <img src={Group2} alt="Group2" />
          </Col>
          <Col md={4} className='h-100'> <div className='logo_container'>
            <img src={logoImg} alt="logoImg" />

          </div></Col>
          <Col md={4}>
          <ul className='d-flex p-0 nav_links'>
              <li>Our Services</li>
              <li>About Us</li>

              <li>Join Us</li>

            </ul>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Navbar
