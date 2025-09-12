import { useContext } from "react";
import ShopContext from "../context/ShopContext";
import { Link, useParams } from "react-router";

const ProductItem = ({ id, img, name, price }) => {
  const { currency } = useContext(ShopContext);
  const { productId } = useParams();

  // if It is a product page then handleClick work and scrooll to top
  const handleClick = () => {
    if (productId) {
      scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link
      onClick={handleClick}
      className="text-gray-700 cursor-pointer"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden ">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={img}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
