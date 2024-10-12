import { useRef, useState, useEffect } from "react";

type AnimationOptions = {
  threshold?: number; // How much of the element should be visible before triggering animation
  animationClass?: string; // The CSS class for the animation
};

const useScrollAnimation = (options: AnimationOptions = {}) => {
  const { threshold = 0.1, animationClass = "animate-fade-in" } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the browser's viewport as the container to check visibility
      rootMargin: "0px",
      threshold: threshold, // Percentage of the element visibility to trigger animation
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsVisible(true); // Element is visible, apply the animation
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold]);

  return {
    ref: elementRef,
    isVisible,
    animationClass,
  };
};

export default useScrollAnimation;
