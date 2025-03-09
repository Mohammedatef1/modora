import { TLoading } from "@customTypes/shared";
// import { TWishlist } from "@customTypes/wishlist";
import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./actions/actLikeToggle";

interface IWishlist {
  productsIds: number[];
  loading: TLoading;
  error : null | string
}

const initialState: IWishlist = {
  productsIds: [],
  loading: "idle",
  error: null
}

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending , (state) => {
      state.loading = 'pending';
      state.error = null
    })
    builder.addCase(actLikeToggle.fulfilled , (state, action) => {
      state.loading = 'fulfilled';
      state.error = null;
      if(action.payload.type === 'add') {
        state.productsIds.push(action.payload.productId)
      }else {
        state.productsIds = state.productsIds.filter( el => el != action.payload.productId)
      }
    })
    builder.addCase(actLikeToggle.rejected , (state, action) => {
      state.loading = 'rejected';
      if (action.payload && typeof action.payload === 'string'){
        state.error = action.payload;
      }
    })
  }
})

export default wishlistSlice.reducer