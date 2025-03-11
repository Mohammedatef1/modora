import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { TCategories } from "src/customTypes/category";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

const actGetCategories = createAsyncThunk('categories/actGetCategories' , async (_,thunkAPI)=>{
  const {rejectWithValue, signal} = thunkAPI;
  try {
    const response = await axios.get<TCategories>('/categories', {signal});
    return response.data;
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error));
  }
})

export default actGetCategories