import Title from "./common/Title";
import BestItem from "./BestItem";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const bestProducts = products.filter((item) => item.bestseller).slice(0, 5);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-xl sm:text-2xl md:text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>

      {/* Render Best Selling Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestProducts.map((product) => (
          <BestItem
            key={product._id}
            id={product._id}
            img={product.image[0]}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
