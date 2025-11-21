"use client";
import Carousel from "react-bootstrap/Carousel";

interface slide {
  title: string;
  subtitle: string;
  imgUrl: string;
}

const HeroSection = () => {
  const slides: slide[] = [
    {
      title: "Enjoy Your Favorite Dishes",
      subtitle:
        "Fresh ingredients, cozy ambience, and friendly service just for you.",
      imgUrl: "/images/hero1.jpg",
    },
    {
      title: "Weekend Special Menu",
      subtitle: "Taste our chef’s signature meals with your loved ones.",
      imgUrl: "/images/hero2.jpg",
    },
    {
      title: "Order Online, Eat at Home",
      subtitle: "Fast delivery with the same great restaurant quality.",
      imgUrl: "/images/hero3.jpg",
    },
  ];

  return (
    <Carousel
      className="hero-section"
      fade
      interval={4000}
      data-bs-theme="dark"
      id="hero"
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index} className="hero-slide">
          <div
            className="hero-background"
            style={{
              backgroundImage: `url(${slide.imgUrl})`,
            }}
          />
          <div className="hero-overlay" />
          <Carousel.Caption className="hero-caption">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeroSection;
