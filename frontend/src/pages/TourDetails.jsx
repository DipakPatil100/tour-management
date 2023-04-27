import React, { useEffect, useRef, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating";
import "../styles/tour-details.css";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import NewsLetter from "../shared/news-letter/NewsLetter";

import { AuthContext } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

const TourDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  const { user } = useContext(AuthContext);

  // console.log(Number(id));

  // Fetch Data from Database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  const {
    photo,
    title,
    desc,
    price,
    reviews,
    city,
    address,
    distance,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  //Format Date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Submit request to the server
  const submithandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if (!user || user === undefined || user === null) {
        alert("Please Sign in");
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert(result.message);
    } catch (error) {
      alert(error.message);
    }

    // alert(`${reviewText}, ${tourRating}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return (
    <>
      <section>
        {loading && <h4>Loading...</h4>}
        {error && <h4>{error}</h4>}
        {!loading && !error && (
          <div className="tourDetail">
            <div className="tour-content ">
              <img src={photo} alt="" />
              <div className="tour-info">
                <h2>{title}</h2>
                <div className="address">
                  <span>
                    <i
                      class="fa-solid fa-star"
                      style={{ color: "var(--secondary-color)" }}
                    ></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews?.length})</span>
                    )}
                  </span>

                  <span>
                    <i class="fa-solid fa-location-crosshairs"></i>
                    {address}
                  </span>
                </div>

                <div className="tour-extra-details">
                  <span>
                    <i class="ri-map-pin-user-line"></i>
                    {city}
                  </span>
                  <span>
                    <i class="ri-money-dollar-circle-line"></i>
                    {price}/per person
                  </span>
                  <span>
                    <i class="ri-map-pin-time-line"></i>
                    {distance} k/m
                  </span>
                  <span>
                    <i class="ri-group-line"></i>
                    {maxGroupSize} people
                  </span>
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* tour reviews section  */}
              <div className="tour-review">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <form onSubmit={submithandler}>
                  <div className="review-starts">
                    <span onClick={() => setTourRating(1)}>
                      1 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(2)}>
                      2 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(3)}>
                      3 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(4)}>
                      4 <i class="ri-star-fill"></i>
                    </span>
                    <span onClick={() => setTourRating(5)}>
                      5 <i class="ri-star-fill"></i>
                    </span>
                  </div>
                  <div className="review-input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your thoughts"
                      required
                    />
                    <button
                      className="btn primary__btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <div className="user-reviews">
                  {reviews?.map((reviews, index) => (
                    <div key={index} className="review-items">
                      <img src={avatar} alt="" />
                      <div style={{ width: "100%" }}>
                        <div className="user-detail">
                          <div>
                            <h6>{reviews.username}</h6>
                            <p>
                              {new Date(reviews.createdAt).toLocaleDateString(
                                "en-US",
                                options
                              )}
                            </p>
                          </div>
                          <span>
                            {reviews.rating} <i class="ri-star-fill"></i>
                          </span>
                        </div>
                        <h6>{reviews.reviewText}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tour-right">
              <Booking tour={tour} avgRating={avgRating} />
            </div>
          </div>
        )}
      </section>
      <NewsLetter />
    </>
  );
};

export default TourDetails;
