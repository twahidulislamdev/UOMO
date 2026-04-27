import { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import HeaderLogo from "../../assets/headerLogo.png";
import CatagoryFive from "../../assets/catagoryFive.jpg";
import {
  FaRegHeart,
  FaRegUser,
  FaBars,
  FaTimes,
  FaHome,
  FaBlog,
  FaEnvelope,
  FaFileAlt,
  FaListUl,
} from "react-icons/fa";
import {
  HiOutlineShoppingBag,
  HiMiniBars3CenterLeft,
  HiPlusSmall,
  HiMinusSmall,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../../features/addToCartSlice";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/", icon: <FaHome /> },
    { name: "SHOP", path: "/shop", icon: <HiOutlineShoppingBag /> },
    { name: "BLOG", path: "/blog", icon: <FaBlog /> },
    { name: "ABOUT", path: "/about", icon: <FaFileAlt /> },
    { name: "CONTACT", path: "/contact", icon: <FaEnvelope /> },
    { name: "PAGES", path: "/pages", icon: <FaListUl /> },
  ];

  let data = useSelector((state) => state.addtocart.value);
  let dispatch = useDispatch();

  // Calculate subtotal
  const calculateSubtotal = () => {
    return data
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  let handleIncerment = (item) => {
    dispatch(increment(item));
  };
  let handleDecerment = (item) => {
    dispatch(decrement(item));
  };
  let handleRemove = (item) => {
    dispatch(remove(item));
  };
  useEffect(() => {
    if (isCartOpen || isCategoryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isCartOpen, isCategoryOpen]);

  return (
    <>
      {/* Desktop Header start */}
      <div className="hidden lg:block  w-full m-auto py-3 overflow-hidden ">
        <Container>
          <Flex className="justify-between items-center">
            <Link to={"/"}>
              <Image imgSrc={HeaderLogo} imgAlt="Header Logo" />
            </Link>
            <ul className="flex items-center gap-x-15 xl:gap-x-10">
              {menuItems.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  <li className="relative list-none py-2 text-sm text-black font-medium group cursor-pointer transition-all ease-in-out">
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </Flex>
        </Container>
      </div>
      {/* Desktop Header End */}

      {/* Mobile Header start */}
      <div className="w-full lg:hidden bg-white shadow-sm relative z-50">
        <Container>
          <Flex className="justify-between items-center py-3 px-3">
            <Link to="/" className="flex items-center gap-2">
              <Image className="w-24 h-auto" imgSrc={HeaderLogo} imgAlt="Header Logo" />
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Open menu"
            >
              <FaBars className="text-2xl text-gray-700" />
            </button>
          </Flex>
        </Container>

        {/* Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`fixed top-0 left-0 w-full h-screen bg-white z-50 transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b">
            <h3 className="text-lg  font-semibold text-gray-800">Navigation</h3>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Close menu"
            >
              <FaTimes className="text-2xl text-gray-800" />
            </button>
          </div>

          {/* Menu */}
          <nav className="px-6 py-6">
            <ul className="space-y-2">
              {menuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition"
                  >
                    <span className="text-xl text-gray-500">{item.icon}</span>

                    <span className="font-medium text-sm flex-1">
                      {item.name}
                    </span>

                    <span className="text-gray-400">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto px-6 py-4 border text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Your Brand
          </div>
        </aside>
      </div>
      {/* Mobile Header End */}

      {/* Header Lower Part Start */}
      <div className="w-full flex justify-center m-auto px-3 py-4 bg-[#F5F5F3] shadow-sm overflow-hidden">
        <Container>
          <div className="flex justify-between items-center">
            {/* Category Icon */}
            <HiMiniBars3CenterLeft
              onClick={() => setIsCategoryOpen(true)}
              className="text-2xl cursor-pointer"
            />
            {/* Search */}
            <div className="flex-1 mx-3 lg:mx-8 flex justify-center items-center">
              <input
                className="w-[200px] lg:w-[500px] py-2 px-3 rounded-md border border-gray-300 outline-1 outline-gray-300 bg-[#F5F5F5] text-sm"
                type="text"
                placeholder="What are you looking?"
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-x-3 lg:gap-x-8">
              <FaRegHeart className="text-xl cursor-pointer hover:text-gray-600 transition-colors" />
              <Link to="/login">
                <FaRegUser className="text-xl cursor-pointer hover:text-gray-600 transition-colors" />
              </Link>
              <div
                className="relative cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              >
                <HiOutlineShoppingBag className="text-2xl hover:text-gray-600 transition-colors" />
                {data.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-mainColor text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                    {data.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </Container>

        {/* Cart Sidebar */}
        {isCartOpen && (
          <div className="fixed top-0 right-0 w-full lg:w-[420px] h-[100vh] bg-white shadow-2xl z-50 flex flex-col">
            {/* Cart Header */}
            <div className="flex justify-between items-center p-5 border-b bg-gray-50">
              <div className="flex items-center gap-3">
                <HiOutlineShoppingBag className="text-2xl text-gray-700" />
                <h4 className="text-xl font-semibold text-gray-800">
                  Your Bag (
                  {data.reduce((total, item) => total + item.quantity, 0)})
                </h4>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <GrClose className="text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {data.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <HiOutlineShoppingBag className="text-6xl text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg mb-2">
                    Your bag is empty
                  </p>
                  <p className="text-gray-400 text-sm">
                    Add items to get started
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                data.map((item) => (
                  <div
                    className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                    key={item.title}
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-gray-200">
                      <Image
                        className={"w-full h-full object-cover"}
                        imgSrc={item.img}
                        imgAlt={item.title}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="text-base font-semibold text-gray-800 truncate pr-2">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => handleRemove(item)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-400 hover:text-red-500"
                        >
                          <GrClose className="text-sm" />
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.color} / {item.size}
                      </p>

                      <div className="flex justify-between items-center mt-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-white rounded-lg border border-gray-200">
                          <button
                            onClick={() => handleDecerment(item)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-l-lg"
                          >
                            <HiMinusSmall className="text-gray-600" />
                          </button>
                          <span className="px-3 text-sm font-medium text-gray-700">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncerment(item)}
                            className="p-2 hover:bg-gray-100 transition-colors rounded-r-lg"
                          >
                            <HiPlusSmall className="text-gray-600" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="text-base font-semibold text-gray-800">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {data.length > 0 && (
              <div className="p-5 border-t bg-gray-50 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-2xl font-bold text-gray-800">
                    ${calculateSubtotal()}
                  </span>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  Shipping and taxes calculated at checkout
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link to={"/addtocart"} onClick={() => setIsCartOpen(false)}>
                    <button className="w-full py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all hover:shadow-lg">
                      VIEW CART
                    </button>
                  </Link>
                  <Link to={"/checkout"} onClick={() => setIsCartOpen(false)}>
                    <button className="w-full py-4 bg-mainColor text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:shadow-lg">
                      CHECKOUT
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Category Sidebar */}
        {isCategoryOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white shadow-lg z-50">
            <div className="flex">
              <div className="w-[50%] h-screen hidden lg:block">
                <Image
                  className={"w-full h-full"}
                  imgSrc={CatagoryFive}
                  imgAlt={""}
                />
              </div>
              <div className="w-full lg:w-[50%] p-5 lg:p-10">
                <div className="flex justify-between items-center">
                  <div className="flex gap-x-5 lg:gap-x-10">
                    <h5 className="py-2 px-5 hover:bg-black hover:text-white rounded-md text-lg font-semibold transition-all duration-300 delay-200 border-2 border-gray-300">
                      WOMEN
                    </h5>
                    <h6 className="py-2 px-5 hover:bg-black hover:text-white rounded-md text-lg font-semibold transition-all duration-300 delay-200 border-2 border-gray-300">
                      MAN
                    </h6>
                    <p className="py-2 px-5 hover:bg-black hover:text-white rounded-md text-lg font-semibold transition-all duration-300 delay-200 border-2 border-gray-300">
                      KIDS
                    </p>
                  </div>
                  <div>
                    <GrClose
                      onClick={() => setIsCategoryOpen(false)}
                      className="text-xl cursor-pointer"
                    />
                  </div>
                </div>
                <div className="px-5 mt-10">
                  <ul className="space-y-5">
                    <li className="text-xl font-medium uppercase">New</li>
                    <li className="text-xl font-medium uppercase">
                      Best Sellers
                    </li>
                    <li className="text-xl font-medium uppercase">
                      Collaborations®
                    </li>
                    <li className="text-xl font-medium uppercase">Denim</li>
                    <li className="text-xl font-medium uppercase">
                      Jackets & Coats
                    </li>
                    <li className="text-xl font-medium uppercase">
                      Overshirts
                    </li>
                    <li className="text-xl font-medium uppercase">Trousers</li>
                    <li className="text-xl font-medium uppercase">Jeans</li>
                    <li className="text-xl font-medium uppercase">
                      T-shirts & Tops
                    </li>
                    <li className="text-xl font-medium uppercase">
                      Shirts & Blouses
                    </li>
                    <li className="text-xl font-medium uppercase">Shoes</li>
                    <li className="text-xl font-medium uppercase">
                      Accessories
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Header Lower Part End */}
    </>
  );
};

export default Header;
