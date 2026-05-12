import { createSlice } from "@reduxjs/toolkit";

const quickViewSlice = createSlice({
  name: "quickView",
  initialState: {
    item: null,
  },
  reducers: {
    setQuickViewItem: (state, action) => {
      state.item = action.payload;
    },
    clearQuickViewItem: (state) => {
      state.item = null;
    },
    decrementQuickViewItem: (state) => {
      if (state.item && state.item.quantity > 1) {
        state.item.quantity -= 1;
      }
    },
    incrementQuickViewItem: (state) => {
      if (state.item) {
        state.item.quantity += 1;
      }
    },
  },
});

export const {
  setQuickViewItem,
  clearQuickViewItem,
  decrementQuickViewItem,
  incrementQuickViewItem,
} = quickViewSlice.actions;

export default quickViewSlice.reducer;