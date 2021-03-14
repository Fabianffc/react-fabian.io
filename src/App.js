import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />

      -----------------------------------------
      <div >


   
         
          <div>
            <h1>Contact me</h1>
            <p>And let's get down to work</p>
            <ul>
              <li>Phone: 502-755-0383</li>
              <li>Email: fabianffc@gmail.com</li>
              <li>Adress: 1609 W Warren Blvd, Chicago, IL 60612</li>
            </ul>
          </div>
        </div>



        <Info />
        <Footer />
      </div>
  );
}

export default App;
