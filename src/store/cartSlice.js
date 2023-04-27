import { createSlice } from "@reduxjs/toolkit";
// import {}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
  },
  reducers: {
    addCart(state, action) {
      if (state.product.length <= 0) {
        state.product.push(action.payload);
      } else {
        const res = state.product.filter((el) => {
          if (el.id === action.payload.id) {
            el.count = el.count + 1;
            return el.id === action.payload.id;
          }
        });
        if (res.length <= 0) {
          state.product.push(action.payload);
        }
      }
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
