import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(
  localStorage.getItem("cart-items") || '{ "items": [], "total": 0}'
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      let item = state.items.find(
        (item) => item.product.id === action.payload.id
      );

      if (item) {
        item.count++;
      } else {
        state.items.push({ product: action.payload, count: 1 });
      }

      localStorage.setItem("cart-items", JSON.stringify(state));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload
      );
      localStorage.setItem("cart-items", JSON.stringify(state));
    },
    incItemCount(state, action) {
      state.items.find((item) => item.product.id === action.payload).count++;
      localStorage.setItem("cart-items", JSON.stringify(state));
    },
    decItemCount(state, action) {
      let item = state.items.find((item) => item.product.id === action.payload);

      if (item.count > 1) {
        item.count--;
        localStorage.setItem("cart-items", JSON.stringify(state));
      }
    },
  },
});

export const { addToCart, removeFromCart, incItemCount, decItemCount } =
  cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
