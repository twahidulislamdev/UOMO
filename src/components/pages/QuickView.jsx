import React, { useState, useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import QuickOneFirst from "../../assets/quickOneFirst.jpg";
import QuickOneSecond from "../../assets/quickOneSecond.jpg";
import QuickOneThird from "../../assets/quickOneThird.jpg";
import QuickOneFourth from "../../assets/quickOneFourth.jpg";
import {
  HiPlusSmall,
  HiMinusSmall,
  HiOutlineHeart,
  HiOutlineShare,
  HiCheck,
  HiShoppingBag,
} from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuickViewItem,
  incrementQuickViewItem,
} from "../../features/quickViewSlice";
import { addToCart } from "../../features/addToCartSlice";

const QuickView = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageZoom, setImageZoom] = useState(false);

  const dispatch = useDispatch();
  const quickViewData = useSelector((state) => state.quickView.item);

  const [mainImage, setMainImage] = useState(QuickOneFirst);

  // ✅ Update mainImage when quickViewData changes
  useEffect(() => {
    if (quickViewData?.img) {
      setMainImage(quickViewData.img);
    }
  }, [quickViewData]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleIncrement = () => {
    dispatch(incrementQuickViewItem());
  };

  const handleDecrement = () => {
    if (quickViewData?.quantity > 1) {
      dispatch(decrementQuickViewItem());
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart");
      return;
    }

    dispatch(
      addToCart({
        title: quickViewData?.title || "Lightweight Puffer Jacket With a Hood",
        price: quickViewData?.price || 70.0,
        img: mainImage || quickViewData?.img,
        color: quickViewData?.color || "default",
        size: selectedSize,
        quantity: quickViewData?.quantity || 1,
      }),
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const sizes = ["XS", "S", "M", "L", "XL"];
  const thumbnails = [
    quickViewData?.img || QuickOneFirst,
    QuickOneSecond,
    QuickOneThird,
    QuickOneFourth,
  ];

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
          <HiCheck className="text-2xl" />
          <span className="font-medium">Added to cart successfully!</span>
        </div>
      )}

      <div className="my-8 p-4">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <span className="hover:text-mainColor cursor-pointer transition-colors">
                Home
              </span>
              <span>/</span>
              <span className="hover:text-mainColor cursor-pointer transition-colors">
                Shop
              </span>
              <span>/</span>
              <span className="text-mainColor">Product</span>
            </p>
          </div>

          <Flex className="justify-between flex-wrap gap-8">
            {/* Left Part - Image Gallery */}
            <div className="w-full lg:w-[55%] flex flex-col-reverse lg:flex-row gap-4">
              {/* Thumbnails */}
              <div className="w-full lg:w-[20%] flex flex-row lg:flex-col gap-3">
                {thumbnails.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-[23%] lg:w-full aspect-square cursor-pointer overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      mainImage === img
                        ? "border-mainColor shadow-md scale-105"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => handleThumbnailClick(img)}
                  >
                    <img
                      src={img}
                      alt={`thumbnail-${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Image */}
              <div
                className={`w-full lg:w-[78%] aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 shadow-sm transition-transform duration-300 ${
                  imageZoom ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onMouseEnter={() => setImageZoom(true)}
                onMouseLeave={() => setImageZoom(false)}
              >
                <img
                  src={mainImage || quickViewData?.img}
                  alt={quickViewData?.title || "Product Image"}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    imageZoom ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
            </div>

            {/* Right Part - Product Details */}
            <div className="w-full lg:w-[42%] space-y-6">
              {/* Product Title */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-mainColor leading-tight">
                  {quickViewData?.title ||
                    "Lightweight Puffer Jacket With a Hood"}
                </h1>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-3xl font-bold text-mainColor">
                    ${quickViewData?.price?.toFixed(2) || (70.0).toFixed(2)}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                    In Stock
                  </span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  4.8 (8,234 reviews)
                </span>
              </div>

              {/* Description */}
              <div>
                <p className="text-base text-gray-600 leading-relaxed">
                  Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                  elementum gravida nec dui. Aenean aliquam varius ipsum, non
                  ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                  aliquet magna posuere eget.
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-semibold text-mainColor uppercase tracking-wide">
                    Select Size
                  </h4>
                  <button className="text-sm text-gray-500 hover:text-mainColor underline transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-5 py-3 border-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                        selectedSize === size
                          ? "border-mainColor bg-mainColor text-white shadow-md"
                          : "border-gray-300 text-gray-700 hover:border-mainColor hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-xs text-gray-500 mt-2">
                    Please select a size
                  </p>
                )}
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  {/* Quantity Selector */}
                  <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                    <button
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
                      onClick={handleDecrement}
                      disabled={quickViewData?.quantity <= 1}
                    >
                      <HiMinusSmall className="text-xl" />
                    </button>
                    <span className="px-6 py-3 font-semibold text-mainColor border-x-2 border-gray-300 min-w-[60px] text-center">
                      {quickViewData?.quantity || 1}
                    </span>
                    <button
                      className="px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
                      onClick={handleIncrement}
                    >
                      <HiPlusSmall className="text-xl" />
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                      selectedSize
                        ? "bg-mainColor text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    <HiShoppingBag className="text-xl" />
                    Add to Cart
                  </button>
                </div>

                {/* Wishlist & Share */}
                <div className="flex gap-3">
                  <button
                    onClick={toggleWishlist}
                    className={`flex-1 py-3 px-4 border-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      isWishlisted
                        ? "border-red-500 bg-red-50 text-red-600"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <HiOutlineHeart
                      className={`text-xl ${
                        isWishlisted ? "fill-current" : ""
                      }`}
                    />
                    {isWishlisted ? "Wishlisted" : "Add to Wishlist"}
                  </button>
                  <button className="py-3 px-4 border-2 border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-all duration-200 flex items-center gap-2">
                    <HiOutlineShare className="text-xl" />
                    Share
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-gray-500">SKU:</span>
                  <span className="text-gray-700 font-medium">WH1000XM4</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-gray-500">Category:</span>
                  <span className="text-gray-700 font-medium">
                    Jackets, Outerwear
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-gray-500">Tags:</span>
                  <span className="text-gray-700 font-medium">
                    Winter, Lightweight, Hood
                  </span>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default QuickView;
