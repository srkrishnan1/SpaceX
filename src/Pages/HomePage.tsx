//Home page
import { ReactElement } from "react";
import HeroSection from "../Components/HeroSection";
import History from "../Components/History";

import Button from "../Utilities/Button";
import Image from "../assets/dragon_humans 1.png";
import video from "../assets/mission_reusability.mp4";
import advanceHuman from "../assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg";

import VideoPlayer from "../Components/VideoPlayer";

import ScrollAnimation from "../Components/Prallex";
import UpcomingLaunch from "../Components/UpcomingLaunch";

//React icons
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePage = () => {
  const heroSectionContet: ReactElement = (
    <div className={`hero__content flex flex-col gap-8`}>
      <h1 className="hero__title">Making Life Multiplanitary</h1>
      <p className="hero__caption lg:text-left">
        In 2020, SpaceX returned America’s ability to fly NASA astronauts to and
        from the International Space Station on American vehicles for the first
        time since 2011. In addition to flying astronauts to space for NASA,
        SpaceX’s Dragon spacecraft can also carry commercial astronauts to Earth
        orbit, the ISS or beyond.
      </p>
      <Button
        style={"border"}
        size={"md"}
        content={"Know More"}
        externalLink="https://www.spacex.com/humanspaceflight/"
      >
        <AiOutlineArrowRight className="text-lg" />
      </Button>
    </div>
  );
  const advanceHumanSection: ReactElement = (
    <div className={`hero__content flex flex-col gap-8`}>
      <h3 className="hero__title">ADVANCE HUMAN SPACEFLIGHT</h3>

      <Button
        style={"border"}
        size={"md"}
        content={"Know More"}
        externalLink="advanceHuman"
      >
        <AiOutlineArrowRight className="text-lg" />
      </Button>
    </div>
  );
  return (
    <div>
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <HeroSection image={Image}>{heroSectionContet}</HeroSection>
      </ScrollAnimation>
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <UpcomingLaunch />
      </ScrollAnimation>
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <History />
      </ScrollAnimation>
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <section className="two-colum-section">
          <VideoPlayer
            src={video}
            autoplay={true}
            muted={true}
            loop={true}
            controls={false}
          />
          <div className="two-colum__right-content">
            <h3 className="two-colum__right-content__title">Reusability</h3>
            <p className="two-column__right-content-para">
              SpaceX believes a fully and rapidly reusable rocket is the pivotal
              breakthrough needed to substantially reduce the cost of space
              access. The majority of the launch cost comes from building the
              rocket, which historically has flown only once.
            </p>
            <p className="two-column__right-content-para">
              Compare that to a commercial airliner – each new plane costs about
              the same as Falcon 9 but can fly multiple times per day and
              conduct tens of thousands of flights over its lifetime. Following
              the commercial model, a rapidly reusable space launch vehicle
              could reduce the cost of traveling to space by a hundredfold.
            </p>
            <p className="two-column__right-content-para">
              While most rockets are designed to burn up on reentry, SpaceX
              rockets can not only withstand reentry but can also successfully
              land back on Earth and refly again.
            </p>
          </div>
        </section>
      </ScrollAnimation>
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <HeroSection image={advanceHuman}>{advanceHumanSection}</HeroSection>
      </ScrollAnimation>
    </div>
  );
};

export default HomePage;
