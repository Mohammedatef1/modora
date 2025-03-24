import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "src/db/supabase";

export const actGetProducts = createAsyncThunk("products/actGetProducts" , async (prefix:string , thunkAPI)=> {
  const {rejectWithValue} = thunkAPI

  const {data: products, error} = await supabase.from('products').select().eq('cat_prefix' , prefix)

  if(error) {
    return rejectWithValue(error.message)
  }
  return products
})