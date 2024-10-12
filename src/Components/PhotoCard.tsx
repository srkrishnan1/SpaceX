import React from "react";
import { Link } from "react-router-dom";

interface PhotoCardProps {
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({
  title,
  subtitle,
  image,
  link = "",
}) => {
  return (
    <div className="photoCard">
      <img src={image} alt={title} className="photoCard__image" />
      <div className="photoCard__content">
        <p className="phtoCard__caption">{subtitle}</p>
        <h4 className="photoCard__title">{title}</h4>
      </div>
    </div>
  );
};

export default PhotoCard;
