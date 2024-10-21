//Modify the element to have scroll animation

import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationProps {
  threshold?: number;
}

const useScrollAnimation = ({ threshold = 0.1 }: UseScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null); 
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = ():void => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight:number = window.innerHeight;
      if (top < windowHeight * threshold) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll); 
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { ref, isVisible };
};

export default useScrollAnimation;
