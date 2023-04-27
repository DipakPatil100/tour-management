import React from "react";
import "./newsletter.css";

import newsLetterImg from "../../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <>
      <div className="newsLetter">
        <div className="left">
          <h1>Subscribe now to get useful traveling information</h1>
          <span>
            <input type="email" name="" placeholder="Enter your email" id="" />
            <button>Subscribe</button>
          </span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
            ipsa.
          </p>
        </div>
        <div className="right">
          <img src={newsLetterImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
