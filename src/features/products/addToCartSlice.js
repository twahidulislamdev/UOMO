import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { title, size, quantity } = action.payload;
      
      let existingItem = state.value.find(
        (item) => item.title === title && item.size === size
      );
      
      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        state.value.push({
          ...action.payload,
          quantity: quantity || 1,
        });
      }
    },
    increment: (state, action) => {
      const item = state.value.find(
        (item) =>
          item.title === action.payload.title &&
          item.size === action.payload.size
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.value.find(
        (item) =>
          item.title === action.payload.title &&
          item.size === action.payload.size
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    remove: (state, action) => {
      state.value = state.value.filter(
        (item) =>
          !(
            item.title === action.payload.title &&
            item.size === action.payload.size
          )
      );
    },
  },
});

export const { addToCart, increment, decrement, remove } =
  addToCartSlice.actions;

export default addToCartSlice.reducer;