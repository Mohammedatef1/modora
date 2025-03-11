import { TLoading } from "@customTypes/shared";
import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./actions/actLikeToggle";
import actGetWishlistProducts from "./actions/actGetWishlistProducts";
import { TProduct } from "@customTypes/product";

interface IWishlist {
  productsIds: number[];
  products: TProduct[];
  loading: TLoading;
  error : null | string
}

const initialState: IWishlist = {
  productsIds: [],
  products: [],
  loading: "idle",
  error: null
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    productsCleanUp: (state) => {
      state.products = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.fulfilled , (state, action) => {
      if(action.payload.type === 'add') {
        state.productsIds.push(action.payload.productId)
      }else {
        state.productsIds = state.productsIds.filter( el => el != action.payload.productId)
      }
    })
    builder.addCase(actGetWishlistProducts.pending , (state) => {
      state.loading= "pending";
      state.error = null;
    })
    builder.addCase(actGetWishlistProducts.fulfilled , (state, action) => {
      state.loading = "fulfilled";
      state.error = null;
      state.products = action.payload;
    })
    builder.addCase(actGetWishlistProducts.rejected , (state, action) => {
      state.loading = 'rejected';
      if (action.payload && typeof action.payload === 'string'){
        state.error = action.payload;
      }
    })
  }
})

export const {productsCleanUp} =  wishlistSlice.actions
export default wishlistSlice.reducer