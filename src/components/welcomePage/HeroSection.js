import React from "react";
import contactImage from "../assets/contact.png";

function HeroSection() {
  return (
    <div
      className="bg-hero-image w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      id="hero"
    >
      <div className="text-centered text-white font-bold flex items-center space-x-44">
        <h1 className="text-6xl">
          <span className="text-button-header">Organizing</span> your
          <br />
          life is easier
          <br />
          with <span className="text-button-header">us.</span>
        </h1>
        <div className="flex flex-col items-center space-y-5">
          <p className="text-button-header text-3xl">
            How we can <span className="text-white">improve</span> our app?
          </p>
          <img src={contactImage}></img>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
