import React, { useRef } from "react";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../utils/config";

const Searchbar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || distance === "" || maxGroupSize === "") {
      alert("All fields are reuired!");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
    );
    if (!res.ok) alert("Something went wrong");
    const result = await res.json();

    navigate(
      `/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
      { state: result.data }
    );
  };
  return (
    <div className="searchbar">
      <form action="">
        <label htmlFor="">
          <span>
            <i class="fa-solid fa-location-dot"></i>
          </span>
          <div>
            <h6>Location</h6>
            <input
              type="text"
              placeholder="Where are you going?"
              ref={locationRef}
            />
          </div>
        </label>
        <label htmlFor="">
          <span>
            <i class="fa-solid fa-map-pin"></i>
          </span>
          <div>
            <h6>Distance</h6>
            <input type="number" placeholder="Distance k/m" ref={distanceRef} />
          </div>
        </label>
        <label htmlFor="">
          <span>
            <i class="fa-solid fa-user-group"></i>
          </span>
          <div>
            <h6>Max People</h6>
            <input type="number" placeholder="0" ref={maxGroupSizeRef} />
          </div>
        </label>
        <span className="search_icon" type="submit" onClick={searchHandler}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </form>
    </div>
  );
};

export default Searchbar;
