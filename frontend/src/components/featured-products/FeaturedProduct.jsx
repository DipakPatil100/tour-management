import React from "react";
import TourCard from "../../shared/TourCard";

import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../utils/config";

const FeaturedProduct = () => {
  const {
    data: featurePro,
    loading,
    error,
  } = useFetch(`${BASE_URL}/tours/search/getFeaturedTours`);

  // console.log(featurePro);

  return (
    <>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}

      {!loading &&
        !error &&
        featurePro?.map((data) => {
          return (
            <div
              className="pro-wrap"
              style={{ margin: "8px 10px" }}
              key={data._id}
            >
              <TourCard tour={data} />
            </div>
          );
        })}
    </>
  );
};

export default FeaturedProduct;
