import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "./kindaap.png",
    alt: "Project 1",
    desc: "The Kindness App ",
  },
  {
    src:
      "./covid-app.png",
    alt: "Project 2",
    desc: "Covid-19 Search",
  },
  {
    src:
      "./portfolio-v2.png",
    alt: "Project 3",
    desc: "Project 3",
  },
  {
    src:
      "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Project 4",
    desc: "Project 4",
    href:"https://github.com/Fabianffc/Reverse-Engineering-Code",
    desc: "Reverse-Engineering"

  },{
    src:
      "./budget.png",
    alt: "Project 5",
    desc: "Budget",
  },{
    src:
      "./refactoring.png",
    alt: "Project 6",
    desc: "Refactoring ",
  },
  
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
