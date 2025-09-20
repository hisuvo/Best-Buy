import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import Title from "../components/common/Title";

const Order = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDER"} />
      </div>

      {/* ------------------- my ordered product list -------------- */}
      <div>
        {products.slice(1, 4).map((product) => (
          <div
            key={product._id}
            className="border-t border-b border-gray-300 py-4 flex flex-col sm:flex-row justify-between"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                src={product.image[0]}
                alt={product.name}
                className="w-16 sm:w-20"
              />
              <div>
                <p className="sm:text-base font-medium">{product.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {product.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size:L</p>
                </div>
                <p>
                  Date: <span className="text-gray-500">20, Jun, 2025</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between gap-4 mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <div className="flex items-center">
                <button className="text-sm px-3 py-1 font-medium border rounded-sm">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
