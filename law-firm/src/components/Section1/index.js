import React from "react";
import Navbar from "../Navbar";
import "./section1.css";
import Herosection from "../HeroSection";

function Section1() {
  return (
    <div className="section1">
      <div className="content-container">
        <Navbar children={true} />
        <Herosection />
      </div>
    </div>
  );
}

export default Section1;
