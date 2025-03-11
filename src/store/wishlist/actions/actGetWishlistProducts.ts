import { TProduct } from "@customTypes/product";
import { TWishlist } from "@customTypes/wishlist";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

const actGetWishlistProducts = createAsyncThunk('wishlist/actGetWishlistProducts' , async (_, thunkAPI)=> {
  const {rejectWithValue, signal} = thunkAPI;
  try {
    // get all user liked products
    const userWishlist = await axios.get<TWishlist[]>('/wishlist?userId=1', {signal});
    const productsIds = userWishlist.data.map(el => el.productId)

    // get the full data for these products
    const allProducts = await axios.get<TProduct[]>(`/products`, {signal});
    const products = allProducts.data.filter(el => productsIds.includes(el.id));

    return products
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetWishlistProducts