import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sectionImg from "../../Assets/img/Group22.png"
import "./Offer.css"
function Offer() {
    return (
        <section className='py-5 px-5 offer_section'>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <img src={sectionImg} alt='sectionImg' className='w-75' />
                    </Col>
                    <Col md={6}>
                <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>
                <div className='w-50'>
                            <h6>What We Offer</h6>
                            <p>We Offer you different kinds of services that will help you save your time and be more comfortable. </p>
                            <button>Our Services</button>
                        </div>
                </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Offer
