import React from "react";
import heroImg from "../../assets/images/main-hero.png";
import "./Hero.css"
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <img className="pb-5" src={heroImg} width="1328" height="644" alt="hero main img"/>
      </div>
    </div>
  );
};

export default Hero;
