import { products } from "../assets/assets";
import { createContext } from "react";

// Create context
const ShopContext = createContext();

// Provider Component
export const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const dalivery_fee = 10;

  const value = {
    products,
    currency,
    dalivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContext;
