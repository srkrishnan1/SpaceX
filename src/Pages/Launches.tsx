import HeroSection from "../Components/HeroSection";
import LaunchContent from "../Components/UpcomingLaunches";

import ScrollingText from "../Utilities/Scrolling";
import { useMemo, ReactElement } from "react";
import heroImage from "../assets/dragon_feature.jpg";
import ScrollAnimation from "../Components/Prallex";

const Launches: React.FC = () => {
  const scrolldata = useMemo<{ count: number; label: string }[]>(
    () => [
      { count: 389, label: "Total Launch" },
      { count: 352, label: "Total Landing" },
      { count: 322, label: "Total Reflight" },
    ],
    []
  );

  const heroSectionContent: ReactElement = (
    <div className="hero__content center flex flex-col gap-8">
      <h1 className="hero__title">Making Life Multiplanitary</h1>
      <p className="hero__caption">
        Witness the future of space exploration. Explore the history and
        milestones of SpaceX launches, where innovation meets the stars.
      </p>
      <div className="hero__content__scrolling-text-container">
        <ScrollingText items={scrolldata} />
      </div>
    </div>
  );

  return (
    <div className="launch-page">
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <HeroSection image={heroImage}>{heroSectionContent}</HeroSection>
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
