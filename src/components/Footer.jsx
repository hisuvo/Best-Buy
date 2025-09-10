import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm">
        <div>
          <Link to={"/"}>
            <img src={assets.logo} className="w-32 mb-5" alt="" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-medium mb-5">COMPANY</h4>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-medium mb-5">GET IN TOUCH</h4>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-345-257-60279</li>
            <li>suvodata72@gmail.com</li>
            <Link
              className="cursor-pointer"
              to={"http://www.instagram.com"}
              target="_blank"
            >
              Instagram
            </Link>
          </ul>
        </div>
      </div>

      <hr />

      <p className="text-center text-sm text-gray-600 py-5">
        Copyright {new Date().getFullYear()}@ suvodatta72.dev - All Right
      </p>
    </div>
  );
};

export default Footer;
