import React, { useEffect, useState } from "react";
import { RocketBasicData } from "../Configuration/Interfaces";
import ImageCarousel from "./ImageCarousel";
import Button from "../Utilities/Button";
import { AiOutlineArrowRight } from "react-icons/ai";

interface RocketCardSectionProps {
  data: RocketBasicData;
}

const RocketCardSection: React.FC<RocketCardSectionProps> = ({ data }) => {
  const [images, setImages] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (data.flickr_images && data.flickr_images.length > 0) {
      const imageElements = data.flickr_images.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          className="rocket-card-section__image"
          alt={`${data.name} image ${index + 1}`}
        />
      ));
      setImages(imageElements);
    }
  }, [data]);

  return (
    <div className="rocket-card-section">
      <div className="rocket-card-section__left-content">
        <div className="rocket-card-section__text-content">
          <h2 className="rocket-card-section__title">{data.name}</h2>
          <p className="rocket-card-section__caption">Overview</p>
          <p className="rocket-card-section__subtitle">{data.description}</p>
        </div>
        <Button
          style="border"
          size="md"
          content="Know More"
          externalLink={data.id}
        >
          <AiOutlineArrowRight />
        </Button>
        <div className="rocket-card-section__cards">
          <div className="rocket-detail-section__details">
            <div className="rocket-detail-section__details__wrapper">
              <p className="rocket-detail-section__detail-caption">
                Success Percentage
              </p>
              <p className="rocket-detail-section__detail">
                {data.success_rate_pct}%
              </p>
            </div>
            <div className="rocket-detail-section__details__wrapper">
              <p className="rocket-detail-section__detail-caption">Status</p>
              <p className="rocket-detail-section__detail">
                {data.active ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rocket-card-section__right-content">
        {images.length > 0 ? (
          <ImageCarousel data={images} />
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default RocketCardSection;
