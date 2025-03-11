import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "src/customTypes/product";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

export const actGetProducts = createAsyncThunk("products/actGetProducts" , async (prefix:string , thunkAPI)=> {
  const {rejectWithValue, signal} = thunkAPI
  try {
    const response = await axios.get<TProduct>(`/products?cat_prefix=${prefix}`, {signal})
    return response.data
  } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
  }
})