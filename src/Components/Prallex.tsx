import React, { ReactNode } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

interface ScrollAnimationProps {
  children: ReactNode;  
  threshold?: number;  
  animationClass?: string;  
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  threshold = 0.1,
  animationClass = "animate-fade-in",
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, animationClass });

  return (
    <div
      ref={ref}
      className={`${
        isVisible ? animationClass : "opacity-0"
      } transition-opacity duration-700`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
