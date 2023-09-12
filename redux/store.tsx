import { configureStore } from "@reduxjs/toolkit";
import  productslice  from "./feature/products";
import cartslice from "./feature/card";
const store = configureStore({
  reducer: {
    products: productslice,
    cart: cartslice,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode

});
export default store;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
