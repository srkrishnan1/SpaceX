import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { Launch, LaunchResponse } from "../Configuration/Interfaces";
import { API_URL } from "../Configuration/BasicConfiguration";
import useApiPost from "../hooks/useApiPost";

import fallbackImage from "../assets/Flight_5_Website_Desktop_1_12e2f537a0.jpg";
import HeroSection from "./HeroSection";
import Button from "../Utilities/Button";
import { AiOutlineArrowRight } from "react-icons/ai";

const UpcomingLaunch: React.FC = () => {
  const [data, setData] = useState<Launch | undefined>(undefined);

  const payload = useMemo(
    () => ({
      query: {
        upcoming: true,
      },
      options: {
        limit: 1,
        offset: 0,
        sort: {
          date_utc: "desc",
        },
        select: {
          id: 1,
          name: 1,
          date_utc: 1,
          details: 1,
          links: 1,
        },
      },
    }),
    []
  );

  const { result } = useApiPost<LaunchResponse>(
    `${API_URL}/launches/query`,
    payload
  );

  useEffect(() => {
    if (result) {
      setData(result.docs[0]);
    }
  }, [result]);

  const heroSectionContent: ReactElement = (
    <div className={`hero__content flex flex-col gap-8`}>
      <p className="hero__caption">UPCOMING LAUNCH</p>
      <h2 className="hero__title text-4xl">{data?.name}</h2>
      <Button
        style={"outline"}
        size={"md"}
        content={"Know More"}
        externalLink={`/launch/${data?.id}`}
      >
        <AiOutlineArrowRight className="text-sm" />
      </Button>
    </div>
  );

  return (
    <div className="recent-launch">
      <HeroSection image={data?.links.flickr.original[0] || fallbackImage}>
        {heroSectionContent}
      </HeroSection>
    </div>
  );
};

export default UpcomingLaunch;
