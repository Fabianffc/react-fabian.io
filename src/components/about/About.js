import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About Me</h3>
        <p>
          I'm a student in Northwestern University's Coding Boot
          Camp, where I'm learning to be a Full-Stack Web Developer.
          When I'm not in front of a computer learning new ways to improve my coding skills, I like to
          spend time with my family and dog.
        </p>
      </div>
      <div className="about-img">
        <img
          src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
