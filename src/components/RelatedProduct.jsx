import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [reatedProducts, setRelatedProducts] = useState([]);

  const AllReatedProduct = () => {
    let productCopy = products.slice();

    if (products.length > 0) {
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelatedProducts(productCopy.slice(0, 5));
    }
  };

  useEffect(() => {
    AllReatedProduct();
  }, [products]);

  return (
    <>
      {reatedProducts.map((product) => (
        <ProductItem
          id={product._id}
          key={product._id}
          img={product.image[0]}
          price={product.price}
          name={product.name}
        />
      ))}
    </>
  );
};

export default RelatedProduct;
