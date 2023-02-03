import "../index.css";

import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="flex justify-around items-center mt-10">
        <div className="logo">Webure Techologies</div>
        <div className="flex items-center">
          <div className="nav-ele">About Us</div>
          <div className="nav-ele">Services</div>
          <div className="nav-ele">Careers</div>
          <div className="nav-ele">RIO Stories</div>
          <div className="nav-ele">Blog</div>
          <div className="nav-ele">Contact Us</div>
          <div>
            <button className="px-5 py-2 color-[#282C4B] rounded-3xl font-medium text-gray-600 border border-[rgb(137, 77, 234, 0.5)] bg-[#FFFFFF]">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
