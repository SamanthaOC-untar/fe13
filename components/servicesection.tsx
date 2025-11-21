"use client"

import { Container, Row, Col, Image } from 'react-bootstrap';

function ServiceSection(){
    return(
        <Container className='my-5'>
            <Row>
                <Col md={4} className='mb-3 text-center py-3'>
                    <Image src="/images/ss1.jpeg" alt ="Service 1" fluid/>
                    <h3>Service 1</h3>
                    <p>Description of Service</p>
                </Col>

                <Col md={4} className='mb-3 text-center py-3'>
                    <Image src="/images/ss2.png" alt ="Service 1" fluid/>
                    <h3>Service 2</h3>
                    <p>Description of Service</p>
                </Col>

                <Col md={4} className='mb-3 text-center py-3'>
                    <Image src="/images/ss3.jpeg" alt ="Service 1" fluid/>
                    <h3>Service 4</h3>
                    <p>Description of Service</p>
                </Col>
            </Row>
        </Container>
    )
}

export default ServiceSection;