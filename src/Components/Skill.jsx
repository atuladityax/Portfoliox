import React from 'react';
import './Skill.css';

const skills = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 65 },
  { name: 'JavaScript', percentage: 40 },
  { name: 'WordPress', percentage: 90 },
  { name: 'Canva Editing', percentage: 70 },
  { name: 'Video Editing', percentage: 80 },
  { name: 'Wix Editor', percentage: 75 },
  { name: 'Social Media Manager', percentage: 80 },
];

const SkillSet = () => {
  return (
    <div className="skillset-container">
      <h2 className="skillset-title">Skill Set</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </div>
            <div className="bar-background">
              <div
                className="bar-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
