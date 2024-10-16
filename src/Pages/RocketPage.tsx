//List what are the different types of rocket available by spacex

import { ReactElement, useEffect, useMemo, useState } from "react";

//interface
import { RocketBasicData, RocketReponse } from "../Configuration/Interfaces";

//custom hook
import useApiPost from "../hooks/useApiPost";
import { API_URL } from "../Configuration/BasicConfiguration";

//Image
import Image from "../assets/P6Qy9QgewcweJpsXjG2tzL.jpg";

import HeroSection from "../Components/HeroSection";
import RocketCardSection from "../Components/RocketCardSection";
import SubHeroSection from "../Components/SubHeroSection";
import ScrollAnimation from "../Components/Prallex";

const RocketsPage = () => {
  const [data, setData] = useState<RocketBasicData[]>();
  const payload = useMemo(
    () => ({
      options: {
        select: {
          id: 1,
          name: 1,
          description: 1,
          success_rate_pct: 1,
          active: 1,
          flickr_images: 1,
          first_flight: 1,
        },
      },
    }),
    []
  );
  const heroSectionContet: ReactElement = (
    <div className={`hero__content flex center flex-col gap-8`}>
      <h1 className="hero__title font-xl">Beyond Earth, into the future.</h1>
      <p className="hero__caption">
        Discover the rockets shaping the next frontier of space exploration.
      </p>
    </div>
  );

  const { result } = useApiPost<RocketReponse>(
    `${API_URL}/rockets/query/`,
    payload
  );

  useEffect(() => {
    if (result) setData(result.docs);
  }, [result]);

  return (
    <div className="rockets-page">
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <HeroSection image={Image}>{heroSectionContet}</HeroSection>
      </ScrollAnimation>
      <ScrollAnimation animationClass="animate-fade-in" threshold={0.3}>
        <SubHeroSection />
      </ScrollAnimation>

      {data?.map((e) => (
        <RocketCardSection key={e.id} data={e} />
      ))}
    </div>
  );
};

export default RocketsPage;
