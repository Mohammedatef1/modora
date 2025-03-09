import { TLoading } from "@customTypes/shared";
// import { TWishlist } from "@customTypes/wishlist";
import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {}
})

export default wishlistSlice.reducer