// LifestyleSixPillars.jsx
import React, { useRef } from "react";
import pillar1 from "../assets/pillar1.png";
import pillar2 from "../assets/pillar2.png";
import pillar3 from "../assets/pillar3.png";
import pillar4 from "../assets/pillar4.png";
import pillar5 from "../assets/pillar5.png";
import pillar6 from "../assets/pillar6.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./LifestyleSixPillars.scss";

const cards = [
  {
    id: 1,
    title: "Nutrition",
    image: pillar1,
    metric: "121/80 mmHg",
    description:
      "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
  },
  {
    id: 2,
    title: "Physical activity",
    image: pillar2,
    metric: "32 minutes",
    description:
      "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
  },
  {
    id: 3,
    title: "Restorative sleep",
    image: pillar3,
    metric: "8 hours",
    description:
      "Consistent, quality sleep is essential for cognitive function and physical health.",
  },
  {
    id: 4,
    title: "Stress management",
    image: pillar4,
    metric: "60 bpm",
    description:
      "Effective stress management techniques are crucial for mental well-being and overall health.",
  },
  {
    id: 5,
    title: "Social connection",
    image: pillar5,
    metric: "Feeling better",
    description:
      "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
  },
  {
    id: 6,
    title: "Substance abuse",
    image: pillar6,
    metric: "62 days",
    description:
      "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
  },
];

const LifestyleSixPillars = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const cardWidth = carouselRef.current.offsetWidth / 3; // Each card width for desktop
    carouselRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const handleButtonClick = (index) => {
    const cardWidth = carouselRef.current.offsetWidth / 3; // Show 3 cards at a time
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="pillars-carousel">
      {/* Heading with Arrows */}
      <div className="heading-with-arrows">
        
        <h2>
          <span className="highlight">Lifestyle as medicine:</span> The six pillars
        </h2>
        <button
          className="nav-arrow left-arrow"
          onClick={() => scrollCarousel("left")}
        >
          <FaChevronLeft />
        </button>
        <button
          className="nav-arrow right-arrow"
          onClick={() => scrollCarousel("right")}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Navigation Pills */}
      <div className="buttons">
        {cards.map((card, index) => (
          <button
            key={card.id}
            className="pill-button"
            onClick={() => handleButtonClick(index)}
          >
            {card.title}
          </button>
        ))}
      </div>

      <div className="carousel-wrapper">
        {/* Carousel */}
        <div className="carousel" ref={carouselRef}>
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt={card.title} />
              <div className="metric">{card.metric}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifestyleSixPillars;
