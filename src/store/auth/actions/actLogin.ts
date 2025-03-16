import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

type TLoginData = {
  email: string;
  password: string
}

type TResponse = {
  accessToken: string;
  user: {id: number, email: string, firstName: string, lastName: string};
}

const actLogin = createAsyncThunk('auth/login', async(loginData: TLoginData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI
  try {
    const response = await axios.post<TResponse>('login' ,loginData )
    return response.data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actLogin