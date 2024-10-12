import  { ReactElement, useState, useEffect, useMemo } from "react";
import HeroSection from "../Components/HeroSection";
import Image from "../assets/GOES_U_pad40_DSC_1996_desktop_16be3588d7.jpg";
import RocketImage from "../assets/WebsiteF9Fairings_Render_Desktop 1.png";
import payloadImage from "../assets/payload 1.png";
import EngineImage from "../assets/Merlin 1.png";
import useApiPost from "../hooks/useApiPost";

import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { LaunchResponse, Rocket } from "../Configuration/Interfaces";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../Configuration/BasicConfiguration";
import { useParams } from "react-router-dom";
import RocketDetailSection from "../Components/RocketDetailSection";
import PhotoCard from "../Components/PhotoCard";
import { formatDate } from "../Utilities/formatDate";
import CardCarousel from "../Components/CardCarousel";

const RocketDetailPage = (): ReactElement => {
  const [data, setData] = useState<Rocket>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { rocketId } = useParams<{ rocketId: string }>();
  const [direction, setDirection] = useState<string>("");

  const fallbackImages: string[] = [
    "https://imgur.com/DaCfMsj.jpg",
    "https://imgur.com/azYafd8.jpg",
    "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
    "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
    "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
    "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
    "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
    "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg",
    "https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg",
    "https://farm5.staticflickr.com/4645/38583830575_3f0f7215e6_b.jpg",
    "https://farm5.staticflickr.com/4696/40126460511_b15bf84c85_b.jpg",
    "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg",
  ];

  const { result, isLoading, error } = useFetch<Rocket>(
    `${API_URL}/rockets/${rocketId}`
  );

  const payload = useMemo(
    () => ({
      query: {
        rocket: rocketId,
      },
      options: {
        select: {
          id: 1,
          name: 1,
          links: 1,
          date_utc: 1,
        },
      },
    }),
    [rocketId]
  );

  const { result: pastLaunches } = useApiPost<LaunchResponse>(
    `${API_URL}/launches/query/`,
    payload
  );

  useEffect(() => {
    if (result) setData(result);
  }, [result]);

  const photoCardArray = pastLaunches?.docs?.map((e) => ({
    title: e.name,
    id: e.id,
    subtitle: formatDate(e.date_utc),
    image:
      e.links.flickr.original[0] ||
      fallbackImages[Math.floor(Math.random() * fallbackImages.length)],
  }));
  console.log(result);

  const sections = [
    {
      title: data?.name || "Rocket Overview",
      label: "Overview",
      description: data?.description || "",
      image: RocketImage,
      list: [
        {
          label: "Height",
          option1: `${data?.height.meters} m` || "",
          option2: `${data?.height.feet} ft`,
        },
        {
          label: "Weight",
          option1: `${data?.mass.kg} kg` || "",
          option2: `${data?.mass.lb} lb`,
        },
        {
          label: "Diameter",
          option1: `${data?.diameter.meters} m` || "",
          option2: `${data?.diameter.feet} ft`,
        },
        {
          label: "Cost per launch",
          option1: `\$ ${data?.cost_per_launch}` || "",
          option2: "",
        },
      ],
    },

    data?.second_stage.payloads.composite_fairing.height.meters && {
      title: data?.name || "SpaceX Rocket",
      label: "Payload",
      description:
        "Made of a carbon composite material, the fairing protects satellites on their way to orbit. SpaceX is recovering fairings for reuse on future missions.",
      image: payloadImage,
      list: [
        {
          label: "Height",
          option1: `${data?.second_stage.payloads.composite_fairing.height.meters} m`,
          option2: `${data?.second_stage.payloads.composite_fairing.height.feet} ft`,
        },
        {
          label: "Diameter",
          option1: `${data?.second_stage.payloads.composite_fairing.diameter.meters} m`,
          option2: `${data?.second_stage.payloads.composite_fairing.diameter.feet} ft`,
        },
      ],
    },
    {
      title: data?.engines.type || "Merlin",
      label: "Engine",
      image: EngineImage,
      list: [
        {
          label: "Specific Impulse",
          option1: `${data?.engines.isp.vacuum} Isp`,
          option2: `${data?.engines.isp.sea_level} Isp`,
        },
        {
          label: "Thrust",
          option1: `${data?.engines.thrust_sea_level.kN} kN`,
          option2: `${data?.engines.thrust_sea_level.lbf} lbf`,
        },
        {
          label: "Number of Engines",
          option1: `${data?.engines.number}`,
        },
        {
          label: "Propellant 1",
          option1: `${data?.engines.propellant_1}`,
        },
        {
          label: "Propellant 2",
          option1: `${data?.engines.propellant_2}`,
        },
      ],
    },
  ].filter(Boolean) as Array<{
    title: string;
    label: string;
    description?: string;
    image: string;
    list: Array<{ label: string; option1: string; option2?: string }>;
  }>;

  const handlePrevClick = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === sections.length - 1 ? prevIndex : prevIndex + 1
    );
  };
  const heroSectionContet: ReactElement = (
    <div className={`hero__content flex flex-col gap-8 `}>
      <h1 className="hero__title text-6xl">{data?.name}</h1>
    </div>
  );

  return (
    <div>
      <HeroSection image={Image}>{heroSectionContet}</HeroSection>
      <div className="rocket-information-wrapper">
        <div
          className={`rocket-detail-container slide-in-${
            currentIndex > 0 ? "center" : currentIndex === 0 ? "left" : "right"
          }`}
        >
          <RocketDetailSection
            title={sections[currentIndex].title}
            label={sections[currentIndex].label}
            description={sections[currentIndex].description}
            image={sections[currentIndex].image}
            list={sections[currentIndex].list}
          />
        </div>
        <div className="rocket-infomation__vetical-navbar">
          {sections.map((e, index) => (
            <button
              key={index}
              className={`rocket-infomation__vertical-navbar-btn capitalize ${
                currentIndex === index ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {e.label}
            </button>
          ))}
        </div>
        <div className="rocket-information__navbar">
          <button
            className={`rocket-information__navBtn`}
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
          >
            <MdChevronLeft className="text-white text-2xl" />
          </button>
          <button
            className="rocket-information__navBtn"
            onClick={handleNextClick}
            disabled={currentIndex === sections.length - 1}
          >
            <MdChevronRight className="text-white text-2xl" />
          </button>
        </div>
      </div>
      {photoCardArray && photoCardArray.length > 0 && (
        <section className="launch-by">
          <h2 className="launch-by__title">Mission Launches by this Rocket</h2>
          <div className="photoCard__wrapper">
            <CardCarousel>
              {photoCardArray?.map((e) => (
                <PhotoCard
                  key={e.id}
                  title={e.title}
                  subtitle={e.subtitle}
                  image={e.image}
                />
              ))}
            </CardCarousel>
          </div>
        </section>
      )}
    </div>
  );
};

export default RocketDetailPage;
