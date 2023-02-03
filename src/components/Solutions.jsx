import React from "react";
import hero from "../assets/hero3.png";

const Solutions = () => {
  return (
    <div>
      <div className="conatiner p-20">
        <div className="flex pl-10 justify-around">
          <div className="mt-20">
            <p className="font-semibold leading-9 text-base text-blue-800">
              OUR SOLUTIONS
            </p>
            <p className="font-bold leading-9 text-4xl text-blue-900 mb-5">
              Launch and scale your <br /> marketing campaigns
            </p>
            <p className="text-grey-200 leading-9 mb-10">
              We start with a a kick-off call with the respective project <br />
              owners, onboard the teams on the project management <br />
              platforms and, take off!
            </p>
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      <div className="conatiner p-20">
        <div className="container flex justify-center gap-20 leading-8">
          <div className="bg-blue-900 rounded-lg flex justify-center flex-col items-center p-10 ">
            <p className="text-white text-3xl font-bold">96%</p>
            <p className="text-white font-semibold">Client retention</p>
            <p className="text-white font-extralight">By Dalibor and Marino </p>
            <p className="text-white font-extralight">in Hong Kong</p>
          </div>
          <div className="bg-pink-600	rounded-lg flex justify-center flex-col items-center p-10">
            <p className="text-white text-3xl font-bold ">10+</p>
            <p className="text-white font-semibold">Year of services</p>
            <p className="text-white font-extralight">By Dalibor and Marino </p>
            <p className="text-white font-extralight">in Hong Kong</p>
          </div>
          <div className="bg-yellow-500	rounded-lg flex justify-center flex-col items-center p-10">
            <p className="text-white text-3xl font-bold ">70+</p>
            <p className="text-white font-semibold">Professionals</p>
            <p className="text-white font-extralight">By Dalibor and Marino </p>
            <p className="text-white font-extralight">in Hong Kong</p>
          </div>
          <div className="bg-neutral-700 rounded-lg flex justify-center flex-col items-center p-10">
            <p className="text-white text-3xl font-bold ">$40M</p>
            <p className="text-white font-semibold">In funding</p>
            <p className="text-white font-extralight">By Dalibor and Marino </p>
            <p className="text-white font-extralight">in Hong Kong</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
