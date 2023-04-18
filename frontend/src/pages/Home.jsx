import React from "react";
import "../styles/home.css";

import heroImg from "../assets/images/hero-img01.jpg";
import heroImg2 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import Subtitle from "../shared/Subtitle";
import Searchbar from "../shared/Searchbar";
import Service from "../services/Service";
import FeaturedProduct from "../components/featured-products/FeaturedProduct";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="row">
          <div className="left">
            <div className="hero-content ">
              <Subtitle subtitle="know before you go" />
              <img src={worldImg} alt="" />
            </div>
            <h1>
              Travelling opens the door to creating{" "}
              <span className="highlight">memories</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              rerum eos iure sed vel voluptatum ducimus in et quisquam possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              accusantium?
            </p>
          </div>
          <div className="right">
            <div className="hero-img-box" style={{ marginTop: "0px" }}>
              <img src={heroImg} alt="" />
            </div>
            <div className="hero-img-box" style={{ marginTop: "80px" }}>
              <video src={heroVideo} alt="" controls />
            </div>
            <div className="hero-img-box" style={{ marginTop: "120px" }}>
              <img src={heroImg2} alt="" />
            </div>
          </div>
        </div>
        <Searchbar />
      </section>
      <section>
        <div className="services">
          <div className="row">
            <div className="left">
              <h5 className="service-subtitle">What we serve</h5>
              <h2>We offer our best services</h2>
            </div>
            <div className="right">
              <Service />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="featurePro">
          <div className="featureLeft">
            <Subtitle subtitle={"Explore"} />
            <h2>Our featured tours</h2>
          </div>
          <div className="featuredWrap">
            <FeaturedProduct />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
