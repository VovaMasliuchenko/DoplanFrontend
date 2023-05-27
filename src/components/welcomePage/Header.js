import React from "react";

function Header() {

    return (
      <div className="flex fixed items-center justify-between w-full bg-header-bg pt-4 pb-4 pr-20 pl-20 shadow-md">
        <div className="logo text-3xl font-bold">
            <a href='/' className="text-white"><span className="text-button-header">Do</span>plan.</a>
        </div>
            <ul className="flex text-white space-x-3 font-medium text-lg items-center">
                <li className="hover:text-hover-header transition ease-in-out"><a href="#hero">Home</a></li>
                <li className="hover:text-hover-header transition ease-in-out"><a href="#about">About app</a></li>
                <li className="hover:text-hover-header transition ease-in-out"><a href="#goals">Our Goals</a></li>
                <li className="hover:text-hover-header transition ease-in-out"><a href="#contact">Contact Us</a></li>
            </ul>
            <ul className="flex text-white space-x-3 items-center text-lg">
                <li><a href="/Login" className="font-medium hover:text-hover-header transition ease-in-out">Login</a></li>
                <li><a href="/Register" className="w-full bg-button-header rounded-lg font-medium pl-5 pr-5 pb-2 pt-2 hover:bg-black transition ease-in-out">Sign Up</a></li>
            </ul>
      </div>  
    );
  }
export default Header;