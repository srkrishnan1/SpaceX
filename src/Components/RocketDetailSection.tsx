import React from "react";

interface ListItem {
  label: string;
  option1: string;
  option2?: string;
}

interface RocketDetailSectionProps {
  title: string;
  label?: string;
  description?: string;
  list?: ListItem[];
  image: string;
}

const RocketDetailSection: React.FC<RocketDetailSectionProps> = ({
  title,
  label,
  description,
  list,
  image,
}) => {
  const getListItem = (
    label: string,
    option1: string,
    option2?: string
  ): React.ReactElement => {
    return (
      <div className="rocket-detail-section__details__wrapper" key={label}>
        <p className="rocket-detail-section__detail-caption capitalize">
          {label}
        </p>
        <p className="rocket-detail-section__detail capitalize">
          {option1} {option2 ? `/ ${option2}` : ""}
        </p>
      </div>
    );
  };

  return (
    <section className="rocket-detail-section">
      <div className="rocket-detail-section__left-content">
        <h2 className="rocket-detail-section__title capitalize">{title}</h2>
        {label && (
          <p className="rocket-detail-section__label capitalize">{label}</p>
        )}
        {description && (
          <p className="rocket-detail-section__description capitalize">
            {description}
          </p>
        )}
        <ul className="rocket-detail-section__details">
          {list?.map((item) =>
            getListItem(item.label, item.option1, item.option2)
          )}
        </ul>
      </div>
      <div className="rocket-detail-section__right-content">
        <img src={image} alt={title} />
      </div>
    </section>
  );
};

export default RocketDetailSection;
