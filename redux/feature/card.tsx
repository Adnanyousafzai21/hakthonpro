
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { typecart } from "@/utils/types";

type intaialstate = {
  items: typecart[];
};
const initialState: intaialstate = {
  items: [],
 
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<typecart>) => {
      // Add an item to the cart
      state.items = [...state.items, action.payload];
      console.log(action.payload)
 
    },
    // removeFromCart: (state, action: PayloadAction<number>) => {
    //   // Remove an item from the cart based on its id
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
    // clearCart: (state) => {
    //   // Clear the entire cart
    //   state.items = [];
    // },
  },
});

export const { addToCart, 
    // removeFromCart, clearCart 
} = cartSlice.actions;
export default cartSlice.reducer;
