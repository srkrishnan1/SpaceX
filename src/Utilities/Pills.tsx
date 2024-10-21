import React from "react";

interface PillProps {
  size: string;
  content: string;
  underline: boolean;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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

    window.location.href = window.location.origin + `/${link}`;
  };

  return (
    <button
      className={`pill ${underline ? "pill--underline" : ""} pill--${size}`}
      onClick={handleClick}
      aria-label={content}
    >
      {content}
    </button>
  );
};

export default Pills;
