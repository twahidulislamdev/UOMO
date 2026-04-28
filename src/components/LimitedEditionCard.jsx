import { Link } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineEye,
  HiOutlineHeart,
} from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/addToCartSlice";
import { setQuickViewItem } from "../features/quickViewSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LimitedEditionCard = ({
  title,
  price,
  size,
  imgSrcFirst,
  imgAlt,
  productColor,
  priceClassName,
}) => {
  const dispatch = useDispatch();

  // ✅ consistent default size
  const defaultSize = size || "S";
  
  // ✅ Parse price to number to avoid NaN
  const numericPrice = typeof price === 'string' 
    ? parseFloat(price.replace(/[^0-9.]/g, '')) 
    : price;

  const handleAddToCart = (e) => {
    e.preventDefault(); // ✅ prevent Link navigation
    e.stopPropagation();

    dispatch(
      addToCart({
        id: `${title}-${productColor}-${defaultSize}`,
        title,
        price: numericPrice,
        img: imgSrcFirst,
        quantity: 1,
        color: productColor,
        size: defaultSize,
      }),
    );

    toast.success(`${title} (${defaultSize}) added`, {
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
        id: `${title}-${productColor}-${defaultSize}`,
        title,
        price: numericPrice,
        img: imgSrcFirst,
        quantity: 1,
        color: productColor,
        size: defaultSize,
      }),
    );
  };

  // ✅ prevent double trigger inside Link
  const handleQuickViewClick = (e) => {
    e.stopPropagation();
    handleQuickView();
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
      <Link to={"/quickview"} onClick={handleQuickView}>
        {/* Image Container */}
        <div className="relative h-[300px] bg-gray-100 overflow-hidden">
          <div className="cursor-pointer w-full h-full">
            <img
              src={imgSrcFirst}
              alt={imgAlt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            <button
              onClick={handleQuickViewClick}
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110"
              aria-label="Quick view"
            >
              <HiOutlineEye className="text-xl text-gray-800" />
            </button>

            <Link to={"/collect"}>
              <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-110">
                <HiOutlineHeart className="text-xl text-gray-800" />
              </div>
            </Link>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
              LIMITED EDITION
            </span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="bg-white p-4">
        <div className="mb-3">
          <h3 className="text-gray-900 text-lg font-semibold mb-1 group-hover:text-gray-600 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-500 text-sm">{productColor}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span
              className={`text-xl font-bold text-gray-900 ${priceClassName}`}
            >
              {price}
            </span>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 flex items-center gap-2 transition-all duration-200 hover:shadow-md active:scale-95"
          >
            <HiOutlineShoppingBag className="text-lg" />
            <span className="text-sm font-medium">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LimitedEditionCard;