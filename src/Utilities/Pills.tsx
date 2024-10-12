import React from "react";
import { Link } from "react-router-dom";

interface PillProps {
  size: string;
  content: string;
  underline: boolean;
  link: string;
  
}

const Pills: React.FC<PillProps> = ({
  size,
  content,
  underline,
  link = "",
}) => {
  return (
    <button
      className={`pill ${underline ? "pill--underline" : ""} pill--${size}`}
    >
      <Link to={link}>{content}</Link>
    </button>
  );
};

export default Pills;
