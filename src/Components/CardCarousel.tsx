//Utilized to create a carousel that consists of cards, with navigation buttons for moving back and forth.

import React, { useRef } from "react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

interface CarouselProps {
  children: React.ReactNode;  
}

const CardCarousel: React.FC<CarouselProps> = ({ children }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });  
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });  
    }
  };

  return (
    <div className="carousel-container">
      <button
        className="carousel-nav left hidden md:block"
        onClick={handlePrevClick}
      >
        <MdChevronLeft size={24} />
      </button>
      <div className="carousel" ref={carouselRef}>
        {children}
      </div>
      <button
        className="carousel-nav right hidden md:block"
        onClick={handleNextClick}
      >
        <MdChevronRight size={24} />
      </button>
    </div>
  );
};

export default CardCarousel;
