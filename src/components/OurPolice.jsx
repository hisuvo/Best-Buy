import React from "react";
import Title from "./common/Title";
import { assets } from "../assets/assets";

const OurPolice = () => {
  return (
    <div className="my-10">
      <div className="text-center text-xl sm:text-2xl md:text-3xl">
        <Title text1={"OUR"} text2={"POLICE"} />
      </div>
      {/* Render Police */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 py-10 text-xs sm:text-sm md:text-base text-gray-700">
        <div className="flex flex-col justify-center items-center">
          <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={assets.support_img} className="w-11 m-auto mb-5" alt="" />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolice;
