import { createSlice } from "@reduxjs/toolkit";
import products from "@/utils/moks";
import { typeproducts } from "@/utils/types";
const initialState:typeproducts[]=[]
export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{}
})

export const { } = productSlice.actions;
export default productSlice.reducer;