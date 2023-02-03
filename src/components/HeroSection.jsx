import React from "react";
import HeroImg from "../assets/hero.png";
import verify from "../assets/verify.png";
import vector from "../assets/Vector 20.png";
import play from "../assets/play.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto p-10 flex items-center justify-between">
      <div>
        <div className="flex gap-1.5">
          <img src={verify} alt="" />
          <p>Best Business Platform - World Record 2021</p>
        </div>
        <div>
          <p className="text-6xl font-bold tracking-wide mb-10">
            Reach Your Business <br />
            <img className="ml-50" src={vector} alt="" />
            Goals in Record Time
          </p>

          <p className="font-medium text-xl landing-10">
            Support small business and join the nationwide movement to <br />
            encourage commercial support for the millions of minority <br />
            owned businesses helping world economy.
          </p>
          <div className="flex items-center mt-10 gap-10">
            <button className="px-5 py-2 color-[#282C4B] rounded-3xl  border-[rgb(137, 77, 234, 0.5)] text-white bg-pink-600  hover:bg-pink-800  font-bold py-2 px-4 rounded">
              Get Started
            </button>
            <div className="flex gap-5">
              <img className="w-5" src={play} alt="" />
              <p>Book a 30 Min Quick Meeting </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
