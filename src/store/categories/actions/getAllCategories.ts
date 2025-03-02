import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { TCategories } from "src/customTypes/category";

const actGetCategories = createAsyncThunk('categories/actGetCategories' , async (_,thunkApi)=>{
  const {rejectWithValue} = thunkApi;
  try {
    const response = await axios.get<TCategories>('http://localhost:5005/categories');
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error);
    }else{
      return rejectWithValue("An unexpected error");
    }
  }
})

export default actGetCategories