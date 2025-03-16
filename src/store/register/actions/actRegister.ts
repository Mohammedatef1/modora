import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

type TUserData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string
}

const actRegister = createAsyncThunk('register/actRegister' , async (userData : TUserData, thunkAPI) => {
    const {rejectWithValue} = thunkAPI;

    try {
      const response = await axios.post<TUserData>("/register" , userData)
      return response.data
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actRegister