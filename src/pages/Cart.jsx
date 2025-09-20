import { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import Title from "../components/common/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import Button from "../components/common/Button";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let temData = [];

    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          temData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(temData);
  }, [cartItems, setCartData]);

  return cartData.length > 0 ? (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        {<Title text1={"YOUR"} text2={"CART"} />}
      </div>

      {/* cart item list here */}
      <div>
        {cartData.map((item) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={item._id}
              className="py-4 border-t border-b border-gray-200 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  alt={productData.name}
                  className="w-16 sm:w-20"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              <input
                onClick={(e) =>
                  e.target.value === " " || e.target.value === "0"
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                }
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />

              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 sm:w-5 cursor-pointer"
                alt="remove icon"
              />
            </div>
          );
        })}
      </div>

      {/* cart total components */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="text-end mt-8">
            <Button>PROCEED TO CHECKOUT</Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h2 className="text-2xl text-center my-20 text-gray-600">
        Not select carts
      </h2>
    </div>
  );
};

export default Cart;
