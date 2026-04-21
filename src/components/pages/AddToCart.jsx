import React, { useState } from "react";
import Image from "../Image";
import Flex from "../Flex";
import Container from "../Container";
import { GrClose } from "react-icons/gr";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, remove } from "../../features/addToCartSlice";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const data = useSelector((state) => state.addtocart.value);
  const dispatch = useDispatch();

  // ✅ Default shipping set to Local Pickup ($5)
  const [shippingCost, setShippingCost] = useState(5);
  const vat = 2;

  const isCartEmpty = data.length === 0;

  const handleIncerment = (item) => dispatch(increment(item));
  const handleDecerment = (item) => dispatch(decrement(item));
  const handleRemove = (item) => dispatch(remove(item));

  const calculateSubtotal = () =>
    data.reduce((total, item) => total + item.price * item.quantity, 0);

  const subtotal = calculateSubtotal();

  const calculateTotal = () => (subtotal + shippingCost + vat).toFixed(2);

  return (
    <div className="p-3 overflow-hidden">
      <Container>
        <div className="text-4xl font-semibold">CART</div>

        <Flex className="justify-between mt-5 flex-wrap">
          {/* CART ITEMS */}
          <div className="w-full lg:w-[55%] rounded-md overflow-hidden">
            {isCartEmpty ? (
              <p className="text-center text-lg text-gray-500 py-10">
                Your cart is empty
              </p>
            ) : (
              data.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between bg-neutral-100 mb-5"
                >
                  <div className="flex gap-x-5 lg:gap-x-10">
                    <Image
                      className="w-[150px]"
                      imgSrc={item.img}
                      imgAlt="Product"
                    />

                    <div className="py-1">
                      <h4 className="text-lg text-mainColor pt-2">
                        {item.title}
                      </h4>
                      <h5 className="text-base text-[#767676] pt-2">
                        Color: {item.color}
                      </h5>
                      <h6 className="text-base text-[#767676] pt-2">
                        Size: {item.size}
                      </h6>
                      <h6 className="text-base text-[#767676] pt-2">
                        Unit Price: ${item.price.toFixed(2)}
                      </h6>

                      {/* QUANTITY */}
                      <div className="flex items-center gap-x-5 mt-2">
                        <HiMinusSmall
                          className="cursor-pointer"
                          onClick={() => handleDecerment(item)}
                        />
                        <p className="text-xl">{item.quantity}</p>
                        <HiPlusSmall
                          className="cursor-pointer"
                          onClick={() => handleIncerment(item)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* REMOVE + ITEM TOTAL */}
                  <div className="relative">
                    <span
                      className="absolute top-2 right-3 cursor-pointer"
                      onClick={() => handleRemove(item)}
                    >
                      <GrClose />
                    </span>
                    <h6 className="absolute bottom-2 right-3 text-lg">
                      Total ${(item.price * item.quantity).toFixed(2)}
                    </h6>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* CART SUMMARY */}
          <div className="w-full lg:w-[43%]">
            <div className="border-1 border-black p-10">
              <h4 className="text-2xl font-medium uppercase">Cart Totals</h4>

              {/* SUBTOTAL */}
              <h5 className="text-lg font-medium pt-10 border-b pb-5">
                Subtotal: ${subtotal.toFixed(2)}
              </h5>

              {/* SHIPPING */}
              <div className="flex mt-5 gap-x-10 border-b pb-5">
                <h6 className="text-lg font-medium uppercase">Shipping</h6>
                <div className="space-y-4">
                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      defaultChecked
                      onChange={() => setShippingCost(5)}
                    />
                    Local Pickup: $5
                  </label>

                  <label className="flex gap-2">
                    <input
                      type="radio"
                      name="shipping"
                      onChange={() => setShippingCost(20)}
                    />
                    Home Delivery: $20
                  </label>
                </div>
              </div>

              {/* VAT */}
              <div className="flex mt-5 justify-between border-b pb-3">
                <h6 className="text-lg">VAT</h6>
                <p className="text-lg">${vat}</p>
              </div>

              {/* TOTAL */}
              <div className="flex mt-5 justify-between">
                <h6 className="text-xl font-semibold">TOTAL</h6>
                <p className="text-xl font-semibold">${calculateTotal()}</p>
              </div>
            </div>

            {/* CHECKOUT */}
            {isCartEmpty ? (
              <div className="w-full bg-transparent border-1 border-black mt-5 cursor-not-allowed">
                <p className="py-3 text-xl text-center text-black">
                  CART IS EMPTY
                </p>
              </div>
            ) : (
              <Link to="/checkout">
                <div className="w-full bg-mainColor mt-5 cursor-pointer">
                  <p className="py-3 text-xl text-center text-white">
                    PROCEED TO CHECKOUT
                  </p>
                </div>
              </Link>
            )}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default AddToCart;
