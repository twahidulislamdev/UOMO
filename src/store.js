import { configureStore } from "@reduxjs/toolkit";
import addToCartSlice from "./features/products/addToCartSlice";
import quickViewSlice from "./features/products/quickViewSlice"; 

export const store = configureStore({
  reducer: {
    addtocart: addToCartSlice,
    quickView: quickViewSlice,
  },
});