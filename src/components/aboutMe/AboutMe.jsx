import React from "react";
import "./aboutMe.css";
import AboutMeInfo from "./AboutMeInfo";

const AboutMe = () => {
  return (
    <section className="aboutMe section" id="aboutMe">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <AboutMeInfo />
    </section>
  );
};

export default AboutMe;
