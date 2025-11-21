"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function WorkSection() {
  return (
    <Container className="work-section">
      <Row className="mb-4">
        <Col md={12} className="text-center">
          <h6 className="section-eyebrow">Our Signature</h6>
          <h2 className="section-title">What We Serve</h2>
        </Col>
      </Row>
      <Row>
        {["ws1.jpeg", "ws2.jpeg", "ws3.jpeg"].map((img, index) => (
          <Col md={4} className="mb-4" key={index}>
            <Card className="work-card h-100">
              <Card.Img variant="top" src={`/images/${img}`} />
              <Card.Body>
                <Card.Title className="work-card-title">
                  Rice with wild boar liver and cutted cheese from Texas
                </Card.Title>
                <Card.Text className="work-card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam sunt veritatis voluptas explicabo sapiente.
                </Card.Text>
                <Button variant="outline-light" className="btn-accent w-100">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default WorkSection;
