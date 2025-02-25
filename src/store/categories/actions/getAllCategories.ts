import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

type TCategories = {
  id: number,
  name: string,
  prefix: string,
  img: string
}[]

const actGetCategories = createAsyncThunk('categories/actGetCategories' , async (_,thunkApi)=>{
  const {rejectWithValue} = thunkApi;
  try {
    const response = await axios.get<TCategories>('https://localhost:5003/categories');
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