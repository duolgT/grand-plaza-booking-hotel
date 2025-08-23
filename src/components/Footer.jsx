import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#faf6f6] to-[#FFFFFF] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <img
            alt=""
            className="h-15"
            src={assets.logo}
          />
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Your gateway to the world’s most exclusive hotels. Where every stay feels like home, only better.
        </p>
      </div>
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          <a href="/">Grand-Plaza</a> ©2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
