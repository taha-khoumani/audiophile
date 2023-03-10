import { configureStore } from '@reduxjs/toolkit';
import navReducer from "../features/navSlice.js"
import productReducer from "../features/productsSlice"
import cartReducer from '../features/cartSlice.js';
import userDataReducer from "../features/userDataSlice.js"

export const store = configureStore({
  reducer: {
    nav:navReducer,
    products:productReducer,
    cart:cartReducer,
    userData:userDataReducer,
  },
});
