import { TProduct } from "@customTypes/product";
import { TWishlist } from "@customTypes/wishlist";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axios from "axios";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

type TDataType = "productsIds" | "productsFullInfo"
const actGetWishlistProducts = createAsyncThunk('wishlist/actGetWishlistProducts' , async (dataType : TDataType, thunkAPI)=> {
  const {rejectWithValue, signal, getState} = thunkAPI;
  const {auth} = getState() as RootState 
  try {
    // get all user liked products
    const userWishlist = await axios.get<TWishlist[]>(`/wishlist?userId=${auth.user?.id}`, {signal});
    const productsIds = userWishlist.data.map(el => el.productId)

    if(dataType === "productsIds") {
      console.log(productsIds)
      return {data: productsIds, type: dataType}
    }else {
      // get the full data for these products
      const allProducts = await axios.get<TProduct[]>(`/products`, {signal});
      const products = allProducts.data.filter(el => productsIds.includes(el.id));
  
      return {data: products, type: dataType}
    }

  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetWishlistProducts