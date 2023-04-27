import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./booking.css";

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userId: "01", //Later it will be Dynamic
    userEmail: "exaple@gmail.com",
    fullName: "",
    phone: "",
    guestSize: "05",
    bookAt: "",
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const serviceFee = 10;
  const totalAmount =
    Number(price) * Number(credentials.guestSize) + Number(serviceFee);

  //   Send data to server
  const handleClick = (e) => {
    e.preventDefault();

    navigate("/thank-you");
  };

  return (
    <div className="booking">
      <div className="booking-top">
        <h3>
          ${price} <span>/per person</span>{" "}
        </h3>
        <span>
          <i class="fa-solid fa-star"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>

      {/* booking form  */}
      <div className="booking-form">
        <h5>Information</h5>
        <form className="booking-info-form" onSubmit={handleClick}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Full name"
              id="fullName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </div>
          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Guest"
              id="guestSize"
              required
              onChange={handleChange}
            />
          </div>
        </form>
      </div>

      {/* booking bottom  */}
      <div className="booking-bottom">
        <div className="list-group">
          <div className="list-item">
            <h5>
              ${price} <i class="ri-close-fill"></i> 1 person
            </h5>
            <span>${price}</span>
          </div>
          <div className="list-item">
            <h5>Service charge</h5>
            <span>$10</span>
          </div>
          <div className="list-item total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </div>
        </div>
        <button className="btn primary__btn" onClick={handleClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Booking;
