import React from "react";

const ExperienceItem = ({ experience }) => {
  return (
    <ol className="experience__card">
      <li className="experience__item">
        <div className="experience__marker"></div>
        <div className="experience__header">
          <span className="experience__year">{experience.year}</span>
          <h3 className="experience__role">{experience.role}</h3>
          <div className="experience__institution">
            {experience.institution}
          </div>
        </div>
        <p className="experience__details">{experience.details}</p>
      </li>
    </ol>
  );
};

export default ExperienceItem;
