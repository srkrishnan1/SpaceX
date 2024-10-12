import React from "react";

interface RocketDetailSectionProps {
  title: string;
  label?: string;
  description?: string;
  list?: { label: string; option1: string; option2?: string }[];
  image: string;
}

const RocketDetailSection: React.FC<RocketDetailSectionProps> = ({
  title,
  label,
  description,
  list,
  image,
}) => {
  function getListItem(
    label: string,
    option1: string,
    option2?: string
  ): React.ReactElement {
    return (
      <div className="rocket-detail-section__details__wrapper">
        <p className="rocket-detail-section__detail-caption capitalize">
          {label}
        </p>
        <p className="rocket-detail-section__detail capitalize">
          {option1} {option2 ? `/ ${option2}` : ""}
        </p>
      </div>
    );
  }
  return (
    <section className="rocket-detail-section">
      <div className="rocket-detail-section__left-content">
        <h2 className="rocket-detail-section__title capitalize">{title}</h2>
        <p className="rocket-detail-section__label capitalize">{label}</p>

        <p className="rocket-detail-section__description capitalize">
          {description}
        </p>

        <ul className="rocket-detail-section__details">
          {list?.map((e) => getListItem(e.label, e.option1, e.option2))}
        </ul>
      </div>
      <div className="rocket-detail-section__right-content">
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default RocketDetailSection;
