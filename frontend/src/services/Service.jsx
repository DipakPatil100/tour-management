import React from "react";
import "./service.css";

import weatherImg from "../assets/images/weather.png";
import guidImg from "../assets/images/guide.png";
import customizeImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ducimus.",
  },
  {
    imgUrl: guidImg,
    title: "Best Tour Guid",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ducimus.",
  },
  {
    imgUrl: customizeImg,
    title: "Customization",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ducimus.",
  },
];

const Service = () => {
  return (
    <>
      {serviceData.map((data) => {
        return (
          <div className="service-item">
            <img src={data.imgUrl} alt="" />
            <h5>{data.title}</h5>
            <p>{data.desc}</p>
          </div>
        );
      })}
    </>
  );
};

export default Service;
