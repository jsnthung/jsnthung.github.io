import React from "react";
import { experienceData } from "./Data";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  return (
    <div className="experience__container">
      <div className="experience__wrapper">
        {experienceData.map((item) => {
          return <ExperienceItem key={item.id} experience={item} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
