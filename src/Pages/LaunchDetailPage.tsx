//Launch Detail page consits of detail about the particular launch

import React, { useState } from "react";

import { useParams } from "react-router-dom";
import { API_URL } from "../Configuration/BasicConfiguration";
import { SPACEX_URL } from "../Configuration/BasicConfiguration";
import { LaunchData } from "../Configuration/Interfaces";

//Custom components or methods
import useFetch from "../hooks/useFetch";
import Button from "../Utilities/Button";
import Modal from "../Components/Modal";
import HeroSection from "../Components/HeroSection";
import { formatDate } from "../Utilities/formatDate";

//Fallback image
import fallbackImage from "../assets/mission-slider-04.jpg";

//React icons
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoPlayCircleOutline } from "react-icons/io5";

const LaunchDetailPage: React.FC = () => {
  const fallBackUrl: string = "https://www.youtube.com/watch?v=0a_00nJ_Y88";
  const { launchId } = useParams<{ launchId: string }>();
  const { result } = useFetch<LaunchData>(`${API_URL}/launches/${launchId}/`);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const videoUrl: string = result?.links.webcast || fallBackUrl;

  const extractVideoId = (url: string): string => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=))([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : "";
  };

  const handlePlayClick = (): void => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
  };

  const genericContent: string = `On ${formatDate(
    result?.date_utc || "2023-12-01"
  )}, SpaceX launched the ESA Hera mission to interplanetary transfer orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida.

This was the 23rd and final launch for this Falcon 9 first stage booster, which previously launched Crew-1, Crew-2, SXM-8, CRS-23, IXPE, Transporter-4, Transporter-5, Globalstar FM15, ISI EROS C-3, Korea 425, Maxar 1, ASBM, and 10 Starlink missions.

Hera is a planetary defense mission that will study the impact NASA’s Double Asteroid Redirection Test (DART) mission spacecraft had on the Dimorphos asteroid, which Falcon 9 launched in November 2021. Hera will provide valuable data for future asteroid deflection missions and science to help humanity’s understanding of asteroid geophysics as well as solar system formation and evolutionary processes.`;

  return (
    <div className="launchDetail">
      <div className="video-container" style={{ position: "relative" }}>
        <HeroSection image={result?.links.flickr.original[0] || fallbackImage}>
          <div className="video-container__play" onClick={handlePlayClick}>
            <IoPlayCircleOutline />
          </div>
        </HeroSection>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          videoUrl={`https://www.youtube.com/embed/${extractVideoId(videoUrl)}`}
        />
      </div>
      <div className="launchDetail__content">
        <p className="launchDetail__caption">
          {formatDate(result?.date_utc || "2023-12-01")}
        </p>
        <h1 className="launchDetail__title">{result?.name.toUpperCase()}</h1>
        <p className="launchDetail__para">{genericContent}</p>
        <Button
          style={"outline"}
          size={"md"}
          content="Know more"
          externalLink={result?.links.wikipedia || SPACEX_URL}
        >
          <AiOutlineArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default LaunchDetailPage;
