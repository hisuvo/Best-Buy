import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero left side */}
      <img src={assets.hero_img2} className="w-full sm:w-1/2" alt="" />

      {/* Hero right side */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center py-10 sm:p-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-4">
            <p className="w-8 sm:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h2 className="prata-regular text-4xl leading-relaxed">
            Latest Arrivals
          </h2>
          <div className="flex items-center gap-4">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 sm:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
