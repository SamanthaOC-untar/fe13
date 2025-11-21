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
    <div>
      <Navbar />
      <main>
        <Hero />

        <Container className="my-5">
          <Row className="my-4">
            <Col md={7} className="align-self-center mb-3">
              <h2>About Us</h2>
              <h6>What we do?</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, deleniti dolorum! Libero accusantium est commodi nisi, earum enim quis ut. Veniam molestiae placeat esse autem.
              </p>
              <Button variant="info">Learn More</Button>
            </Col>

            <Col md={5}>
            <p>
              <Image src = "/images/about.jpeg" alt="About Us" width={400} height={400}>
              </Image>
            </p>
            </Col>
          </Row>
        </Container>

        <section className="bg-dark">
          <WorkSection />
        </section>
        

        <ServiceSection/>
  
      

        <section id="contact">
          <ContactSection/>
        </section>
       
      </main>

    <Footer/>
    </div>
  )
}