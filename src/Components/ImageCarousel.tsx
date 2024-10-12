import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

interface ImageCarouselProps {
  data: React.ReactNode[];
  showPagination?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  data,
  showPagination = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleNext(): void {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrev(): void {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  }
  return (
    <div className="imageCarousel">
      <div
        className="imageCarousel__cells"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {data.length > 0 ? (
          data.map((e, index) => (
            <div className="imageCarousel__cell" key={index}>
              {e}
            </div>
          ))
        ) : (
          <div>No launches available.</div>
        )}
      </div>
      <div className="imageCarousel__pagination">
        <MdChevronLeft className="imageCarousel__navBtn" onClick={handlePrev} />
        {showPagination && (
          <div className="imageCarouse__pagination-dots">
            {data.map((e,index) => (
              <GoDotFill className={`${currentIndex==index ? "active":""}`}/>
            ))}
          </div>
        )}
        <MdChevronRight
          className="imageCarousel__navBtn"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
