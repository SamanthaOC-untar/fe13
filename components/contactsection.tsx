"use client";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function ContactSection() {
  return (
    <Container className="my-5 py-5 contact-section">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="contact-card shadow-sm">
            <Card.Body className="p-4">
              <h6 className="section-eyebrow text-center">Contact</h6>
              <h2 className="section-title text-center">Get In Touch</h2>
              <Form className="mt-3 text-start">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  />
                </Form.Group>
                <div className="text-end">
                  <Button variant="primary" type="submit" className="btn-accent">
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactSection;
