import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { supabase } from "src/db/supabase";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

type TDataType = "productsIds" | "productsFullInfo"
const actGetWishlistProducts = createAsyncThunk('wishlist/actGetWishlistProducts' , async (dataType : TDataType, thunkAPI)=> {
  const {rejectWithValue, getState} = thunkAPI;
  const {auth} = getState() as RootState 
  try {
    // get all user liked products
    const {data: wishlistItems, error} = await supabase.from('wishlist').select().eq('userId' , auth.user?.id)

    if(error) {
      return rejectWithValue(error.message)
    }

    const productsIds = wishlistItems.map(el => el.productId)

    if(dataType === "productsIds") {

      return {data: productsIds, type: dataType}

    }else {
      // get the full data for these products
      const {data: allProducts, error} = await supabase.from('products').select('*')

      if(error) {
        return rejectWithValue(error.message)
      }

      const products = allProducts?.filter(el => productsIds.includes(el.id));
  
      return {data: products, type: dataType}
    }

  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetWishlistProducts