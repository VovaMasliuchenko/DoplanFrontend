import React from "react";
import gitLogo from "../assets/GitLogo.png";
import twitterLogo from "../assets/TwitterLogo.png";
import linkedInLogo from "../assets/LinkedInLogo.png";
import figmaLogo from "../assets/FigmaLogo.png";

function Footer() {
  return (
    <div className="bg-footer-bg pb-10 pt-10" id="contact">
      <div className="text-white font-bold flex flex-col items-center justify-center space-y-8">
        <h1>Contact Us</h1>
        <div className="flex space-x-10">
          <img src={gitLogo} href="#"></img>
          <img src={twitterLogo} href="#"></img>
          <img src={linkedInLogo} href="#"></img>
          <img src={figmaLogo} href="#"></img>
        </div>
        <h1>doplan.product@gmail.com</h1>
      </div>
    </div>
  );
}
export default Footer;
