//Photo card is small size card used to show image with title and subtitle

import React from "react";

interface PhotoCardProps {
  title: string;
  subtitle: string;
  image: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, subtitle, image }) => {
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
