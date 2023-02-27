import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart";
import userReducer from "./slices/user";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
