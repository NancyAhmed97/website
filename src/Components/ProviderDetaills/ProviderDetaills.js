import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "./ProviderDetaills.css"
function ProviderDetaills() {
    var {Companies}= useSelector((state) => state);
    console.log(Companies);
const params = useParams();
const resultObject = Companies.CompaniesDet.find(x => x.id == params.id)
console.log(resultObject);
    return (
        <section className='px-5 pb-5 provider_detaills'>
            <div className='d-flex align-items-center flex-column mb-5 info_details'>
                <div className='img_contaier'>
                    <img src={resultObject.logo[Object.keys(resultObject.logo)[5]]}alt='logo'className='w-100'/>
                </div>
                <p className='mt-4 '>{resultObject.name.value}</p>
                <p>{resultObject.description.value}</p>

            </div>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <div className='w-50'>
                        <h6 className='text-center'>Overview</h6>
                    <p className='text-center'>Our Leadership Principles aren't just a pretty inspirational wall hanging. These Principles work hard, just like we do. Amazonians use them, every day, whether they're discussing ideas for new projects, deciding on the best solution for a customer's problem, or interviewing candidates. It's just one of the things that makes Amazon peculiar.</p>

                        </div>
                    </Col>
                    <Col md={6}>
                 <div className='d-flex justify-content-center'>
                 <div className='w-50 '>
                        <h6 className='text-center'>Features and Benefits</h6>
                    <p className='text-center'>OWe aim to be Earth’s most customer centric company. Our mission is to continually raise the bar of the customer experience by using the internet and technology to help consumers find, discover and buy anything, and empower businesses and content creators to maximize their success.</p>

                        </div>
                 </div>
                     
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default ProviderDetaills
