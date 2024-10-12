import Image from "../assets/Frame 68.png";
import HeroSection from "../Components/HeroSection";
import LaunchContent from "../Components/UpcomingLaunches";
import Pills from "../Utilities/Pills";
import ScrollingText from "../Utilities/Scrolling";
import { useState, useMemo, ReactElement } from "react";
import heroImage from "../assets/dragon_feature.jpg";
import ScrollAnimation from "../Components/Prallex";

const Launches = () => {
  const [isUpcoming, setUpcoming] = useState<boolean>(true);
   
  const scrolldata = useMemo(
    () => [
      { count: 383, label: "Total Launch" },
      { count: 383, label: "Successful Landing" },
      { count: 383, label: "Total Reflight" },
    ],
    []
  );

  const heroSectionContet: ReactElement = (
    <div className={`hero__content center flex flex-col gap-8`}>
      <h1 className="hero__title">Making Life Multiplanitary</h1>
      <p className="hero__caption">
        Witness the future of space exploration. Explore the history and
        milestones of SpaceX launches, where innovation meets the stars
      </p>
      <div className="hero__content__scrolling-text-container">
        <ScrollingText items={scrolldata} />
      </div>
    </div>
  );

  return (
    <div className="launch-page">
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <HeroSection image={heroImage}>{heroSectionContet}</HeroSection>
      </ScrollAnimation>
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <div className="events">
          <h2 className="events__title">Our Launches</h2>
          <LaunchContent upcoming={false} ITEMS_PER_PAGE={4} />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Launches;
