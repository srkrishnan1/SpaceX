import React, { useMemo, useState, useEffect } from "react";
import { LaunchResponse } from "../Configuration/Interfaces";
import { API_URL } from "../Configuration/BasicConfiguration";
import useApiPost from "../hooks/useApiPost";
import Card from "./Card";
import { formatDate } from "../Utilities/formatDate";

interface LaunchesProps {
  upcoming: boolean;
  ITEMS_PER_PAGE: number;
}

const LaunchContent: React.FC<LaunchesProps> = ({
  upcoming,
  ITEMS_PER_PAGE,
}) => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [data, setData] = useState<LaunchResponse | null>(null);

  useEffect(() => {
    setPageNumber(0);
    setData(null);
  }, [upcoming]);

  const payload = useMemo(
    () => ({
      query: {
        upcoming,
      },
      options: {
        limit: ITEMS_PER_PAGE,
        offset: pageNumber * ITEMS_PER_PAGE,
        sort: {
          date_utc: "desc",
        },
        select: {
          id: 1,
          name: 1,
          date_utc: 1,
          details: 1,
        },
        populate: [
          {
            path: "links.flickr.original",
            select: {
              original: 1,
            },
          },
        ],
      },
    }),
    [pageNumber, upcoming, ITEMS_PER_PAGE]
  );

  const { result, isLoading, error } = useApiPost<LaunchResponse>(
    `${API_URL}/launches/query/`,
    payload
  );

  useEffect(() => {
    if (result) {
      setData((prevData) => {
        if (pageNumber === 0) {
          return result;
        }

        return {
          ...result,
          docs: [
            ...(prevData?.docs || []),
            ...result.docs.filter(
              (newDoc) =>
                !prevData?.docs.some((prevDoc) => prevDoc.id === newDoc.id)
            ),
          ],
        };
      });
    }
  }, [result, pageNumber]);

  const handleNext = (): void => {
    if (result?.hasNextPage) setPageNumber((prev) => prev + 1);
  };

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

  return (
    <div className="upcoming-card-section">
      <div className="upcoming-card-section__cards">
        {data?.docs.map((launch) => (
          <Card
            key={launch.id}
            title={launch.name}
            subtitle={formatDate(launch.date_utc)}
            imageLink={
              launch.links?.flickr?.original[0] ||
              fallbackImages[data.docs.indexOf(launch) % fallbackImages.length]
            }
            id={launch.id}
          />
        ))}
      </div>

      {result?.hasNextPage && (
        <button
          className={`button button--outline button--md group`}
          onClick={handleNext}
          disabled={isLoading}
        >
          <span className="button__text">
            {isLoading ? "Loading..." : "Load More"}
          </span>
          <span className="button__fill__wrapper"></span>
        </button>
      )}

      {error && <p>Error fetching launches: {error}</p>}
    </div>
  );
};

export default LaunchContent;
