import React from "react";
import "./common-section.css";

const CommonSection = ({ title }) => {
  return (
    <>
      <section className="common-section">
        <h1>{title}</h1>
      </section>
    </>
  );
};

export default CommonSection;
