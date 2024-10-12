import React from "react";


interface PillProps {
  size: string;
  content: string;
  underline: boolean;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Specify HTMLButtonElement
}

const Pills: React.FC<PillProps> = ({
  size,
  content,
  underline,
  link,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e); 
    }
    // Handle navigation
    window.location.href = link; // Navigate to the link
  };

  return (
    <button
      className={`pill ${underline ? "pill--underline" : ""} pill--${size}`}
      onClick={handleClick} // Use the handleClick function
      aria-label={content}
    >
      {content}
    </button>
  );
};

export default Pills;
