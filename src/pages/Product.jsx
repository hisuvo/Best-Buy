import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import ShopContext from "../context/ShopContext";
import { assets } from "../assets/assets";
import Button from "../components/common/Button";
import Title from "../components/common/Title";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 border-gray-200 transition-opacity ease-in duration-500 opacity-100">
      {/* ------------------- product data ------------------- */}
      <div className="flex gap-12 flex-col sm:flex-row mt-12">
        {/* ----------------- product Image ------------------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                src={item}
                className="w-[24%] shrink-0 cursor-pointer mb-4 sb:mb-3 sm:w-full"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/* ------------------------ product details ------------------- */}
        <div className="flex-1">
          <h2 className="font-medium text-2xl mt-2">{productData?.name}</h2>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 " />
            <img src={assets.star_icon} alt="" className="w-3 " />
            <img src={assets.star_icon} alt="" className="w-3 " />
            <img src={assets.star_icon} alt="" className="w-3 " />
            <img src={assets.star_dull_icon} alt="" className="w-3 " />
            <p className="pl-2">(122)</p>
          </div>
          <p className="font-medium text-3xl mt-5">
            {currency} {productData.price}
          </p>
          <p className="text-gray-500 mt-5 w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-xl font-semibold text-gray-600">Select Size</p>
            <div className="flex flex-col  gap-2">
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`px-4 py-2 bg-gray-100 border border-gray-300 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-10">
            <Button onClick={() => addToCart(productData?._id, size)}>
              ADD TO CART
            </Button>
          </p>
          <hr className="mt-8 sm:w-4/5 bg-gray-100" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ------------- Description and Review section ------------ */}
      <div className="mt-20">
        <div className="flex *:border-gray-400">
          <b className="border px-5 py-3 text-sm">Description</b>
          <b className="border px-5 py-3 text-sm">Reviews (122)</b>
        </div>
        <div className="flex flex-col gap-4 border border-gray-400 p-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>

      {/* -------------------- Related Products ------------------ */}
      <div className="mt-20">
        <div className="text-center text-3xl py-2">
          <Title text1={"RELATED"} text2={"PRODUCTS"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
          <RelatedProduct
            category={productData.category}
            subCategory={productData.subCategory}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center text-2xl text-gray-600 my-8">
      <h2>Not found your current product</h2>
    </div>
  );
};

export default Product;
