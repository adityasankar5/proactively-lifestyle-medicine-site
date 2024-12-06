import React, { useEffect, useRef } from "react";
import "./HeroSection.scss";
import carousel11 from "../assets/carousel11.png";
import carousel12 from "../assets/carousel12.png";
import carousel13 from "../assets/carousel13.png";
import carousel14 from "../assets/carousel14.png";
import carousel21 from "../assets/carousel21.png";
import carousel22 from "../assets/carousel22.png";
import carousel23 from "../assets/carousel23.png";
import carousel24 from "../assets/carousel24.png";

const HeroSection = () => {

const imagesLeft = [carousel11, carousel12, carousel13, carousel14];
  const imagesRight = [carousel21, carousel22, carousel23, carousel24];
  const allImages = [...imagesLeft, ...imagesRight];

  const leftCarouselRef = useRef(null);
  const rightCarouselRef = useRef(null);
  const mobileCarouselRef = useRef(null);

  // Function to scroll a carousel vertically
  const scrollVerticalCarousel = (ref, direction) => {
    if (ref.current) {
      const { scrollTop, scrollHeight, clientHeight } = ref.current;
      const maxScroll = scrollHeight - clientHeight;

      if (direction === "down") {
        ref.current.scrollTop = scrollTop + 1 >= maxScroll ? 0 : scrollTop + 1;
      } else {
        ref.current.scrollTop = scrollTop - 1 <= 0 ? maxScroll : scrollTop - 1;
      }
    }
  };

  // Function to scroll the mobile carousel horizontally
  const scrollHorizontalCarousel = () => {
    if (mobileCarouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = mobileCarouselRef.current;
      const maxScroll = scrollWidth - clientWidth;

      mobileCarouselRef.current.scrollLeft = scrollLeft + 1 >= maxScroll ? 0 : scrollLeft + 1;
    }
  };

  // Automatic scrolling setup
  useEffect(() => {
    const intervalLeft = setInterval(() => scrollVerticalCarousel(leftCarouselRef, "down"), 50);
    const intervalRight = setInterval(() => scrollVerticalCarousel(rightCarouselRef, "up"), 50);
    const intervalMobile = setInterval(scrollHorizontalCarousel, 50);

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
      clearInterval(intervalMobile);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Gradient Strip */}
      <div className="gradient-strip"></div>

      {/* Hero Content */}
      <div className="content-container">
        {/* Heading */}
        <div className="heading-container">
          <h1>
            Book an appointment with <br /> <span>lifestyle medicine experts</span>
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>

        {/* Input Fields */}
        <div className="inputs-container">
          <input
            type="text"
            placeholder="Condition, procedure, specialty"
            className="input-field"
          />
          <input
            type="text"
            placeholder="City, state, or zip code"
            className="input-field"
          />
          <input
            type="text"
            placeholder="Insurance carrier"
            className="input-field"
          />
          <button className="find-now-btn">Find Now</button>
        </div>

        {/* Desktop View: Vertical Carousels */}
        <div className="carousels-container">
          <div className="carousel left-carousel" ref={leftCarouselRef}>
            {imagesLeft.map((image, index) => (
              <img key={index} src={image} alt={`Carousel Left ${index + 1}`} />
            ))}
          </div>
          <div className="carousel right-carousel" ref={rightCarouselRef}>
            {imagesRight.map((image, index) => (
              <img key={index} src={image} alt={`Carousel Right ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Mobile View: Horizontal Carousel */}
        <div className="mobile-carousel" ref={mobileCarouselRef}>
          {allImages.map((image, index) => (
            <img key={index} src={image} alt={`Carousel Mobile ${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;