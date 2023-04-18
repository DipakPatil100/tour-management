import React, { useRef } from "react";
import "./searchbar.css";

const Searchbar = () => {
  const locationRef = useRef("");
  const distanceRef = useRef(0);
  const groupSizeRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const groupSize = groupSizeRef.current.value;

    if (location === "" || distance === "" || groupSize === "") {
      alert("All fields are reuired!");
    }
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
            <input type="number" placeholder="0" ref={groupSizeRef} />
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
