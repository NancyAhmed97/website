import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import sectionImg from "../../Assets/img/Group36.png"
import "./Gap.css"
function Gap() {
    return (
        <section className='py-5 px-5 gap_section'>
            <Container fluid>
                <Row>

                    <Col md={6}>
                        <div className='w-100 h-100 d-flex flex-column justify-content-center '>

                            <div className='w-50'>
                                <h6>We Fill Your Gap</h6>
                                <p>We are ready to bring you all your needs anywhere at any time through our useful mobile application. No need to waste time you are one click away. </p>
                                <button>Install Now</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='w-100 h-100 d-flex flex-column justify-content-center align-items-center'>

                            <img src={sectionImg} alt='sectionImg' className='w-50' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Gap
