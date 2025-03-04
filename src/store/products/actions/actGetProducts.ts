import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "src/customTypes/product";

export const actGetProducts = createAsyncThunk("products/actGetProducts" , async (prefix:string , thunkApi)=> {
  const {rejectWithValue} = thunkApi
  try {
    const response = await axios.get<TProduct>(`/products?cat_prefix=${prefix}`)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)){
      return rejectWithValue(error.message)
    }else {
      return rejectWithValue("An unexpected error")
    }
  }
})