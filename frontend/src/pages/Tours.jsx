import React, { useEffect } from "react";
import "../styles/tour.css";
import CommonSection from "../shared/commonSection/CommonSection";
import Searchbar from "../shared/Searchbar";
import TourCard from "../shared/TourCard";
import NewsLetter from "../shared/news-letter/NewsLetter";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const Tours = () => {
  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours`);
  // const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Searchbar />
      </section>
      <section>
        <div className="alltour">
          {loading && <h4>Loading...</h4>}
          {error && <h4>{error}</h4>}
          {!loading &&
            !error &&
            tours.map((tour) => {
              return (
                <div key={tour._id}>
                  <TourCard tour={tour} />
                </div>
              );
            })}
        </div>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tours;
