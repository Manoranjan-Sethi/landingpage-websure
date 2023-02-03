import React from "react";
import hero from "../assets/hero2.png";
import check from "../assets/Checklist-Circle.png";

const ChooseUs = () => {
  return (
    <div className="m-10">
      <div className="contaier flex  justify-around p-10 bg-indigo-900">
        <div className="">
          <img src={hero} alt="" />
        </div>
        <div>
          <p className="text-orange-500 text-sm font-semibold text-base">
            WHY CHOOSE US
          </p>
          <p className="font-bold text-white text-3xl mt-8 mb-5 leading-10">
            Take on any Challenge of <br /> the Digital World
          </p>
          <div className="flex gap-3 mb-3">
            <img src={check} alt="" />
            <p className="text-white">Corporate Financial Advisory</p>
          </div>
          <div className="flex gap-3 mb-3">
            <img src={check} alt="" />
            <p className="text-white">Development of Financial Models</p>
          </div>
          <div className="flex gap-3 mb-3">
            <img src={check} alt="" />
            <p className="text-white">Deal Structuring</p>
          </div>
          <div>
            <button className="px-5 py-2 color-[#282C4B] rounded-3xl  border-[rgb(137, 77, 234, 0.5)] text-white bg-pink-600 font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
