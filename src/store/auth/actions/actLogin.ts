import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "src/db/supabase";
import axiosErrorHandler from "src/utils/axiosErrorHandler";

type TLoginData = {
  email: string;
  password: string
}

const actLogin = createAsyncThunk('auth/login', async(loginData: TLoginData, thunkAPI) => {
  const {rejectWithValue} = thunkAPI
  try {
    const {data, error} = await supabase.auth.signInWithPassword(loginData);

    if(error) return rejectWithValue(error.message);

    return data
  } catch (error) {
    return rejectWithValue(axiosErrorHandler(error))
  }
})

export default actLogin