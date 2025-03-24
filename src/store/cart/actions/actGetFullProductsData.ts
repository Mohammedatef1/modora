import { TProduct } from "@customTypes/product";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { supabase } from "src/db/supabase";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

const actGetFullProductsData =  createAsyncThunk('cart/actGetFullProductsData' ,async (_ , thunkAPI) => {
  const {rejectWithValue , getState} = thunkAPI;
  try {
    const {cart} = getState() as RootState;
    const {items} = cart;
    const ids = Object.keys(items)

    const {data, error} = await supabase.from('products').select()
    if (error) {
      return rejectWithValue(error.message)
    }

    const products : TProduct[] = data?.filter((el : TProduct) => ids.includes(`${el.id}`))
    products.forEach(product => {
      product.quantity = items[product.id]
    })

    return products
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetFullProductsData