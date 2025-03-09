import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { TCategories } from "src/customTypes/category";

const actGetCategories = createAsyncThunk('categories/actGetCategories' , async (_,thunkAPI)=>{
  const {rejectWithValue} = thunkAPI;
  try {
    const response = await axios.get<TCategories>('/categories');
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error)){
      return rejectWithValue(error.message || error.response?.data.message);
    }else{
      return rejectWithValue("An unexpected error");
    }
  }
})

export default actGetCategories