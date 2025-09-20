import React from "react";
import NewsLetterBox from "../components/common/NewsLetterBox";
import { assets } from "../assets/assets";
import Title from "../components/common/Title";
import Button from "../components/common/Button";

const Contact = () => {
  return (
    <div className="border-t pt-14">
      <div className="text-center text-2xl">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      {/* --------------- contact image and information --------------- */}
      <div className="flex flex-col sm:flex-row gap-16 mt-10 mb-20">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.contact_img}
          alt="About section image"
        />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-gray-600">
          <b className="text-xl">Our Store</b>
          <div className="">
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div className="">
            <p>Tel: (415) 555-0132</p>
            <p>Email: admin@forever.com</p>
          </div>
          <b className=" text-xl">Careers at Forever</b>
          <p>Learn more about our teams and job openings.</p>

          <Button>Explore Jobs</Button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
