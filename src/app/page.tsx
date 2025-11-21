'use client';

import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/herosection";
import WorkSection from "../../components/worksection";
import ServiceSection from "../../components/servicesection";
import ContactSection from "../../components/contactsection";
import Footer from "../../components/footer";

import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "next/image";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <Hero />

        {/* ABOUT */}
        <section id="about" className="about-section">
          <Container className="my-5">
            <Row className="my-4 align-items-center">
              <Col md={7} className="mb-3">
                <h6 className="section-eyebrow">About Us</h6>
                <h2 className="section-title">What We Do</h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque, deleniti dolorum! Libero accusantium est commodi nisi,
                  earum enim quis ut. Veniam molestiae placeat esse autem.
                </p>
                <Button variant="light" className="btn-accent">
                  Learn More
                </Button>
              </Col>

              <Col md={5} className="mb-3">
                <div className="about-image-wrapper">
                  <Image
                    src="/images/about.jpeg"
                    alt="About Us"
                    width={400}
                    height={400}
                    className="about-image"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* WORK */}
        <section id="work" className="work-section-wrapper">
          <WorkSection />
        </section>

        {/* SERVICES */}
        <section id="services" className="service-section-wrapper">
          <ServiceSection />
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section-wrapper">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}
