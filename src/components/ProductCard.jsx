import { Link } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi2";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/addToCartSlice";
import { setQuickViewItem } from "../features/quickViewSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({
  title,
  price,
  size,
  badgeText,
  imgSrcFirst,
  imgSrcSide,
  imgAlt,
  productColor,
  badgeClassName,
  priceClassName,
  productClassName,
  sizeClassName,
}) => {
  const [isWishColor, setIsWishColor] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        title,
        price,
        img: imgSrcFirst,
        quantity: 1,
        color: productColor,
        size: size || "S",
      }),
    );

      toast.success(`${title} (${size || "S"}) added`, {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: true,
      className: "pure-black-toast",
    });
  };

  const handleQuickView = () => {
    dispatch(
      setQuickViewItem({
        title,
        price,
        img: imgSrcFirst,
        quantity: 1,
        color: productColor,
        size: size || "M",
      }),
    );
  };

  return (
    <div
      className={`relative w-[330px] lg:w-[310px] h-130 group border-2 border-gray-200 m-auto ${productClassName}`}
    >
      <Link to={"/quickview"} onClick={handleQuickView}>
        <div className="relative w-[330px] lg:w-[310px] h-100 overflow-hidden">
          {/* Default Image */}
          <img
            src={imgSrcFirst}
            alt={imgAlt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          {/* Hover Image */}
          <img
            src={imgSrcSide}
            alt={imgAlt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>
      </Link>

      {/* Badge */}
      <div
        className={`absolute top-2 left-2 py-2 px-5 text-black font-bold text-center text-sm ${badgeClassName}`}
      >
        {badgeText}
      </div>

      {/* Group Hover Add To Cart */}
      <div className="lg:p-0 space-y-3 absolute bottom-29 left-0 w-full lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 sm:opacity-100 sm:translate-y-0 transition-all duration-300 ease-in-out delay-100">
        <div
          onClick={handleAddToCart}
          className="w-[100%] h-[50px] relative flex justify-center m-auto hover:cursor-pointer bg-black hover:bg-mainColor transition-all duration-300"
        >
          <p className="py-3 text-lg font-medium text-white">ADD TO CART</p>
        </div>
      </div>

      {/* Product Info */}
      <div className="pb-10 px-3 mt-5">
        <div className="flex justify-between items-center">
          <p className="text-[#767676] text-base font-semibold">
            {productColor}
          </p>

          <div
            className="hover:cursor-pointer"
            onClick={() => setIsWishColor(!isWishColor)}
          >
            <HiOutlineHeart
              className={`text-2xl font-xl transition-colors duration-300 ${
                isWishColor ? "text-red-500" : "text-[#767676]"
              }`}
            />
          </div>
        </div>

        <h3 className="text-[#262626] text-lg font-bold py-1">{title}</h3>

        <div className="flex justify-between items-center">
          <h4 className={`text-mainColor text-base font-bold ${sizeClassName}`}>
            Size: {size}
          </h4>

          <h4 className={`text-mainColor text-lg font-bold ${priceClassName}`}>
            ${price.toFixed(2)}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
