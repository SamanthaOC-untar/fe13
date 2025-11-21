"use client";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h3 className="footer-title">Our Products</h3>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Bundle</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Circular</a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h3 className="footer-title">Quick Link</h3>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Service</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h3 className="footer-title">Terms</h3>
            <ul className="list-unstyled footer-links">
              <li>
                <a href="#">Refund Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">License</a>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h3 className="footer-title">Search Here</h3>
            <Form className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search Here"
                  className="footer-input"
                />
                <Button variant="outline-light" className="btn-accent">
                  Search
                </Button>
              </InputGroup>
            </Form>

            <h3 className="footer-title mt-3">Follow Us</h3>
            <ul className="list-unstyled d-flex gap-3 footer-social">
              <li>
                <a href="#">
                  <i className="bi bi-facebook fs-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-twitter fs-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-instagram fs-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-youtube fs-4" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bi bi-pinterest fs-4" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4 pt-3 border-top">
          <Col md={12} className="text-center">
            <p className="mb-0 footer-copy">
              &copy; 2025 Samantha Oprah Colin. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
