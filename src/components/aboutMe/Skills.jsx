import React from "react";
import { techStacks } from "./Data";

const Skills = () => {
  return (
    <div className="tech-stack-container">
      {techStacks.map((tech, index) => (
        <div key={index} className="tech-item">
          <div className="tech-logo">
            <img src={tech.logo} alt={tech.name} />
          </div>
          <p className="tech-name">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Skills;
