import React from "react";

import ScrollingNumber from "../Utilities/ScrollingNumber";

interface ScrollingItem {
  count: number;
  label: string;
}
const SubHeroSection: React.FC = () => {
  const scrollingArray: ScrollingItem[] = [
    { count: 121, label: "Total Launches" },
    { count: 134, label: "Total Landings" },
    { count: 110, label: "Total Reflights" },
  ];

  return (
    <div className="subHero">
      <div className="subHero__content">
        <h2 className="subHero__title">
          Reliable and Safe Transport of People and Payload from Earth to Space
        </h2>
        <p className="subHero__subtitle">
          SpaceX makes this a reusable part of the design to make things easier
          with a compact design and a mission to take humans to Mars.
        </p>
      </div>

      <div className="scrollingNumber__wrapper">
        {scrollingArray.map((item) => (
          <ScrollingNumber
            key={item.label}
            className="scrollingNumber"
            targetValue={item.count}
            duration={2000}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SubHeroSection;
