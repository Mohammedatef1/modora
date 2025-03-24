import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "src/db/supabase";

const actGetCategories = createAsyncThunk('categories/actGetCategories' , async (_,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;

  const {data: categories, error} = await supabase.from('categories').select()

  if(error) {
    return rejectWithValue(error.message)
  }

  return categories;
})

export default actGetCategories