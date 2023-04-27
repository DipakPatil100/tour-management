import React from "react";
import { Link } from "react-router-dom";
import "./tourcard.css";
import calculateAvgRating from "../utils/avgRating";

const TourCard = ({ tour }) => {
  const { _id, title, city, photo, price, featured, reviews } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className="tour-card">
      <div className="tour-img">
        <img src={photo} alt={photo} />
        {featured && <span>Featured</span>}
      </div>
      <div className="tour-des">
        <div className="location">
          <span>
            <i class="fa-solid fa-location-dot"></i>
            {city}
          </span>
          <span>
            <i class="fa-solid fa-star"></i>
            {avgRating === 0 ? null : avgRating}
            {totalRating === 0 ? "Not rated" : <span>({reviews.length})</span>}
          </span>
        </div>
        <h5 className="cardTitle">
          <Link to={`/tours/${_id}`}>{title}</Link>
        </h5>
        <div className="cardPrice">
          <h5>
            ${price} <span>/per person</span>{" "}
          </h5>
          <button className="booking-btn">
            <Link to={`/tour/${_id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
