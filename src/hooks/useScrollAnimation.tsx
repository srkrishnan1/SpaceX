import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationProps {
  threshold?: number;
}

const useScrollAnimation = ({ threshold = 0.1 }: UseScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement | null>(null); 
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const { top } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
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
