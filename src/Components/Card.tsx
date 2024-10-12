import React from "react";
import Button from "../Utilities/Button";

interface CardProps {
  imageLink: string;
  title: string;
  subtitle: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ imageLink, title, subtitle, id }) => {
  return (
    <div className="card">
      <img src={imageLink} alt={title} className="card__image" />
      <div className="card__content">
        <h4 className="card__title">{title}</h4>
        <p className="card__subtitle">{subtitle}</p>
        <Button
          style={"outline"}
          size={"md"}
          content={"Know More"}
          externalLink={id}
        ></Button>
      </div>
    </div>
  );
};

export default Card;
