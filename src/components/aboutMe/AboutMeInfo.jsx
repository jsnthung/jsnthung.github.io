import React, { useState } from "react";
import { aboutNav } from "./Data";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import More from "./More";

const AboutMeInfo = () => {
  const [active, setActive] = useState(0);

  const renderContent = () => {
    switch (active) {
      case 0:
        return <Education />;
      case 1:
        return <Experience />;
      case 2:
        return <Skills />;
      case 3:
        return <More />;
      default:
        return <Education />;
    }
  };

  return (
    <div>
      <div className="about__filters">
        {aboutNav.map((navItem, index) => (
          <span
            onClick={() => setActive(index)}
            className={`${active === index ? "active-about" : ""} about__item`}
            key={index}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="about__content">{renderContent()}</div>
    </div>
  );
};

export default AboutMeInfo;
