import React, { useState, useEffect, useRef } from "react";

interface ScrollingNumberProps {
  targetValue: number;
  label?: string;
  duration?: number;

  className?: string;
}

const ScrollingNumber: React.FC<ScrollingNumberProps> = ({
  targetValue,
  label = "",
  duration = 1000,

  className = "",
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
     
    const animationStartTime = Date.now();
    const totalDuration = duration;

    const animate = () => {
      const elapsedTime = Date.now() - animationStartTime;
      const progress = Math.min(elapsedTime / totalDuration, 1);
      const newValue = Math.floor(progress * targetValue);

      setCurrentValue(newValue);

      if (progress < 1) {
        animationFrameId.current = requestAnimationFrame(animate);
      } else {
        animationFrameId.current = null;
      }
    };

    animationFrameId.current = requestAnimationFrame(animate);

     
    return () => {
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [targetValue, duration]);

  return (
    <div className={className}>
      {currentValue.toLocaleString()}

      <div className="label">{label}</div>
    </div>
  );
};

export default ScrollingNumber;
