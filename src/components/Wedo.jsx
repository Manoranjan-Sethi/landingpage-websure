import React from "react";
import design from "../assets/d1.png";
import fronted from "../assets/d2.png";
import backend from "../assets/d3.png";
import app from "../assets/d4.png";
import cloud from "../assets/d5.png";
import ana from "../assets/d6.png";
import qa from "../assets/d7.png";
import back from "../assets/d8.png";
import a from "../assets/a.png";
import b from "../assets/b.png";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";

const Wedo = () => {
  return (
    <div>
      <div>
        <p className="text-center text-5xl font-extrabold">What We Do</p>
      </div>
      <div className="flex p-20 justify-around gap-20">
        <div>
          <p className="text-3xl font-bold leading-8">Our Services</p>
        </div>
        <div>
          <p className="font-semibold text-xl  leading-8 text-gray-400">
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. <br /> Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature
          </p>
        </div>
      </div>
      <div className="flex justify-around mb-20">
        <div className="bg-blue-900 rounded-lg flex justify-center flex-col items-center p-5 leading-6 ">
          <img src={design} alt="" />
          shadow
          <p className="font-bold text-xl text-white mt-3 mb-3">Design</p>
          <p className="text-white">Contrary to popular belief, Lorem</p>
          <p className="text-white">Ipsum is not simply random text.</p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center flex-col items-center pt-5 pl-10 pr-10">
          <img src={fronted} alt="" />
          <p className="font-bold text-xl mt-3 mb-3">Front End</p>
          <p className="font-bold text-xl mt-3 mb-3">Development</p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center flex-col items-center pt-5 pl-10 pr-10">
          <img src={backend} alt="" />
          <p className="font-bold text-xl mt-3 mb-3">Back End</p>
          <p className="font-bold text-xl mt-3 mb-3">Development</p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center flex-col items-center pt-5 pl-10 pr-10">
          <img src={app} alt="" />
          <p className="font-bold text-xl mt-3 mb-3">Application</p>
          <p className="font-bold text-xl mt-3 mb-3">Development</p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="shadow-2xl rounded-lg flex justify-center flex-col items-center pt-5 pl-10 pr-10">
          <img src={cloud} alt="" />
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center flex-col items-center pt-5 pl-10 pr-10">
          <img src={ana} alt="" />
          <p className="font-bold text-xl mt-3 mb-3">Analytics</p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center flex-col items-center pt-5 pl-10 pr-10">
          <img src={qa} alt="" />
          <p className="font-bold text-xl mt-3 mb-3">Q-A And</p>
          <p className="font-bold text-xl mt-3 mb-3">Testing</p>
        </div>
        <div className="shadow-2xl rounded-lg flex justify-center flex-col items-center pt-5 pl-10 pr-10">
          <img src={back} alt="" />
          <p className="font-bold text-xl mt-3 mb-3">Back Office</p>
          <p className="font-bold text-xl mt-3 mb-3">Support</p>
        </div>
      </div>
      <div>
        <div className="flex justify-around p-10 gap-10">
          <div className="shadow-2xl bg-white-100">
            <img src={a} alt="" />
            <p className="text-center p-3">Cosmetic Forcest Marketing</p>
          </div>
          <div className="bg-white-100">
            <img src={b} alt="" />
            <p className="text-center p-3">Sales Analytic</p>
          </div>
          <div>
            <img src={c} alt="" />
            <p className="text-center p-3">Fashion Store Mobile Apps</p>
          </div>
        </div>
        <div className="flex justify-around p-10 gap-10">
          <div>
            <img src={d} alt="" />
            <p className="text-center p-3">Laura’s Clore Branding Identity</p>
          </div>
          <div>
            <img src={e} alt="" />
            <p className="text-center p-3">SEO Marketing 4.0</p>
          </div>
          <div>
            <p className="text-orange-500 text-sm font-semibold text-base mb-5">
              PROJECTS
            </p>
            <p className="font-semibold leading-9 text-base text-blue-900 text-4xl mb-2">
              Selected Works
            </p>
            <p className="font-semibold leading-9 text-base text-blue-900 text-4xl mb-5">
              from Us
            </p>
            <button className="px-5 py-2 color-[#282C4B] rounded-3xl font-medium text-gray-600 hover:bg-gray-400 border border-[rgb(137, 77, 234, 0.5)] bg-[#FFFFFF] mt-5">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
