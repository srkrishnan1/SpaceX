import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../Configuration/BasicConfiguration";
import Image1 from "../assets/mission-slider-08.jpg";
import Image2 from "../assets/mission-slider-05.jpg";
import Image3 from "../assets/mission-slider-01.jpg";
import Image4 from "../assets/mission-slider-04.jpg";
import Image5 from "../assets/GOES_U_pad40_DSC_1996_desktop_16be3588d7.jpg";
import Image6 from "../assets/mission-slider-06.jpg";
import Image7 from "../assets/mission-slider-07.jpg";
import Image8 from "../assets/mission-slider-03.jpg";
import Image9 from "../assets/mission-slider-02.jpg";
import Image10 from "../assets/FallBack1.png";
import HeroSection from "./HeroSection";
import ImageCarousel from "./ImageCarousel";

interface HistoryRecord {
  id: string;
  title: string;
  event_date_utc: string;
  details: string;
}

const bgImages: string[] = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

const getOneRecordPerYear = (records: HistoryRecord[]): HistoryRecord[] => {
  const groupedByYear: { [year: number]: HistoryRecord } = records.reduce(
    (acc, record) => {
      const year = new Date(record.event_date_utc).getFullYear();

      if (!acc[year]) {
        acc[year] = record;
      }
      return acc;
    },
    {} as { [year: number]: HistoryRecord }
  );

  return Object.values(groupedByYear);
};

const HistoryRecords: React.FC = () => {
  const [historyRecords, setHistoryRecords] = useState<HistoryRecord[]>([]);

  const { result } = useFetch<HistoryRecord[]>(`${API_URL}/history`);

  useEffect(() => {
    if (result && Array.isArray(result) && result.length > 0) {
      const filteredRecords = getOneRecordPerYear(result);
      setHistoryRecords(filteredRecords);
      console.log(filteredRecords);
    }
  }, [result]);

  const ImageWrappers = historyRecords.map((e, index) => (
    <HeroSection key={e.id} image={bgImages[index % bgImages.length]}>
      <div className="hero__content flex flex-col gap-8">
        <h2 className="hero__title text-2xl md:text-4xl lg:text-6xl">
          {e.title}
        </h2>
        <p className="hero__caption font-extralight lg:text-left">
          {e.details}
        </p>
      </div>
    </HeroSection>
  ));

  return (
    <div>
      <ImageCarousel data={ImageWrappers} showPagination={true} />
    </div>
  );
};

export default HistoryRecords;
