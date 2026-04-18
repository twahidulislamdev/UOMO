import { useState } from "react";
import { IoChevronUp } from "react-icons/io5";

const DefaultSorting = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    // console.log(`Clicked: ${item}`);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-center lg:outline-none">
        <div className="relative  text-center">
          {/* Dropdown Button */}
          <button
            onClick={toggleDropdown}
            className="inline-flex justify-center items-center text-base font-medium gap-x-3 px-5 py-3 mr-3 lg:mr-0  border-2  lg:border-0 border-mainColor rounded focus:outline-none focus:ring-offset-2  text-mainColor transition-colors duration-250"
          >
            FEATURED
            <IoChevronUp
              className={`text-xl text-mainColor transition-transform duration-200 cursor-pointer ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute right-0 z-15 mt-2 w-45 origin-top-right divide-y rounded-md ring-opacity-5 focus:outline-none shadow-2xl bg-white">
              <div className="py-1">
                <button
                  className="flex items-center w-full px-4 py-2 text-sm hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                  onClick={() => handleItemClick("Settings")}
                >
                  FEATURED
                </button>
                <button
                  onClick={() => handleItemClick("Settings")}
                  className="flex items-center w-full px-4 py-2 text-sm hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                >
                  BEST SELLING
                </button>
                <button
                  onClick={() => handleItemClick("Notifications")}
                  className="flex items-center w-full px-4 py-2 text-sm hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                >
                  DATE, OLD TO NEW
                </button>
                <button
                  onClick={() => handleItemClick("Notifications")}
                  className="flex items-center w-full px-4 py-2 text-sm hover:text-gray-900 transition-colors duration-150 hover:bg-gray-200"
                >
                  DATE, NEW TO OLD
                </button>
              </div>
            </div>
          )}

          {/* Backdrop to close dropdown when clicking outside */}
          {isOpen && (
            <div
              className="fixed inset-0 z-0"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default DefaultSorting;
