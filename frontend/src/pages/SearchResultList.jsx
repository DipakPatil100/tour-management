import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import TourCard from "../shared/TourCard";
import CommonSection from "../shared/commonSection/CommonSection";
import NewsLetter from "../shared/news-letter/NewsLetter";

const SearchResultList = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  console.log(data);
  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section style={{ margin: "0 50px", transform: "scale(0.8)" }}>
        <div
          className="tourSearchResult"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {data.length === 0 ? (
            <h4>No tour found</h4>
          ) : (
            data?.map((tour) => (
              <div key={tour._id}>
                <TourCard tour={tour} />
              </div>
            ))
          )}
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default SearchResultList;
