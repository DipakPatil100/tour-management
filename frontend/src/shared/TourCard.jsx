import React from "react";
import { Link } from "react-router-dom";
import "./tourcard.css";

const TourCard = ({ tour }) => {
  const { id, title, city, photo, price, featured, avgRating, reviews } = tour;

  return (
    <div className="tour-card">
      <div className="tour-img">
        <img src={photo} alt={photo} />
        <span>Featured</span>
      </div>
      <div className="tour-des">
        <div className="location">
          <span>
            <i class="fa-solid fa-location-dot"></i>
            {city}
          </span>
          <span>
            <i class="fa-solid fa-star"></i>
            {avgRating}
            <span>({reviews.length})</span>
          </span>
        </div>
        <h5 className="cardTitle">
          <Link to={`/tour/${id}`}>{title}</Link>
        </h5>
        <div className="cardPrice">
          <h5>
            ${price} <span>/per person</span>{" "}
          </h5>
          <button className="booking-btn">
            <Link to={`/tour/${id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
