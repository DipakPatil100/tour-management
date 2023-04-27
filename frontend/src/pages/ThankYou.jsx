import React from "react";
import "../styles/thank-you.css";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <div className="greet">
        <span>
          <i class="ri-checkbox-circle-line"></i>
        </span>
        <h1>Thank You</h1>
        <h3>Your tour is Booked.</h3>
        <button className="btn primary__btn">
          <Link to="/home">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
