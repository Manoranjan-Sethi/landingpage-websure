import "../index.css";

import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center mt-10">
        <div className="italic text-pink-600 font-bold">Webure Techologies</div>
        <div className="flex items-center">
          <div className="font-normal ml-10">About Us</div>
          <div className="font-normal ml-10">Services</div>
          <div className="font-normal ml-10">Careers</div>
          <div className="font-normal ml-10">RIO Stories</div>
          <div className="font-normal ml-10">Blog</div>
          <div className="font-normal ml-10">Contact Us</div>
          <div>
            <button className="px-5 py-2 color-[#282C4B] rounded-3xl font-medium text-gray-600 hover:bg-gray-400 border border-[rgb(137, 77, 234, 0.5)] bg-[#FFFFFF] ml-5">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
