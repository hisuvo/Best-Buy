import React, { useContext, useState } from "react";
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/common/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-10">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center gap-2 cursor-pointer"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt="dropdown icon"
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="font-medium mb-3 text-sm">CATEGORIES</p>
          <ul className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <li className="flex gap-2">
              <input type="checkbox" name="" value={"Men"} />
              Men
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="" value={"Women"} />
              Women
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="" value={"Kids"} />
              Kids
            </li>
          </ul>
        </div>

        {/* Type Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="font-medium mb-3 text-sm">TYPE</p>
          <ul className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <li className="flex gap-2">
              <input type="checkbox" name="" value={"Topwear"} />
              Topwear
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="" value={"Bottomwear"} />
              Bottomwear
            </li>
            <li className="flex gap-2">
              <input type="checkbox" name="" value={"WinterWear"} />
              Winterwear
            </li>
          </ul>
        </div>
      </div>

      {/* Products options */}
      <div className="flex-1">
        <div className=" flex justify-between items-center my-4 text-base sm:text-2xl">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <div>
            <select
              name=""
              className="px-2 text-sm sm:text-base py-2 border-2 border-gray-300 outline-none"
            >
              <option>Sort by: Relavent</option>
              <option>Sort by: Low to High</option>
              <option>Sort by: High to Low</option>
            </select>
          </div>
        </div>

        {/* All Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
          {products.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              img={item.image[0]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
