import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "src/customTypes/product";
import { TLoading } from "src/customTypes/shared";
import { actGetProducts } from "./actions/actGetProducts";

interface IProductSlice {
  records: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: IProductSlice = {
  records : [],
  loading: "idle",
  error: null
}

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsCleanUp : (state)=>{
      state.records = []
    }
  },
  extraReducers : (builder)=>{
    builder.addCase(actGetProducts.pending , (state) => {
      state.loading = "pending"
    })
    builder.addCase(actGetProducts.fulfilled , (state, action)=>{
      state.loading = "succeeded"
      state.records = Array.isArray(action.payload) ? action.payload : [action.payload]
    })
    builder.addCase(actGetProducts.rejected , (state, action) => {
      state.loading = "rejected";
      if (action.payload && typeof action.payload === "string"){
        state.error = action.payload
      }
    })
  }
})

export const { productsCleanUp } = ProductsSlice.actions
export default ProductsSlice.reducer
