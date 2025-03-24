import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "src/db/supabase";
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
      const {data, error} = await supabase.auth.signUp(userData);

      if(error) return rejectWithValue(error.message);

      return data
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
})

export default actRegister