import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoImg from "../../Assets/img/Group52.png"
import locationIcon from "../../Assets/img/Iconmaterial-location-on.png"
import googlePlayImg from "../../Assets/img/googlePlayImg.png"
import appStoreImg from "../../Assets/img/appStoreImg.png"

import "./Footer.css"
function Footer() {
    return (
        <footer className='px-5'>
            <Container fluid className='h-100'>
                <Row className='h-100'>
                    <Col md={4} className='h-100'>
                        <div className='about_container'>
                            <h5>About Us</h5>
                            <ul className='d-flex p-0'>
                                <li><Link to="/history"className='p-0'>Our History</Link></li>
                                <li><Link to="/Working">How we Work</Link></li>
                                <li><Link to="/resources">Resources</Link></li>

                            </ul>
                            <ul className='d-flex p-0'>
                                {/* <li><img src={googlePlayImg}alt='googlePlayImg'/></li> */}
                                <li><img src={appStoreImg}alt='appStoreImg'/></li>
                                <li><img src={appStoreImg}alt='appStoreImg'/></li>

                            </ul>
                        </div>
                    </Col>
                    <Col md={4} className='h-100'> <div className='logo_container'>
                        <img src={logoImg} alt="logoImg" />

                    </div>
                    </Col>
                    <Col md={4} className='h-100'>
                        <div className='footer_details_container'>
                            <div className='footer_location d-flex '>
                                <img src={locationIcon} alt="loaction" />
                                <p className='fw-bolder mb-0'>Saudi Arabia</p>
                            </div>
                            <p>Jeddah, Sultan St., Lilyan Tower 2, 11th Floor</p>
                            <div className='d-flex'>
                                <ul className='d-flex p-0'>
                                    <li className='fw-bold'>Email:</li>
                                    <li>
                                        <a href="mailto:hello@forall.com">hello@forall.com</a>                                    </li>

                                </ul>
                                <ul className='d-flex'>
                                    <li className='fw-bold'>Office: </li>
                                    <li><a href="tel:+00123456789">+00 123 456 789</a></li>

                                </ul>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}

export default Footer
