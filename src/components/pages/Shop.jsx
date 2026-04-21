import { useState, useEffect } from "react";
import Flex from "../Flex";
import Container from "../Container";
import BannerBg from "../../assets/bannerBg.png";
import ProductOne from "../../assets/productOne.jpg";
import ProductTwo from "../../assets/productTwo.jpg";
import ProductThree from "../../assets/productThree.jpg";
import ProductFour from "../../assets/productFour.jpg";
import ProductFive from "../../assets/productFive.jpg";
import ProductSix from "../../assets/productSix.jpg";
import ProductSeven from "../../assets/productSeven.jpg";
import ProductEight from "../../assets/productEight.jpg";
import ProductFifteen from "../../assets/productFifteen.jpg";
import DefaultSorting from "../layouts/DefaultSorting";
import { GrClose } from "react-icons/gr";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Heading from "../Heading";
import { ToastContainer } from "react-toastify";
import ProductCard from "../ProductCard";

const Shop = () => {
  const [isFilters, setIsFilters] = useState(false);

  // Freeze background when filter sidebar is open
  useEffect(() => {
    if (isFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isFilters]);

  // Expand/collapse state
  const [isCategoryExpand, setCategoryExpand] = useState(true);
  const [isColorExpand, setColorExpand] = useState(true);
  const [isBrandExpand, setBrandExpand] = useState(true);
  const [isSizeExpand, setSizeExpand] = useState(true);

  // Category data
  const categories = [
    "Sweatshirts",
    "Dresses",
    "Jackets",
    "Jeans",
    "Men",
    "Shorts",
    "Swimwear",
    "Trousers",
    "T-Shirts & Tops",
    "Jumpers & Cardigans",
  ];

  // Brand data
  const brands = [
    { name: "Adidas", count: 2 },
    { name: "Nike", count: 2 },
    { name: "Puma", count: 2 },
    { name: "Zara", count: 2 },
    { name: "Chanel", count: 2 },
  ];

  // Color data
  const colors = [
    { name: "navy", bgColor: "bg-blue-900" },
    { name: "yellow", bgColor: "bg-yellow-500" },
    { name: "black", bgColor: "bg-black" },
    { name: "lightblue", bgColor: "bg-blue-200" },
    { name: "brown", bgColor: "bg-amber-700" },
    { name: "orange", bgColor: "bg-orange-500" },
    { name: "pink", bgColor: "bg-pink-300" },
    { name: "coral", bgColor: "bg-red-400" },
    { name: "gray", bgColor: "bg-gray-400" },
    { name: "mint", bgColor: "bg-green-200" },
  ];

  // Size options
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // Product data
  const products = [
    {
      id: 1,
      imgSrcFirst: ProductOne,
      imgAlt: "Arive One",
      badgeText: "New",
      title: "Cropped Faux Leather Jacket",
      price: 29.0,
      productColor: "Gray",
      badgeClassName: "bg-white",
      size: "M",
    },
    {
      id: 2,
      imgSrcFirst: ProductTwo,
      imgAlt: "Arive Two",
      badgeText: "10%",
      title: "Calvin Shorts",
      price: 62.0,
      productColor: "White",
      badgeClassName: "bg-green-300",
      size: "S",
    },
    {
      id: 3,
      imgSrcFirst: ProductThree,
      imgAlt: "Arive Three",
      badgeText: "New",
      title: "Kirby T-Shirt",
      price: 17.0,
      productColor: "Black",
      badgeClassName: "bg-white",
      size: "L",
    },
    {
      id: 4,
      imgSrcFirst: ProductFour,
      imgAlt: "Arive Four",
      badgeText: "10%",
      title: "Cableknit Shawl",
      price: 99.0,
      productColor: "White",
      badgeClassName: "bg-green-300",
      size: "XL",
    },
    {
      id: 5,
      imgSrcFirst: ProductFive,
      imgAlt: "Arive Five",
      badgeText: "New",
      title: "Colorful Jacket",
      price: 29.0,
      productColor: "Black",
      badgeClassName: "bg-white",
      size: "M",
    },
    {
      id: 6,
      imgSrcFirst: ProductSix,
      imgAlt: "Arive Six",
      badgeText: "10%",
      title: "Shirt In Botanical Cheetah Print",
      price: 52.0,
      productColor: "White",
      badgeClassName: "bg-green-300",
      size: "S",
    },
    {
      id: 7,
      imgSrcFirst: ProductSeven,
      imgAlt: "Arive Seven",
      badgeText: "New",
      title: "Cotton Jersey T-Shirt",
      price: 17.0,
      productColor: "White",
      badgeClassName: "bg-white",
      size: "M",
    },
    {
      id: 8,
      imgSrcFirst: ProductEight,
      imgAlt: "Arive Eight",
      badgeText: "10%",
      title: "Zessi Dresses",
      price: 49.0,
      productColor: "Black",
      badgeClassName: "bg-green-300",
      size: "L",
    },
    {
      id: 9,
      imgSrcFirst: ProductFifteen,
      imgAlt: "Arive Fifteen",
      badgeText: "10%",
      title: "Basic Crew Neck Tee",
      price: 44.0,
      productColor: "Black",
      badgeClassName: "bg-green-300",
      size: "XL",
    },
  ];

  return (
    <>
      {/* Shop Banner Part Start */}
      <div
        className="relative py-[30px] lg:py-[100px] w-full m-auto lg:m-0 px-3 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Container>
          <h3 className="text-2xl lg:text-7xl font-bold text-center text-mainColor">
            THE SHOP
          </h3>
        </Container>
      </div>
      {/* Shop Banner Part End */}

      {/* Shop Products Part Start */}
      <div className="relative py-[30px]">
        <Container>
          <Flex className="justify-between gap-x-5">
            {/* ===================== SIDEBAR START ===================== */}
            <div
              className={`w-[85%] fixed top-0 left-0 h-screen px-5 pt-5 pb-20  bg-white shadow-2xl  rounded-lg transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto
                ${isFilters ? "translate-x-0" : "-translate-x-full"}
                lg:static lg:w-[25%] lg:translate-x-0 lg:h-full lg:overflow-visible`}
            >
              {/* Mobile Close Button */}
              <div className="flex items-center justify-between lg:hidden mb-5 pb-5 border-b border-gray-100">
                <h5 className="text-2xl font-semibold tracking-widest uppercase text-gray-800 m-0">
                  Filters
                </h5>

                <button
                  onClick={() => setIsFilters(false)}
                  className="flex items-center justify-center w-9 h-9 border-black border-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors -mt-2"
                >
                  <GrClose className="text-xl block leading-none" />
                </button>
              </div>

              {/* -------- CATEGORY -------- */}
              <div className="mb-5">
                <button
                  onClick={() => setCategoryExpand(!isCategoryExpand)}
                  className="w-full flex justify-between items-center mb-3 py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
                >
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                    Product Categories
                  </h4>
                  <IoIosArrowDown
                    className={`text-base text-gray-500 transition-transform duration-300 ${
                      isCategoryExpand ? "" : "rotate-180"
                    }`}
                  />
                </button>

                {isCategoryExpand && (
                  <ul className="space-y-0.5">
                    {categories.map((item) => (
                      <li
                        key={item}
                        className="text-sm py-2.5 px-4 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-all duration-150 border border-transparent hover:border-gray-200"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* -------- BRAND -------- */}
              <div className="mb-5">
                <button
                  onClick={() => setBrandExpand(!isBrandExpand)}
                  className="w-full flex justify-between items-center mb-3 py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
                >
                  <Heading
                    className="text-xs font-semibold text-gray-700 uppercase tracking-widest"
                    txt="Brand"
                    as="h3"
                  />
                  <IoIosArrowDown
                    className={`text-base text-gray-500 transition-transform duration-300 ${
                      isBrandExpand ? "" : "rotate-180"
                    }`}
                  />
                </button>

                {isBrandExpand && (
                  <div className="space-y-0.5">
                    {brands.map((brand) => (
                      <label
                        key={brand.name}
                        className="flex items-center justify-between py-2.5 px-4 rounded-xl cursor-pointer hover:bg-gray-50 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 cursor-pointer"
                          />
                          <span className="text-sm text-gray-600 font-medium">
                            {brand.name}
                          </span>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                          {brand.count}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* -------- COLOR -------- */}
              <div className="mb-5">
                <button
                  onClick={() => setColorExpand(!isColorExpand)}
                  className="w-full flex items-center justify-between mb-3 py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
                >
                  <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                    Color
                  </h3>
                  <IoIosArrowDown
                    className={`text-base text-gray-500 transition-transform duration-300 ${
                      isColorExpand ? "" : "rotate-180"
                    }`}
                  />
                </button>

                {isColorExpand && (
                  <div className="grid grid-cols-5 gap-3 px-3 pb-2">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        className={`w-9 h-9 rounded-full ring-2 ring-gray-300 hover:ring-gray-400 hover:scale-105 shadow-sm transition-all duration-150 ${color.bgColor}`}
                        aria-label={`Select ${color.name} color`}
                        title={
                          color.name.charAt(0).toUpperCase() +
                          color.name.slice(1)
                        }
                      />
                    ))}
                  </div>
                )}
              </div>

              <hr className="border-gray-100 mb-5" />

              {/* -------- SIZE -------- */}
              <div className="mb-2">
                <button
                  onClick={() => setSizeExpand(!isSizeExpand)}
                  className="w-full flex justify-between items-center mb-3 py-3 px-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
                >
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-widest">
                    Size
                  </h4>
                  <IoIosArrowDown
                    className={`text-base text-gray-500 transition-transform duration-300 ${
                      isSizeExpand ? "" : "rotate-180"
                    }`}
                  />
                </button>

                {isSizeExpand && (
                  <ul className="grid grid-cols-3 gap-2.5 px-1">
                    {sizes.map((size) => (
                      <li
                        key={size}
                        className="py-2.5 text-center text-sm font-semibold rounded-xl cursor-pointer border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150"
                      >
                        {size}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* -------- Price Range -------- */}
              <div className="mb-3 mt-8">
                <p className="font-semibold mb-3">Price Range</p>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full border px-3 py-2 rounded text-sm outline-none focus:border-black"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full border px-3 py-2 rounded text-sm outline-none focus:border-black"
                  />
                </div>
              </div>

              {/* Filter Apply button */}
              <div className="">
                <button className="mt-4 w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-900 transition">
                  Apply Filter
                </button>
              </div>
            </div>
            {/* ===================== SIDEBAR END ===================== */}

            {/* Mobile Overlay */}
            {isFilters && (
              <div
                className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden backdrop-blur-sm"
                onClick={() => setIsFilters(false)}
              />
            )}

            {/* ===================== PRODUCTS SECTION START ===================== */}
            <div className="w-full lg:w-[75%] m-auto lg:m-0 pt-5">
              <Flex className="justify-between items-center">
                {/* Filter Button (Mobile Only) */}
                <div
                  className="relative flex justify-between items-center gap-x-2 lg:hidden ml-2 bg-transparent px-6 py-3 border-2 border-black text-center text-black rounded cursor-pointer transition-all"
                  onClick={() => setIsFilters(true)}
                >
                  <IoFilter className="text-black text-2xl" />
                  <h6 className="text-base font-medium text-black text-center">
                    FILTERS
                  </h6>
                </div>

                {/* Breadcrumb (Desktop Only) */}
                <h6 className="hidden lg:block text-sm font-medium text-mainColor ml-2">
                  HOME / SHOP
                </h6>

                {/* Sorting + View */}
                <div className="flex justify-between items-center gap-x-5">
                  <DefaultSorting />
                  <div className="hidden lg:flex">
                    <h5 className="text-sm mr-5 text-menuColor">View</h5>
                    <ul className="flex gap-x-3">
                      {[2, 3, 4].map((num) => (
                        <li
                          key={num}
                          className="text-sm font-semibold uppercase text-mainColor relative list-none cursor-pointer px-1 group hover:text-black transition-all ease-in-out"
                        >
                          {num}
                          <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Flex>

              {/* Products Grid */}
              <div className="mt-8">
                <Flex className="justify-between flex-wrap gap-y-10">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      imgSrcFirst={product.imgSrcFirst}
                      imgAlt={product.imgAlt}
                      badgeText={product.badgeText}
                      title={product.title}
                      price={product.price}
                      productColor={product.productColor}
                      badgeClassName={product.badgeClassName}
                      size={product.size}
                    />
                  ))}
                </Flex>
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-5">
                <ul className="flex gap-x-5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li
                      key={num}
                      className="relative list-none px-2 py-2 text-lg text-black font-medium cursor-pointer group hover:text-black transition-all ease-in-out"
                    >
                      {num}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-black transform w-0 group-hover:w-full transition-all duration-300" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* ===================== PRODUCTS SECTION END ===================== */}
          </Flex>
        </Container>
      </div>
      {/* Shop Products Part End */}
    </>
  );
};

export default Shop;
