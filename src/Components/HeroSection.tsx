// Hero section is used create main hero element, which take image and children as props, the children should be valid react element.

import React, { ReactElement } from "react";

interface HeroSectionProps {
  image: string;
  
  children: ReactElement | null;
 
}

const HeroSection: React.FC<HeroSectionProps> = ({
  image,

  children = null,

  
}) => {
  return (
    <div className="hero overlay">
      <img src={image} alt="Hero Section Image" className="hero__image" />
      

      {children}
    </div>
  );
};

export default HeroSection;
