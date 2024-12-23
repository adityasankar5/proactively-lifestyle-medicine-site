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
import { FiSearch } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMedicalInformation } from "react-icons/md";

const HeroSection = () => {

const imagesLeft = [carousel11, carousel12, carousel13, carousel14, carousel11, carousel12, carousel13, carousel14];
  const imagesRight = [carousel21, carousel22, carousel23, carousel24,carousel21, carousel22, carousel23, carousel24];
  const allImages = [...imagesLeft.slice(0, 4), ...imagesRight.slice(0, 4)];

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
    const intervalLeft = setInterval(() => scrollVerticalCarousel(leftCarouselRef, "up"), 50);
    const intervalRight = setInterval(() => scrollVerticalCarousel(rightCarouselRef, "down"), 50);
    const intervalMobile = setInterval(scrollHorizontalCarousel, 50);

    return () => {
      clearInterval(intervalLeft);
      clearInterval(intervalRight);
      clearInterval(intervalMobile);
    };
  }, []);

  return (
<section className="hero-section">
          <div className="inputs-container desktop-input">
        <div className="input-group">
  <FiSearch className="input-icon" />
  <input
    type="text"
    placeholder="Condition, procedure, specialty"
    className="input-field"
  />
</div>
<div className="input-group">
  <FaLocationDot className="input-icon" />
  <input
    type="text"
    placeholder="City, state, or zip code"
    className="input-field"
  />
</div>
<div className="input-group">
  <MdOutlineMedicalInformation className="input-icon" />
  <input
    type="text"
    placeholder="Insurance carrier"
    className="input-field"
  />
</div>

<button className="find-now-btn"><FiSearch fontSize={"20px"}/>Find Now</button>


      </div>
  <div className="gradient-strip"></div>
  <div className="content-container">
    {/* Desktop View: Carousels */}
    <div className="desktop-carousels">
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

    {/* Hero Text and Input Fields */}
    <div className="text-container">
      <div className="heading-container">
        <h1>
          Book an appointment with <span>lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>
{/* Input Fields for Mobile View */}
<div className="inputs-container mobile-input">
  <div className="input-group">
    <FiSearch className="input-icon" />
    <input
      type="text"
      placeholder="Condition, procedure, specialty..."
      className="input-field"
    />
  </div>
  <div className="input-group">
    <FaLocationDot className="input-icon" />
    <input
      type="text"
      placeholder="City, state, or zip code"
      className="input-field"
    />
  </div>
  <div className="input-group">
    <MdOutlineMedicalInformation className="input-icon" />
    <input
      type="text"
      placeholder="Insurance carrier"
      className="input-field"
    />
  </div>
<button className="find-now-btn"><FiSearch fontSize={"20px"}/>Find Now</button>
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