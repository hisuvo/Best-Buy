import { products } from "../assets/assets";
import { createContext, useState } from "react";

// Create context
const ShopContext = createContext();

// Provider Component
export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const dalivery_fee = 10;
  const [search, setSearch] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    dalivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContext;
