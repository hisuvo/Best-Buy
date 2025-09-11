import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router";

const SearchBar = () => {
  const location = useLocation();
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return location.pathname === "/collection" && showSearch ? (
    <div className="border-t bg-gray-50 text-center space-x-2">
      <div className="inline-flex items-center justify-between border border-gray-400 px-5 py-2 my-5 rounded-full sm:w-1/2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          value={search}
          placeholder="Search"
          className="flex w-full outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default SearchBar;
