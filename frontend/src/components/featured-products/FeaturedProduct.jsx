import React from "react";
import tourData from "../../assets/data/tours";
import TourCard from "../../shared/TourCard";

const FeaturedProduct = () => {
  return (
    <>
      {tourData?.map((data) => {
        return (
          <div
            className="pro-wrap"
            style={{ margin: "8px 10px" }}
            key={data.id}
          >
            <TourCard tour={data} />
          </div>
        );
      })}
    </>
  );
};

export default FeaturedProduct;
