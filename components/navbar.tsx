"use client";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MainNavbar() {
  return (
    <Navbar expand="lg" className="navbar-custom shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand href="#hero" className="navbar-brand-custom">
          Food Studio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar-links"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#work">Our Work</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#footer">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#footer">Terms</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex navbar-search">
            <Form.Control
              type="search"
              placeholder="Search menu..."
              className="me-2"
              aria-label="Search"
              size="sm"
            />
            <Button variant="outline-primary" size="sm">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
