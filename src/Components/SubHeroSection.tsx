import React from "react";
import ScrollingText from "../Utilities/Scrolling";
import ScrollingNumber from "../Utilities/ScrollingNumber";

const SubHeroSection = () => {
  const scrollingArray = [
    { count: 121, label: "Total Launch" },
    { count: 134, label: "Total Landing" },
    { count: 110, label: "Total Reflight" },
  ];
  return (
    <div className="subHero">
      <div className="subeHero__content">
        <h2 className="subHero__title">
          Reliabe and Safe Transport of people and payload from Earth to Space
        </h2>
        <p className="subHero__subtitle">
          Spacex Make this as reusable part of the design to make things easier
          and resuable compact design with mission to take human to mars.
        </p>
      </div>

      <div className="scrollingNumber__wrapper">
        <ScrollingNumber
          className="scrollingNumber"
          targetValue={121}
          duration={2000}
          label="Total Launches"
        />
        <ScrollingNumber
          className="scrollingNumber"
          targetValue={134}
          duration={2000}
          label="Total Landing"
        />
        <ScrollingNumber
          className="scrollingNumber"
          targetValue={110}
          duration={2000}
          label="Total Relights"
        />
      </div>
    </div>
  );
};

export default SubHeroSection;
