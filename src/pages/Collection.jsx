import { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/common/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toogleChange = (e) => {
    if (category.includes(e.target.value)) {
      // If the value is already selected, remove it
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      // If the value is not selected, add it
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toogleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      // if the value is already selected then remove it
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      // if the value is not selected then add it
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    // category condition
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    // type condition
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // search conditon
    if (typeof search === "string" && showSearch) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProducts = () => {
    let sortProductsCopy = products.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(sortProductsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(sortProductsCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  // useEffect(() => {
  //   setFilterProducts(products);
  // }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

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
              <input type="checkbox" value={"Men"} onChange={toogleChange} />
              Men
            </li>
            <li className="flex gap-2">
              <input type="checkbox" value={"Women"} onChange={toogleChange} />
              Women
            </li>
            <li className="flex gap-2">
              <input type="checkbox" value={"Kids"} onChange={toogleChange} />
              Kids
            </li>
          </ul>
        </div>

        {/* subCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="font-medium mb-3 text-sm">TYPE</p>
          <ul className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <li className="flex gap-2">
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={toogleSubCategory}
              />
              Topwear
            </li>
            <li className="flex gap-2">
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={toogleSubCategory}
              />
              Bottomwear
            </li>
            <li className="flex gap-2">
              <input
                type="checkbox"
                value={"WinterWear"}
                onChange={toogleSubCategory}
              />
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
              onChange={(e) => setSortType(e.target.value)}
              className="px-2 text-sm sm:text-base py-2 border-2 border-gray-300 outline-none"
            >
              <option value={"relavent"}>Sort by: Relavent</option>
              <option value={"low-high"}>Sort by: Low to High</option>
              <option value={"high-low"}>Sort by: High to Low</option>
            </select>
          </div>
        </div>

        {/* All Products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item?._id}
              id={item?._id}
              img={item?.image[0]}
              name={item?.name}
              price={item?.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
