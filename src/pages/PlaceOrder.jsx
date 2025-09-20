import { useState } from "react";
import Title from "../components/common/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import Button from "../components/common/Button";
import { useNavigate } from "react-router";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const navigate = useNavigate();

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-5">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-4 min-h-[50vh]">
        {/* delivery information form section */}
        <div className="flex flex-col gap-4 w-full sm:w-[480px]">
          {/* ------------- first and last neme input div -------------- */}
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First name"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last name"
            />
          </div>

          {/* -------------- email and steet input div ------------ */}
          <div className="flex flex-col gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="email"
              placeholder="Email address"
            />

            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Street"
            />
          </div>

          {/* ------------ city and state input div ------------- */}
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State"
            />
          </div>

          {/* --------------- zipcode and country input div ------------------ */}
          <div className="flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="ZipCode"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Country"
            />
          </div>

          {/* -------------------- phone input div ----------------------- */}
          <div className="flex flex-col gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="tel"
              placeholder="Phone"
            />
          </div>
        </div>

        {/* delivery payment section */}

        <div className="flex flex-col gap-5 w-ful sm:w-[480px]">
          <CartTotal />
          <div className="mt-6">
            <Title text1={"PAYMENT"} text2={"METHOD"} />
            {/* ------------ payment method section -------------- */}
            <div className="flex gap-3 flex-col">
              <div
                onClick={() => setMethod("strip")}
                className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer w-full"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                    method === "strip" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img
                  src={assets.stripe_logo}
                  className="h-5 mx-4"
                  alt="stripe logo"
                />
              </div>

              <div
                onClick={() => setMethod("razorpay")}
                className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer w-full"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                    method === "razorpay" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img
                  src={assets.razorpay_logo}
                  className="h-5 mx-4"
                  alt="stripe logo"
                />
              </div>

              <div
                onClick={() => setMethod("cod")}
                className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer w-full"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>
                <p className="text-sm font-medium text-gray-500 mx-4">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>
          </div>

          <div className="text-end">
            <Button onClick={() => navigate("/order")}>PLACEORDER</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
