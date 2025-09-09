import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="ForEver logo" />

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.3px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.3px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.3px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.3px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img className="w-5 cursor-pointer" src={assets.search_icon} alt="" />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div className="group-hover:block hidden absolute dropdwon-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Porfile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to={"/cart"} className="relative">
          <img className="w-5 cursor-pointer" src={assets.cart_icon} alt="" />
          <p className="absolute w-4 right-[-5px] bottom-[-5px] text-center leading-4 aspect-square rounded-full text-[8px] bg-black text-white">
            10
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-700 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 border-b cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border-b"}
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border-b"}
            to={"/collection"}
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border-b"}
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border-b"}
            to={"/contact"}
          >
            CONTACT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-2 pl-6 border-b"}
            to={"/admin-panal"}
          >
            ADMIN PANEL
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
