import { TProduct } from "@customTypes/product";
import { TWishlist } from "@customTypes/wishlist";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetWishlistProducts = createAsyncThunk('wishlist/actGetWishlistProducts' , async (_, thunkAPI)=> {
  const {rejectWithValue} = thunkAPI;
  try {
    // get all user liked products
    const userWishlist = await axios.get<TWishlist[]>('/wishlist?userId=1');
    const productsIds = userWishlist.data.map(el => el.productId)

    // get the full data for these products
    const allProducts = await axios.get<TProduct[]>(`/products`);
    const products = allProducts.data.filter(el => productsIds.includes(el.id));

    return products
  } catch (error) {
    if (axios.isAxiosError(error)){
      return rejectWithValue(error.message || error.response?.data.message)
    }else {
      return rejectWithValue('An unexpected error');
    }
  }
})

export default actGetWishlistProducts