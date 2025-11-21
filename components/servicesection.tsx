"use client";

import { Container, Row, Col, Image } from "react-bootstrap";

function ServiceSection() {
  return (
    <Container className="my-5 service-section">
      <Row className="mb-4 text-center">
        <Col>
          <h6 className="section-eyebrow">Services</h6>
          <h2 className="section-title">Why Choose Us</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4} className="mb-3">
          <div className="service-card text-center py-4">
            <Image src="/images/ss1.jpeg" alt="Service 1" fluid />
            <h3>Cozy Dine In</h3>
            <p>Comfortable interior and warm lighting for your meals.</p>
          </div>
        </Col>

        <Col md={4} className="mb-3">
          <div className="service-card text-center py-4">
            <Image src="/images/ss2.png" alt="Service 2" fluid />
            <h3>Fast Delivery</h3>
            <p>Order from home and get your food quickly and safely.</p>
          </div>
        </Col>

        <Col md={4} className="mb-3">
          <div className="service-card text-center py-4">
            <Image src="/images/ss3.jpeg" alt="Service 3" fluid />
            <h3>Fresh Ingredients</h3>
            <p>We use quality ingredients every single day.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ServiceSection;
